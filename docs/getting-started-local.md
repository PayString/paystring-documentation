---
id: getting-started-local
title: Get Started With a Local PayString Server
sidebar_label: Get Started With a Local PayString Server
---

To familiarize yourself and experiment with PayString, you can set up a local PayString server. Here is a simple method. For more options, including PayString deployment for production environments, see [Deployment Overview](intro-deploy).

1.  If you haven't already, install [Docker](https://docks.docker.com/get-docker/) and [Node](https://nodejs.org/en/) on your machine.

2.  The reference implementation server is available at [https://github.com/paystring/paystring](https://github.com/paystring/paystring). You can download the reference implementation server by cloning the repository at the command line:
    `git clone https://github.com/paystring/paystring.git`

3.  Go to the `/paystring` directory that you just created:
    `cd paystring`

4.  Boot up the PayString HTTP server and a Postgres database to develop against:
    `npm run devEnvUp`

### Create a PayString

Now that you have a PayString server running, you can create a PayString. If your server is publicly accessible, other people could query your account information from your PayString server.

To create a PayString, with an [XRP Ledger Testnet account](https://xrpl.org/xrp-testnet-faucet.html), send this request to your server:

```bash
curl --location --request POST 'http://127.0.0.1:8081/users' \
  --header 'PayString-API-Version: 2020-06-18' \
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

PayString supports various payment networks. To create a second user with a Bitcoin testnet account, send this request to your server:

```bash
curl --location --request POST 'http://127.0.0.1:8081/users' \
  --header 'PayString-API-Version: 2020-06-18' \
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

### Request a PayString

After setting up a server and [creating a PayString](#create-a-payid) on the server, the next step is to request the PayString from the server. The PayString Protocol is what allows you to make these requests. And, when the server is publicly available, other wallets and entities can make similar requests to query any PayString and related account information stored on the server.

To request the PayString you created for Alice:

```bash
curl --location --request GET 'http://127.0.0.1:8080/alice' \
   --header 'PayString-Version: 1.0' \
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

To request the PayString you created for Bob:

```bash
curl --location --request GET 'http://127.0.0.1:8080/bob' \
   --header 'PayString-Version: 1.0' \
   --header 'Accept: application/btc-testnet+json'
```

That's it! You've set up a PayString server locally, created new PayStrings on your server, and requested those PayStrings by using the PayString Protocol.

If you want to clean up the Docker containers, you can run `npm run devDown`.

Now that you've set up the basics, [learn more](#learn-more) about PayString and what you can do with it.
