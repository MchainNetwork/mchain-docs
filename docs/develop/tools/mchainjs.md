---
sidebar_position: 2
title: MchainJS
---

# MchainJS: JavaScript SDK for Mchain Network

MchainJS is an advanced JavaScript Software Development Kit (SDK) tailored for developing applications on the Mchain Network blockchain. It is designed to simplify the interaction with the blockchain, making it more accessible for developers to create versatile blockchain-based applications.

## Features

- **TypeScript**: Offers strong typing and error reduction.
- **Simplified Data Structures**: Provides easy-to-use interfaces for blockchain data.
- **Full Message and Transaction Support**: Facilitates a broad spectrum of blockchain functions.
- **Comprehensive Query Capabilities**: Allows for extensive data retrieval from the blockchain.
- **Cross-Platform Compatibility**: Ensures functionality across Node.js, web browsers, and React Native.
- **Integration with Mchain Modules**: Seamlessly connects with Mchain's unique features like Mchain Name Service and Smart Tokens.

## Installation

Install MchainJS via npm or yarn:

```bash
npm install mchainjs
# or
yarn add mchainjs
```

## Examples

After installation, you can incorporate MchainJS in your projects. Here are some simplified examples:

### Interacting with Smart Tokens

Example: Issuing Smart Tokens

```javascript
const { DirectSecp256k1Wallet } = require('@cosmjs/proto-signing');
const { fromHex } = require('@cosmjs/encoding');
const mchainjs = require('mchainjs'); // Assuming mchainjs is already installed

// Define your private key and Mchain RPC endpoint
const privKey = 'your_private_key_here'; // Replace with your private key
const rpcEndpoint = 'https://testnet.rpc.mchain.network'; // Replace with the appropriate RPC endpoint

async function issueSmartToken() {

    // Create a wallet from a private key
    const wallet = await DirectSecp256k1Wallet.fromKey(fromHex(privKey), 'm');

    // Retrieve the first account from the wallet
    const [account] = await wallet.getAccounts();

    // Create a signing client
    const signingClient = await mchainjs.getSigningMchainClient({
        rpcEndpoint: rpcEndpoint,
        signer: wallet
    });

    // Define the Smart Token parameters
    const smartTokenParams = {
        symbol: 'MYTOKEN',  // Replace with your token symbol
        name: 'My Smart Token', // Replace with your token name
        subunit: 'umytoken', // Replace with your token subunit
        decimals: 6,
        initialSupply: '1000000', // Initial supply in smallest unit
        maxSupply: '1000000000000', // Max supply in smallest unit
        minter: account.address,
        authority: account.address,
        sendBurnRate: '0.01',
        sendCommissionRate: '0.01',
        sendStakeRate: '0.01',
        sendCommunityRate: '0.01',
        features: ['minting', 'burning', 'sending', 'free_send', 'whitelist', 'freezing']
    };

    // Create the message to issue the Smart Token
    const { issue } = mchainjs.mchain.smarttoken.v1beta1.MessageComposer.withTypeUrl;
    const msg = issue(smartTokenParams);

    // Define the transaction fee
    const fee = {
        amount: [{ amount: '2000', denom: 'umark' }], // Replace with the appropriate fee
        gas: '200000' // Adjust the gas value as needed
    };

    // Broadcast the transaction
    try {
        const result = await signingClient.signAndBroadcast(account.address, [msg], fee, '');
        console.log('Transaction Result:', result);
    } catch (error) {
        console.error('Error issuing Smart Token:', error);
    }
}

issueSmartToken();
```

### Sending Smart Tokens

Example: Send a Smart Token

```javascript
const { DirectSecp256k1Wallet } = require('@cosmjs/proto-signing');
const { fromHex } = require('@cosmjs/encoding');
const mchainjs = require('mchainjs');

async function sendTokens() {
  const publicRpc = 'https://testnet.rpc.mchain.network';
  const privKey = 'your_private_key';

  // Create a wallet from a private key
  const wallet = await DirectSecp256k1Wallet.fromKey(fromHex(privKey), 'm');
  const [firstAccount] = await wallet.getAccounts();

  const signingClient = await mchainjs.getSigningMchainClient({
    rpcEndpoint: publicRpc,
    signer: wallet
  });

  // Send tokens
  try {
    const result = await signingClient.sendTokens(
      firstAccount.address,
      'recipient_address',
      [{ denom: `umytoken-${firstAccount.address}`, amount: '100000' }],
      {
        amount: [{ amount: '1', denom: 'umark' }],
        gas: '50000000'
      }
    );
    console.log(result);
  } catch (e) {
    console.log(e);
  }
}

sendTokens();
```


### Querying Account Balance

Example: Get a balance (cosmos sdk query)

```javascript
async function getBalance() {
  // ... (initialize wallet and client)
  
  // create a mchain client factory
  const client = await mchainjs.mchain.ClientFactory.createRPCQueryClient({
    rpcEndpoint: rpcEndpoint
  });

  //const mchainClient = client.mchain;
  const cosmosClient = client.cosmos;

  const res = await cosmosClient.bank.v1beta1.allBalances({
    address: firstAccount.address
  });
  console.log(res);
}
getBalance();
```

### Working with Mchain Name Service (MNS)

Example: Registering a Domain with MNS

```javascript
async function registerDomain() {
  // ... (initialize wallet and client)

  const name = 'example.mark';

  const { register } = mchainjs.mchain.mns.v1beta1.MessageComposer.withTypeUrl;

  const msg = register({
    creator: firstAccount.address,
    name: name,
    years: '1',
    data: '',
    referrer: ''
  });

  const fee = {
    amount: [{ amount: '20000', denom: 'umark' }],
    gas: '200000'
  };

  try {
    const result = await signingClient.signAndBroadcast(
      firstAccount.address,
      [msg],
      fee,
      ''
    );
    console.log(JSON.stringify(result));
  } catch (e) {
    console.log(e);
  }
}

registerDomain();

```

### More Examples

For more detailed examples and scripts, visit [github.com/mchainnetwork/scripts/js](https://github.com/mchainnetwork/scripts/js).
