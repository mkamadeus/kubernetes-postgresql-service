# Noxie

![wf badge](https://github.com/mkamadeus/noxie/actions/workflows/lint.yml/badge.svg)

Noxie is a tiny Fastify-based REST API boilerplate. It prepares the bare minimum of what I mainly needed on an API which are:

- **Clean Architecture** - this boilerplate is based on the clean architecture; having models, services, and controllers for the API for testability on each layer if needed.
- **ORM** -- too lazy to build database from scratch, and my projects mostly are not that big. This boilerplate uses [Prisma](https://www.prisma.io/) v2 as the ORM.
- **Logger Support** -- good backend = good logging; using [Pino](https://github.com/pinojs/pino/) as the logger (built-in to Fastify).
- **Smooth Dev Experience** -- having linters, formatters, and pre-commit hooks for better development experience.
- **Automatic Swagger** -- documentation is important for a good backend, hence Swagger is a must for me.
- **(WIP) Unit and Integration Tests** -- wanted to have good testability in crucial layers, or maybe doing some TDD.

## Notable dependencies

1. Fastify
2. Prisma
3. Husky
4. Commitlint
5. (WIP) Jest
6. Pino

## Running

Before, install dependecies as usual by using `yarn`/`yarn install`, and yarn is a necessity. This project only allows yarn for installing dependencies.

For running the dev server, type in `yarn dev`.

A dockerfile has been included in the repository for deploying this project to the web.

## Using as a Template

To use this template, you can simply download this repository and remove the `.git` folder, or you can simply use `degit`.

```bash
npx degit https://github.com/mkamadeus/noxie
```
