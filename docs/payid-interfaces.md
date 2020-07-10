---
id: payid-interfaces
title: Interfaces
sidebar_label: Interfaces
---

See also: [PayID API Reference](https://api.payid.org).

The PayID protocol includes the following interface definitions.

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
  AchAddress = 'AchAddressDetails'
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

### Address

```ts
interface Address {
  paymentNetwork: string
  environment?: string
  addressDetailsType: AddressDetailsType
  addressDetails: CryptoAddressDetails | AchAddressDetails
}
```
