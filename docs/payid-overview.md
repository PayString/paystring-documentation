---
id: payid-overview
title: PayID Protocol for Human-Readable, Travel-Rule-Compliant Addresses
sidebar_label: PayID Protocol Overview
---

## What is PayID?

With PayID, you can use human-readable addresses to transmit value in the currency of your choice. The PayID network allows participants to reach one another through a standardized address. For example, `alice$wallet.com` maps to the corresponding URL `https://wallet.com/alice`.

When you make an HTTP GET request that follows the PayID protocol, it resolves to an address on the underlying payment network. PayID is a payment-network-agnostic protocol, capable of sending payments in BTC, ETH, XRP, or fiat networks like ACH.

Each request must have a valid `Accept` request HTTP header. For example: `Accept: application/xrpl-mainnet+json` indicates the XRP Ledger Mainnet payment network and the JSON format of the response payload.

PayID is fully peer-to-peer with no central counterparty. Anyone can set up their own PayID server or integrate with a trustless blockchain solution so they have no counterparty risk.

The PayID protocol is designed to be simple, general, open, and universal. This makes it composable with any other existing namespace, including blockchain namespace projects like ENS and Unstoppable Domains or app-specific usernames.  Anyone with an existing username or address can get a PayID address that works across all platforms.  

Check out the [PayID repository on Github](https://github.com/xpring-eng/payid/). Refer to [Getting started](getting-started) for a quick guide to deploy your own PayID server, manage users, and execute transactions.

## Web standards
PayID uses existing web standards and infrastructure, including HTTP and DNS. Each institution supports its users through its domain, creating a decentralized network where institutions maintain sovereignty over their own users. Each institution is empowered to participate in the network by deploying its own server with its own users. Additionally, a user who prefers to self-custody their cryptocurrency can deploy a personal PayID server, as described in [Set up a PayID server](#set-up-a-payid-server).

PayID does not rely on any consensus protocols, which simplifies infrastructure demands.

### Decentralized and trust-minimized
PayID is built on the most successful decentralized network in history: the web. PayID is fully peer-to-peer with no central counterparty. Anyone can set up their own personal PayID server so they have no counterparty risk.

### Protocol abstraction
PayID fully abstracts away underlying payment rail details from end users. A user only needs to keep track of a single PayID rather than a complex address for each network. Service operators can manage the underlying addresses behind the scenes according to their own security and privacy best practices without requiring the end user to take any action.

## Extensions, future features and integrations

PayID is an extensible and flexible open standard, and therefore can be used as a basis for additional solutions.

### PayID and Travel Rule compliance   

PayID can be extended to provide a simple solution for [Travel Rule](https://www.fatf-gafi.org/media/fatf/documents/recommendations/RBA-VA-VASPs.pdf) compliance, a relevant capability for many crypto services. Financial institutions can communicate regulatory requirements and the corresponding necessary data by using the PayID Public API, which is a standard REST API.

PayID improves the user experience of sending cryptocurrency payments, and it also provides a platform for present-day features like Travel Rule compliance and future features like subscriptions and pull payments. To achieve mainstream cryptocurrency adoption, we must build on top of PayID and other systems that integrate well with traditional financial infrastructure.

PayID provides an abstraction layer so that users can send payments to human-readable addresses while virtual asset service providers (VASPs) can meet the necessary compliance requirements in the background.

When a payment is sent to a PayID address, then if both entities are VASPs and must comply with the Travel Rule, they will exchange the user data in a secure handshake.

![Travel Rule](/img/docs/travel_rule.png)

### Upcoming features and integrations

Features and integrations on the roadmap include:

* Additional payment rail standards
* Payment request ([W3C Standard](https://www.w3.org/TR/payment-request/)) integration
* Advanced payment type support: pull, push, streaming, subscription
* PayID forwarding and redirection
