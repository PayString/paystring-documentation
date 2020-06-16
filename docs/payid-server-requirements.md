---
id: payid-server-requirements
title: PayID Server Requirements
sidebar_label: PayID Server Requirements
---

The reference PayID server is comprised of a simple Node.js HTTP server and a Postgres database.

In production environments, you should set up a reverse proxy like nginx in front of the Node.js HTTP server

## Production Requirements

To run a PayID server in a production environment, you should:

- Give each component of the stack a vCPU and 500 MB of RAM
- Ensure there are at least two High-Availability replicas for each component

Here's how the requirements would break down:

- 1 vCPU + 500 MB RAM per nginx replica (2x)
- 1 vCPU + 500 MB RAM per PayID Node.js server replica (2x)
- 1 vCPU + 500 MB RAM per Postgres replica (2x)

Note that these are _conservative_ requirements for an environment with a non-trivial amount of traffic. The PayID server is not resource-hungry. If you have an environment with smaller amounts of traffic, you may be able to run a PayID server with less robust specs.
