---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. This guide walks you through:

- [Run a PayID Server](#run-a-payid-server)
- [Create a PayID](#create-a-payid)
- [Request a PayID](#request-a-payid)
- [Learn More](#learn-more)
- [Xpring SDK Integration](#xpring-sdk-integration)

## Run a PayID Server

To get started, the first thing to do is set up a PayID server.

1. If you haven't already, install [Docker](https://docks.docker.com/get-docker/) on your machine.

2. Download the reference implementation server by cloning the repository:

```
git clone git@github.com:payid-org/payid.git
```

3. Boot up the PayID HTTP server and a Postgres database to develop against:

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

- [How to convert](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/README.md#payid) a `payid$domain` format to a URL
- How to use relevant [HTTP headers](payid-headers)
- How to handle different types of [responses](api-reference) you could receive from a PayID server

Learn about:

- [How to contribute to PayID](https://github.com/payid-org/payid/blob/master/CONTRIBUTING.md)
- [PayID RFCs](https://github.com/payid-org/rfcs), which discuss potential changes to the PayID Protocol
- The [PayID Whitepaper](https://payid.org/whitepaper.pdf), which provides background context around the problems that PayID solves

## Xpring SDK Integration

PayID is integrated into [Xpring SDK](https://github.com/xpring-eng/xpring-sdk).

Xpring SDK provides the ability to work with PayID, using libraries provided in [JavaScript](https://github.com/xpring-eng/xpring-js), [Java](https://github.com/xpring-eng/xpring4j), and [Swift](https://github.com/xpring-eng/xpringkit).

These libraries help you connect your application to PayID without having to worry about the specifics of PayID.
