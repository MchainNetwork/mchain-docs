---
sidebar_position: 3
title: Proof of Existence
---

# Proof of Existence Module

The Proof of Existence module in Mchain is a blockchain-based mechanism for registering and verifying the existence of any data or document. This module relies on SHA-256, a cryptographic hash function, to store unique hashes representing the data or documents. It's important to note that the module does not hold the actual file or data in the blockchain, but only the hash. This ensures privacy and efficiency, as the hash serves as a digital fingerprint of the data.

## Generating SHA-256 Hash

To create a proof, you first need to generate a SHA-256 hash of your data or document. In Ubuntu, you can use the `sha256sum` command to do this. For example:

```sh
sha256sum filename.ext
```

This command will output the SHA-256 hash of the specified file.

## CLI Commands

### Create Proof

Allows users to create a new proof for a given hash.

```sh
mchaind tx proofofexistence create-proof [hash] --from [key-name] --chain-id [chain-id] --fees [fee]
```

Replace `[hash]` with the SHA-256 hash generated from your data or document.

**Example**:
```bash
$ mchaind tx proofofexistence create-proof a8e6b925fb040fb25b719516b5f5b1efa10850e7f61c1baf58964d8ee925e0d2 --from=mykey --chain-id=mchain-testnet-1 --fees=50umark
```

This command will:
1. Create a proof.
2. Execute the transaction from the account linked to `mykey`.


### Query Proof by Hash

Retrieves a specific proof using its hash.

```sh
mchaind q proofofexistence proof [hash]
```

### Query Total Proofs

Returns the total number of proofs registered in the system.

```sh
mchaind q proofofexistence total-proofs
```

### Query List of Proofs

Lists all proofs registered in the system.

```sh
mchaind q proofofexistence list-proofs
```

### Query Module Parameters

Displays the current parameters of the Proof of Existence module.

```sh
mchaind q proofofexistence params
```

## Parameters

The following table summarizes the configurable parameters for the Proof of Existence module:

| Parameter    | Description                      | Type     |
|--------------|----------------------------------|----------|
| `issue_fee`  | Fee charged for issuing a proof. | `Coin`   |