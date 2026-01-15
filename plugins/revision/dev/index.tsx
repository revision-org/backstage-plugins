import { createDevApp } from '@backstage/dev-utils';
import { EntityRevisionContent, revisionPlugin } from '../src/plugin';

createDevApp()
  .registerPlugin(revisionPlugin)
  .addPage({
    element: <EntityRevisionContent />,
    title: 'Root Page',
    path: '/revision-diagram',
  })
  .render();
