import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { revisionPlugin, EntityRevisionContent } from '../src/plugin';

createDevApp()
  .registerPlugin(revisionPlugin)
  .addPage({
    element: <EntityRevisionContent />,
    title: 'Root Page',
    path: '/revision-diagram',
  })
  .render();
