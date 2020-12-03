---
id: paystring-reference-overview
title: Reference Implementation Overview
sidebar_label: Reference Implementation Overview
---

[PayString.org](https://paystring.org) provides a reference implementation of the PayString Protocol. If you want to use PayString, you can use this reference implementation, or you can make changes to it, or you can create your own solution entirely, as long as you follow the PayString Protocol.

## PayString reference specifications

The [reference implementation](https://github.com/paystring/paystring) uses TypeScript, a Node.js HTTP server, and a Postgres database.

By default, the server hosts the PayString Protocol implementation, or Public API, on port 8080. It also hosts a second RESTful API on port 8081 for CRUD operations of PayStrings and associated addresses.

## PayString server setup

There are multiple ways to set up a PayString server. We recommend any of the following:

- You can use the provided Docker-based deployment as described in [Getting Started](/).
- You can set up a [local PayString server without Docker](local-deployment).
- You can use [AWS and nginx](remote-deployment) to set up your PayString server, or adapt those instructions to other cloud providers. See the [PayString server requirements](payid-server-requirements) to learn about what types of resources you should deploy.

To experiment with PayString, you can quickly set up a local server. First, clone the [PayString reference implementation](https://github.com/paystring/paystring). From inside the repository, run `npm run devEnvUp`, which uses the local `docker-compose.yml` file to set up Docker containers running a Postgres database and PayString server.

If you would like to experiment with the source code but need a Postgres database to develop with you can run `npm run devDbUp`.

When you finish experimenting, you can clean up all deployed docker containers by running `npm run devDown`.

## PayString metrics

The PayString reference implementation provides readily accessible [metrics](metrics).
