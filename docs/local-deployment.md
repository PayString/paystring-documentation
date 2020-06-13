---
id: local-deployment
title: Deploy a Local PayID Server Without Docker
sidebar_label: Local
---

If you want to set up and run a PayID server, you have several options. This document describes how to run a PayID server without using Docker.

For other ways to deploy a PayID server, see:
* [Run the demo script](getting-started)
* [Set up a PayID server on AWS](remote-deployment)

## Basic requirements

Ensure your system meets these requirements before you set up a PayID server.

- RAM: Minimum of 100 MB
- Postgres: 11.7 or later, with [pgpool-II](https://www.pgpool.net) in front
- Node.js version: 12 or later

Before you begin, make sure that you have installed Postgres locally, or in an otherwise accessible location.

1. Clone the PayID repo.
   `git clone https://github.com/xpring-eng/payid.git && cd payid`
2. Install dependencies.

   `npm i`
3. Generate the build files in `build/*` (app code + SQL scripts).

   `npm run build`
4. Start PayID. The `npm run start` command generates the schema if it does not yet exist.

   ```bash
   DB_HOSTNAME=localhost DB_NAME=dev_payid DB_USERNAME=payid_dev

   DB_PASSWORD='xxxxx' npm run start
   ```
5. To make sure PayID runs continuously, run PayID through a tool like `forever`.

   `npm install forever -g`
6. Run PayID with `forever`.

   ```bash
   DB_HOSTNAME=localhost DB_NAME=dev_payid DB_USERNAME=payid_dev

   DB_PASSWORD='xxxxx' forever start build/src/index.js
   ```
