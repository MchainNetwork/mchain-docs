---
sidebar_position: 4
title: Bmint
---

# Bmint Module

The Bmint module is responsible for minting the [BEER token](/docs/learn/beer) in Mchain. For every block generated, one BEER token is minted and awarded to the validator who proposes the block and their stakers.

## Interacting with BEER Token

When engaging with the BEER token on the Mchain blockchain, here are some of the functionalities you can utilize:

- **BEER Transactions:** The Cosmos SDK's bank module is your go-to tool for standard operations like transfers and balance queries. It facilitates seamless transactions with BEER tokens.
- **Token Burning:** If you want to reduce the supply of BEER tokens in circulation, the BEER token can be burnt using the burn module, similar to other tokens on the Mchain platform. This feature allows for adjusting the token's supply dynamically.

## Parameters

The following parameters govern the operation of the Bmint module:

| Parameter        | Description                       | Type   | Example Value |
|------------------|-----------------------------------|--------|---------------|
| `mint_denom`     | The denomination of the minted token. | `string` | `"beer"`       |
| `tokens_per_block` | The number of tokens minted per block. | `int64`  | `1`            |
