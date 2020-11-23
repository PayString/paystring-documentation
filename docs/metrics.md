---
id: metrics
title: Metrics
sidebar_label: Metrics
---

The reference implementation of PayString server automatically collects metrics using Prometheus. By default, metrics are pushed to the RippleX Prometheus pushgateway. This document describes how you can explicitly configure the PayString server to push to RippleX, or how to collect and analyze these metrics using your own metrics server.

## Reporting metrics to RippleX

RippleX runs a metrics collection server for general use by anyone running a PayString server. Sharing your metrics with RippleX allows the PayString community to aggregate and monitor PayString adoption and growth metrics in one place.

Metrics are reported to RippleX by default but you can push metrics to your own Prometheus pushgateway. Here's how to configure your PayString server to do that:

```sh
# RippleX's Prometheus pushgateway
PUSH_GATEWAY_URL=https://push00.mon.payid.tech
```

To opt out of pushing metrics entirely, set the following environment variable on your server:

```sh
PUSH_PAYID_METRICS=false
```

## Available metrics

The PayString server captures the following metrics.

| Metric                                | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `payid_count`                         | The number of PayString address mappings in the system. This is calculated periodically by querying the PayString database and published as metrics periodically (every 60 seconds by default). In Prometheus terms, this metric is a gauge.                                                                                                                                                 |
| `payid_count.paymentNetwork`          | The payment network for the PayString address mapping. (XRPL, BTC, ETH, ACH, ...)                                                                                                                                                                                                                                                                                                            |
| `payid_count.environment`             | The payment network’s environment for the PayString address mapping (MAINNET, TESTNET, RINKEBY, ...)                                                                                                                                                                                                                                                                                         |
| `payid_lookup_request`                | The number of PayString lookup requests. This metric is updated every time a PayString server is hit with a HTTP request to look up an address or addresses for a PayString.                                                                                                                                                                                                                 |
| `payid_lookup_request.paymentNetwork` | The payment network for the PayString address mapping. (XRPL, BTC, ETH, ACH, ...)                                                                                                                                                                                                                                                                                                            |
| `payid_lookup_request.environment`    | The payment network’s environment for the PayString address mapping (MAINNET, TESTNET, RINKEBY, ...)                                                                                                                                                                                                                                                                                         |
| `payid_lookup_request.result`         | The result of the lookup. Possible values include: <ul><li>`found` - An address was found for the PayString lookup.</li><li>`not_found` - An address was not found for the PayString lookup (HTTP status code 404)</li><li>`error` - There was an error in the PayString lookup request. For example, if the client provided an Accept request header that was invalid or missing.</li></ul> |

You can use this data to generate real-time charts. For example, this chart shows how many PayString address mappings exist in the system over time:
![PayString address mappings in system over time](/img/docs/payid_address_count.png)

This chart shows the rate per minute of PayString lookup requests:
![PayString lookups per minute](/img/docs/payid_lookups.png)

## Import metrics from the PayString server to Prometheus

You can use a push or pull method to obtain metrics from Prometheus.

**Tip:** Note that both push and pull methods can be used together simultaneously. For example, to pull metrics into an internal Prometheus server and push metrics to a third-party Prometheus server like RippleX.

### How to pull metrics to Prometheus

Prometheus pulls metrics by scraping a known endpoint for metrics data. The PayString server exposes metrics in Prometheus format on the admin port (default `8081`). For simplicity, you can configure Prometheus to scrape metrics directly from the PayString server. Prometheus must be running inside the same network as PayString server because Prometheus needs access to the admin port. If multiple instances of the PayString server are being run behind a load balancer, then Prometheus must pull metrics directly from each instance, not through the load balancer. This direct method is recommended for collecting metrics using your own Prometheus server.

Here is a sample `prometheus.yml` configuration file set up to pull metrics from a PayString server running locally.

```yml
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: 'prometheus'
    honor_labels: true
    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
      - targets: ['localhost:8081']
```

### How to push metrics from the PayString server to Prometheus

Alternatively, you can push metrics from the PayString server to Prometheus using a [pushgateway](https://github.com/prometheus/pushgateway). This setup requires running a pushgateway in addition to a Prometheus server, and configuring the PayString server to push metrics to the pushgateway. Prometheus then pulls metrics from the pushgateway. In this setup, Prometheus and pushgateway do not need to run inside the same network as the PayString server(s), but the PayString server must be able to reach the pushgateway over http. This is the recommended method for pushing metrics to a third party such as RippleX.

By default, the reference PayString server pushes metrics to the RippleX pushgateway. To push metrics to your own pushgateway, follow these steps:

1. Set the environment variables `PUSH_GATEWAY_URL` with the url to your pushgateway.
2. Restart your PayString server.

For example, if the fictitious company Vandelay Industries wants to push metrics to a pushgateway running at `https://some-pushgateway.com`, then set these environment variables: `PUSH_GATEWAY_URL= https://some-pushgateway.com`.

By default, a PayString server will push metrics every 15 seconds to the configured pushgateway. To change this frequency, set the `PUSH_METRICS_INTERVAL` value. For example, to push every 5 minutes (300 seconds), set `PUSH_METRICS_INTERVAL=300`. This value must be a positive number.

As mentioned above, you can also explicitly set `PUSH_GATEWAY_URL=https://push00.mon.payid.tech` to push the metrics from your PayString server to RippleX.

## Visualize metrics with Prometheus and Grafana

Prometheus has an admin web console with limited visualization capabilities on port 9090 (default), as shown in this example.

![PayString metrics on Prometheus](/img/docs/prometheus-metrics.png)

To build dashboards with multiple charts, you can [use Grafana and configure Prometheus as a datasource](https://prometheus.io/docs/visualization/grafana/).

## Deploy a PayString server with Docker, and pull PayString metrics into Prometheus

In this tutorial, you will deploy a PayString server and run Prometheus locally using Docker, and you will create a configuration file for the PayString server so that PayString metrics are pulled into Prometheus.

### Prerequisites

Install the following software on your machine, if not already present.

- [npm](https://www.npmjs.com/get-npm)
- [docker](https://docs.docker.com/get-docker/)
- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Build a Docker container for setting up a PayString server

Run these commands to build a Docker container for a PayString server.

```bash
git clone https://github.com/payid-org/payid.git
cd payid
docker build -t payid-server .
```

### Create Docker network for PayString

You will run several containers in Docker that must talk to each other. To set up these containers, create a docker network called `payid-network`.

```bash
docker network create payid-network
```

### Start a Postgres Database

To have a PayString server, you require a Postgres database to store PayString accounts and address mappings. To do this, run the postgres database in docker with a default password of `password`, and tell the database to use the `payid-network` that you previously created. Name this docker container `payid-postgres`, so that you can reference the container by name when you connect your PayString server. Note that both the default database and the user are named `postgres`, as described at [Postgres Docker Official Images](https://hub.docker.com/_/postgres).

```bash
docker run -d --rm --name payid-postgres --network payid-network -e POSTGRES_PASSWORD=password postgres
```

### Start and test the PayString server

To start the PayString server, run the PayString server in docker using the image you created. You must also use the docker network `payid-network` so that it can connect to the `payid-postgres` container.

```bash
docker run -it -p 8080:8080 -p 8081:8081 --name payid-server --network payid-network -e DB_PASSWORD=password -e
    DB_NAME=postgres -e DB_HOSTNAME=payid-postgres payid-server
```

Test whether the PayString server is running by creating a PayString with this cURL command.

```bash
 curl --location --request POST 'http://127.0.0.1:8081/users' --header 'PayString-API-Version: 2020-06-16' --header 'Content-Type: application/json' --data-raw '{
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

Query the PayString server to make sure it resolves, using this cURL command.

```bash
curl http://127.0.0.1:8080/charlie -H "PayString-Version: 1.0" -H "Accept: application/xrpl-testnet+json"`
```

### Start Prometheus

In this step, you will run prometheus in docker and configure it to scrape the PayString server’s metrics. To do this, you need to create a `prometheus.yml` file on the host machine and mount it in the docker container.

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

![PayString Metrics setup and configuration](/img/docs/prometheus-sum.png)

Click the **Graph** tab to display the results in graph format.

Here are some other example expressions:

- `sum(payid_count) by (paymentNetwork)` - Sum of `payid` count by payment network, such as XRPL, BTC, and so forth.
- `sum(payid_lookup_request)` - Total number of `payid` lookup requests.
- `rate(payid_lookup_request[5m])` - Rate of `payid` lookup requests per second.
