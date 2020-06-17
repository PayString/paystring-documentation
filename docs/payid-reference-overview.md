---
id: payid-reference-overview
title: PayID Reference Implementation Overview
sidebar_label: PayID Reference Implementation Overview
---

Xpring provides a reference implementation of the PayID server. You can implement it as described here, you can make your preferred modifications, and you can create your own implementation from scratch.

## PayID server setup

Determine how you want to set up PayID. You can use the provided Docker-based deployment as described in [Getting Started](getting-started). You can set up a [local PayID server without Docker](local-deployment). You can use [AWS and nginx](remote-deployment) to set up your PayID server, or adapt those instructions to other cloud providers. See the [PayID server requirements](payid-server-requirements).

## PayID user setup

You can use the PayID Private API to set up your users. You might already have an existing user database, and you will then provide each user with a corresponding PayID, as described in [Integrate Existing User Databases](Integrate Existing User Databases).

## PayID transaction management

You will act either as an originator of payments, or a beneficiary of payments. In order to complete a payment, both parties must cooperate to fulfill the PayID protocol requirements.

## PayID integration

PayID is a flexible protocol that can be integrated into your existing systems. It does not substitute for your existing infrastructure and workflows.

## PayID metrics

The PayID reference implementation provides readily accessible [metrics](metrics).
