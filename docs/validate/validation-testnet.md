---
sidebar_position: 3
title: Validating on Testnet
---

# Validating on the Testnet

Becoming a validator on Mchain's testnet is an essential step before joining the mainnet. This process begins once your node is synchronized with the testnet. Follow the guide on [Running a Node on Testnet](joining-testnet) for initial setup.

### Step 1: Set Up a Wallet Keyring

To transform your node into a validator, you must establish a wallet within your keyring. This can be done by adding an existing wallet using its seed phrase or creating a new one. Securely record the mnemonic phrase for future wallet recovery and note your Mchain address.

Choose a keyring backend (options: os, file, kwallet, pass, test, memory) to store your keys securely. The 'file' and 'pass' backends are recommended for headless environments like servers. More information on keyring backends is available in the [Cosmos SDK documentation](https://docs.cosmos.network/v0.47/user/run-node/keyring).

**Creating a New Wallet:**

- For keyring backend `os`:

```bash
export KEY_NAME=mykey
mchaind keys add $KEY_NAME
```

- For keyring backend `file` (substitute `KEYPASSWD` with a strong password of at least 8 characters):

```bash
export KEY_NAME=mykey
export KEYPASSWD=password
(echo $KEYPASSWD; echo $KEYPASSWD) | mchaind keys add $KEY_NAME --keyring-backend file
echo $KEYPASSWD | mchaind keys show $KEY_NAME --keyring-backend file
```

To confirm that the wallet has been successfully added to the keychain:

```bash
echo $KEYPASSWD | mchaind keys list --keyring-backend file
```

Proceed with the following steps to set up your validator node on the Mchain testnet fully.

### Step 2: Acquire Testnet MARK Tokens

Obtain MARK tokens for the testnet through the [Testnet Faucet](https://testnet.hub.mchain.network/mchain/faucet). Enter your Mchain address and request "Get Testnet Tokens."

### Step 3: Retrieve Validator Public Key

Your validator public key is crucial for initialization. Retrieve it using:

```bash
mchaind tendermint show-validator
```

### Step 4: Validator Creation Command

Ensure your wallet holds a small MARK balance. Create your validator with the following command, populated with appropriate values:

```bash
mchaind tx staking create-validator \
--from=[KEY_NAME] \
--amount=[staking_amount_umark] \
--pubkey=$(mchaind tendermint show-validator) \
--moniker="[moniker_id_of_your_node]" \
--security-contact="[security contact email/contact method]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]"
```

Example with values:

```bash
mchaind tx staking create-validator \
--from=$KEY_NAME \
--amount=1000000000umark \
--pubkey=$(mchaind tendermint show-validator)  \
--moniker="Mariner" \
--security-contact="mariner@email.com" \
--chain-id="mchain-testnet-1" \
--commission-rate="0.1" \
--commission-max-rate="0.2" \
--commission-max-change-rate="0.05" \
--min-self-delegation="100000000" \
--keyring-backend=file
```

Explanation for command flags:

- `from`: The KEY_NAME created for your keyring
- `amount`: Staking amount in umark (e.g., 1000000000umark equals 1000 MARK)
- `pubkey`: Validator public key retrieved earlier
- `moniker`: A chosen name for your validator
- `security-contact`: Contact email for delegators
- `chain-id`: The chain ID, such as 'mchain-testnet-1' for Mchain testnet
- `commission-rate`: The rate charged to delegates (e.g., 10%)
- `commission-max-rate`: Maximum chargeable rate to delegates (e.g., 20%)
- `commission-max-change-rate`: Maximum daily commission rate change (e.g., 5% per day)
- `min-self-delegation`: Minimum personal funds required to stay bonded (e.g., 100 MARK)
- `keyring-backend`: Select the correct keyring backend

If you encounter an 'out of gas' error, adjust the gas value:

```bash
--gas=<value higher than gasUsed from the error>
```

### Step 5: Monitor Validator Status

To view the current validator set:

```bash
mchaind query staking validators --limit 300 -o json | jq -r '.validators[] | [.operator_address, .status, (.tokens|tonumber / pow(10; 6)), .commission.update_time[0:19], .description.moniker] | @csv' | column -t -s","
```

Filter for your moniker:

```bash
... | grep Mariner
```

If your bond status is `BOND_STATUS_BONDED`, your validator is active!

### Step 6: Validator Signing History

Track signing history using your validator public key:

1. Retrieve the key:
   ```bash
   mchaind tendermint show-validator
   ```
2. Query signing information:
   ```bash
   mchaind query slashing signing-info [validator-pubkey] --chain-id mchain-testnet-1
   ```

Example:
```bash
mchaind query slashing signing-info '{"@type":"/cosmos.crypto.ed25519.PubKey","key":"9olCzrP2v1/EAXNovP5nh+KR66i2Ad+AxNhHgNM/rAY="}' --chain-id mchain-testnet-1
```

Once set up, your validator node will actively participate in the Mchain testnet, marking a significant step towards mainnet validation.