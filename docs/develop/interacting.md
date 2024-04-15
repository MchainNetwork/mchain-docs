---
sidebar_position: 2
title: Interacting with a Node
---

# Interacting with a Node

This guide provides an overview of the key methods and tools to interact with a node, enabling you to perform various operations like querying blockchain data, submitting transactions, and more.

## Accessing a Node

There are two primary ways to interact with a node in the Mchain network:

1. **Direct Access**: If you're running your Mchain node, you can interact with it directly using the command line interface (CLI) or APIs. Follow the guide on [Running a Node on Testnet](/docs/validate/joining-testnet) for initial setup.
2. **Public Nodes**: Alternatively, you can connect to public nodes provided by Mchain or other service providers.

## Using the Command Line Interface (CLI)

Mchain's command line interface is a powerful tool for direct interaction with your node. Here are some common CLI commands:

- `mchaind status`: Displays the current status of the node.
- `mchaind query`: Allows querying of blockchain data, like account balances, transaction history, etc.
- `mchaind tx`: Enables the creation and broadcasting of transactions.

## Interacting through APIs

Mchain nodes expose several APIs that can be used for interaction:

- **RPC API**: Used for querying blockchain data and sending transactions. You can access it via HTTP requests.
- **REST API**: Provides a more user-friendly way to interact with your node via HTTP requests.

## Setting up RPC and REST Endpoints

If you're running your Mchain node:

1. **RPC Endpoint**: Configure the `rpc.laddr` setting in your node's config file to the desired IP and port.
2. **REST Endpoint**: Set the `api.laddr` in the config file to enable REST API access.

## Example: Querying Blockchain Data

To query the balance of an account using the CLI:

```bash
mchaind query bank balances [account-address] --chain-id [chain-id]
```

For API access, send an HTTP GET request to the REST endpoint:

```http
GET http://[node-ip]:[rest-port]/bank/balances/[account-address]
```

## Example: Submitting a Transaction

Submit a transaction using the CLI:

```bash
mchaind tx send [from-account] [to-account] [amount] --chain-id [chain-id] --from [key-name] --fees [fee]
```

Via API, send an HTTP POST request with the transaction details:

```http
POST http://[node-ip]:[rest-port]/txs
```
