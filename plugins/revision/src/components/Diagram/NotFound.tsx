import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { RevisionButton } from '../Button/RevisionButton';

type Props = {
  preferredDiagramSlug: string;
  revisionBaseUrl: string;
};

export const NotFound = (props: Props) => {
  return (
    <Grid xs={6}>
      <Box sx={{ marginX: 0, marginY: 2 }}>
        <Typography variant="h5">
          Diagram not found for this entity (404)
        </Typography>
      </Box>
      <Typography variant="body1">
        Could find the configured diagram.
        <ul>
          <li>Check if the diagram exist.</li>
          <li>Make sure it has been set to public in Revision.</li>
        </ul>
      </Typography>
      <RevisionButton
        preferredDiagramSlug={props.preferredDiagramSlug}
        revisionBaseUrl={props.revisionBaseUrl}
      />
    </Grid>
  );
};
