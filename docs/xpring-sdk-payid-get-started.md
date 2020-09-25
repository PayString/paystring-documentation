---
id: xpring-sdk-payid-get-started
title: Get Started with Xpring SDK and PayID
sidebar_label: Get Started with Xpring SDK and PayID
---

[Xpring SDK](https://xpring.io/docs/), a platform that provides developer tools, services, and programs to integrate money into your apps, also provides support for PayID by simplifying the resolution of a PayID to its associated network addresses. Xpring SDK is available for JavaScript, Java, and Swift.

Try this demo that uses the Xpring-JS SDK.

1. Clone the [GitHub repository](https://github.com/xpring-eng/Xpring-SDK-Demo). If you want to use SSH, enter this command at the command line:
   `git clone git@github.com:xpring-eng/Xpring-SDK-Demo.git`
2. Install the node dependencies you need.
   `npm i`
3. Run the [demo script](https://github.com/xpring-eng/Xpring-SDK-Demo/blob/master/node/src/index-payid.js). This demo takes a PayID and resolves it to its associated network addresses. Each associated network address, with accompanying details, is displayed in JSON format.
   `node src/index-xrp.js`
4. If you have another PayID, you can edit the script and substitute that PayID, and then run it and see the results.

To see similar functionality for Java and Swift, follow the README.md instructions for [Xpring4j SDK](https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/java) and [XpringKit SDK](https://github.com/xpring-eng/Xpring-SDK-Demo/tree/master/swift).
