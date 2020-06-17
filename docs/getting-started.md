---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. This guide walks you though:

- [Run a PayID Server Locally](#run-a-payid-server-locally)
- [Create a PayID](#create-a-payid)
- [Request a PayID](#request-a-payid)
- [Learn More](#learn-more)

## Run a PayID Server Locally

To get started, the first thing you need to do is set up a PayID server. If you haven't already, install [Docker](https://docks.docker.com/get-docker/) on your machine. Then:

Download the reference implementation server by cloning the repository:

```
git clone git@github.com:payid-org/payid.git
```

Boot up the PayID HTTP server and a Postgres database to develop against:

```sh
npm run devEnvUp
```

## Create a PayID

Now that you have a [PayID server running locally](#run-a-payid-server-locally), you can create a PayID and receive funds. If your server was publically accessible, other people could query your account information from your PayID server.

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

## Request a PayID

After setting up a server and [creating a PayID](#create-a-payid) on the server, the next step is requesting the PayID from the server. The PayID Protocol is what allows you to make these requests. And, when the server is publicly available, other wallets and entities can make similar requests to query any PayID and related account information stored on the server.

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

## Learn More

<!-- TODO:(hbergren) Make this section better once the docs skeleton has been refactored. -->
<!-- Would be great to add links to other sections here. -->

After setting up the basics, you have a good foundation for learning more about the PayID Protocol. Here are some next steps you can take:

- How to convert a `payid$domain` format to a URL
- How to use relevant HTTP headers
- How to handle different types of responses you could receive from a PayID server

Here are some other things you may also want to learn about:

- The PayID reference implementation server
- Other features and extensions that PayID has to offer
- How to contribute to PayID
- [PayID RFCs](https://github.com/payid-org/rfcs), which discuss potential changes to the PayID Protocol
- The [PayID Whitepaper](https://github.com/payid-org/payid/blob/master/docs/payid_whitepaper.pdf), which gives much more background context around the problems that PayID solves
