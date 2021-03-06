---
id: integrate-paystring-users
title: Integrate Existing User Databases
sidebar_label: Integrate Existing User Databases
---

:::note
PayString was previously known as PayID.
:::

If you have an existing user database, you can take the following steps to integrate PayString functionality into your product.

## Extend existing database tables with new columns

The PayString [account schema](https://github.com/paystring/paystring/blob/master/src/db/schema/01_account.sql) is used to define a table for users.

The account table contains two fields: `id` and `pay_id`. The address table uses a foreign key column called `account_id` which depends on `id` as a foreign key to associate addresses with individual accounts. The second column is `pay_id` which is where we store the string identifier (such as `alice$wallet.com`).

With an existing user database, you will need to add the `pay_id` column. Your user database might already have the equivalent of an `id` field, but if not, add this column so that each address can reference a specific user.

The PayString account schema has three constraints that could be useful to apply to your existing user database. Two constraints guarantee that all entered PayStrings are lowercase and are not empty strings. The final and most important constraint is that the regex constraint [valid_pay_id](https://github.com/paystring/paystring/blob/master/src/db/schema/01_account.sql#L17) guarantees that all entered PayStrings are in compliance with the format outlined in the [PayString whitepaper](https://paystring.org/whitepaper.pdf).

The PayString [address schema](https://github.com/paystring/paystring/blob/master/src/db/schema/02_address.sql) is used to define a table of addresses associated with users.

Whenever a PayString is queried, the payment network and environment are sent via an Accept header. Therefore, it is important that each address stored has an associated payment network and environment. For example, upon receipt of the accept header `application/xrpl-testnet+json` you should query your address table for the address associated with the `xrpl` payment network and `testnet` environment.

## Match column names in data access functions

All functions that query the database are located in [src/data-access](https://github.com/paystring/paystring/tree/master/src/data-access). If you use column names that do not match the [schema](https://github.com/paystring/paystring/tree/master/src/db/schema), then you must reflect those changes in the data access functions. The following table lists the files contained within [src/data-access](https://github.com/paystring/paystring/tree/master/src/data-access) and the corresponding column names they use:

| File name                                                                                   | Columns used                                                                                                  |
| ------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| [payIds.ts](https://github.com/paystring/paystring/blob/master/src/data-access/payIds.ts)   | address.payment_network, address.environment, address.details                                                 |
| [reports.ts](https://github.com/paystring/paystring/blob/master/src/data-access/reports.ts) | address.payment_network, address.environment                                                                  |
| [users.ts](https://github.com/paystring/paystring/blob/master/src/data-access/users.ts)     | account.pay_id, account.id, address.account_id, address.payment_network, address.environment, address.details |

## Change the type of database

The reference implementation described in [Getting Started](/) uses a Postgres database. To use a different type of database, either update the settings in the [knexfile](https://github.com/paystring/paystring/blob/master/src/db/knex.ts), or replace the use of `knex` throughout the repository with your preferred database connection tool.

## Set environment variables

PayString depends on environment variables. All of these environment variables are read in [src/config.ts](https://github.com/paystring/paystring/blob/master/src/config.ts) and assigned to variables. During integration, look through all of the environment variables used in [src/config.ts](https://github.com/paystring/paystring/blob/master/src/config.ts) to ensure all are set properly for your environment.

## Update database migrations

If you use your own database, there are migration files written specifically for the tables outlined in [src/db/schema](https://github.com/paystring/paystring/tree/master/src/db/schema). Either remove these migration files, or update them to match your database.

## Update SQL files

The `.sql` files within [src/db](https://github.com/paystring/paystring/tree/master/src/db) are each executed by the function `syncDatabaseSchema` located in [db/syncDatabaseSchema.ts](https://github.com/paystring/paystring/blob/master/src/db/syncDatabaseSchema.ts). To integrate into an existing system, be sure to look through the directories in [src/db](https://github.com/paystring/paystring/blob/master/src/db/) to identify any `.sql` files that you need to modify to fit your existing system, or to remove because they do not apply.
