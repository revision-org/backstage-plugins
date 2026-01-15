export interface Config {
  /** Required configuration for the Revision plugin */

  revision: {
    /**
     * The base url för Revision.
     * @visibility frontend
     */
    baseUrl: string;
    /**
     * The API key for authenticating with Revision.
     * @visibility frontend
     */
    apiKey?: string;
  };
}
