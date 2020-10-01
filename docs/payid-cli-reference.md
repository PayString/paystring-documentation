---
id: payid-cli-reference
title: PayID CLI Reference
sidebar_label: PayID CLI Reference
---

Use these commands with PayID CLI. See [PayID CLI](payid-cli) for setup information.

| Command                                                             | Description                                                                    |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `help [command...]`                                                 | Provides help for a given command.                                             |
| `exit`                                                              | Exits application.                                                             |
| `clear`                                                             | Clears the terminal.                                                           |
| `crypto-address add <paymentNetwork> <environment> <address> [tag]` | Starts building a new PayID.                                                   |
| `crypto-address remove <address>`                                   | Removes an address from the current PayID.                                     |
| `keys clear`                                                        | Clears all loaded keys.                                                        |
| `keys generate`                                                     | Generates and saves a new identity key.                                        |
| `keys list`                                                         | Lists keys that have been loaded.                                              |
| `keys load <filePath>`                                              | Loads identity-key from file.                                                  |
| `keys print`                                                        | Prints keys that have been loaded in pem format.                               |
| `init <payid>`                                                      | Initializes a new PayID.                                                       |
| `inspect [payId]`                                                   | Inspects signatures on the loaded PayID or from an optionally specified PayID. |
| `load <payId>`                                                      | Loads a PayID from PayID server.                                               |
| `show`                                                              | Shows the currently loaded PayID.                                              |
| `sign`                                                              | Signs the loaded PayID with the loaded signing keys.                           |
| `verify [payId]`                                                    | Verifies the loaded PayID or an optionally specified PayID.                    |
| `save`                                                              | Saves the currently loaded PayID.                                              |
| `from-url <url>`                                                    | Converts a URL to a PayID.                                                     |
| `to-url <payId>`                                                    | Converts a PayID to a URL.                                                     |
