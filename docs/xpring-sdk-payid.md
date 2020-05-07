---
id: xpring-sdk-payid
title: Use Xpring SDK With PayID
sidebar_label: Use Xpring SDK With PayID
---

[Xpring SDK](https://www.xpring.io/docs) can be used to simplify the process of developing with PayID. Currently only the Node.js version is available, and Java and Swift will soon be available.

### Generate a seed-based wallet

In this example, you generate a seed-based wallet using the Xpring SDK. See [Xpring SDK docs](https://xpring.io/docs).

```javascript
// Xpring SDK
const { Wallet } = require("xpring-js");

const wallet = Wallet.generateWalletFromSeed("snRiAJGe3zRwiYDBm1M");
const tx = await wallet.send(0.63, 'alice$institution.com');
```

### Resolve an address

This demo uses PayID to resolve an address on the specified payment network, which is XRP Ledger in this case.

To execute this demo:

1. Clone the [Xpring SDK repo](https://github.com/xpring-eng/Xpring-SDK-Demo/).
2. Change to the `Xpring-SDK-Demo/node` directory.
3. Run `npm i` to install the dependencies.
4. Run `node src/index-payid.js` to execute the demo.

View [index-payid.js](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-payid.js).

### Send ETH to a PayID address

You can send ETH to a PayID address, as shown in this demo using Xpring SDK. See [index-send-eth-to-payid.js](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-send-eth-to-payid.js)

### Send XRP to a PayID address

You can send XRP to a PayID address, as shown in this demo using Xpring SDK. See [index-xpring.js](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-xpring.js)
