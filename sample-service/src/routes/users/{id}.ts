import { FastifyRequest } from "fastify";
import { Resource } from "fastify-autoroutes";
import Container from "typedi";
import { UserUpdateInput } from "~/models/user";
import UserService from "~/services/user";

export default (): Resource =>
  <Resource>{
    get: {
      schema: {
        description: "Get user from database by ID",
        tags: ["User"],
        summary: "Get user by ID",
        security: [{ apiKey: [] }],
        params: {
          type: "object",
          properties: {
            id: { type: "number" },
          },
        },
        response: {
          200: {
            $ref: "http://example.com/schema/user#",
          },
        },
      },
      handler: async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply
      ) => {
        const id = request.params.id;
        const user = await Container.get(UserService).getUserById(id);
        if (!user) return reply.status(400).send("User does not exist");
        return reply.send(user);
      },
    },
    put: {
      schema: {
        description: "Update user information in database by ID",
        tags: ["User"],
        summary: "Update user by ID",
        security: [{ apiKey: [] }],
        params: {
          type: "object",
          properties: {
            id: { type: "number" },
          },
        },
        body: {
          type: "object",
          properties: {
            id: { type: "string" },
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
      handler: async (
        request: FastifyRequest<{
          Params: { id: number };
          Body: UserUpdateInput;
        }>,
        reply
      ) => {
        const id = request.params.id;
        const payload = request.body;
        const user = await Container.get(UserService).updateUser(id, payload);
        return reply.send(user);
      },
    },
    delete: {
      schema: {
        description: "Delete user from database by ID",
        tags: ["User"],
        summary: "Delete user by ID",
        security: [{ apiKey: [] }],
        params: {
          type: "object",
          properties: {
            id: { type: "number" },
          },
        },
        response: {
          200: {
            $ref: "http://example.com/schema/user#",
          },
        },
      },
      handler: async (
        request: FastifyRequest<{ Params: { id: number } }>,
        reply
      ) => {
        const id = request.params.id;
        const user = await Container.get(UserService).deleteUser(id);
        return reply.send(user);
      },
    },
  };
