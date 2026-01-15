import { Grid, Typography } from '@material-ui/core';
import { RevisionButton } from '../Button/RevisionButton';

type Props = {
  diagramSlug: string;
  revisionBaseUrl: string;
};

export const NotFound = (props: Props) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container direction="row" spacing={2} alignItems="flex-start">
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Diagram not found (404)</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                The configured diagram for this entity could not be found. It
                might no longer exist.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <RevisionButton
            diagramSlug={props.diagramSlug}
            revisionBaseUrl={props.revisionBaseUrl}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
