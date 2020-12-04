---
id: paystring-cli-reference
title: PayString CLI Reference
sidebar_label: PayString CLI Reference
---

:::note
PayString was previously known as PayID, and some references remain.
:::

Use these commands with PayString CLI. See [PayString CLI](paystring-cli) for setup information.

| Command                                                             | Description                                                                            |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `help [command...]`                                                 | Provides help for a given command.                                                     |
| `exit`                                                              | Exits application.                                                                     |
| `clear`                                                             | Clears the terminal.                                                                   |
| `crypto-address add <paymentNetwork> <environment> <address> [tag]` | Starts building a new PayString.                                                       |
| `crypto-address remove <address>`                                   | Removes an address from the current PayString.                                         |
| `keys clear`                                                        | Clears all loaded keys.                                                                |
| `keys generate`                                                     | Generates and saves a new identity key.                                                |
| `keys list`                                                         | Lists keys that have been loaded.                                                      |
| `keys load <filePath>`                                              | Loads identity-key from file.                                                          |
| `keys print`                                                        | Prints keys that have been loaded in pem format.                                       |
| `init <payString>`                                                      | Initializes a new PayString.                                                           |
| `inspect [payString]`                                                   | Inspects signatures on the loaded PayString or from an optionally specified PayString. |
| `load <payString>`                                                      | Loads a PayString from PayString server.                                               |
| `show`                                                              | Shows the currently loaded PayString.                                                  |
| `sign`                                                              | Signs the loaded PayString with the loaded signing keys.                               |
| `verify [payString]`                                                    | Verifies the loaded PayString or an optionally specified PayString.                    |
| `save`                                                              | Saves the currently loaded PayString.                                                  |
| `from-url <url>`                                                    | Converts a URL to a PayString.                                                         |
| `to-url <payString>`                                                    | Converts a PayString to a URL.                                                         |
