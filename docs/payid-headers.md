---
id: payid-headers
title: Headers
sidebar_label: Headers
---

See also: [PayID API Reference](https://api.payid.org).

The PayID protocol has specific header requirements for requests and responses.

### Request headers

When you make a request, the HTTP `Accept` header of the request specifies the payment network and environment, and PayID is therefore capable of returning a user's address information for any network in which that user participates.

An example request has this form.

```HTTP
GET /lestat HTTP/1.1

Accept: application/xrpl-mainnet+json
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
2. Consider creating a [PR on the PayID docs site](https://github.com/payid-org/payid-documentation) to update this list.
3. Consider updating [IANA registration section in the PayID protocol RFC for supported Media-types](https://github.com/payid-org/rfcs/blob/master/dist/spec/payid-protocol.txt#L1162) by sending an email to <rfcs@payid.org>.

## Headers for GET requests

This launch of PayID includes those headers specific to the XRPL community. Each payment network is free to establish its own standard headers. These headers should be submitted with every GET request, but not POST.

### Header for all addresses

|      Accept header       |            Description            |
| :----------------------: | :-------------------------------: |
| `application/payid+json` | Returns all addresses for a PayID |

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
