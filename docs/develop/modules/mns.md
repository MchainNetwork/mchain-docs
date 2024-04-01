---
sidebar_position: 2
title: MNS
---

# MNS Module

The Mchain Name Service plays a role, in the Mchain network by providing an easy to use naming system. This feature acts as a bridge, between addresses and names that are easier for humans to understand greatly improving the overall user experience within the Mchain ecosystem.

### Register a New Name

This command allows you to register a new name on the Mchain network.

```bash
mchaind tx mns register [name] [years] [data] [set_reverse] [referrer] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name you want to register. Ex. mchain.mark
- `years`: The number of years for which you want to register this name.
- `data`: Any associated data you want to attach to the name.
- `set_reverse`: Boolean value (`true` or `false`) indicating whether to set this name as the reverse record for the address.
- `referrer`: The address of the referrer.

**Example**:
```bash
$ mchaind tx mns register "myname.mark" "2" "{\"github\":\"mchainnetwork\""}" true "referrer.mark" --from=mykey --chain-id=mchain --fees=100token
```

This command will:
1. Register the name `myname.mark` for 2 years.
2. Attach Github username as additional data.
3. Set this name as the reverse record for your address if `set_reverse` is `true`.
4. Credit any referral rewards to the name `referrer.mark`.

**Note**:
- Make sure the name is not already registered and meets the Mchain naming conventions.
- `--from=<key-name>`: Specify the key name of the account you're sending the transaction from.
- `--chain-id=<chain-id>`: Specify the chain ID of the Mchain network.
- `--fees=<fee>`: Specify the transaction fee.


### Transfer a Name

This command is used to transfer the ownership of a name registered to another address.

```bash
mchaind tx mns transfer [name] [receiver] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name you want to transfer.
- `receiver`: The address of the receiver to whom you want to transfer the name.

### Add a Record to a Name

This command allows you to add a new record to an existing name registered.

```bash
mchaind tx mns add-record [name] [record] [resolver] [data] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name to which you want to add the record.
- `record`: The name of the record you are adding.
- `resolver`: The resolver address associated with the record.
- `data`: Additional data or information related to the record.

**Example**:
```bash
$ mchaind tx mns add-record "myname.mark" "blog" "m1..." "" --from=mykey --chain-id=mchain-testnet-1 --fees=100umark
```

This command will:
1. Add a subdomain record `blog` to the name `myname.mark`.
2. Set the data for this record as "My Personal Blog".
3. The transaction is initiated by the account associated with `mykey`.


### List a Name for Sale

This command enables users to list their registered names for sale on the Mchain marketplace.

```bash
mchaind tx mns list [name] [price] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The registered name you wish to list for sale.
- `price`: The asking price for the name.

**Example**:
```bash
$ mchaind tx mns list "myname.mark" "1000000000umark" --from=mykey --chain-id=mchain --fees=50token
```

This command will:
1. List the name `myname.mark` for sale.
2. Set the sale price at `1000 MARK`.
3. Initiate the transaction from the account linked to `mykey`.

### Delist a Name

This command allows users to remove their listed names from the marketplace.

```bash
mchaind tx mns delist [name] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

### Bid on a Name

This command is used to place a bid on a name that is listed for sale on the Mchain marketplace.

```bash
mchaind tx mns bid [name] [bid] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name you wish to bid on.
- `bid`: The amount you are bidding for the name.

**Example**:
```bash
$ mchaind tx mns bid "desiredname.mark" "100000000umark" --from=mykey --chain-id=mchain --fees=50token
```

This command will:
1. Place a bid of `100 MARK` on the name `desiredname.mark`.
2. Execute the transaction from the account linked to `mykey`.


### Accept a Bid for a Name

This command is used by the owner of a name to accept a bid made by another user.

```bash
mchaind tx mns accept-bid [name] [from] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name for which the bid has been placed.
- `from`: The address of the bidder whose offer you are accepting.

**Example**:
```bash
$ mchaind tx mns accept-bid "desiredname.mark" "1mbidderaddress..." --from=mykey --chain-id=mchain --fees=50token
```

This command will:
1. Accept the bid for `desiredname.mark` from the address `1mbidderaddress...`.
2. Execute the transaction from the account linked to `mykey`.

Accepting a bid will transfer the ownership of the name to the bidder upon successful transaction. This action is final, and you should confirm the bid details before proceeding.

### Cancel a Bid on a Name

This command allows a user to cancel their previously placed bid on a name in the Mchain marketplace.

```bash
mchaind tx mns cancel-bid [name] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name on which you have placed a bid and wish to cancel the bid.

**Example**:
```bash
$ mchaind tx mns cancel-bid "desiredname.mark" --from=mykey --chain-id=mchain --fees=50token
```

This command will:
1. Cancel your bid on the name `desiredname.mark`.
2. Execute the transaction from the account linked to `mykey`.

By canceling a bid, you withdraw your offer to purchase the specified name.

### Buy a Listed Name

This command is used to purchase a name that is currently listed for sale in the Mchain marketplace.

```bash
mchaind tx mns buy [name] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name you want to purchase from the marketplace.

**Example**:
```bash
$ mchaind tx mns buy "desiredname.mark" --from=mykey --chain-id=mchain --fees=100token
```

This command will:
1. Purchase the name `desiredname`.
2. Execute the transaction from the account linked to `mykey`.

Purchasing a listed name transfers ownership of that name to your account, provided you meet the listed price and complete the transaction successfully. This action is irreversible once executed.

### Update a Name

This command is used to update the data associated with a name you own.

```bash
mchaind tx mns update [name] [data] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name you want to update.
- `data`: The new data you want to associate with the name.

**Example**:
```bash
$ mchaind tx mns update "myname.mark" "{\"new data here\":\"\"}" --from=mykey --chain-id=mchain --fees=100token
```

This command will:
1. Update the data of the name `myname` with `"new data here"`.
2. Execute the transaction from the account linked to `mykey`.

### Delete a Record

This command allows users to delete a record associated with a name.

```bash
mchaind tx mns del-record [name] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Usage**:
- `name`: The name whose associated record you want to delete.

**Example**:
```bash
$ mchaind tx mns del-record "blog.myname.mark" --from=mykey --chain-id=mchain --fees=100token
```

### List All Names

Command to list all registered names in the Mchain network.

```bash
mchaind query mns list-names
```

**Usage**:
- This command does not require any arguments.
- Supports pagination flags to navigate through large datasets.

**Example**:
```bash
mchaind query mns list-names --page=1 --limit=20
```

This will list the first 20 names registered in the network.

### Show a Specific Name

Command to display details of a specific registered name.

```bash
mchaind query mns show-names [index]
```

**Usage**:
- `index`: The unique identifier or name you want to query.

**Example**:
```bash
mchaind query mns show-names "alice.mark"
```

This will show details about the name `alice.mark`.

### Query the Registration Cost of a Name

Command to query the cost of registering a specific name.

```bash
mchaind query mns cost [name]
```

**Usage**:
- `name`: The name for which you want to know the registration cost.

**Example**:
```bash
mchaind query mns cost "newname.mark"
```

This will display the cost required to register `newname.mark` in the network.

### Listing Owned Names

This command is used to query all names owned by a specific user.

**Usage**:
- `list-owned-names [address]`: Retrieve a list of names owned by the provided address.
- `[address]`: The address of the user whose name ownership you want to query.
- Supports pagination flags for navigating through potentially large datasets.

**Example**:
```bash
mchaind query mns list-owned-names m1xxx... --page=1 --limit=10
```

- This command will list the first 10 names owned by the address `m1xxx...`.

**Description**:
- This command is particularly useful for users to keep track of all the names they have registered under their address in the Mchain network.
- It provides a quick and efficient way to manage multiple name registrations, especially for users who may have registered numerous names.
- The addition of pagination flags helps in managing and navigating through large lists of owned names, enhancing user experience in querying their assets.

**Notes**:
- Ensure that the address provided is correctly formatted as per Mchain network standards.
- The command will return a list of names along with relevant details associated with each name.

### List All Domains for Sale

This command retrieves a list of all domains currently listed for sale on the Mchain network.

**Usage**:
- `list-forsale`: Execute the command without additional parameters to fetch the list.
- Supports pagination flags for handling large datasets.

**Example**:
```bash
mchaind query mns list-forsale --page=1 --limit=5
```
- This example fetches the first 5 domains listed for sale.

### Show a Specific Domain for Sale

**Command**: `show-forsale`

This command provides detailed information about a specific domain that is listed for sale.

**Usage**:
- `show-forsale [name]`: Provide the name of the domain to fetch its details.
- `[name]`: The name of the domain you want to query.

**Example**:
```bash
mchaind query mns show-forsale example
```
- This example fetches details of the domain named `example`.

**Notes**:
- These commands are useful for users interested in the domain marketplace, allowing them to browse and retrieve detailed information about domains available for purchase.
- The pagination feature in the `list-forsale` command helps manage large lists of domains, enhancing user experience.
- Ensure the domain name is correctly formatted and exists in the network for the `show-forsale` command.

### List All Bids

This command retrieves a list of all bids currently placed on names within the Mchain network.

**Usage**:
- `list-bids`: Execute the command without additional parameters to fetch the list.
- Supports pagination flags for handling large datasets.

**Example**:
```bash
mchaind query mns list-bids --page=1 --limit=5
```
- This example fetches the first 5 bids placed on names.

### Show a Specific Bid

This command provides detailed information about a specific bid.

**Usage**:
- `show-bids [index]`: Provide the index of the bid to fetch its details.
- `[index]`: The unique identifier or index of the bid you want to query.

**Example**:
```bash
mchaind query mns show-bids bidIndex123
```
- This example fetches details of the bid with the index `bidIndex123`.

**Notes**:
- The `list-bids` command is crucial for users who are actively participating in bidding on names, allowing them to track all existing bids.
- Pagination in the `list-bids` command helps to manage and view large numbers of bids efficiently.
- For the `show-bids` command, ensure the bid index is correctly provided to obtain accurate information. The bid index is a unique identifier for each bid in the system.

### Query the Name Associated with a Given Address

This command retrieves the name associated with a specified address in the Mchain network.

**Usage**:
- `reverses [address]`: Provide the address to fetch its associated name.
- `[address]`: The address for which you want to query the associated name.

**Example**:
```bash
mchaind query mns reverses m1exampleaddress123
```
- This example fetches the name associated with the address `m1exampleaddress123`.

### Query All Reverse Records

This command provides a list of all reverse records, mapping addresses back to their names.

**Usage**:
- `list-reverses`: Execute the command without additional parameters to fetch the list.
- Supports pagination flags for handling large datasets.

**Example**:
```bash
mchaind query mns list-reverses --page=1 --limit=10
```
- This example fetches the first 10 reverse records.

**Notes**:
- The `reverses` command is crucial for users to verify the name associated with a particular address. This is especially useful in cases where names are used as identity markers or for easy recognition within the network.
- The `list-reverses` command is beneficial for users to view the overall mapping of addresses to names, providing a comprehensive view of the reverse records on the network.
- Pagination in the `list-reverses` command helps efficiently manage and view large numbers of reverse records.


## Parameters

Here's a summary of the configurable parameters for the Mchain Name Service (MNS) module:

| Parameter              | Description                                                     | Type            | Example Value                 |
|------------------------|-----------------------------------------------------------------|-----------------|-------------------------------|
| `base_cost`            | Defines the base cost for name registration.                    | Coin            | `{denom: "umark", amount: "50"}` |
| `base_expiration`      | Defines the base expiration duration for names.                 | Duration        | `365 days` (for a year)       |
| `grace_period`         | Defines the grace period for name registration.                 | Duration        | `30 days`                     |
| `referral_register_rate`| Defines the referral rate for name registration.               | Decimal         | `0.05` (5%)                   |
| `referral_extend_rate` | Commission for referrals for extending the name registration.   | Decimal         | `0.03` (3%)                   |
| `sell_commission_rate` | Commission ratio charged when selling a domain.                 | Decimal         | `0.1` (10%)                   |
| `referral_sell_rate`   | Ratio of the charged commission allocated to the referral.      | Decimal         | `0.5` (50%)                   |
