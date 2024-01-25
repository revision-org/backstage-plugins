import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';
import revisionLogo from './../../assets/logo-black-small 1.svg';

type Props = {
  revisionBaseUrl: string;
  preferredDiagramSlug: string;
};

export const RevisionButton = (props: Props) => {
  return (
    <Button
      startIcon={
        <img alt="Logo" style={{ width: 25, height: 25 }} src={revisionLogo} />
      }
      endIcon={<ArrowForwardIcon />}
      href={`${props.revisionBaseUrl}/diagram/${props.preferredDiagramSlug}`}
    >
      Open in Revision
    </Button>
  );
};
