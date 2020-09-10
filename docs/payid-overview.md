---
id: payid-overview
title: Overview
sidebar_label: Overview
---

With PayID, you can use human-readable addresses to transmit value in the currency of your choice. The PayID network allows participants to reach one another through a standardized address. For example, `alice$wallet.com` maps to the corresponding URL `https://wallet.com/alice`.

When you make an HTTP GET request that follows the PayID protocol, it resolves to an address on the underlying payment network. PayID is a payment-network-agnostic protocol, capable of sending payments in BTC, ETH, XRP, or fiat networks like ACH.

PayID is fully peer-to-peer with no central counterparty. Anyone can set up their own PayID server or integrate with a trustless blockchain solution so they have no counterparty risk.

The PayID protocol is designed to be simple, general, open, and universal. This makes it composable with any other existing namespace, including blockchain namespace projects like ENS and Unstoppable Domains or app-specific usernames. Anyone with an existing username or address can get a PayID address that works across all platforms.

## PayID standards

PayID is an open standard. Commentary is welcome. You can open a Github issue to provide feedback.

### PayID protocol whitepaper

Refer to the [PayID protocol whitepaper](https://payid.org/whitepaper.pdf) for an extensive discussion of the underlying principles.

### PayID RFCs

[Current PayID RFCs](https://github.com/payid-org/rfcs) describe the 'payid' URL Scheme, PayID Discovery, and the PayID protocol.

## Implementations

You can decide how you want to implement the PayID protocol. To facilitate ease of use, Xpring has created a [reference implementation for a PayID server](payid-reference-overview). Check out the [PayID repository on Github](https://github.com/xpring-eng/payid/). Refer to [Getting started](/) for a quick guide to deploy your own PayID server, manage users, and execute transactions.

If you want to contribute to PayID, see [Contributing to PayID](https://github.com/payid-org/payid/blob/master/CONTRIBUTING.md).

## Building blocks

### Web standards

PayID uses existing web standards and infrastructure, including HTTP and DNS. Each institution supports its users through its domain, creating a decentralized network where institutions maintain sovereignty over their own users. Each institution is empowered to participate in the network by deploying its own server with its own users. Additionally, a user who prefers to self-custody their cryptocurrency can deploy a personal PayID server, as described in [Set up a PayID server](#set-up-a-payid-server).

PayID does not rely on any consensus protocols, which simplifies infrastructure demands.

### Decentralized

PayID is built on the most successful decentralized network in history: the web. PayID is fully peer-to-peer with no central counterparty. Anyone can set up their own personal PayID server so they have no counterparty risk.

### Protocol abstraction

PayID fully abstracts away underlying payment rail details from end users. A user only needs to keep track of a single PayID rather than a complex address for each network. Service operators can manage the underlying addresses behind the scenes according to their own security and privacy best practices without requiring the end user to take any action.

### Security requirements

A PayID implementation requires the use of TLS (Transport Level Security). As described in [PayID Security and Best Practices](payid-best-practices), the use of TLS 1.3 is highly recommended.

## Future features and integrations

PayID is an extensible and flexible open standard, and therefore can be used as a basis for additional solutions. In upcoming releases, Xpring intends to extend PayID capabilities as described here.

### Verifiable PayID

Verifiable PayID is a suite of security enhancements to the base PayID request and response that adds in a variety of digital signature fields for linking external digital identities, proving control of the payment rail address, and providing non-repudiable messaging. It can be used to enable trust-minimized and trust-free security regimes and has applications in both custodial and non-custodial settings.

To learn more, see [Verifiable PayID RFC](https://github.com/payid-org/rfcs/blob/master/dist/spec/verifiable-payid-protocol.txt).

### Compliance and Travel Rule

As a system designed for all payments, PayID needs to accommodate the variety of compliance requirements that may apply to any particular payment, whether over a traditional or crypto payment rail.

Of particular relevance, PayID can be extended to provide an elegant solution for [Travel Rule](https://www.fatf-gafi.org/media/fatf/documents/recommendations/RBA-VA-VASPs.pdf) compliance with a focus on crypto transactions. Travel Rule has proven to be a tricky problem for crypto transactions, but it is greatly simplified when sending to a PayID.

The compliance extension to PayID provides an abstraction layer so that users can send payments to human-readable addresses while virtual asset service providers (VASPs) can meet the necessary compliance requirements in the background. Financial institutions can communicate regulatory requirements and the corresponding necessary data by using the PayID Public API, which is a standard REST API.

By default, data exchange in the Travel Rule extension is accomplished via the [TRISA protocol](https://trisa.io/). TRISA is a complementary protocol built on common principles shared by PayID, including simplicity, security, a commitment to free and open source tech, use of proven technology, and an emphasis on interoperability and scalability.

### Other upcoming features and integrations

Some features and integrations on the roadmap include:

- Additional payment rail standards
- Payment request ([W3C Standard](https://www.w3.org/TR/payment-request/)) integration
- Advanced payment type support: pull, push, streaming, subscription
- PayID forwarding and redirection
