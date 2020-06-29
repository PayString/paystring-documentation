---
id: payid-reference-overview
title: Reference Implementation Overview
sidebar_label: Reference Implementation Overview
---

Xpring provides a reference implementation of the PayID server. You can implement it as described here, you can make your preferred modifications, and you can create your own implementation from scratch.

## PayID reference specifications

This implementation uses TypeScript, a Node.js HTTP server, and a Postgres database.

By default, the server hosts the PayID Protocol implementation, or Public API, on port 8080. It also hosts a second RESTful API on port 8081 for CRUD operations of PayIDs and associated addresses.

## PayID server setup

Determine how you want to set up PayID. You can use the provided Docker-based deployment as described in [Getting Started](/). You can set up a [local PayID server without Docker](local-deployment). You can use [AWS and nginx](remote-deployment) to set up your PayID server, or adapt those instructions to other cloud providers. See the [PayID server requirements](payid-server-requirements).

To experiment with PayID, you can quickly spin up a local server. Run `npm run devEnvUp`, which uses the local `docker-compose.yml` file.

To work on the PayID server source code itself, you can spin up a Postgres database to develop against. Run `npm run devDbUp`.

To clean up the associated Docker containers, run `npm run devDown`.

## PayID metrics

The PayID reference implementation provides readily accessible [metrics](metrics).
