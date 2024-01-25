import { InfoCard } from '@backstage/core-components';
import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { RevisionButton } from '../Button/RevisionButton';

type Props = {
  image: string | undefined;
  backendBaseUrl: string;
  preferredDiagramSlug: string;
  revisionBaseUrl: string;
};

export const Diagram = (props: Props) => {
  if (!props.image) return null;

  return (
    <Grid style={{ margin: 2 }} container>
      <Grid xs={12}>
        <InfoCard
          title={
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>Entity diagram</div>

              <div>
                <RevisionButton
                  revisionBaseUrl={props.revisionBaseUrl}
                  preferredDiagramSlug={props.preferredDiagramSlug}
                />
              </div>
            </div>
          }
        >
          <img
            alt="Revision diagram"
            src={`data:image/svg+xml;utf8,${encodeURIComponent(props.image)}`}
          />
        </InfoCard>
      </Grid>
    </Grid>
  );
};
