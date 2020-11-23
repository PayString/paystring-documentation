---
id: payid-cli
title: Get Started With PayString CLI
sidebar_label: Get Started With PayString CLI
---

With the PayString CLI, you can run PayString commands from the command line, and access all PayString features.

View the [PayString CLI project on Github](https://github.com/payid-org/payid-cli).

## PayString CLI setup

PayString CLI uses TypeScript. Therefore, make sure you have installed [node](https://nodejs.org/en/download/) and the [npm](https://docs.npmjs.com/downloading-and-installing-packages-locally) package manager locally.

To install PayString CLI, run:

`npm install -g @payid-org/payid-cli`

This command installs PayString CLI as a global npm module and links it as a payid executable, typically under
`/usr/local/bin/payid`.

To install and run PayString CLI from Docker, run:

`docker run xpring/payid-cli`

## Run PayString CLI in interactive or single-command mode

To run PayString CLI in interactive mode, run `payid` to open an interactive session.

In interactive mode, you can then run PayString CLI commands as desired with the form
`<command> <arguments>`, such as:

`load 'nhartner$ripplex.money'`

To exit interactive mode, run `exit`.

To run PayString CLI in single-command mode, prefix each command with `payid`. Each command takes the form

`payid <command> <arguments>`, such as:

`payid load 'nhartner$ripplex.money'`

Use single-command mode for scripts, or to chain the results of multiple commands together, such as:

`payid init 'my$pay.id' && payid crypto-address add btc mainnet notARealAddress && payid save`

When you pass a PayString as an argument in non-interactive mode, make sure to escape or quote the PayString to avoid the `'$'` being interpolated as a variable by the shell.

## Example commands

**Tip**: If you obtain an XRP testnet wallet, you get a PayString based on your RippleX account that is already linked to an XRP address. This is useful for testing. Visit the [RippleX.io portal](https://RippleX.io/portal) and sign in with Github. The RippleX portal launchpad page opens. Click **XRP Testnet Wallet** and follow the steps to create your wallet. Your PayString has the form `<github-username>$ripplex.money` and you can use this PayString value in these example commands.

### Load a PayString

This command loads the specified PayString from a remote server.

`load loisrp$ripplex.money`

The output fetches all the PayString address mappings for the given PayString from the remote server and displays the resulting JSON. In this example, the PayString has two crypto-addresses attached to it.

```json
{
  "payId": "loisrp$ripplex.money",
  "version": "1.0",
  "addresses": [
    {
      "paymentNetwork": "XRPL",
      "environment": "TESTNET",
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "rwcBVJwXdXusY5SgNMjHbMWbR2Nnt2U3R6"
      }
    },
    {
      "paymentNetwork": "INTERLEDGER",
      "environment": "TESTNET",
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "$ripplex.money/LoisRP"
      }
    }
  ],
  "verifiedAddresses": []
}
```

### Remove a crypto-address

If you have previously loaded a PayString, you can use this command to remove a crypto-address attached to it.

`crypto-address remove "rwcBVJwXdXusY5SgNMjHbMWbR2Nnt2U3R6"`

The output returns the updated information about the PayString. In this example, the command removed the address on XRP testnet.

```json
{
  "payId": "loisrp$ripplex.money",
  "version": "1.0",
  "addresses": [
    {
      "paymentNetwork": "INTERLEDGER",
      "environment": "TESTNET",
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "$ripplex.money/LoisRP"
      }
    }
  ],
  "verifiedAddresses": []
}
```

### Add a crypto-address

You can add a crypto-address to a PayString. This command does not confirm the validity of the address details.

`crypto-address add xrpl mainnet rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6 12345`

The output returns the updated information for the PayString, including the added crypto-address.

```json
{
  "payId": "loisrp$ripplex.money",
  "addresses": [
    {
      "paymentNetwork": "INTERLEDGER",
      "environment": "TESTNET",
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "$ripplex.money/LoisRP"
      }
    },
    {
      "paymentNetwork": "XRPL",
      "environment": "MAINNET",
      "addressDetailsType": "CryptoAddressDetails",
      "addressDetails": {
        "address": "rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6",
        "tag": 12345
      }
    }
  ],
  "verifiedAddresses": []
}
```

### Create a new PayString

The following set of commands demonstrates how to create a new PayString, attach multiple address mappings, and save the result to a JSON file.

```
init cleopatra$example.com
crypto-address add xrpl mainnet rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6 12345
crypto-address add btc mainnet 3M2CH71P6uZTra1PsjiEhNFB7kCENShCgt
save
```

The PayString JSON representation specified here is saved to the local filesystem as example.json.

### Manage identity keys

The PayString protocol supports signing address mappings using one or more cryptographic keys. PayString CLI provides several commands to generate and load keys. Once a key is generated or loaded by PayString CLI, it is retained in PayString CLI's local storage for use when you sign your PayString.

You can generate multiple identity keys by using the `keys generate` and `keys load` commands.

To remove all loaded keys from the CLI's local storage, use the `keys clear` command. To see all keys currently loaded into PayString CLI, use the `keys list` command.

#### Generate a new key run

```
keys generate
```

This generates a new key and saves it to a file named identity-key.pem. To load a previously created identity key, run
`keys load </path/to/pem/file>`.

#### Sign a PayString

Before you sign an PayString, you must either load the PayString using the `load` command, or create a PayString using the `init` command, and you must execute commands to add one or more crypto-addresses to the PayString.

Once a PayString has been initialized or loaded, you can sign it using an identity key. You must either generate a new key, or load an existing one. Once your PayString has been loaded or initialized, and your identity key has been generated or loaded, you can sign the PayString using the `sign` command. The `sign` command signs each of your PayString address mappings using the loaded identity keys, and outputs the resulting PayString with a `verifiedAddress` field. Run the `save` command to save your PayString, with signed addresses, to file.

#### Inspect a Verified PayString

Two commands are available to verify a PayString's verified addresses.

`verify` - Checks if all the verified addresses have valid signatures.

`inspect` - Displays details information about each verified address and signatures.

#### Create, sign, and verify a PayString

With this combination of commands, you can create a PayString, add an address mapping, generate an identity key, sign your PayString address mapping, and then inspect the final result. You can check the output after each command.

```
init alexanderthegreat$example.com
crypto-address add xrpl mainnet rP3t3JStqWPYd8H88WfBYh3v84qqYzbHQ6
keys generate
sign
inspect
```
