---
id: payid-use-cases
title: PayID Use Cases
sidebar_label: PayID Use Cases 
---

PayID can be used anywhere that a payment workflow occurs. Due to the ease of PayID, you can also consider new ways to monetize products and services.

If you are using PayID for your app, you can use the reference implementation as a basis for your PayID methodology, or you can develop your own implementation.

You can see some examples of [PayID technology in action](https://docs.payid.org/). These apps cover use cases like these. Payments may be done end-to-end in cryptocurrency, but do not have to be. Some ideas implemented by partners or hackathon participants include the following:

* Create a PayID with a mobile phone
* Create QR codes that represent a PayID
* Game key marketplace
* International money transfers
* International payments for work
* Wallet that performs cross-chain transfers directly to a PayID
* Central gateway to send and receive crypto and fiat payments
* A physical store of value on a card

## Wallets and exchanges

A wallet is a software program in which you store your cryptocurrency. An exchange can host a wallet, but primarily an exchange is used primarily to store cryptocurrency and to convert between cryptocurrency and fiat currency. PayID can be used for all of these transaction types:

* Wallet to wallet
* Exchange to exchange
* Exchange to wallet
* Wallet to exchange

## Building with PayID

PayID can become part of payment flows. Wherever there is a credit card request or an option to pay by PayID or Venmo or another such service, PayID can be used as well.

A harder question is: Where can PayID be used where it's not an obvious option?

## Tutorials based on PayID use cases

Stripe can be deployed to implement much of a bank's machinery, as [shown here[(https://stripe.com/docs/payments/charges-api) and [here](https://stripe.com/docs). PayID simply lacks that level of functionality, and it's not what it is trying to do anyway. We should concentrate on simple options at first.

We have simple tutorials showing how to use the PayID APIs, how to use PayID CLI, how to use Verifiable PayID, how to deploy PayID, and how to use metrics.

A simple tutorial could show the following:

* Use a Payburner wallet (or maybe look at incorporating a workflow on creating a walllet) and load it with a few XRP.
* Create a different wallet, or another Payburner wallet.
* Create a PayID (signed) for each wallet.
* Use one wallet to pay the other.
* Use Get Payment Information, and Get User.
* For bonus points, use RippleX Dev Kit.

A related tutorial could show transfers between different networks (so maybe two different types of wallets?).

As new features come into play, then we have more options.
