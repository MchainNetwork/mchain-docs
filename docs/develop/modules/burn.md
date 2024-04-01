---
sidebar_position: 3
title: Burn
---

# Burn Module

The Burn module in Mchain enables the burning of specific tokens, including MARK, BEER, and any Smart Token with the burning feature activated.

## Burn Command

Allows users to burn a specified amount of a given denomination.

```sh
mchaind tx burn burn [amount][denom] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Example**:
```bash
$ mchaind tx burn burn 1000000umark --from=mykey --chain-id=mchain-testnet-1 --fees=50umark
```

This command will:
1. Burn `1 MARK`.
2. Execute the transaction from the account linked to `mykey`.

## Query Total Burned by Denom

Fetches the total amount of coins burned for a specific denomination.

```sh
mchaind q burn total-burned-by-denom [denom]
```

## Query Burn Address

Retrieves the burn address. Any coins sent to the Burn Address are automatically burned.

```sh
mchaind q burn burn-address
```

## Parameters

The burn module does not have configurable parameters.