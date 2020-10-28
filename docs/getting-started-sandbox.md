---
id: getting-started-sandbox
title: Getting Started With PayID Sandbox
sidebar_label: Getting Started With PayID Sandbox
---

With the [PayID Sandbox](https://payid.org/sandbox), you can experiment with PayID without deploying your own server. Although the PayID Sandbox can be used to create PayIDs, do not use these PayIDs that rely on this virtual server to send or receive real cryptocurrency. The PayID Sandbox does not directly support Verifiable PayID.

You can also experiment with PayID by using [PayID CLI](payid-cli), which does support Verifiable PayID.

The sandbox allows you to experiment with PayID, but does not create an application that allows you to send or receive currency using the PayID.

You are encouraged to copy the cURL or JavaScript code snippets that the sandbox provides and adapt them to your app.

Requirements:

- GitHub account. You will use this GitHub account to log in to PayID Sandbox.
- Crypto addresses on other wallets or exchanges. You can map your PayID to these crypto addresses.

## Open PayID Sandbox and Create a User

1. Open [PayID Sandbox](https://payid.org/sandbox) and log in with your GitHub account.
   The sandbox sets up a virtual server for you at _github_user_name_.sandbox.payid.org.
   You also get an Admin API token that can be used to create and manage users. Save this token for later use. By default, the sandbox incorporates this token into the **Authorization: Bearer** heading.
   ![Sandbox start](/img/docs/sandbox-start.png)
2. Click **Try API Constructor**.
   ![API Constructor](/img/docs/api-constructor1.png)
   On the **API Constructor** page, you have access to all of PayID's capabilities. The **Create User** page opens by default.
3. Under **API Details**, enter the value for this PayID to create a full PayID address. Example: `starlight$loisrp.sandbox.payid.org`. This is a PayID that you can use to send or receive currency.
4. Under **Address1**, select the network you want to use. For experimentation, you can choose any of the networks, and you can use a real or fake address for it. This example uses a live address on the XRPL network.
   - Select **XRPL** for the **Payment Network**
   - Enter `rUAuauaXNTskaHdsz1TWnHWvB8goNXQaVy` for the **Payment Address**.
   - The **Destination Tag** can be used to enter a number that is typically used to map to a user in another system. You can experiment by adding a value.
   - Select **Testnet** or **Mainnet**, depending whether you want to have the address be valid for test currency or real currency.
   - If you want to associate another address to this PayID, click **+** and repeat the process for another address. Your PayID can have multiple addresses on multiple networks on the same PayID.
5. By default, **cURL** is selected on the top right. The sandbox constructs the cURL snippet you need to create a user. You can also select **JavaScript** to run a script to create a user.
6. Click **Run**. Whether you used cURL or JavaScript, the JSON for the newly created user looks the same.
   ```json
   {
     "payId": "starlight$loisrp.sandbox.payid.org",
     "addresses": [
       {
         "paymentNetwork": "XRPL",
         "details": {
           "address": "rUAuauaXNTskaHdsz1TWnHWvB8goNXQaVy",
           "tag": "56"
         }
       }
     ]
   }
   ```

## Get Payment Information

**Get Payment Information** is a public API, and does not require your Admin API token. You can use this API for any PayID.

1. Click **Get Payment Information** on the left.
2. Enter the PayID. On the sandbox, you are restricted to PayIDs on your server. Enter the PayID you just created, or another one you happen to know. Select either **cURL** or **JavaScript** at the top right.
3. Click **Run**. The JSON response provides information about the PayID.

## Get User

**Get User** provides the same information as **Get Payment Information**, but **Get User** does so through the private Admin API.

1. Click **Get User** on the left.
2. Enter the PayID you want to look up.
3. Select either **cURL** or **JavaScript**.
4. Click **Run**. The JSON response provides information about the PayID.

If you enter a nonexistent PayID, you get the response "Failed to find the PayID <_value_>".

## Replace User

With **Replace User**, you can rename a PayID, and enter new address information. The address information from the "old" PayID does not transfer to the new PayID, so you have to enter the address information again.

1. Click **Replace User** on the left.
2. Enter the PayID you want to rename, and the new PayID.
3. Enter the address information as if you were creating a user.
4. Select either **cURL** or **JavaScript**.
5. Click **Run**.

The new PayID information is returned in JSON format.

## Delete a User

1. Click **Delete User** on the left.
2. Enter the PayID you want to delete.
3. Select either **cURL** or **JavaScript**.
4. Click **Run**.

The PayID you have deleted is returned in the response. Even if the PayID did not exist, you will get the same response.
