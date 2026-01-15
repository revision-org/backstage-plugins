import { InfoCard } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import { RevisionButton } from '../Button/RevisionButton';

type Props = {
  image: string | undefined;
  backendBaseUrl: string;
  diagramSlug: string;
  revisionBaseUrl: string;
};

export const Diagram = (props: Props) => {
  if (!props.image) return null;

  return (
    <Grid style={{ margin: 2 }} container>
      <Grid item xs={12}>
        <InfoCard
          title={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div>Entity diagram</div>

              <div>
                <RevisionButton
                  revisionBaseUrl={props.revisionBaseUrl}
                  diagramSlug={props.diagramSlug}
                />
              </div>
            </div>
          }
        >
          <div
            style={{
              width: '100%',
              backgroundColor: '#f5f5f5',
              borderRadius: '2px',
            }}
          >
            <img
              style={{ maxHeight: 'calc(100dvh - 350px)', width: '100%' }}
              alt="Revision diagram"
              src={`data:image/svg+xml;utf8,${encodeURIComponent(props.image)}`}
            />
          </div>
        </InfoCard>
      </Grid>
    </Grid>
  );
};
