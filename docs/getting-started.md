---
id: getting-started
title: Overview
sidebar_label: Overview
---

:::note
PayString was previously known as PayID.
:::

PayString is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. This guide walks you through the following.

- [Experiment With the PayString Sandbox](#experiment-with-the-paystring-sandbox)
- [Run a PayString Server](#run-a-paystring-server)
- [Run PayString CLI](#run-paystring-cli)
- [Learn More](#learn-more)
- [RippleX Dev Kit Integration](#ripplex-dev-kit-integration)

Your contributions are welcome. Check out the [PayString repository on GitHub](https://github.com/paystring), and note the [Contributing](https://github.com/paystring//blob/master/CONTRIBUTING.md) guidelines.

## Experiment with the PayString Sandbox

The [PayString Sandbox](https://paystring.org/sandbox) lets you experiment with PayString in a test environment. Your work is not saved between sessions, and the sandbox may be reset at any time.

To use [PayString Sandbox](https://paystring.org/sandbox), log in with your Github account and follow the prompts. You can quickly set up a virtual test server, and then create users with simple PayString addresses that map to addresses on various networks such as XRPL, Interledger, BTC, and ETH. Using the provided cURL or Javascript code, you can create, update, and delete users, and get payment information about a PayString address. While the session is running, you can also run operations from your command line. See [Get Started With PayString Sandbox](getting-started-sandbox).

## Run a PayString Server

See [Get Started With a Local PayString Server](getting-started-local).

## Run PayString CLI

PayString CLI allows you to manage PayStrings and get user information from the command line. See [Get Started With PayString CLI](paystring-cli).

## RippleX Dev Kit Integration

PayString support is integrated into [RippleX Dev Kit](https://github.com/xpring-eng/ripplex-dev-kit).

RippleX Dev Kit provides the ability to work with PayString. It provides three language libraries:

- [JavaScript](https://github.com/xpring-eng/xpring-js)
- [Java](https://github.com/xpring-eng/xpring4j)
- [Swift](https://github.com/xpring-eng/xpringkit)

These libraries help you connect your application to PayString without having to worry about the specifics of PayString. Try [Get Started With RippleX Dev Kit and PayString](ripplex-dev-kit-paystring-get-started).

## Best Practices for App Development

[Follow these guidelines](./static/paystring-best-practices.pdf) for incorporating PayString into your app.

## Learn More

You now have a good foundation for learning more about the PayString Protocol. Here are some next steps you can take:

- [How to convert](https://github.com/xpring-eng/xpring-js#usage-paystring) the `user$domain.com` format to a URL
- Learn how to use relevant [HTTP headers](paystring-headers)
- Learn how to handle different types of [responses](https://api.paystring.org/?version=latest) you could receive from a PayString server

You can use extended PayString features:

- [Get Started With Verifiable PayString](verifiable-paystring). Verifiable PayString enhances security for PayString.
- [Use PayString CLI](paystring-cli). PayString CLI is a convenient tool to work with PayString addresses.

Learn about:

- [How to contribute to PayString](https://github.com/paystring/paystring/blob/master/CONTRIBUTING.md)
- [PayString RFCs](https://github.com/paystring/rfcs), which discuss potential changes and additions to the PayString Protocol
- The [PayString Whitepaper](https://paystring.org/whitepaper.pdf), which provides background context around the problems that PayString solves
