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
