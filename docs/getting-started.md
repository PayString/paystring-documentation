---
id: getting-started
title: Getting Started With PayID
sidebar_label: Getting Started With PayID
---

PayID provides both the PayID Private API and PayID Public API. You can deploy your own PayID server and then create PayIDs for your users using the PayID Private API. You can also query and modify this list of users. This API should be exposed internally only, so that only your company's systems can update PayID mappings.

Once you have set up a PayID server, anyone can use the PayID Public API to query address information. This API is publicly accessible so that anyone can send payments to, or receive payments at, your users' PayID addresses.

For guidance on setting up a complete PayID workflow, see [PayID workflow](payid-workflow).

## Set up a PayID server for development purposes

To ease the deployment of a development environment, the PayID application includes scripts to quickly deploy a Postgres database and a PayID server.

The Postgres Docker image used in these scripts is version
12-alpine. See [Postgres--Docker Official Images](https://hub.docker.com/_/postgres). Before you proceed, ensure you have Docker installed.

If you want to run a PayID server without Docker, see [Local deployment of a PayID server without Docker](local-deployment). You can also set up your PayID server using [AWS and NGINX][remote-deployment].

Ensure that you follow the [recommended best practices](payid-best-practices) for security.

### Set up a PayID server to develop some other server against

To set up a PayID server to develop some other server against, such as the Xpring Wallet, run these commands.

```bash
git clone git@github.com:xpring-eng/payid.git
npm run devEnvUp
```

### Set up a Postgres container without a PayID server

To work on the PayID server source code itself, you can create a Postgres container without a PayID server. Run:

```sh
npm run devDbUp
```

The Postgres container listens on port 5432. You will need to start PayID separately, using `npm run start`.

### Remove a development environment

To remove the full development environment (Postgres and PayID), or only Postgres, run this command, which will remove the Postgres container, and cause you to lose all of your data in it.

```sh
npm run devAllDown
```
