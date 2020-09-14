---
id: deploy-with-docker
title: Deploy a PayID Server with Docker
sidebar_label: Deploy a PayID Server with Docker
---

To get started, the first thing to do is set up a PayID server.

1.  If you haven't already, install [Docker](https://docks.docker.com/get-docker/) and [Node](https://nodejs.org/en/) on your machine.

2.  The reference implementation server is available at [https://github.com/payid-org/payid](https://github.com/payid-org/payid). You can download the reference implementation server by cloning the repository at the command line:

        git clone https://github.com/payid-org/payid.git

3.  Go to the `/payid` directory that you just created:

        cd payid

4.  Boot up the PayID HTTP server and a Postgres database to develop against:

        npm run devEnvUp
