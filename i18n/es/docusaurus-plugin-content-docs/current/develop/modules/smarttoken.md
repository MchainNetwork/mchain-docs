---
sidebar_position: 1
title: Smart Token
---

# Smart Token Module

The Smart Token Module in Mchain empowers developers and users to create and manage custom tokens with a range of capabilities. These tokens can be tailored for various use cases, enabling a flexible and robust token ecosystem within Mchain.

## CLI Commands

### Issue a New Smart Token

Create a new smart token on the chain with specified attributes and functionalities.

```bash
mchaind tx smarttoken issue \
    --name="Burger Points" \
    --symbol="burg" \
    --subunit="uburg" \
    --decimals="6" \
    --initial-supply="10000000" \
    --max-supply="1000000000000" \
    --minter=<address> \
    --authority=<address> \
    --send-burn-rate="0.01" \
    --send-commission-rate="0.01" \
    --send-stake-rate="0.01" \
    --send-community-rate="0.01" \
    --features="minting,burning,sending,free_send,whitelist,freezing" \
    --uri="ipfs://..." \
    --from=<key-name> \
    --chain-id=<chain-id> \
    --fees=<fee>
```

#### Additional Information on Parameters

- **name**: The full name of the Smart Token. Example: "Burger Points".
- **symbol**: A short identifier for the smart token, limited to 1-6 characters. Example: "BTC".
- **features**:
  - **minting**: Enables the additional creation of coins, increasing the total supply. Once set, this feature can be disabled but not re-enabled.
  - **burning**: Allows users to destroy coins, reducing the supply. Includes the option to send coins to a specific coin burn address. Like minting, it can be disabled but not re-enabled.
  - **sending**: Activates the transferability of tokens among users. If disabled, only the token owner or minter can perform transfers. This option is irreversible once configured.
  - **free_send**: Enables the return of tokens to the owner or minter without incurring transaction costs, which are assumed by the recipient.
  - **whitelist**: Enables a list of authorized users to receive the token. Irreversible once implemented.
  - **freezing**: Allows for the global freezing of transfers and the creation of a list of frozen addresses, restricting token transfers to the frozen address.
- **decimal**: Sets the number of decimals for the Smart Token, with 6 being the default. For tokens without decimals or intended to be considered as points, set to 0.
- **subunit**: Defines the symbol for the smallest denomination of the token, typically and by default, the main symbol prefixed with "u". In tokens without decimals, it may coincide with the main symbol.
- **Send Rate Configuration**: 
  - **send-burn-rate**: Defines a percentage of the sent tokens to be "burned" or removed from circulation, introducing a deflationary aspect.
  - **send-commission-rate**: Sets a percentage of the sent tokens as a commission to the token creator or a designated account.
  - **send-stake-rate**: Allocates a percentage of the sent tokens to reward the block validator and their stakers.
  - **send-community-rate**: Applies a percentage of the sent tokens to the "community pool", intended to support the community and project development.
- **max-supply**: Defines a maximum limit of coins that can be created, setting a ceiling for the total supply.
- **initial-supply**: Allows for the initial minting of coins when issuing the token. If the minting feature is active, this value can be zero, allowing for future mintings.

### Mint Smart Tokens

Generate additional tokens for a specific address.

```bash
mchaind tx smarttoken mint [amount][denom] --recipient=<recipient> --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Set Minter for Smart Token

Assign a new address as the minter for a specific smart token.

```bash
mchaind tx smarttoken set-minter [denom] --new-minter=<new-minter> --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Set Authority for Smart Token

Transfer the authority of a smart token to a new entity.

```bash
mchaind tx smarttoken set-authority [denom] --new-authority=<new-authority> --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Note**: This command changes the ownership and control of the specified smart token. The new authority will assume complete control over the token's operations and governance. Use this feature carefully as transferring authority signifies a significant shift in the management and oversight of the token.

### Set URI for Smart Token

Define or update the URI for a specific smart token.

```bash
mchaind tx smarttoken set-uri [denom] --uri=<uri> --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Globally Freeze Smart Token

Halt all operations for a specific smart token globally.

```bash
mchaind tx smarttoken global-freeze [denom] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Globally Unfreeze Smart Token

Resume all operations for a specific smart token globally.

```bash
mchaind tx smarttoken global-unfreeze [denom] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Freeze Smart Token for a Specific Address

Disable operations of a smart token for a particular address.

```bash
mchaind tx smarttoken freeze [denom] [address] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Unfreeze Smart Token for a Specific Address

Enable previously frozen operations of a smart token for a particular address.

```bash
mchaind tx smarttoken unfreeze [denom] [address] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Freeze Smart Token for Multiple Addresses

Freeze a Smart Token for multiple addresses.

```bash
mchaind tx smarttoken freeze-batch [denom] [address1,address2,address3] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Unfreeze Smart Token for Multiple Addresses

Unfreeze a Smart Token for multiple addresses.

```bash
mchaind tx smarttoken unfreeze-batch [denom] [address1,address2,address3] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Disable Minting of Smart Token

Disable the minting ability for an existing smart token.

```bash
mchaind tx smarttoken disable-mint [denom] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Disable Burning of Smart Token

Disable the burning functionality for an existing smart token.

```bash
mchaind tx smarttoken disable-burn [denom] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Add Address to Smart Token Whitelist

Add an address to the whitelist of a specific smart token.

```bash
mchaind tx smarttoken add-to-whitelist [denom] [address] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Remove Address from Smart Token Whitelist

Remove an address from the whitelist of a specific smart token.

```bash
mchaind tx smarttoken remove-from-whitelist [denom] [address] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Add Multiple Addresses to Smart Token Whitelist

Add multiple addresses to the whitelist of a specific smart token.

```bash
mchaind tx smarttoken add-to-whitelist-batch [denom] [address1,address2,address3] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Remove Multiple Addresses from Smart Token Whitelist

Remove multiple addresses from the whitelist of a specific smart token.

```bash
mchaind tx smarttoken remove-from-whitelist-batch [denom] [address1,address2,address3] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Query List of Smart Tokens with Pagination

Query the list of all smart tokens on the chain with pagination options.

```bash
mchaind query smarttoken list --limit=<limit> --page=<page_number>
```

This command allows you to retrieve a paginated list of smart tokens on the Mchain network. Pagination parameters can be adjusted to fetch specific segments of the total list.

**Example**:
- To get the first 10 smart tokens:
  ```bash
  mchaind query smarttoken list --limit=10 --page=1
  ```
- To get the next 10 smart tokens (second page):
  ```bash
  mchaind query smarttoken list --limit=10 --page=2
  ```

**Usage**:
- `--limit=<limit>`: Sets the number of smart tokens to display per page.
- `--page=<page_number>`: Specifies the page number to fetch from the smart token list.

### Query Specific Smart Token by Denom

Query detailed information about a specific smart token using its denom.

```bash
mchaind query smarttoken denom [denom]
```

This command retrieves detailed information about a smart token identified by its denom on the Mchain network. It's particularly useful for getting specific data on a single token, including its features, minting status, and other relevant details.

**Usage**:
- Replace `[denom]` with the denom of the smart token you wish to query.

### Query Whitelist for a Specific Smart Token Denomination

Query the whitelist of addresses for a specific smart token denomination.

```bash
mchaind query smarttoken whitelist-by-denom [denom]
```

This command retrieves the list of addresses that are whitelisted for a particular smart token denomination on the Mchain network. It's useful for understanding which addresses have special permissions or access for transactions involving the specified smart token.

**Example**:
```bash
$ mchaind query smarttoken whitelist-by-denom uburg-m1...
```

**Usage**:
- Replace `[denom]` with the denomination of the smart token for which you wish to query the whitelist.

This function is essential for managing and reviewing access controls for smart tokens, especially in scenarios where token transactions are restricted or monitored. It provides a clear view of all addresses that are authorized to interact with the specified token.


### Query Frozen List for a Specific Smart Token Denomination

Query the list of addresses that are frozen for a specific smart token denomination.

```bash
mchaind query smarttoken frozen-by-denom [denom]
```

This command provides a list of all addresses that have been frozen from transacting with a specific smart token denomination on the Mchain network. It's a crucial tool for understanding which addresses are currently restricted from engaging in activities involving the given token.

**Example**:
```bash
$ mchaind query smarttoken frozen-by-denom uburg-m1...
```

**Usage**:
- Replace `[denom]` with the denomination of the smart token for which you wish to query the frozen list.
- Pagination flags can be used to manage the display of results, especially useful when dealing with a large number of frozen addresses.

This functionality is especially important for administrators or token managers to monitor and control the activity of a smart token, providing insights into the addresses that are currently restricted from using the token.


### Query if a Specific Smart Token is Frozen for an Address

Query whether a specific smart token is frozen for a particular address.

```bash
mchaind query smarttoken is-frozen [denom] [address]
```

This command is used to check if a specific smart token, identified by its denomination, is currently frozen for a given address on the Mchain network. It's an essential tool for users and administrators to verify the status of token transactions for particular addresses.

**Example**:
```bash
$ mchaind query smarttoken is-frozen uburg-m1... mchain1xyz...
```

**Usage**:
- Replace `[denom]` with the denomination of the smart token.
- Replace `[address]` with the address you want to check.

This functionality is crucial for monitoring and managing access to a smart token, especially in situations where certain addresses might be restricted due to governance rules or other regulatory requirements. It provides immediate clarity on whether an address is allowed to transact with the specified token.

### Query if an Address is Whitelisted for a Specific Smart Token

Query whether an address is whitelisted for a particular smart token denomination.

```bash
mchaind query smarttoken is-whitelisted [denom] [address]
```

This command enables you to check if a specific address is included in the whitelist for transactions involving a given smart token on the Mchain network. It's a key tool for users and administrators to verify whitelist status for particular addresses.

**Example**:
```bash
$ mchaind query smarttoken is-whitelisted uburg-m1... mchain1xyz...
```

**Usage**:
- Replace `[denom]` with the denomination of the smart token.
- Replace `[address]` with the address you wish to check.

This functionality is important for understanding and managing access controls for smart tokens. It provides immediate clarity on whether an address has been authorized for special transactions or operations with the specified token, reflecting the governance policies or operational rules set by the token administrators.

### Query Smart Token Parameters

Query values set as parameters for smart tokens in the Mchain network.

```bash
mchaind query smarttoken params
```

This command allows you to retrieve the current parameter settings for smart tokens on the Mchain network. It provides insights into various configuration settings that govern the operations of smart tokens.

**Example**:
```bash
$ mchaind query smarttoken params
```

**Usage**:
- Use the command without additional arguments to fetch the current smart token parameters.

This function is essential for users and developers looking to understand the underlying settings that define the behavior of smart tokens, including default configurations, fee structures, and other critical parameters that influence smart token operations on the network.


## Parameters

The following table summarizes the configurable parameters for the Smart Token module:

| Parameter    | Description              | Type     |
|----------  --|--------------------------|----------|
| `issue_fee`  | Fee for issuing a token  | `Coin`   |
| `mint_fee`   | Fee for minting a token  | `Coin`   |

