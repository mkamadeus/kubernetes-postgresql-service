import { FastifyRequest } from "fastify";
import { Resource } from "fastify-autoroutes";
import { Container } from "typedi";
import { UserCreateInput } from "~/models/user";
import UserService from "~/services/user";

export default (): Resource =>
  <Resource>{
    get: {
      schema: {
        description: "Get all users from database.",
        tags: ["User"],
        summary: "Get all users",
        security: [{ apiKey: [] }],
        response: {
          200: {
            type: "array",
            items: {
              $ref: "http://example.com/schema/user#",
            },
          },
        },
      },
      handler: async () => {
        const user = await Container.get(UserService).getAllUsers();
        return user;
      },
    },
    post: {
      schema: {
        description: "Create new user",
        tags: ["User"],
        summary: "Get all users",
        security: [{ apiKey: [] }],
        body: {
          type: "object",
          required: ["email", "name"],
          properties: {
            email: { type: "string" },
            name: { type: "string" },
          },
        },
        response: {
          200: {
            $ref: "http://example.com/schema/user#",
          },
        },
      },
      handler: async (request: FastifyRequest<{ Body: UserCreateInput }>) => {
        const payload = request.body;
        const user = await Container.get(UserService).createUser(payload);
        return user;
      },
    },
  };
