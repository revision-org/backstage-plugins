import { Grid, Typography } from '@material-ui/core';
import { RevisionButton } from '../Button/RevisionButton';

type Props = {
  diagramSlug: string;
  revisionBaseUrl: string;
};

export const Unauthorized = (props: Props) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container direction="row" spacing={2} alignItems="flex-start">
        <Grid item style={{ flexGrow: 1 }}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5">Unauthorized (401)</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                A valid API key is required to display this content. Please
                verify your API key configuration.
              </Typography>
              <ul>
                <li>
                  Ensure that you have set an API key as an environmental
                  variable named REVISION_API_KEY.
                </li>
                <li>Ensure that it is valid.</li>
              </ul>
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
