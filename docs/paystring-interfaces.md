---
id: paystring-interfaces
title: Interfaces
sidebar_label: Interfaces
---

:::note
PayString was previously known as PayID.
:::

See also: [PayString API Reference](https://api.paystring.org).

The PayString protocol includes the following interface definitions.

### PaymentInformation type

```ts
interface PaymentInformation {
  addresses: Address[]
  payId?: string
  memo?: string
}
```

### AddressDetailsType

```ts
enum AddressDetailsType {
  CryptoAddress = 'CryptoAddressDetails'
  FiatAddress = 'FiatAddressDetails'
}
```

### CryptoAddressDetails

```ts
interface CryptoAddressDetails {
  address: string
  tag?: string
}
```

### FiatAddressDetails

```ts
interface FiatAddressDetails {
  accountNumber: string
  routingNumber?: string
}
```

### Address

```ts
interface Address {
  paymentNetwork: string
  environment?: string
  addressDetailsType: AddressDetailsType
  addressDetails: CryptoAddressDetails | FiatAddressDetails
}
```
