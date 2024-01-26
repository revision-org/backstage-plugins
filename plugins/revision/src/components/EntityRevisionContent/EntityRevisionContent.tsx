import { configApiRef, useApi } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';

import React, { useEffect, useState } from 'react';

import { Diagram } from '../Diagram/Diagram';
import { MissingAnnotation } from '../Diagram/MissingAnnotation';
import { NotFound } from '../Diagram/NotFound';

export const EntityRevisionContent = () => {
  const entity = useEntity();
  const config = useApi(configApiRef);

  const [status, setStatus] = useState<number | 'loading'>('loading');

  const [image, setImage] = useState<string>();

  const preferredDiagramSlug =
    entity.entity.metadata.annotations?.['revision.app/preferred-diagram-slug'];

  // The backend baseurl for the proxy
  const backendBaseUrl = config.getString('backend.baseUrl');

  // Base url to Revision so we can get the link to work
  const revisionBaseUrl = config.getString('revision.baseUrl');

  // Url to get the imgage
  const revisionSvgUrl = `${backendBaseUrl}/api/proxy/revision/api/svg/${preferredDiagramSlug}`;

  /**
   * Getting the image from the Revision api
   * */
  useEffect(() => {
    if (!preferredDiagramSlug) return;

    const asyncFetchImage = async () => {
      const result = await fetch(revisionSvgUrl);

      setStatus(result.status);

      if (result.status === 200) {
        const body = await result.text();
        setImage(body);
      }
    };

    asyncFetchImage();
  }, [backendBaseUrl, preferredDiagramSlug, revisionSvgUrl]);

  // If we don't have a configured annotation we'll show a message about that
  if (!preferredDiagramSlug) {
    return <MissingAnnotation />;
  }

  if (status === 'loading')
    return <div>Loading diagram image from Revision</div>;

  if (status === 404)
    return (
      <NotFound
        preferredDiagramSlug={preferredDiagramSlug}
        revisionBaseUrl={revisionBaseUrl}
      />
    );

  return (
    <Diagram
      revisionBaseUrl={revisionBaseUrl}
      backendBaseUrl={backendBaseUrl}
      image={image}
      preferredDiagramSlug={preferredDiagramSlug}
    />
  );
};
