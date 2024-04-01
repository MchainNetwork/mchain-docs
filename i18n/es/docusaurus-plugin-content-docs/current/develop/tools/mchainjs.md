---
sidebar_position: 2
title: MchainJS
---

# MchainJS: SDK de JavaScript para la Red Mchain

MchainJS es un Kit de Desarrollo de Software (SDK) de JavaScript avanzado diseñado para desarrollar aplicaciones en la blockchain de la Red Mchain. Está diseñado para simplificar la interacción con la blockchain, facilitando a los desarrolladores la creación de aplicaciones versátiles basadas en blockchain.

## Características

- **TypeScript**: Ofrece tipado fuerte y reducción de errores.
- **Estructuras de Datos Simplificadas**: Proporciona interfaces fáciles de usar para datos de blockchain.
- **Soporte Completo de Mensajes y Transacciones**: Facilita un amplio espectro de funciones de blockchain.
- **Capacidades de Consulta Amplias**: Permite la extensa recuperación de datos de la blockchain.
- **Compatibilidad Multiplataforma**: Asegura funcionalidad en Node.js, navegadores web y React Native.
- **Integración con Módulos Mchain**: Se conecta sin problemas con características únicas de Mchain como el Servicio de Nombres Mchain y Smart Tokens.

## Instalación

Instala MchainJS a través de npm o yarn:

```bash
npm install mchainjs
# o
yarn add mchainjs
```

## Ejemplos

Después de la instalación, puedes incorporar MchainJS en tus proyectos. Aquí tienes algunos ejemplos simplificados:

### Interacción con Smart Tokens

Ejemplo: Emitiendo Smart Tokens

```javascript
const { DirectSecp256k1Wallet } = require('@cosmjs/proto-signing');
const { fromHex } = require('@cosmjs/encoding');
const mchainjs = require('mchainjs'); // Asumiendo que mchainjs ya está instalado

// Define tu clave privada y el punto final RPC de Mchain
const privKey = 'tu_clave_privada_aquí'; // Sustituye por tu clave privada
const rpcEndpoint = 'https://testnet.rpc.mchain.network'; // Sustituye por el punto final RPC apropiado

async function issueSmartToken() {

    // Crea una cartera a partir de una clave privada
    const wallet = await DirectSecp256k1Wallet.fromKey(fromHex(privKey), 'm');

    // Recupera la primera cuenta de la cartera
    const [account] = await wallet.getAccounts();

    // Crea un cliente de firma
    const signingClient = await mchainjs.getSigningMchainClient({
        rpcEndpoint: rpcEndpoint,
        signer: wallet
    });

    // Define los parámetros del Smart Token
    const smartTokenParams = {
        symbol: 'MYTOKEN',  // Sustituye por tu símbolo de token
        name: 'My Smart Token', // Sustituye por el nombre de tu token
        subunit: 'umytoken', // Sustituye por tu subunidad de token
        decimals: 6,
        initialSupply: '1000000', // Suministro inicial en la unidad más pequeña
        maxSupply: '1000000000000', // Suministro máximo en la unidad más pequeña
        minter: account.address,
        authority: account.address,
        sendBurnRate: '0.01',
        sendCommissionRate: '0.01',
        sendStakeRate: '0.01',
        sendCommunityRate: '0.01',
        features: ['minting', 'burning', 'sending', 'free_send', 'whitelist', 'freezing']
    };

    // Crea el mensaje para emitir el Smart Token
    const { issue } = mchainjs.mchain.smarttoken.v1beta1.MessageComposer.withTypeUrl;
    const msg = issue(smartTokenParams);

    // Define la tarifa de la transacción
    const fee = {
        amount: [{ amount: '2000', denom: 'umark' }], // Sustituye por la tarifa apropiada
        gas: '200000' // Ajusta el valor del gas según sea necesario
    };

    // Transmite la transacción
    try {
        const result = await signingClient.signAndBroadcast(account.address, [msg], fee, '');
        console.log('Resultado de la Transacción:', result);
    } catch (error) {
        console.error('Error al emitir Smart Token:', error);
    }
}

issueSmartToken();
```

### Enviando Smart Tokens

Ejemplo: Enviar un Smart Token

```javascript
const { DirectSecp256k1Wallet } = require('@cosmjs/proto-signing');
const { fromHex } = require('@cosmjs/encoding');
const mchainjs = require('mchainjs');

async function sendTokens() {
  const publicRpc = 'https://testnet.rpc.mchain.network';
  const privKey = 'tu_clave_privada';

  // Crea una cartera a partir de una clave privada
  const wallet = await DirectSecp256k1Wallet.fromKey(fromHex(privKey), 'm');
  const [firstAccount] = await wallet.getAccounts();

  const signingClient = await mchainjs.getSigningMchainClient({
    rpcEndpoint: publicRpc,
    signer: wallet
  });

  // Envía tokens
  try {
    const result = await signingClient.sendTokens(
      firstAccount.address,
      'dirección_del_destinatario',
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


### Consultando Saldo de la Cuenta

Ejemplo: Obtener un saldo (consulta sdk cosmos)

```javascript
async function getBalance() {
  // ... (inicializa la cartera y el cliente)
  
  // crea una fábrica de clientes de mchain
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

### Trabajando con Mchain Name Service (MNS)

Ejemplo: Registrando un Dominio con MNS

```javascript
async function registerDomain() {
  // ... (inicializa la cartera y el cliente)

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

### Más Ejemplos

Para ejemplos más detallados y scripts, visita [github.com/mchainnetwork/scripts/js](https://github.com/mchainnetwork/scripts/js).
