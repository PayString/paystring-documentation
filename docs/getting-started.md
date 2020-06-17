---
id: getting-started
title: Getting Started With PayID
sidebar_label: Getting Started With PayID
---

PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. This guide walks you though: 

- [Running a PayID server](#run-a-payid-server-locally)
- [Creating a new PayID](#create-a-payid) 
- [Requesting the PayID you created using the PayID Protocol](#request-a-payid)

## Run a PayID Server Locally

The first thing we need is a PayID server to play with. You can download the reference implementation server by cloning the repository. Then, if you have Docker installed on your machine, we can boot up a Node.js HTTP server and a Postgres database in separate Docker containers to develop against:

```bash
git clone git@github.com:payid-org/payid.git
npm run devEnvUp
```

## Create a PayID

Now that you have a [PayID server running locally](#run-a-payid-server-locally), you can create a PayID and receive funds. Other people can query your account information from your PayID server.

To create a PayID, with an [XRP Ledger Testnet account](https://xrpl.org/xrp-testnet-faucet.html), send this request to your server:

```bash
curl --location --request POST 'http://127.0.0.1:8081/users' \
  --header 'PayID-API-Version: 2020-06-10' \
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

## Request a PayID

Now that we have a PayID on our server, we can request it using the PayID Protocol, the same way that other wallets would ask for our address. This is how you would get account information for sending money using a PayID.

```bash
curl --location --request GET 'http://127.0.0.1:8080/alice' \
   --header 'PayID-Version: 1.0' \
   --header 'Accept: application/xrpl-testnet+json'
```

You should get back the following payload:

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

That's it! We've gone through the basics of running a PayID server locally, creating new PayIDs on our server, and requesting PayIDs using the PayID Protocol.

## Learn More

<!-- TODO:(hbergren) Make this section better once the docs skeleton has been refactored. -->
<!-- Would be great to add links to other sections here. -->

Now that you know the basics, you have a good foundation for learning more about the PayID Protocol: How to convert a `payid$domain` format to a URL, the relevant HTTP headers, and the types of responses you could get back from a PayID server.

You may also want to learn more about the PayID reference implementation server, the other capabilities it can offer you, and how to contribute to it.

Finally, if you're in the mood for some light reading, feel free to peruse the [PayID RFCs](https://github.com/payid-org/rfcs) which discuss potential improvements to the PayID Protocol, and the [PayID Whitepaper](https://github.com/payid-org/payid/blob/master/docs/payid_whitepaper.pdf), which gives much more background context around the problem that PayID solves.
