---
id: getting-started
title: Getting Started With PayID
sidebar_label: Getting Started With PayID
---

PayID provides both the PayID Private API and PayID Public API. You can deploy your own PayID server and then create PayIDs for your users using the PayID Private API. You can also query and modify this list of users. This API should be exposed internally only, so that only your company's systems can update PayID mappings.

Once you have set up a PayID server, anyone can use the PayID Public API to query address information. This API is publicly accessible so that anyone can send payments to your users' PayID addresses.

## Set up a PayID server
Participating institutions can use Xpring’s open source reference implementation of the PayID server. You might be able to ease the deployment process by connecting your PayID server to your existing user database so that it can respond to incoming GET requests.

To set up your own demo server, first ensure you have Docker installed, and then run these commands. You will create a local docker image.

```bash
git clone git@github.com:xpring-eng/payid.git
cd payid
./demo/run_payid_demo.sh
```

You can also set up your PayID server using [AWS and NGINX][aws-deploy.md].

You can then use the Private PayID API to:

* Create a user
* Get user information
* Modify a user
* Delete a user

![Open Source](/img/docs/open_source.png)

### Demo

For demonstration purposes, once you have set up your PayID server, you can access the Private PayID API using these cURL commands.

**Get user information for an existing user**

```bash
curl --location --request GET 'bob$127.0.0.1:8080' \
--header 'Accept: application/xrpl-testnet+json'
```

**Create a user**

First, run this command to create a user.

```bash
curl --location --request POST 'http://127.0.0.1:8081/v1/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pay_id": "alice$127.0.0.1",
    "addresses": [
        {
            "payment_network": "XRPL",
            "environment": "TESTNET",
            "details": {
                "address": "T7WSFgh6owANWoD2V3WRg6aeBveBzExkpDowirvnLDGL2YW"
            }
        }
    ]
}'
```

Then, run this command to get information about the newly-created user.

```bash
curl --location --request GET 'http://127.0.0.1:8080/alice' --header 'Accept: application/xrpl-testnet+json'
```

## Create and manage users with the Private PayID API

When you have your open source server set up, you can create and manage users with the Private PayID API.

### API endpoint
Substitute your own domain for `{{https}}{{host}}`. If running locally, you can use  `http://127.0.0.1:8081/`.

### API version

Use `/v1`.

### Create a user

This operation creates a single user.

```http
POST {{https}}{{host}}/v1/users
```

Payload: [Single user schema](#example-single-user-schema)

#### Response

```http
201 Created
```

No response body.

#### Error responses

See [Example error schema](#example-error-schema).

<table>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
<tr>
<td>400</td>
<td>Bad Request</td>
</tr>
<tr>
<td>409</td>
<td>Conflict</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable</td>
</tr>
</table>

#### cURL example

```bash
curl --location --request POST '127.0.0.1/v1/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pay_id": "alice$127.0.0.1",
    "addresses": [
        {
            "payment_network": "XRPL",
            "environment": "TESTNET",
            "details": {
                "address": "T7WSFgh6owANWoD2V3WRg6aeBveBzExkpDowirvnLDGL2YW"
            }
        }
    ]
}'
```

### Retrieve PayID information for an existing user

You can query information about an existing user with the following request.

```http
GET {{http(s)}}{{host}}/v1/users/{pay_id}
```

Example: `GET http://127.0.0.1:8081/v1/users/bob$xpring.money`

#### Response

```http
200 OK
```

The user that matches the specified PayID address is returned. See [Example single user schema](#example-single-user-schema).

#### Error responses

See [Example error schema](#example-error-schema).

<table>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
<tr>
<td>400</td>
<td>Bad Request</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable</td>
</tr>
</table>

#### cURL example

```bash
curl --location --request GET '{{payid_private_host}}/v1/users/alice${{payid_private_host_no_transport}}' \
--header 'Content-Type: application/json'
```

### Modify a user

You can modify the user information associated with a particular PayID address.

```http
PUT {{http(s)}}{{host}}/v1/users/{pay_id}
```

The request payload is the modified user schema for the specified PayID address.

#### Response

```http
200 OK
201 Created
```

The response body is the updated [user schema](#example-single-user-schema).

#### Error responses

<table>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
<tr>
<td>400</td>
<td>Bad Request</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
<tr>
<td>409</td>
<td>Conflict</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable</td>
</tr>
</table>

#### cURL example

```bash
curl --location --request PUT '127.0.0.1/v1/users/alice${{payid_private_host_no_transport}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "pay_id": "alice$127.0.0.1",
    "addresses": [
        {
            "payment_network": "XRPL",
            "environment": "TESTNET",
            "details": {
                "address": "T7WSFgh6owANWoD2V3WRg6aeBveBzExkpDowirvnLDGL2YW"
            }
        }
    ]
}'
```

### Delete a user

```http
{{http(s)://}{:pay_id}${{host}}{{private_port}}/v1/users/
```

#### Response

```http
200 OK
```

#### Error responses

<table>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
<tr>
<td>400</td>
<td>Bad Request</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable</td>
</tr>
</table>

#### cURL example

```bash
curl --location --request DELETE 'https://dev.payid.xpring.money/v1/users/alice$dev.payid.xpring.money/'
```

## Travel Rule compliance

In a typical scenario that involves Travel Rule compliance, you, as the sender of the payment, first request an invoice. When you get the invoice, you notice the `complianceRequirements` field of the invoice, which any institution that is a VASP (Virtual Asset Service Provider) must adhere to. Because you originated the invoice, you then post the compliance data to the same URL to update the invoice with this compliance information, thus fulfilling the requirements of the Travel Rule. The beneficiary confirms that you have sent this information by sending an upgraded invoice.

### Get an invoice

Return an invoice for the specified user and nonce. The nonce used in this call is a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier).

```http
GET {{https}}{{host}}{{public_port}}/hbergren/invoice?nonce=<uuid>
```

Example:

```http
GET https://wallet.com/dino/invoice?nonce=123e4567-e89b-12d3-a456-426655440000
```

#### Response

```http
200 OK
```

The invoice that matches the specified user and nonce is returned. See [Example invoice schema](#example-invoice-schema).

#### Error response

See [Example error schema](#example-error-schema).

<table>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
<tr>
<td>400</td>
<td>Bad Request</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable</td>
</tr>
</table>

#### cURL example

```bash
curl --location --request GET 'http://travel.payid.xpring.money/dino/invoice?nonce=123e4567-e89b-12d3-a456-426655440000' \
--header 'Accept: application/xrpl-testnet+json' \
--header 'Content-Type: application/json'
```

### Send compliance information

If an invoice contains information in the `complianceRequirements` field, then upon receipt of the invoice, you must send back compliance information.

```http
POST {{https}}{{host}}{{public_port}}/dino/invoice?nonce=123e4567-e89b-12d3-a456-426655440000
```

Example:
```http
POST https://dev.payid.xpring.money/dino/invoice?nonce=123e4567-e89b-12d3-a456-426655440000
```

The body contains the [compliance message](#example-compliance-message-schema). This message contains information about the originator, the value of the transaction, and the beneficiary, and the message is signed cryptographically.

#### Response

```http
200 OK
201 Created
```

No response body.

#### Error responses

<table>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
<tr>
<td>400</td>
<td>Bad Request</td>
</tr>
<tr>
<td>404</td>
<td>Not Found</td>
</tr>
<tr>
<td>422</td>
<td>Unprocessable Entity</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable</td>
</tr>
</table>

#### cURL example

```bash
curl --location --request POST 'https://dev.payid.xpring.money/dino/invoice?nonce=123e4567-e89b-12d3-a456-426655440000' \
--header 'Content-Type: application/json' \
--data-raw '{
	"messageType": "compliance",
	"message": {
		"type": "TravelRule",
		"data": {
			"originator": {
				"userLegalName": "Theodore Kalaw",
				"accountId": "ef841530-f476-429c-b8f3-de25a0a29f80 ",
				"userPhysicalAddress": "520 Main Street",
				"institutionName": "xpring",
				"value": {
					"amount": "100",
					"scale": 1
				},
				"timestamp": "2020-03-20T07:09:00"
			},
			"beneficiary": {
				"institutionName": "xpring"
			}

		}
	},
	"pkiType": "x509+sha256",
	"pkiData": [],
	"publicKey": "00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:\n    af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:\n    9d:3b:ef",
	"signature": "8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}'
```

### Send receipt

The originator of the transaction sends a receipt after the XRP/BTC/ACH payment clears and settles.

```http
POST {{https}}{{host}}{{public_port}}/dino/receipt
```

Example:
```http
POST https://travel.payid.xpring.money/dino/receipt
```

#### Response

```http
200 OK
```

#### cURL example

```bash
curl --location --request POST 'https://travel.payid.xpring.money/dino/receipt' \
--header 'Content-Type: application/json' \
--data-raw '{
	"invoiceHash": "8743b52063cd84097a65d1633f5c74f5",
	"transactionConfirmation": "797A887A269FEAFFEC446389DC1BB8C0DFBF9421C2FA72CA244AA5EB027008FC"
}'
```

## Schemas

These schemas are used for request or response payloads for various requests.

### Example single user schema

A single user can have multiple destinations, because the same user can have addresses on different networks for different currencies. This schema is used as a payload with a request to create a user, or as a response to a request to get information about a user.

```json
{
  "pay_id": "johndoe$xpring.money",
  "addresses": [
    {
      "payment_network": "XRPL",
      "environment": "TESTNET",
      "details": {
        "address": "TVQWr6BhgBLW2jbFyqqufgq8T9eN7KresB684ZSHKQ3oDth"
      }
    }, {
      "payment_network": "XRPL",
      "environment": "MAINNET",
      "details": {
        "address": "X7zmKiqEhMznSXgj9cirEnD5sWo3iZSbeFRexSFN1xZ8Ktn"
      }
    }
  ]
}
```

|Field | Description |
|------|-------------|
|`pay_id`| PayID user address. This value must be lowercase. |
|`addresses` | Object that includes payment address information for one or more payment networks.|
|`addresses.payment_network`| A payment network, like the bitcoin network, the XRPL, or ACH. |
|`addresses.environment`| "Environment" of the payment network for this payment address. For example, the XPRL has MAINNET, TESTNET, and DEVNET.|
|`address.details`| Actual payment information for this address. Must be in the form `CryptoAddressDetails` or `AchAddressDetails`. See [Interfaces](#interfaces).|

### Example error schema

This example shows the format of an error payload.

```json
{
    "statusCode": 422,
    "error": "Unprocessable Entity",
    "message": "Your data is bad"
}
```

### Example invoice schema

This example shows the format of an invoice.

```json
{
   "messageType":"Invoice",
   "message":{
      "nonce":"123e4567-e89b-12d3-a456-426655440000",
      "expirationTime":"2020-03-18T04:04:02",
      "paymentInformation":{
         "addressDetailType":"CryptoAddressDetails",
         "addressDetails":{
            "address":"T71Qcu6Txyi5y4aa6ZaVBD3aKC4oCbQTBQr3QfmJBywhnwm"
         },
         "proofOfControlSignature":"9743b52063cd84097a65d1633f5c74f5",
         "paymentPointer":"$xpring.money/dino"
      },
      "complianceRequirements":[
         "TravelRule"
      ],
      "memo":"please send me travel rule data",
      "complianceHashes":[

      ]
   },
   "pkiType":"x509+sha256",
   "pkiData":[

   ],
   "publicKey":"00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:9d:3b:ef",
   "signature":"8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}
```

### Example compliance message schema

```json
{
   "messageType":"compliance",
   "message":{
      "type":"TravelRule",
      "data":{
         "originator":{
            "userLegalName":"Theodore Kalaw",
            "accountId":"ef841530-f476-429c-b8f3-de25a0a29f80 ",
            "userPhysicalAddress":"520 Main Street",
            "institutionName":"xpring",
            "value":{
               "amount":"100",
               "scale":1
            },
            "timestamp":"2020-03-20T07:09:00"
         },
         "beneficiary":{
            "institutionName":"xpring"
         }
      }
   },
   "pkiType":"x509+sha256",
   "pkiData":[

   ],
   "publicKey":"00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:\n    af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:\n    9d:3b:ef",
   "signature":"8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}
```

## Request headers

PayID is a fundamentally neutral protocol. When you make a request, the HTTP `Accept` header of the request specifies the payment network and environment, and PayID is therefore capable of returning a user's address information for any network in which that user participates.

An example request has this form.

```http
GET /user HTTP/1.1
HOST: wallet.com
```

The different header options are shown here, with example values.

| Currency | Header | Address payload |
|----------|--------|-----------------|
| BTC     | application/btc+json   | { address: '1BvBMSEYstWetAu4m4GFg7xJaNVN2' }      |
| XRP     | application/xrpl-mainnet+json   | { address: 'XV5sbjUmgPpvXv4ixFWZ5ptAYZ6PD28Sq49uo34VyjnmK5H' } |
| ACH     | application/ach+json   | { account: '363023456079', routing: '011302838'}  |


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
const { Wallet } = require("xpring-js");

const wallet = Wallet.generateWalletFromSeed("snRiAJGe3zRwiYDBm1M");
const tx = await wallet.send(0.63, 'alice$institution.com');
```

## Query users and manage payments with the PayID Public API

The PayID Public API does not require authentication, as it is open to any user. The PayID Private API is meant for administrators who are building a payment network.

### API endpoint

The PayID Public API treats a PayID address as the base endpoint for all of the following requests. Therefore, if you are requesting payment from `alice$wallet.com` the path would be:

```http
GET alice$wallet.com
```

Substitute the appropriate URL for your PayID address.

### Get payment information

You can get payment information for a PayID address.

#### Request

```http
Header: `Accept: <request header>`
```

```http
GET <pay_ID-address>/
```

#### Response

```http
200 OK
```

A `PaymentInformation` object is returned.

#### Error response

<table>
<tr>
<th>Code</th>
<th>Description</th>
</tr>
<tr>
<td>404</td>
<td>Not Found.
Occurs if PayID address does not exist.</td>
</tr>
<tr>
<td>503</td>
<td>Service Unavailable</td>
</tr>
</table>


### Interfaces

#### PaymentInformation type

```typescript
interface PaymentInformation {
  addressDetailType: AddressDetailType
  addressDetails: CryptoAddressDetails | AchAddressDetails
  proofOfControlSignature?: string
  payId?: string
}
```

#### CryptoAddressDetails

```typescript
interface CryptoAddressDetails {
  address: string
  tag?: string
}
```

#### AchAddressDetails

```typescript
interface AchAddressDetails {
  accountNumber: string
  routingNumber: string
}
```



#### AchAddressDetails

```typescript
interface AchAddressDetails {
  accountNumber: string
  routingNumber: string
}
```

#### Error

```typescript
interface Error {
  statusCode: integer
  error: string
  message: string
}
```

## Headers for GET requests for PayID Public API

This launch of PayID includes those headers specific to the Xpring ecosystem. Each payment network is free to establish its own standard headers. These headers should be submitted with every GET request, but not POST.

### Headers for XRP

<table>
<tr>
<th>Accept header</th>
<th>Description</th>
</tr>
<tr>
<td>application/xrpl-mainnet+json</td>
<td>Returns mainnet xAddress</td>
</tr>
<tr>
<td>
application/xrpl-testnet+json</td>
<td>Returns testnet xAddress</td>
</tr>
<tr>
<td>application/xrpl-devnet+json</td>
<td>Returns devnet xAddress</td>
</tr>
</table>

### Headers for ACH

<table>
<tr>
<th>Accept header</th>
<th>Description</th>
</tr>
<tr>
<td>
application/ach+json</td>
<td>Returns account and routing number</td>
</tr>
</table>

<!-- removing as seen on main payid site
### Headers for ILP

<table>
<tr>
<th>Accept header</th>
<th>Description</th>
</tr>
<tr>
<td>
application/spsp4+json </td>
<td>Returns destination address and shared secret</td>
</tr>
</table>
-->

### Headers for BTC

<table>
<tr>
<th>Accept header</th>
<th>Description</th>
</tr>
<tr>
<td>application/btc-mainnet+json</td>
<td>Returns mainnet address</td>
</tr>
<tr>
<td>
application/btc-testnet+json</td>
<td>Returns testnet address</td>
</tr>
</table>

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

## Use Xpring SDK with PayID

[Xpring SDK](https://www.xpring.io/docs) can be used to simplify the process of developing with PayID. Currently only the Node.js version is available, and Java and Swift will soon be available.

### Demo--resolve address

This demo uses PayID to resolve an address on the specified payment network, which is XRP Ledger in this case.

To execute this demo:

1. Clone the [Xpring SDK repo](https://github.com/xpring-eng/Xpring-SDK-Demo/).
2. Change to the `Xpring-SDK-Demo/node` directory.
3. Run `npm i` to install the dependencies.
4. Run `node src/index-payid.js` to execute the demo.

View [index-payid.js](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-payid.js).

### Demo--Send ETH to a PayID address

You can send ETH to a PayID address, as shown in this demo using Xpring SDK. See [index-send-eth-to-payid.js](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-send-eth-to-payid.js)

### Demo--Send XRP to a PayID address

You can send XRP to a PayID address, as shown in this demo using Xpring SDK. See [index-xpring.js](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-xpring.js)
