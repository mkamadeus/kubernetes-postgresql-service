import { Resource } from "fastify-autoroutes";

export default (): Resource =>
  <Resource>{
    get: {
      schema: {
        description:
          "Health check endpoint to make sure the backend is responsive.",
        tags: ["Miscellaneous"],
        summary: "Health check",
        security: [{ apiKey: [] }],
        response: {
          200: {
            type: "string",
          },
        },
      },
      handler: async () => "OK",
    },
  };
