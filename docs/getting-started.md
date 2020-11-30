---
id: getting-started
title: Get Started Overview
sidebar_label: Get Started Overview
---

PayID is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. This guide walks you through the following.

- [Experiment With the PayID Sandbox](#experiment-with-the-payid-sandbox)
- [Run a PayID Server](#run-a-payid-server)
- [Run PayID CLI](#run-payid-cli)
- [Learn More](#learn-more)
- [RippleX Dev Kit Integration](#ripplex-dev-kit-integration)

Your contributions are welcome. Check out the [PayID repository on GitHub](https://github.com/payid-org/payid), and note the [Contributing](https://github.com/payid-org/payid/blob/master/CONTRIBUTING.md) guidelines.

## Experiment with the PayID Sandbox

The [PayID Sandbox](https://payid.org/sandbox) lets you experiment with PayID in a test environment. Your work is not saved between sessions, and the sandbox may be reset at any time.

To use [PayID Sandbox](https://payid.org/sandbox), log in with your Github account and follow the prompts. You can quickly set up a virtual test server, and then create users with simple PayID addresses that map to addresses on various networks such as XRPL, Interledger, BTC, and ETH. Using the provided cURL or Javascript code, you can create, update, and delete users, and get payment information about a PayID address. While the session is running, you can also run operations from your command line. See [Get Started With PayID Sandbox](getting-started-sandbox).

## Run a PayID Server

See [Get Started With a Local PayID Server](getting-started-local).

## Run PayID CLI

PayID CLI allows you to manage PayIDs and get user information from the command line. See [Get Started With PayID CLI](payid-cli).

## RippleX Dev Kit Integration

PayID support is integrated into [RippleX Dev Kit](https://github.com/xpring-eng/ripplex-dev-kit).

RippleX Dev Kit provides the ability to work with PayID. It provides three language libraries:

- [JavaScript](https://github.com/xpring-eng/xpring-js)
- [Java](https://github.com/xpring-eng/xpring4j)
- [Swift](https://github.com/xpring-eng/xpringkit)

These libraries help you connect your application to PayID without having to worry about the specifics of PayID. Try [Get Started With RippleX Dev Kit and PayID](ripplex-dev-kit-payid-get-started).

## Learn More

You now have a good foundation for learning more about the PayID Protocol. Here are some next steps you can take:

- [How to convert](https://github.com/xpring-eng/xpring-js#usage-payid) the `user$domain.com` format to a URL
- Learn how to use relevant [HTTP headers](payid-headers)
- Learn how to handle different types of [responses](https://api.payid.org/?version=latest) you could receive from a PayID server

You can use extended PayID features:

- [Get Started With Verifiable PayID](verifiable-payid). Verifiable PayID enhances security for PayID.
- [Use PayID CLI](payid-cli). PayID CLI is a convenient tool to work with PayID addresses.

Learn about:

- [How to contribute to PayID](https://github.com/payid-org/payid/blob/master/CONTRIBUTING.md)
- [PayID RFCs](https://github.com/payid-org/rfcs), which discuss potential changes and additions to the PayID Protocol
- The [PayID Whitepaper](https://payid.org/whitepaper.pdf), which provides background context around the problems that PayID solves
