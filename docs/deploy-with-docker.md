---
id: deploy-with-docker
title: Deploy a PayString Server with Docker
sidebar_label: Deploy a PayString Server with Docker
---

To get started, the first thing to do is set up a PayString server.

1.  If you haven't already, install [Docker](https://docks.docker.com/get-docker/) and [Node](https://nodejs.org/en/) on your machine.

2.  The reference implementation server is available at [https://github.com/paystring/paystring](https://github.com/paystring/paystring). You can download the reference implementation server by cloning the repository at the command line:

        git clone https://github.com/paystring/paystring.git

3.  Go to the `/paystring` directory that you just created:

        cd paystring

4.  Boot up the PayString HTTP server and a Postgres database to develop against:

        npm run devEnvUp
