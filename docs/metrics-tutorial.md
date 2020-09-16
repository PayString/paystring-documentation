---
id: metrics-tutorial
title: Metrics Tutorial
sidebar_label: Metrics Tutorial
---

## Deploy a PayID server with Docker, and pull PayID metrics into Prometheus

In this tutorial, you will deploy a PayID server and run Prometheus locally using Docker, and you will create a configuration file for the PayID server so that PayID metrics are pulled into Prometheus.

### Prerequisites

Install the following software on your machine, if not already present.

- [npm](https://www.npmjs.com/get-npm)
- [docker](https://docs.docker.com/get-docker/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Build a Docker container for setting up a PayID server

Run these commands to build a Docker container for a PayID server.

```bash
git clone https://github.com/payid-org/payid.git
cd payid
docker build -t payid-server .
```

### Create Docker network for PayID

You will run several containers in Docker that must talk to each other. To set up these containers, create a docker network called `payid-network`.

```bash
docker network create payid-network
```

### Start a Postgres Database

To have a PayID server, you require a Postgres database to store PayID accounts and address mappings. To do this, run the postgres database in docker with a default password of `password`, and tell the database to use the `payid-network` that you previously created. Name this docker container `payid-postgres`, so that you can reference the container by name when you connect your PayID server. Note that both the default database and the user are named `postgres`, as described at [Postgres Docker Official Images](https://hub.docker.com/_/postgres).

```bash
docker run -d --rm --name payid-postgres --network payid-network -e POSTGRES_PASSWORD=password postgres
```

### Start and test the PayID server

To start the PayID server, run the PayID server in docker using the image you created. You must also use the docker network `payid-network` so that it can connect to the `payid-postgres` container.

```bash
docker run -it -p 8080:8080 -p 8081:8081 --name payid-server --network payid-network -e DB_PASSWORD=password -e
    DB_NAME=postgres -e DB_HOSTNAME=payid-postgres payid-server
```

Test whether the PayID server is running by creating a PayID with this cURL command.

```bash
 curl --location --request POST 'http://127.0.0.1:8081/users' --header 'PayID-API-Version: 2020-06-16' --header 'Content-Type: application/json' --data-raw '{
     "payId": "charlie$127.0.0.1",
     "addresses": [
         {
             "paymentNetwork": "XRPL",
             "environment": "TESTNET",
             "details": {
                 "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS"
             }
         }
     ]
 }'
```

You should get a `Created` response.

Query the PayID server to make sure it resolves, using this cURL command.

```bash
curl http://127.0.0.1:8080/charlie -H "PayID-Version: 1.0" -H "Accept: application/xrpl-testnet+json"`
```

### Start Prometheus

In this step, you will run prometheus in docker and configure it to scrape the PayID server’s metrics. To do this, you need to create a `prometheus.yml` file on the host machine and mount it in the docker container.

Create a file named `prometheus.yml` with these contents.

```yml
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.

scrape_configs:
  - job_name: 'payid-metric'
    honor_labels: true
    static_configs:
      - targets: ['payid-server:8081']
```

Start the docker container:

```bash
docker run -d --network payid-network -p 9090:9090 -v $PWD/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus`
```

You can verify Prometheus is running by opening `http://localhost:9090/graph` in a browser.

You can verify metrics collection metrics are being collected by entering the following expression into the form:

`sum(payid_count)`

Click `Execute`. If successful, the results look like this:

![PayID Metrics setup and configuration](/img/docs/prometheus-sum.png)

Click the **Graph** tab to display the results in graph format.

Here are some other example expressions:

- `sum(payid_count) by (paymentNetwork)` - Sum of `payid` count by payment network, such as XRPL, BTC, and so forth.
- `sum(payid_lookup_request)` - Total number of `payid` lookup requests.
- `rate(payid_lookup_request[5m])` - Rate of `payid` lookup requests per second.
