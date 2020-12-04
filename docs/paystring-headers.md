---
id: paystring-headers
title: Headers
sidebar_label: Headers
---

:::note
PayString was previously known as PayID, and some references remain.
:::

See also: [PayString API Reference](https://api.paystring.org).

The PayString protocol has specific header requirements for requests and responses.

### Request headers

When you make a request, the HTTP `Accept` header of the request specifies the payment network and environment, and PayString is therefore capable of returning a user's address information for any network in which that user participates.

An example request has this form.

```HTTP
GET /{user} HTTP/1.1

Accept: application/xrpl-testnet+json
```

Some different header options are shown here, with example values.

| Currency | Header                          | Address payload                                                   |
| :------- | :------------------------------ | :---------------------------------------------------------------- |
| BTC      | `application/btc-mainnet+json`  | { address: '1BvBMSEYstWetAu4m4GFg7xJaNVN2' }                      |
| XRP      | `application/xrpl-mainnet+json` | { address: "rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg", tag: "67298042"} |
| ACH      | `application/ach+json`          | { account: '363023456079',routing: '011302838'}                   |
| All      | `application/payid+json`        | Variable, depending on the contents of each address               |

If you create your own Accept header for another currency:

1. Follow the pattern for BTC Accept headers and use the currency code for the currency, as shown.
2. Consider creating a [PR on the PayString docs site](https://github.com/paystring/paystring-documentation) to update this list.
3. Consider updating [IANA registration section in the PayString protocol RFC for supported Media-types](https://github.com/paystring/rfcs/blob/master/dist/spec/payid-protocol.txt#L1162) by sending an email to <rfcs@paystring.org>.

## Headers for GET requests

This launch of PayString includes those headers specific to the XRPL community. Each payment network is free to establish its own standard headers. These headers should be submitted with every GET request, but not POST.

### Header for all addresses

|      Accept header       |              Description              |
| :----------------------: | :-----------------------------------: |
| `application/payid+json` | Returns all addresses for a PayString |

### Headers for XRP

|          Accept header          |                            Description                             |
| :-----------------------------: | :----------------------------------------------------------------: |
| `application/xrpl-mainnet+json` |     Returns XRPL mainnet classic address (and tag if provided)     |
| `application/xrpl-testnet+json` |     Returns XRPL testnet classic address (and tag if provided)     |
| `application/xrpl-devnet+json`  | Returns XRPL devnet xAddress classic address (and tag if provided) |

### Headers for ACH

|     Accept header      |            Description             |
| :--------------------: | :--------------------------------: |
| `application/ach+json` | Returns account and routing number |

### Headers for BTC

|         Accept header          |       Description       |
| :----------------------------: | :---------------------: |
| `application/btc-mainnet+json` | Returns mainnet address |
| `application/btc-testnet+json` | Returns testnet address |

### Headers for ETH

|         Accept header          |       Description       |
| :----------------------------: | :---------------------: |
| `application/eth-mainnet+json` | Returns mainnet address |
| `application/eth-ropsten+json` | Returns testnet address |
|  `application/eth-kovan+json`  | Returns testnet address |
| `application/eth-rinkeby+json` | Returns testnet address |

Ethernet has a number of different testnets. Refer to [EIP 155](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md).

### Headers for ILP

|             Accept header              |       Description       |
| :------------------------------------: | :---------------------: |
| `application/interledger-mainnet+json` | Returns mainnet address |
| `application/interledger-testnet+json` | Returns testnet address |
