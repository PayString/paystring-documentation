---
id: ripplex-dev-kit-paystring-get-started
title: RippleX Dev Kit and PayString
sidebar_label: RippleX Dev Kit and PayString
---

:::note
PayString was previously known as PayID. RippleX was formerly known as Xpring. Some references remain.
:::
[RippleX Dev Kit](https://RippleX.io/docs/), a platform that provides developer tools, services, and programs to integrate money into your apps, also provides support for PayString by simplifying the resolution of a PayString to its associated network addresses. RippleX Dev Kit is available for JavaScript, Java, and Swift.

Try this demo that uses RippleX-JS.

1. Clone the [GitHub repository](https://github.com/xpring-eng/Xpring-SDK-Demo). If you want to use SSH, enter this command at the command line:
   `git clone git@github.com:xpring-eng/Xpring-SDK-Demo.git`
2. Install the node dependencies you need.
   `npm i`
3. Run the [demo script](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-payid.js). This demo takes a PayString and resolves it to its associated network addresses. Each associated network address, with accompanying details, is displayed in JSON format.
   `node src/index-xrp.js`
4. If you have another PayString, you can edit the script and substitute that PayString, and then run it and see the results.

To see similar functionality for Java and Swift, follow the README.md instructions for [RippleX4j](https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/java) and [RippleXKit](https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/swift).
