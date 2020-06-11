---
id: payid-workflow
title: PayID Workflow
sidebar_label: PayID Workflow
---

For information about PayID, see the [overview](payid-overview).
For a simple introduction, see [Getting Started](getting-started).
For best security practices, see [Best Practices](payid-best-practices).

## PayID server setup

Determine how you want to set up PayID. You can use the provided Docker-based deployment as described in [Getting Started](getting-started). You can set up a [local PayID server without Docker](local-deployment). You can use [AWS and nginx](remote-deployment) to set up your PayID server, or adapt those instructions to other cloud providers.  

## PayID user setup

You can use the PayID Private API to set up your users. You might already have an existing user database, and you will then provide each user with a corresponding PayID.

## PayID transaction management

You will act either as an originator of payments, or a beneficiary of payments. In order to complete a payment, both parties must cooperate to fulfill the PayID protocol requirements.

## PayID integration

PayID is a flexible protocol that can be integrated into your existing systems. It does not substitute for your existing infrastructure and workflows.
