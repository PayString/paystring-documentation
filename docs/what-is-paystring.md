---
id: what-is-paystring
title: What is PayString?
sidebar_label: What is PayString?
---

:::note
PayString was previously known as PayID, and some references remain.
:::

PayString is a simple, web-based protocol designed to make it as easy to send someone money as it is to send them an email. With the PayString protocol, you use human-readable addresses to transmit value in the currency of your choice. The PayString network allows participants to reach one another through standardized addresses. An address such as `alice$example.com` maps to the corresponding URL `https://example.com/alice`.

When you make an HTTP GET request that follows the PayString protocol, it resolves to an address on the underlying payment network. PayString is a payment-network-agnostic protocol, capable of sending payments in BTC, ETH, XRP, or fiat networks like ACH.

PayString is fully peer-to-peer with no central counterparty. Anyone can set up their own PayString server or integrate with a trustless blockchain solution so they have no counterparty risk.

The PayString protocol is designed to be simple, general, open, and universal. This makes it composable with any other existing namespace, including blockchain namespace projects like ENS and Unstoppable Domains or app-specific usernames. Anyone with an existing username or address can get a PayString address that works across all platforms.

PayString.org has created a [reference implementation](paystring-reference-overview) of the PayString protocol, which you can [view on GitHub](https://github.com/paystring/paystring). You are welcome to create your own implementation as well.

## PayString standards

PayString is an open standard. Commentary is welcome. You can open a Github issue to provide feedback.

### PayString protocol whitepaper

Refer to the [PayString protocol whitepaper](https://paystring.org/whitepaper.pdf) for an extensive discussion of the underlying principles.

### PayString RFCs

[Current PayString RFCs](https://github.com/paystring/rfcs) describe the 'paystring' URL Scheme, PayString Discovery, and the PayString protocol.

## Implementations

You can decide how you want to implement the PayString protocol. To facilitate ease of use, RippleX has created a [reference implementation for a PayString server](paystring-reference-overview). Check out the [PayString repository on Github](https://github.com/paystring/paystring/). Refer to [Getting started](/) for a quick guide to deploy your own PayString server, manage users, and execute transactions.

If you want to contribute to PayString, see [Contributing to PayString](https://github.com/paystring/paystring/blob/master/CONTRIBUTING.md).

## Building blocks

### Developer best practices

RippleX has developed a [set of best practices] for incorporating PayString into your app.

### Web standards

PayString uses existing web standards and infrastructure, including HTTP and DNS. Each institution supports its users through its domain, creating a decentralized network where institutions maintain sovereignty over their own users. Each institution is empowered to participate in the network by deploying its own server with its own users. Additionally, a user who prefers to self-custody their cryptocurrency can deploy a personal PayString server, as described in [Set up a PayString server](#set-up-a-paystring-server).

PayString does not rely on any consensus protocols, which simplifies infrastructure demands.

### Decentralization

PayString is built on the most successful decentralized network in history: the web. PayString is fully peer-to-peer with no central counterparty. Anyone can set up their own personal PayString server so they have no counterparty risk.

### Protocol abstraction

PayString fully abstracts away underlying payment rail details from end users. A user only needs to keep track of a single PayString rather than a complex address for each network. Service operators can manage the underlying addresses behind the scenes according to their own security and privacy best practices without requiring the end user to take any action.

### Security requirements

A PayString implementation requires the use of TLS (Transport Level Security). As described in [PayString Security and Best Practices](paystring-best-practices), the use of TLS 1.3 is highly recommended.

## Future features and integrations

PayString is an extensible and flexible open standard, and therefore can be used as a basis for additional solutions. In upcoming releases, RippleX intends to extend PayString capabilities as described here.

### Verifiable PayString

Verifiable PayString is a suite of security enhancements to the base PayString request and response that adds in a variety of digital signature fields for linking external digital identities, proving control of the payment rail address, and providing non-repudiable messaging. It can be used to enable trust-minimized and trust-free security regimes and has applications in both custodial and non-custodial settings.

To learn more, see [Verifiable PayString RFC](https://github.com/paystring/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt).

### Compliance and Travel Rule

As a system designed for all payments, PayString needs to accommodate the variety of compliance requirements that may apply to any particular payment, whether over a traditional or crypto payment rail.

Of particular relevance, PayString can be extended to provide an elegant solution for [Travel Rule](https://www.fatf-gafi.org/media/fatf/documents/recommendations/RBA-VA-VASPs.pdf) compliance with a focus on crypto transactions. Travel Rule has proven to be a tricky problem for crypto transactions, but it is greatly simplified when sending to a PayString.

The compliance extension to PayString provides an abstraction layer so that users can send payments to human-readable addresses while virtual asset service providers (VASPs) can meet the necessary compliance requirements in the background. Financial institutions can communicate regulatory requirements and the corresponding necessary data by using the PayString Public API, which is a standard REST API.

By default, data exchange in the Travel Rule extension is accomplished via the [TRISA protocol](https://trisa.io/). TRISA is a complementary protocol built on common principles shared by PayString, including simplicity, security, a commitment to free and open source tech, use of proven technology, and an emphasis on interoperability and scalability.

### Other upcoming features and integrations

Some features and integrations on the roadmap include:

- Additional payment rail standards
- Payment request ([W3C Standard](https://www.w3.org/TR/payment-request/)) integration
- Advanced payment type support: pull, push, streaming, subscription
- PayString forwarding and redirection
