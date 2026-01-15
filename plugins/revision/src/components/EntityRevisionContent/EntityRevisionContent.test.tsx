import { registerMswTestHooks, renderInTestApp } from '@backstage/test-utils';
import { screen } from '@testing-library/react';
import { http } from 'msw';
import { setupServer } from 'msw/node';
import { EntityRevisionContent } from './EntityRevisionContent';

describe('EntityRevisionContent', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  registerMswTestHooks(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      http.get('/*', () => new Response(JSON.stringify({}), { status: 200 })),
    );
  });

  it('should render', async () => {
    await renderInTestApp(<EntityRevisionContent />);
    expect(
      screen.getByText('Welcome to revision-diagram!'),
    ).toBeInTheDocument();
  });
});
