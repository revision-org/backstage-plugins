import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { revisionDiagramPlugin, RevisionDiagramPage } from '../src/plugin';

createDevApp()
  .registerPlugin(revisionDiagramPlugin)
  .addPage({
    element: <RevisionDiagramPage />,
    title: 'Root Page',
    path: '/revision-diagram'
  })
  .render();
