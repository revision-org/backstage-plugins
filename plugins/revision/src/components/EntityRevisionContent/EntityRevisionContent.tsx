import { configApiRef, useApi } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';

import { useEffect, useState } from 'react';

import { Diagram } from '../Diagram/Diagram';
import { MissingAnnotation } from '../Diagram/MissingAnnotation';
import { NotFound } from '../Diagram/NotFound';
import { Unauthorized } from '../Diagram/Unauthorized';

export const EntityRevisionContent = () => {
  const entity = useEntity();
  const config = useApi(configApiRef);

  const [status, setStatus] = useState<number | 'loading'>('loading');

  const [image, setImage] = useState<string>();

  const diagramSlug =
    entity.entity.metadata.annotations?.['revision.app/diagram-slug'] ??
    entity.entity.metadata.annotations?.['revision.app/preferred-diagram-slug']; // legacy name fallback

  // The backend baseurl for the proxy
  const backendBaseUrl = config.getString('backend.baseUrl');

  // Base url to Revision so we can get the link to work
  const revisionBaseUrl = config.getString('revision.baseUrl');

  // Use proxy to avoid CORS issues
  const revisionSvgUrl = `${backendBaseUrl}/api/proxy/revision/api/external/diagrams/${diagramSlug}`;

  /**
   * Getting the image from the Revision api
   * */
  useEffect(() => {
    if (!diagramSlug) return;

    const asyncFetchImage = async () => {
      const headers: HeadersInit = {
        Accept: 'image/svg+xml',
      };

      // The proxy will add the Authorization header
      const result = await fetch(revisionSvgUrl, { headers });
      setStatus(result.status);

      if (result.status === 200) {
        const body = await result.text();
        setImage(body);
      }
    };

    asyncFetchImage();
  }, [diagramSlug, revisionSvgUrl]);

  // If we don't have a configured annotation we'll show a message about that
  if (!diagramSlug) {
    return <MissingAnnotation />;
  }

  if (status === 'loading')
    return <div>Loading diagram image from Revision</div>;

  if (status === 404)
    return (
      <NotFound diagramSlug={diagramSlug} revisionBaseUrl={revisionBaseUrl} />
    );

  if (status === 401)
    return (
      <Unauthorized
        diagramSlug={diagramSlug}
        revisionBaseUrl={revisionBaseUrl}
      />
    );

  return (
    <Diagram
      revisionBaseUrl={revisionBaseUrl}
      backendBaseUrl={backendBaseUrl}
      image={image}
      diagramSlug={diagramSlug}
    />
  );
};
