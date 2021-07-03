import "reflect-metadata";
import fastify from "fastify";
import fastifyAutoroutes from "fastify-autoroutes";
import fastifySwagger from "fastify-swagger";
import env from "./env";

(async (): Promise<void> => {
  const server = fastify({ logger: true, ignoreTrailingSlash: true });

  // Setup swagger docs
  server.register(fastifySwagger, {
    routePrefix: "/docs",
    openapi: {
      info: {
        title: "Noxie API Documentation",
        description: "Sample Swagger API",
        version: "0.1.0",
      },
      servers: [{ url: "http://localhost" }],
      paths: {},
      components: {
        securitySchemes: {
          apiKey: {
            type: "apiKey",
            name: "apiKey",
            in: "header",
          },
        },
      },
    },
    hideUntagged: true,
    exposeRoute: true,
  });
  server.addSchema({
    title: "User",
    $id: "http://example.com/schema/user",
    type: "object",
    properties: {
      id: { type: "string" },
      email: { type: "string" },
      name: { type: "string" },
    },
  });

  // Generate route from `routes` folder using fastify-autoroutes
  server.register(fastifyAutoroutes, {
    dir: "./routes",
  });

  await server.listen(env.port);
  // console.log(server.printRoutes());
})();
