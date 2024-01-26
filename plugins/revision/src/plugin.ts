import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

export const revisionPlugin = createPlugin({
  id: 'revision',
  routes: {
    root: rootRouteRef,
  },
});

export const EntityRevisionContent = revisionPlugin.provide(
  createRoutableExtension({
    name: 'EntityRevisionContent',
    component: () =>
      import('./components/EntityRevisionContent').then(
        m => m.EntityRevisionContent,
      ),
    mountPoint: rootRouteRef,
  }),
);
