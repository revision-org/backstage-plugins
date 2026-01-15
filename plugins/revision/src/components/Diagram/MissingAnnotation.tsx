import { Grid, Typography } from '@material-ui/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const MissingAnnotation = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Typography variant="h5">Missing Annotation</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
          The annotation <code>revision.app/diagram-slug</code> is missing. You
          need to add the annotation to your Component if you want to enable
          this tool.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="body1">
          Add the annotation to your Component YAML as shown in the highlighted
          example below:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SyntaxHighlighter
          customStyle={{ fontSize: '115%' }}
          showLineNumbers
          lineProps={lineNumber => {
            const style: any = { display: 'block', width: 'fit-content' };
            if (lineNumber === 6) {
              style.backgroundColor = '#E6FFED';
            }
            return { style };
          }}
          wrapLines
          style={a11yLight}
          language="yaml"
        >
          {`apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: comp-3-no-anno
  annotations:
    revision.app/diagram-slug: value
  spec:
    type: website
    owner: guests`}
        </SyntaxHighlighter>
      </Grid>
    </Grid>
  );
};
