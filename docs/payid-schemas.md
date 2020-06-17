---
id: payid-schemas
title: PayID Schemas
sidebar_label: PayID Schemas
---

See also: [PayID API Reference](https://api.payid.org).

The PayID protocol includes the following interface definitions.

These schemas are used for request or response payloads for various requests.

### Example single user schema

A single user can have multiple destinations, because the same user can have addresses on different networks for different currencies. This schema is used as a payload with a request to create a user, or as a response to a request to get information about a user.

```json
{
  "payId": "johndoe$xpring.money",
  "addresses": [
    {
      "paymentNetwork": "XRPL",
      "environment": "TESTNET",
      "details": {
        "address": "TVQWr6BhgBLW2jbFyqqufgq8T9eN7KresB684ZSHKQ3oDth"
      }
    },
    {
      "paymentNetwork": "XRPL",
      "environment": "MAINNET",
      "details": {
        "address": "X7zmKiqEhMznSXgj9cirEnD5sWo3iZSbeFRexSFN1xZ8Ktn"
      }
    }
  ]
}
```

| Field                      | Description                                                                                                                                    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `payId`                    | PayID user address                                                                                                                             |
| `addresses`                | Object that includes payment address information for one or more payment networks.                                                             |
| `addresses.paymentNetwork` | A payment network, like the bitcoin network, the XRPL, or ACH.                                                                                 |
| `addresses.environment`    | "Environment" of the payment network for this payment address. For example, the XPR Ledger has MAINNET, TESTNET, and DEVNET.                   |
| `address.details`          | Actual payment information for this address. Must be in the form `CryptoAddressDetails` or `AchAddressDetails`. See [Interfaces](#interfaces). |

### Example error schema

This example shows the format of an error payload.

```json
{
  "statusCode": 422,
  "error": "Unprocessable Entity",
  "message": "Your data is bad"
}
```
