---
id: getting-started
title: Getting Started With PayID
sidebar_label: Getting Started With PayID
---

PayID provides both the PayID Private API and PayID Public API. You can deploy your own PayID server and then create PayIDs for your users using the PayID Private API. You can also query and modify this list of users. This API should be exposed internally only, so that only your company's systems can update PayID mappings.

Once you have set up a PayID server, anyone can use the PayID Public API to query address information. This API is publicly accessible so that anyone can send payments to, or receive payments at, your users' PayID addresses.

For guidance on setting up a complete PayID workflow, see [PayID workflow](payid-workflow).

## Set up a PayID server for development purposes

To ease the deployment of a development environment, the PayID application includes scripts to quickly deploy a Postgres database and a PayID server.

The Postgres Docker image used in these scripts is version
12-alpine. See [Postgres--Docker Official Images](https://hub.docker.com/_/postgres). Before you proceed, ensure you have Docker installed.

If you want to run a PayID server without Docker, see [Local deployment of a PayID server without Docker](local-deployment). You can also set up your PayID server using [AWS and NGINX][remote-deployment].

Ensure that you follow the [recommended best practices](payid-best-practices) for security.

### Set up a PayID server to develop some other server against

To set up a PayID server to develop some other server against, such as the Xpring Wallet, run these commands.

```bash
git clone git@github.com:xpring-eng/payid.git
npm run devEnvUp
```

### Set up a Postgres container without a PayID server

To work on the PayID server source code itself, you can create a Postgres container without a PayID server. Run:

```sh
npm run devDbUp
```

The Postgres container listens on port 5432. You will need to start PayID separately, using `npm run start`.

### Remove a development environment

To remove the full development environment (Postgres and PayID), or only Postgres, run this command, which will remove the Postgres container, and cause you to lose all of your data in it.

```sh
npm run devAllDown
```

## PayID Private API user management

View the [PayID API documentation](https://api.payid.org/?version=latest).

Use the Private PayID API to:

- Create a user
- Get user information
- Modify a user
- Delete a user

![Open Source](/img/docs/open_source.png)

## Private API endpoints

The private APIs run by default on port 8081. Make sure to adjust this value if needed. The list of private endpoints is:

| HTTP Method                                                                          | Endpoint              |                     Description |
| ------------------------------------------------------------------------------------ | :-------------------- | ------------------------------: |
| [GET](https://api.payid.org/?version=latest#20082fed-0fb0-43ee-8f1d-eeeb1b33a7bb)    | /users/{user}\${host} |    Get a PayID user information |
| [POST](https://api.payid.org/?version=latest#924afd3e-4406-4dd1-89db-edd8d6180143)   | /users                |             Create a PayID user |
| [PUT](https://api.payid.org/?version=latest#debf733f-5c85-4786-bbcb-43b95952f458)    | /users/{user}\${host} | Update a PayID user information |
| [DELETE](https://api.payid.org/?version=latest#d5256da2-3b06-4d2f-b13b-3eaa174bd9b2) | /users/{user}\${host} |             Delete a PayID user |

Once you have set up your PayID server, you can access the Private PayID API endpoints using Postman or these cURL commands.

### PayID Private API version header

All private API requests MUST include an HTTP header of the following form:
`PayID-API-Version: YYYY-MM-DD`.

Currently, the only version of the Private API is `2020-05-28`. Any date on or after that date is acceptable to use as a `PayID-API-Version` header.

## Query users and manage payments with the PayID Public API

The PayID Public API does not require authentication, as it is open to any user. The PayID Private API is meant for administrators who are building a payment network.

The public APIs runs by default on port 8080. Make sure to update this value if needed. The list of public endpoints is shown in the table.

| HTTP Method                                                                       | Endpoint |         Description |
| --------------------------------------------------------------------------------- | :------- | ------------------: |
| [GET](https://api.payid.org/?version=latest#bf7137bc-d082-4d46-81b4-e76e4e0b8ddf) | /{user}  | Get pay information |

For code examples, see [Use Xpring SDK With PayID](xpring-sdk-payid).

### Public API version header

The PayID protocol requires all requests to include a `PayID-Version` HTTP header of the form:
`PayID-Version: {major}.{minor}`, where `major` and `minor` are integers.

Currently, as of June 2020, the only PayID Protocol version is `1.0`, so all PayID requests must include `PayID-Version: 1.0` as an HTTP header.

All PayID servers must respond with the _latest_ version of the PayID protocol to which they know how to respond, as well as the PayID protocol version the response payload adheres to.

A public API response to a `PayID-Version: 1.0` request could look like this:

```http
PayID-Version: 1.0
PayID-Server-Version: 1.1
```

### API endpoint

The PayID Public API treats a PayID address as the base endpoint for all of the following requests. Therefore, if you are requesting payment from `alice$wallet.com` the path would be:

```http
GET alice$wallet.com
```

Substitute the appropriate URL for your PayID address.

## Schemas

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

### Request headers

The values accepted for XRP are:

| Accept header                 |              Description |
| ----------------------------- | -----------------------: |
| application/xrpl-mainnet+json | Returns mainnet xAddress |
| application/xrpl-testnet+json | Returns testnet xAddress |
| application/xrpl-devnet+json  |  Returns devnet xAddress |

PayID is a fundamentally neutral protocol. When you make a request, the HTTP `Accept` header of the request specifies the payment network and environment, and PayID is therefore capable of returning a user's address information for any network in which that user participates.

An example request has this form.

```HTTP
GET /{user} HTTP/1.1

Accept: application/xrpl-testnet+json
```

The different header options are shown here, with example values.

| Currency | Header                        | Address payload                                               |
| :------- | :---------------------------- | :------------------------------------------------------------ |
| BTC      | application/btc+json          | { address: '1BvBMSEYstWetAu4m4GFg7xJaNVN2' }                  |
| XRP      | application/xrpl-mainnet+json | { address: 'XV5sbjUmgPpvXv4ixFWZ5ptAYZ6PD28Sq49uo34VyjnmK5H'} |
| ACH      | application/ach+json          | { account: '363023456079',routing: '011302838'}               |
| All      | application/payid+json        | Variable depending on the contents of each address            |

## Code examples

### Payment

This example demonstrates a payment to `alice$institution.com`.

```javascript
const axios = require('axios')
const btc = require('bitcoinjs-lib')

async function pay(payId, amount) {
  const user = payId.split('$')[0]
  const url = payId.split('$')[1]

  const response = await axios.get({
    method: 'GET',
    baseURL: 'https://' + url + '/' + user
    headers: { accept: 'application/btc+json' }
  }
  const tx = await new btc.Transaction(address, amount)
}
pay('alice$institution.com', 0.63)
```

### Generate a seed-based wallet

In this example, you generate a seed-based wallet using the Xpring SDK. See [Xpring SDK docs](https://xpring.io/docs).

```javascript
// Xpring SDK
const { Wallet } = require('xpring-js')

const wallet = Wallet.generateWalletFromSeed('snRiAJGe3zRwiYDBm1M')
const tx = await wallet.send(0.63, 'alice$institution.com')
```

## Interfaces

### PaymentInformation type

```ts
interface PaymentInformation {
  addressDetailsType: AddressDetailsType
  addressDetails: CryptoAddressDetails | AchAddressDetails
  proofOfControlSignature?: string
  payId?: string
  memo?: string
}
```

### CryptoAddressDetails

```ts
interface CryptoAddressDetails {
  address: string
  tag?: string
}
```

### AchAddressDetails

```ts
interface AchAddressDetails {
  accountNumber: string
  routingNumber: string
}
```

### Error

```ts
interface Error {
  statusCode: integer
  error: string
  message: string
}
```

## Headers for GET requests for PayID Public API

This launch of PayID includes those headers specific to the Xpring ecosystem. Each payment network is free to establish its own standard headers. These headers should be submitted with every GET request, but not POST.

### Header for all addresses

|     Accept header      |            Description            |
| :--------------------: | :-------------------------------: |
| application/payid+json | Returns all addresses for a PayID |

### Headers for XRP

|         Accept header         |       Description        |
| :---------------------------: | :----------------------: |
| application/xrpl-mainnet+json | Returns mainnet xAddress |
| application/xrpl-testnet+json | Returns testnet xAddress |
| application/xrpl-devnet+json  | Returns devnet xAddress  |

### Headers for ACH

|    Accept header     |            Description             |
| :------------------: | :--------------------------------: |
| application/ach+json | Returns account and routing number |

### Headers for BTC

|        Accept header         |       Description       |
| :--------------------------: | :---------------------: |
| application/btc-mainnet+json | Returns mainnet address |
| application/btc-testnet+json | Returns testnet address |

### Headers for ETH

<table>
<tr>
<th>Accept header</th>
<th>Description</th>
</tr>
<tr>
<td>application/eth-mainnet+json</td>
<td>Returns mainnet address</td>
</tr>
<tr>
<td>application/eth-testnet-name+json</td>
<td>Returns testnet-name address. Ethernet has a number of different testnets. Refer to <a href="https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md">EIP 155</a>.</td>
</tr>
</table>
