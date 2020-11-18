---
id: getting-started-local
title: Get Started With a Local PayID Server
sidebar_label: Get Started With a Local PayID Server
---

To familiarize yourself and experiment with PayID, you can set up a local PayID server. Here is a simple method. For more options, including PayID deployment for production environments, see [Deployment Overview](intro-deploy).

1.  If you haven't already, install [Docker](https://docks.docker.com/get-docker/) and [Node](https://nodejs.org/en/) on your machine.

2.  The reference implementation server is available at [https://github.com/payid-org/payid](https://github.com/payid-org/payid). You can download the reference implementation server by cloning the repository at the command line:
    `git clone https://github.com/payid-org/payid.git`

3.  Go to the `/payid` directory that you just created:
    `cd payid`

4.  Boot up the PayID HTTP server and a Postgres database to develop against:
    `npm run devEnvUp`

### Create a PayID

Now that you have a PayID server running, you can create a PayID. If your server is publicly accessible, other people could query your account information from your PayID server.

To create a PayID, with an [XRP Ledger Testnet account](https://xrpl.org/xrp-testnet-faucet.html), send this request to your server:

```bash
curl --location --request POST 'http://127.0.0.1:8081/users' \
  --header 'PayID-API-Version: 2020-06-18' \
  --header 'Content-Type: application/json' \
  --data-raw '{
       "payId": "alice$127.0.0.1",
       "addresses": [
           {
               "paymentNetwork": "XRPL",
               "environment": "TESTNET",
               "details": {
                   "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS",
                   "tag": "123"
               }
           }
       ]
   }'
```

PayID supports various payment networks. To create a second user with a Bitcoin testnet account, send this request to your server:

```bash
curl --location --request POST 'http://127.0.0.1:8081/users' \
  --header 'PayID-API-Version: 2020-06-18' \
  --header 'Content-Type: application/json' \
  --data-raw '{
       "payId": "bob$127.0.0.1",
       "addresses": [
           {
               "paymentNetwork": "BTC",
               "environment": "TESTNET",
               "details": {
                   "address": "mxNEbRXokcdJtT6sbukr1CTGVx8Tkxk3DB"
               }
           }
       ]
   }'
```

### Request a PayID

After setting up a server and [creating a PayID](#create-a-payid) on the server, the next step is to request the PayID from the server. The PayID Protocol is what allows you to make these requests. And, when the server is publicly available, other wallets and entities can make similar requests to query any PayID and related account information stored on the server.

To request the PayID you created for Alice:

```bash
curl --location --request GET 'http://127.0.0.1:8080/alice' \
   --header 'PayID-Version: 1.0' \
   --header 'Accept: application/xrpl-testnet+json'
```

The response should have the following payload:

```json
{
  "payId": "alice$127.0.0.1",
  "addresses": [
    {
      "paymentNetwork": "XRPL",
      "environment": "TESTNET",
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "rDk7FQvkQxQQNGTtfM2Fr66s7Nm3k87vdS",
        "tag:": "123"
      }
    }
  ]
}
```

To request the PayID you created for Bob:

```bash
curl --location --request GET 'http://127.0.0.1:8080/bob' \
   --header 'PayID-Version: 1.0' \
   --header 'Accept: application/btc-testnet+json'
```

That's it! You've set up a PayID server locally, created new PayIDs on your server, and requested those PayIDs by using the PayID Protocol.

If you want to clean up the Docker containers, you can run `npm run devDown`.

Now that you've set up the basics, [learn more](#learn-more) about PayID and what you can do with it.
