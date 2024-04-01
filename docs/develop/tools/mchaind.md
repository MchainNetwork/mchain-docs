---
sidebar_position: 2
title: mchaind
---

# `mchaind`: The Core Command-Line Interface for Mchain

`mchaind` is the primary command-line interface (CLI) tool for interacting with the Mchain blockchain. It is the gateway for various blockchain operations, from querying the blockchain state to executing transactions and managing nodes. Whether you're a developer, validator, or enthusiast, `mchaind` provides a [suite of commands](https://github.com/MchainNetwork/mchain/blob/main/docs/cli/toc.md) to interact with the Mchain ecosystem.

## Key Features

- **Blockchain Interaction**: Query blockchain data, submit transactions, and explore blockchain state.
- **Node Management**: Initialize, configure, and manage Mchain nodes.
- **Wallet Management**: Create and manage wallets, generate keys, and handle tokens.
- **Staking Operations**: Participate in staking, delegate tokens, and manage staking rewards.
- **Governance Participation**: Create proposals, vote, and participate in the governance process.
- **Smart Tokens Interaction**: Issue, mint and interact with Smart Tokens on the Mchain network.

## Installation

`mchaind` is typically distributed as part of the Mchain release binaries. To install `mchaind`, you can download the latest release from the [Mchain GitHub repository](https://github.com/mchainnetwork/mchain/releases) or use the [Mchain Installer](/docs/validate/joining-testnet).

## Basic Usage

After installing `mchaind`, you can use the command-line interface to interact with the Mchain network. Here are some basic commands:

- Initialize a new Mchain node:
  ```
  mchaind init [node-name] --chain-id [chain-id]
  ```

- Start an Mchain node:
  ```
  mchaind start
  ```

- Query blockchain information:
  ```
  mchaind query [subcommand]
  ```

- Submit transactions:
  ```
  mchaind tx [subcommand]
  ```

- Manage keys and wallets:
  ```
  mchaind keys [subcommand]
  ```

## Advanced Features

`mchaind` also offers advanced functionalities, including:

- **Custom Module Interaction**: Interact with custom modules like Mchain Name Service (MNS), Smart Tokens, and others.
- **Export and Import State**: Export and import blockchain state for node setup or migration.
- **Debugging Tools**: Utilize debugging and diagnostic tools to troubleshoot node issues.

## Working Directory

The primary working directory for `mchaind` is `$HOME/.mchain`. It is a crucial location where all configuration files, blockchain data, and key data related to Mchain accounts are stored.

`mchaind` offers the flexibility to choose a different working directory. You can achieve this by using the `--home` flag during the execution of `mchaind`.

## Documentation and Support

For comprehensive documentation using `mchaind`, including detailed command descriptions, visit the [Mchain CLI documentation](https://github.com/MchainNetwork/mchain/blob/main/docs/cli/toc.md). The community and development team also provide support through various channels, including the Mchain Discord and GitHub issues.
