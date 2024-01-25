export interface Config {
  /** Required configuration for the Revision plugin */
  integrations: {
    revision: {
      /**
       * The base url för Revision.
       * @visibility frontend
       */
      baseUrl: string;
    };
  };
}
