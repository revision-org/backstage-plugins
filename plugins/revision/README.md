# Revision Plugin

The Revision plugin displays diagrams from [Revision](https://revision.app).

![Revision diagram](docs/entity-content.png "Revision diagram")

## Getting started

1. Install the Revision plugin

```bash
# From your Backstage root directory

yarn add --cwd packages/app @revisionapp/backstage-revision-plugin
```

2. Add the EntitySentryCard to the EntityPage

```javascript
// packages/app/src/components/catalog/EntityPage.tsx

import { EntityRevisionContent } from '@revisionapp/backstage-revision-plugin';

const serviceEntityPage = (
  <EntityLayout>
    // ...
    <EntityLayout.Route path="/revision-diagram" title="Diagram">
      <EntityRevisionContent />
    </EntityLayout.Route>
    // ...
  </EntityLayout>
);
```

3. Add the proxy config and Revision base url

```yaml
# app-config.yaml

proxy:
  '/revision':
    target: https://my.revision.app

revision:
  baseUrl: https://my.revision.app
```

4. Add the `revision.app/preferred-diagram-slug` annotation to your catalog-info.yaml file:

```yaml
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: backstage
  description: |
    Backstage is an open-source developer portal that puts the developer experience first.
  annotations:
    revision.app/preferred-diagram-slug: YOUR_DIAGRAM_SLUG
spec:
  type: library
  owner: CNCF
  lifecycle: experimental
```
