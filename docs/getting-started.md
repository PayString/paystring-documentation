---
id: getting-started
title: Getting Started With PayID
sidebar_label: Getting Started With PayID
---

PayID provides both the PayID Private API and PayID Public API. You can deploy your own PayID server and then create PayIDs for your users using the PayID Private API. You can also query and modify this list of users. This API should be exposed internally only, so that only your company's systems can update PayID mappings.

Once you have set up a PayID server, anyone can use the PayID Public API to query address information. This API is publicly accessible so that anyone can send payments to, or receive payments at, your users' PayID addresses.

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

Use the Private PayID API to:

* Create a user
* Get user information
* Modify a user
* Delete a user

![Open Source](/img/docs/open_source.png)

## Private API endpoints

The private APIs run by default on port 8081. Make sure to adjust this value if needed. The list of private endpoints is:

| HTTP Method                              | Endpoint              |                     Description |
| ---------------------------------------- | :-------------------- | ------------------------------: |
| [GET](#421-get-a-payid-user-information) | /users/{user}\${host} |    Get a PayID user information |
| [POST](#422-create-a-payid-user)         | /users                |             Create a PayID user |
| [PUT](#423-update-a-payid-user)          | /users/{user}\${host} | Update a PayID user information |
| [DELETE](#424-delete-a-payid-user)       | /users/{user}\${host} |             Delete a PayID user |

Once you have set up your PayID server, you can access the Private PayID API endpoints using Postman or these cURL commands.

### PayID Private API version header

All private API requests MUST include an HTTP header of the following form:
`PayID-API-Version: YYYY-MM-DD`.

Currently, the only version of the Private API is `2020-05-28`. Any date on or after that date is acceptable to use as a `PayID-API-Version` header.

### Get a PayID user information

**Request format**

```
GET {pay_id_base_url}/users/{user}${host}
```

**Path parameters (Required)**

| Parameter | Type   |                                    Description |
| --------- | :----- | ---------------------------------------------: |
| {user}    | string |                          User account in PayID |
| {host}    | string | Host domain name identifying your organization |

**Query parameters (None)**

This method does not accept any query parameters.

**Body parameters (None)**

This method does not accept any body parameters.

#### Response format <!-- omit in toc -->

A successful response to the "Get PayID user information" method returns a 200 HTTP status code.

#### Example <!-- omit in toc -->

This operation creates a single user.

**Success**

Request (Success)

```HTTP
GET http://127.0.0.1:8081/users/bob$127.0.0.1 HTTP/1.1
```

Response (Success)

```json
{
  "payId": "bob$127.0.0.1",
  "addresses": [
    {
      "paymentNetwork": "XRPL",
      "environment": "TESTNET",
      "details": {
        "address": "TVnGpXXZZ3xAZfhT42ntuCR4Uh3Rv9LE4BcZJeH1zds2CQ1"
      }
    }
  ]
}
```

#### Status code and Messages <!-- omit in toc -->

The following table lists the HTTP status codes and messages returned for this method.

| HTTP Status code |                                Description |
| ---------------- | -----------------------------------------: |
| 200              | Successfully retrieved a PayID information |
| 404              |                PayID information not found |

#### Create a PayID user

**Request format**

```
POST {pay_id_base_url}/users
```

**Path parameters (None)**

The Create User method does not accept parameters in the endpoint's request path.

**Query parameters (None)**

The "Create a PayID user" method does not accept any query parameters.

**Body parameters (Required)**

Create PayID user requires the body parameter that contains the `PaymentInformation` object.

**PaymentInformation Object Data Fields**

| Field     | Type   |                                                                       Description |
| --------- | :----- | --------------------------------------------------------------------------------: |
| payId     | string | String containing the PayID user name and the host (FQDN) separated by a `$` sign |
| addresses | array  |                                 List of addresses associated with your PayID user |
| memo      | string |              optional string field to include meta data surrounding a transaction |

**Addresses Array Data Fields**

| Field          | Type   |                                                                                                            Description |
| -------------- | :----- | ---------------------------------------------------------------------------------------------------------------------: |
| paymentNetwork | string |                                                         A payment network, like the bitcoin network, the XRPL, or ACH. |
| environment    | string | "Environment" of the payment network for this payment address. For example, the XPRL has MAINNET, TESTNET, and DEVNET. |
| details        | Object |                                                                      JSON object containing the network wallet details |

**Details Object Data Fields**

| Field   | Type   |                                    Description |
| ------- | :----- | ---------------------------------------------: |
| address | string |                         Network wallet address |
| tag     | string | (May be omitted) Tag for XRP classic addresses |

#### Response format <!-- omit in toc -->

A successful response to the "Create PayID user" method returns a 201 HTTP status code.

#### Example <!-- omit in toc -->

**Success**

Request (Success)

The addresses array can contain 1 or more objects.

```HTTP
POST http://127.0.0.1:8081/users HTTP/1.1

{
  "payId": "bob$127.0.0.1",
  "addresses": [
    {
      "paymentNetwork": "XRPL",
      "environment": "TESTNET",
      "details": {
        "address": "TVnGpXXZZ3xAZfhT42ntuCR4Uh3Rv9LE4BcZJeH1zds2CQ1"
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

Response (Success)

```
Created
```

#### Status code and Messages <!-- omit in toc -->

The following table lists the HTTP status codes and messages returned for this method.

| HTTP Status code |                                                                    Description |
| ---------------- | -----------------------------------------------------------------------------: |
| 201              |                                       Successfully created a PayID information |
| 409              | Conflict, it already exists a user with the PayID specified in the payId field |
| 500              |                          Internal server error. A body field might be missing. |

### Update a PayID user

You can modify the user information associated with a particular PayID address.

**Request format**

```
PUT {pay_id_base_url}/users/{user}${host}
```

**Path parameters (Required)**

| Parameter | Type   |                             Description |
| --------- | :----- | --------------------------------------: |
| {user}    | string |                   User account in PayID |
| {host}    | string | Host name identifying your organization |

**Query parameters (None)**

This method does not accept any query parameters.

**Body parameters (Required)**

Update a PayID user requires the body parameter that contains the `PaymentInformation Object` object.

**PaymentInformation Data Fields**

| Field     | Type   |                                                                       Description |
| --------- | :----- | --------------------------------------------------------------------------------: |
| payId     | string | String containing the PayID user name and the host (FQDN) separated by a `$` sign |
| addresses | array  |                                 List of addresses associated with your PayID user |
| memo      | string |              optional string field to include meta data surrounding a transaction |

**Addresses Array Data Fields**

| Field          | Type   |                                                                                                            Description |
| -------------- | :----- | ---------------------------------------------------------------------------------------------------------------------: |
| paymentNetwork | string |                                                         A payment network, like the bitcoin network, the XRPL, or ACH. |
| environment    | string | "Environment" of the payment network for this payment address. For example, the XPRL has MAINNET, TESTNET, and DEVNET. |
| details        | Object |                                                                      JSON object containing the network wallet details |

**Details Object Data Fields**

| Field   | Type   |                                                                                                    Description |
| ------- | :----- | -------------------------------------------------------------------------------------------------------------: |
| address | string | Actual payment information for this address. Must be in the form `CryptoAddressDetails` or `AchAddressDetails` |

#### Response format <!-- omit in toc -->

A successful response to the "Update a PayID user" method returns a 201 HTTP status code.

#### Example <!-- omit in toc -->

**Success**

Request (Success)

```HTTP
PUT http://127.0.0.1:8081/users/bob$127.0.0.1 HTTP/1.1

{
	"payId": "bob$127.0.0.1",
	"addresses": [
		{
			"paymentNetwork": "XRPL",
			"environment": "TESTNET",
			"details": {
			  "address": "TVnGpXXZZ3xAZfhT42ntuCR4Uh3Rv9LE4BcZJeH1zds2CQ2"
			}
		}
	]
}
```

Response (Success)

```
Created
```

#### Status code and Messages <!-- omit in toc -->

The following table lists the HTTP status codes and messages returned for this method.

| HTTP Status code |                                                                    Description |
| ---------------- | -----------------------------------------------------------------------------: |
| 200              |                                  Successfully updated a PayID user information |
| 400              |                                                                    Bad request |
| 404              |                                                                      Not found |
| 409              | Conflict. it already exists a user with the PayID specified in the payId field |
| 500              |                          Internal server error. A body field might be missing. |
| 503              |                                                            Service unavailable |

### Delete a PayID user

**Request format**

```
DELETE {pay_id_base_url}/users/{user}${host}
```

**Path parameters (Required)**

| Parameter | Type   |                             Description |
| --------- | :----- | --------------------------------------: |
| {user}    | string |                   User account in PayID |
| {host}    | string | Host name identifying your organization |

**Query parameters (None)**

This method does not accept any query parameters.

**Body parameters (Required)**

The "Delete a PayID user" does not require a body parameter.

#### Response format <!-- omit in toc -->

A successful response to the "Delete a PayID user" method returns a 204 HTTP status code.

#### Example <!-- omit in toc -->

**Success**

Request (Success)

```HTTP
DELETE http://127.0.0.1:8081/users/bob$127.0.0.1 HTTP/1.1

{
	"payId": "bob$127.0.0.1",
	"addresses": [
		{
			"paymentNetwork": "XRPL",
			"environment": "TESTNET",
			"details": {
			  "address": "TVnGpXXZZ3xAZfhT42ntuCR4Uh3Rv9LE4BcZJeH1zds2CQ2"
			}
		}
	]
}
```

Response (Success)

```
Empty 204 response
```

#### Status code and Messages <!-- omit in toc -->

The following table lists the HTTP status codes and messages returned for this method.

| HTTP Status code |                                 Description |
| ---------------- | ------------------------------------------: |
| 204              | Represents a successful PayID user deletion |
| 400              |                                 Bad request |
| 404              |                                   Not found |
| 503              |                         Service unavailable |


## Query users and manage payments with the PayID Public API

The PayID Public API does not require authentication, as it is open to any user. The PayID Private API is meant for administrators who are building a payment network.

The public APIs runs by default on port 8080. Make sure to update this value if needed. The list of public endpoints is shown in the table.

| HTTP Method   | Endpoint  |  Description |
| --------------------------------------------------------------------- | :---------------------------- | --------------------------------------------------------: |
| GET  | /{user}/payment-setup-details | Get a Travel Rule compliance payment setup details object |
| POST | /{user}/payment-setup-details | Send compliance information |
| POST | /{user}/payment-proof         | Send payment proof |
| GET | /{user}                        | Get a PayID user information |

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

### Managing payments as an originator

As a payments provider, your organization may be acting as an originator, or as a beneficiary. Your role determines how you interact with the PayID Public API.

### Get a Travel Rule compliance payment setup details object

**Description**

In a typical scenario that involves Travel Rule compliance, you, as the sender of the payment, first request a payment setup details object. When you get the payment setup details, you notice the `complianceRequirements` field of the payment setup details, which any institution that is a VASP (Virtual Asset Service Provider) must adhere to. Because you originated the payment setup details, you then post the compliance data to the same URL to update the payment setup details with this compliance information, thus fulfilling the requirements of the Travel Rule. The beneficiary confirms that you have sent this information by sending an upgraded payment setup details object.

**API**

The API returns a payment setup details object for the specified user.

**Request format**

```HTTP
GET {pay_id_base_url}/{user}/payment-setup-details HTTP/1.1

Accept: application/{paymentNetwork}-{environment}+json
Content-Type: application/json
```

**Path parameters (Required)**

| Parameter | Type   |           Description |
| --------- | :----- | --------------------: |
| user      | string | User account in PayID |

**Query parameters (None)**

The "Get payment setup details" method does not accept any query parameters.

**Headers parameters (Required)**

PayID is a fundamentally neutral protocol. When you make a request, the HTTP `Accept` header of the request specifies the payment network and environment, and PayID is therefore capable of returning a user's address information for any network in which that user participates.

See the [Accept headers compatible with PayID](#headers-for-get-requests-for-payid-public-api).

**Body parameters (Required)**

Update a PayID user requires the body parameter that contains the `Update PayID User Object` object.

#### Response format <!-- omit in toc -->

A successful response to the "Get payment setup details" method returns a 200 HTTP status code.

#### Example <!-- omit in toc -->

**Success**

Request (Success)

```HTTP
GET https://sender.institution.com/bob/payment-setup-details HTTP/1.1

Accept: application/xrpl-testnet+json
Content-Type: application/json
```

Response (Success)

```json
{
  "messageType": "PaymentSetupDetails",
  "message": {
    "expirationTime": 1588502198568,
    "paymentInformation": {
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "TVnGpXXZZ3xAZfhT42ntuCR4Uh3Rv9LE4BcZJeH1zds2CQ1"
      },
      "payId": "bob$127.0.0.1",
      "memo": "this is bob's XRP testnet address"
    },
    "complianceRequirements": ["TravelRule"],
    "complianceHashes": []
  },
  "publicKeyType": "x509+sha256",
  "publicKeyData": [],
  "publicKey": "00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:9d:3b:ef",
  "signature": "8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}
```

#### Status code and Messages <!-- omit in toc -->

The following table lists the HTTP status codes and messages returned for this method.

| HTTP Status code |                                Description |
| ---------------- | -----------------------------------------: |
| 200              | PaymentSetupDetails successfully retrieved |
| 400              |                                Bad request |
| 404              |                                  Not found |
| 503              |                        Service unavailable |

### Send compliance information

If a payment setup details object contains information in the `complianceRequirements` field, then upon receipt of that object, the sender institution must send back compliance information.

**Request format**

```HTTP
POST {pay_id_base_url}/{user}/payment-setup-details HTTP/1.1

Content-Type: application/json
```

**Path parameters (Required)**

| Parameter | Type   |           Description |
| --------- | :----- | --------------------: |
| user      | string | User account in PayID |

**Query parameters (None)**

The "Get payment setup details" method does not accept any query parameters.

**Body parameters (Required)**

"Send compliance information" requires the body parameter that contains the `Compliance Message Object` object.

### Response format <!-- omit in toc -->

A successful response to the "Get payment setup details" method returns a 200 HTTP status code.

### Example <!-- omit in toc -->

**Success**

Request (Success)

The body contains the [compliance message](#example-compliance-message-schema). This message contains information about the originator, the value of the transaction, and the beneficiary, and the message is signed cryptographically.

```HTTP
POST https://sender.institution.com/bob/payment-setup-details HTTP/1.1

{
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
			"timestamp": "1586361979654"
			},
			"beneficiary": {
				"institutionName": "xpring"
			}
                        "memo": "transaction by Theodore Kalaw for software development services",

		}
	},
	"publicKeyType": "x509+sha256",
    "publicKeyData": [],
    "publicKey": "00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:9d:3b:ef",
    "signature": "8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}
```

Response (Success)

```json
{
  "messageType": "PaymentSetupDetails",
  "message": {
    "txId": 368213,
    "expirationTime": 1584753369,
    "paymentInformation": {
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "T71Qcu6Txyi5y4aa6ZaVBD3aKC4oCbQTBQr3QfmJBywhnwm"
      },
      "proofOfControlSignature": "9743b52063cd84097a65d1633f5c74f5",
      "payId": "alice$xpring.money",
      "memo": "this is alice's XRP testnet address"
    },
    "complianceRequirements": ["TravelRule"],
    "memo": "thanks for travel rule data, here are your new payment setup details",
    "complianceHashes": [
      {
        "type": "TravelRule",
        "hash": "8743b52063cd84097a65d1633f5c74f5"
      }
    ]
  },
  "publicKeyType": "x509+sha256",
  "publicKeyData": [],
  "publicKey": "00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:9d:3b:ef",
  "signature": "8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}
```

#### Status code and Messages <!-- omit in toc -->

The following table lists the HTTP status codes and messages returned for this method.

| HTTP Status code |          Description |
| ---------------- | -------------------: |
| 200              |                   OK |
| 400              |          Bad request |
| 404              |            Not found |
| 422              | Unprocessable Entity |
| 503              |  Service unavailable |

### Send payment proof

The originator of the transaction sends a payment proof after the payment clears and settles.

**Request format**

```HTTP
POST {pay_id_base_url}/{user}/payment-proofs HTTP/1.1

Content-Type: application/json
```

**Path parameters (Required)**

| Parameter | Type   |           Description |
| --------- | :----- | --------------------: |
| user      | string | User account in PayID |

**Query parameters (None)**

The "Send payment proof" method does not accept any query parameters.

**Body parameters (Required)**

"Send payment proof" requires the body parameter that contains the `Send payment proof Object` object.

**Send payment proof Object Data Fields**

| Field                   | Type   |                Description |
| ----------------------- | :----- | -------------------------: |
| paymentSetupDetailsHash | string | Payment setup details hash |
| transactionConfirmation | UUID   |             Transaction ID |
| memo                    | string |          Optional metadata |

#### Response format <!-- omit in toc -->

A successful response to the "Send payment proof" method returns a 200 HTTP status code.

#### Example <!-- omit in toc -->

**Success**

Request (Success)

```HTTP
POST https://sender.institution.com/bob/payment-proofs HTTP/1.1

{
	"paymentSetupDetailsHash": "8743b52063cd84097a65d1633f5c74f5",
	"transactionConfirmation": "797A887A269FEAFFEC446389DC1BB8C0DFBF9421C2FA72CA244AA5EB027008FC"
}
```

Response (Success)

```
200 OK
```

### Get user information

The PayID Public API does not require authentication, as it is open to any user. The PayID Private API is meant for administrators who are building a payment network.

**Request format**

```HTTP
GET {pay_id_base_url}/{user} HTTP/1.1

Accept: application/{paymentNetwork}-{environment}+json
```

**Path parameters (Required)**

| Parameter | Type   |           Description |
| --------- | :----- | --------------------: |
| user      | string | User account in PayID |

**Query parameters (None)**

The "Send payment proofs" method does not accept any query parameters.

**Headers parameters (Required)**

PayID is a fundamentally neutral protocol. When you make a request, the HTTP `Accept` header of the request specifies the payment network and environment, and PayID is therefore capable of returning a user's address information for any network in which that user participates.

See the [Accept headers compatible with PayID](#headers-for-get-requests-for-payid-public-api).

**Body parameters (Required)**

"Get user" does not require a body.

### Example <!-- omit in toc -->

**Success**

Request (Success)

```HTTP
GET http://127.0.0.1/bob HTTP/1.1

Accept: application/xrpl-testnet+json
```

Response (Success)

A PaymentInformation type object is returned.

```json
{
  "addresses": [
    {
      "paymentNetwork": "XRP",
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "TVnGpXXZZ3xAZfhT42ntuCR4Uh3Rv9LE4BcZJeH1zds2CQ1"
      }
    }
  ],
  "payId": "alice$example.com",
  "memo": "this is an XRP testnet address"
}
```

### Status code and Messages <!-- omit in toc -->

The following table lists the HTTP status codes and messages returned for this method.

| HTTP Status code |         Description |
| ---------------- | ------------------: |
| 200              |                  OK |
| 400              |         Bad request |
| 404              |           Not found |
| 503              | Service unavailable |

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

| Field                        | Description      |
| -------------------------- | ---------------------- |
| `payId`      | PayID user address                  |
| `addresses`  | Object that includes payment address information for one or more payment networks. |     
| `addresses.paymentNetwork` | A payment network, like the bitcoin network, the XRPL, or ACH.  |
| `addresses.environment`    | "Environment" of the payment network for this payment address. For example, the XPR Ledger has MAINNET, TESTNET, and DEVNET.                         |
| `address.details`  | Actual payment information for this address. Must be in the form `CryptoAddressDetails` or `AchAddressDetails`. See [Interfaces](#interfaces). |

### Example error schema

This example shows the format of an error payload.

```json
{
  "statusCode": 422,
  "error": "Unprocessable Entity",
  "message": "Your data is bad"
}
```

### Example payment setup details schema

This example shows the format of a payment setup details object.

```JSON
{
  "messageType": "PaymentSetupDetails",
  "message": {
    "txId": 578392,
    "expirationTime": "2020-03-18T04:04:02",
    "paymentInformation": {
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "T71Qcu6Txyi5y4aa6ZaVBD3aKC4oCbQTBQr3QfmJBywhnwm"
      },
      "proofOfControlSignature": "9743b52063cd84097a65d1633f5c74f5",
      "paymentPointer": "$xpring.money/dino",
      "memo": "this is an XRP testnet address"
    },
    "complianceRequirements": ["TravelRule"],
    "memo": "please send me travel rule data",
    "complianceHashes": []
  },
  "pkiType": "x509+sha256",
  "pkiData": [],
  "publicKey": "00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:9d:3b:ef",
  "signature": "8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}
```

### Example compliance message schema

```JSON
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
      },
      "memo": "payment from Theodore for consulting",
   },
   "pkiType":"x509+sha256",
   "pkiData":[

   ],
   "publicKey":"00:c9:22:69:31:8a:d6:6c:ea:da:c3:7f:2c:ac:a5:\n    af:c0:02:ea:81:cb:65:b9:fd:0c:6d:46:5b:c9:1e:\n    9d:3b:ef",
   "signature":"8b:c3:ed:d1:9d:39:6f:af:40:72:bd:1e:18:5e:30:54:23:35..."
}
```

### Request headers

The values accepted for XRP are:

| Accept header                 |              Description |
| ----------------------------- | -----------------------: |
| application/xrpl-mainnet+json | Returns mainnet xAddress |
| application/xrpl-testnet+json | Returns testnet xAddress |
| application/xrpl-devnet+json  | Returns devnet xAddress |

PayID is a fundamentally neutral protocol. When you make a request, the HTTP `Accept` header of the request specifies the payment network and environment, and PayID is therefore capable of returning a user's address information for any network in which that user participates.

An example request has this form.

```HTTP
GET /{user} HTTP/1.1

Accept: application/xrpl-testnet+json
```

The different header options are shown here, with example values.


| Currency | Header                        | Address payload                                                        |
| :------- | :---------------------------- | :--------------------------------------------------------------------- |
| BTC      | application/btc+json          | { address: '1BvBMSEYstWetAu4m4GFg7xJaNVN2' }                   |
| XRP      | application/xrpl-mainnet+json | { address: 'XV5sbjUmgPpvXv4ixFWZ5ptAYZ6PD28Sq49uo34VyjnmK5H'} |
| ACH      | application/ach+json          | {  account: '363023456079',routing: '011302838'}           |
| All      | application/payid+json        | Variable depending on the contents of each address                     |


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
