---
sidebar_position: 1
title: Introduction
---

# Modules Overview

## Mchain Modules

Mchain modules are crucial for the functionality and operations of the Mchain blockchain. They offer a wide range of functionalities, neatly organized within the Mchain directory. Here's a list of these modules with links for more detailed information:

| Custom Module                    | Functionality                                                                                                  | Status            |
|----------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------|
| [smarttoken](./smarttoken)       | Allows the creation of programmable Smart Tokens on Mchain.                                                    | Active            |
| [mns](./mns)                     | Mchain Name Service - Manages domain names on the Mchain blockchain and domain marketplace.                    | Active            |
| [burn](./burn)                   | Allows the burning of specific tokens, including MARK, BEER, and any Smart Token.                              | Active            |
| [proofofexistence](./proofofexistence) | For registering and verifying the existence of any data or document.                                     | Active            |
| [epoch](./epoch)                 | Manages time-bound activities and events crucial for applications like gaming.                                 | Under Development |
| [oracle](./oracle)               | Module for integrating external data feeds and oracles.                                                        | Under Development |
| [dex](./dex)                     | Decentralized exchange for trading assets and cryptocurrencies on Mchain.                                      | Under Development |

## Cosmos Modules

Cosmos SDK modules provide the essential tools for developing customizable and interoperable blockchains. They range from account management to consensus protocols within the standard Cosmos SDK directory.

To learn more about building and exploring these Cosmos modules, visit the [Cosmos SDK Modules documentation](https://docs.cosmos.network/main/build/modules).

| Module         | Description                                                                   |
|----------------|-------------------------------------------------------------------------------|
| auth           | Manages authentication of accounts and transactions.                          |
| authz          | Authorization for accounts to act on behalf of others.                        |
| bank           | Provides functionalities for token transfers.                                 |
| crisis         | Halts the blockchain under specific critical conditions.                      |
| distribution   | Manages fee and staking token distribution.                                   |
| evidence       | Handles evidence related to misbehaviours like double signing.                |
| feegrant       | Allows granting of fee allowances for transactions.                           |
| gov            | Facilitates on-chain proposals and voting.                                    |
| mint           | Responsible for creating new units of staking token.                          |
| slashing       | Implements validator punishment mechanisms.                                   |
| staking        | Provides a Proof-of-Stake layer for blockchains.                              |
| upgrade        | Manages and coordinates software upgrades.                                    |
| nft            | Implements an NFT module based on ADR43.                                      |
| consensus      | Modifies CometBFT's ABCI consensus parameters.                                |
| genutil        | Offers genesis utilities for the Cosmos SDK.                                  |
