---
id: payid-server-requirements
title: PayID Server Requirements
sidebar_label: PayID Server Requirements
---

The reference PayID server is comprised of a simple Node.js HTTP server and a Postgres database. 

In production environments, you should set up a reverse proxy like nginx in front of the Node.js HTTP server

Conservative requirements for running a PayID server in production with non-trivial traffic would be to give each component of the stack a vCPU and 500 MB of RAM, and ensure there are at least two High-Availability replicas for each component. That would look like:

- 1 vCPU + 500 MB RAM per nginx replica (2x)
- 1 vCPU + 500 MB RAM per PayID Node.js server replica (2x)
- 1 vCPU + 500 MB RAM per Postgres replica (2x)

That being said, the PayID server is not resource-hungry, and you may find success running a PayID server on less hardware with smaller amounts of traffic.
