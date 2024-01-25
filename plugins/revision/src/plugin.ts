import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

export const revisionDiagramPlugin = createPlugin({
  id: 'revision',
  routes: {
    root: rootRouteRef,
  },
});

export const EntityRevisionDiagramContent = revisionDiagramPlugin.provide(
  createRoutableExtension({
    name: 'RevisionDiagramPage',
    component: () =>
      import('./components/EntityDiagramContent').then(
        m => m.EntityDiagramContent,
      ),
    mountPoint: rootRouteRef,
  }),
);
