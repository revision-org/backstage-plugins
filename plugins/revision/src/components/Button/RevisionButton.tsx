import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import revisionLogo from './../../assets/logo-black-small 1.svg';

type Props = {
  revisionBaseUrl: string;
  diagramSlug: string;
};

export const RevisionButton = (props: Props) => {
  return (
    <Button
      startIcon={
        <img alt="Logo" style={{ width: 32, height: 32 }} src={revisionLogo} />
      }
      endIcon={<ArrowForwardIcon />}
      href={`${props.revisionBaseUrl}/diagram/${props.diagramSlug}`}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      Open in Revision
    </Button>
  );
};
