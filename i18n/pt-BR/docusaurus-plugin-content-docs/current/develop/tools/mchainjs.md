---
sidebar_position: 2
title: MchainJS
---

# MchainJS: SDK JavaScript para a Rede Mchain

MchainJS é um Software Development Kit (SDK) JavaScript avançado projetado para o desenvolvimento de aplicações na rede blockchain Mchain. Ele é criado para simplificar a interação com o blockchain, tornando mais acessível para os desenvolvedores criarem aplicações versáteis baseadas em blockchain.

## Recursos

- **TypeScript**: Oferece tipagem forte e redução de erros.
- **Estruturas de Dados Simplificadas**: Fornece interfaces fáceis de usar para dados do blockchain.
- **Suporte Completo a Mensagens e Transações**: Facilita um amplo espectro de funções do blockchain.
- **Capacidades Abrangentes de Consulta**: Permite extensa recuperação de dados do blockchain.
- **Compatibilidade Cross-Platform**: Garante funcionalidade em Node.js, navegadores web e React Native.
- **Integração com Módulos Mchain**: Conecta-se perfeitamente com recursos exclusivos da Mchain, como Mchain Name Service e Smart Tokens.

## Instalação

Instale o MchainJS via npm ou yarn:

```bash
npm install mchainjs
# ou
yarn add mchainjs
```

## Exemplos

Após a instalação, você pode incorporar o MchainJS em seus projetos. Aqui estão alguns exemplos simplificados:

### Interagindo com Smart Tokens

Exemplo: Emissão de Smart Tokens

```javascript
const { DirectSecp256k1Wallet } = require('@cosmjs/proto-signing');
const { fromHex } = require('@cosmjs/encoding');
const mchainjs = require('mchainjs'); // Assumindo que mchainjs já está instalado

// Defina sua chave privada e endpoint RPC da Mchain
const privKey = 'sua_chave_privada_aqui'; // Substitua pela sua chave privada
const rpcEndpoint = 'https://testnet.rpc.mchain.network'; // Substitua pelo endpoint RPC apropriado

async function issueSmartToken() {

    // Crie uma carteira a partir de uma chave privada
    const wallet = await DirectSecp256k1Wallet.fromKey(fromHex(privKey), 'm');

    // Recupere a primeira conta da carteira
    const [account] = await wallet.getAccounts();

    // Crie um cliente de assinatura
    const signingClient = await mchainjs.getSigningMchainClient({
        rpcEndpoint: rpcEndpoint,
        signer: wallet
    });

    // Defina os parâmetros do Smart Token
    const smartTokenParams = {
        symbol: 'MYTOKEN',  // Substitua pelo símbolo do seu token
        name: 'Meu Smart Token', // Substitua pelo nome do seu token
        subunit: 'umytoken', // Substitua pela subunidade do seu token
        decimals: 6,
        initialSupply: '1000000', // Fornecimento inicial na menor unidade
        maxSupply: '1000000000000', // Fornecimento máximo na menor unidade
        minter: account.address,
        authority: account.address,
        sendBurnRate: '0.01',
        sendCommissionRate: '0.01',
        sendStakeRate: '0.01',
        sendCommunityRate: '0.01',
        features: ['minting', 'burning', 'sending', 'free_send', 'whitelist', 'freezing']
    };

    // Crie a mensagem para emitir o Smart Token
    const { issue } = mchainjs.mchain.smarttoken.v1beta1.MessageComposer.withTypeUrl;
    const msg = issue(smartTokenParams);

    // Defina a taxa de transação
    const fee = {
        amount: [{ amount: '2000', denom: 'umark' }], // Substitua pela taxa apropriada
        gas: '200000' // Ajuste o valor do gás conforme necessário
    };

    // Transmita a transação
    try {
        const result = await signingClient.signAndBroadcast(account.address, [msg], fee, '');
        console.log('Resultado da Transação:', result);
    } catch (error) {
        console.error('Erro ao emitir Smart Token:', error);
    }
}

issueSmartToken();
```

### Enviando Smart Tokens

Exemplo: Enviar um Smart Token

```javascript
const { DirectSecp256k1Wallet } = require('@cosmjs/proto-signing');
const { fromHex } = require('@cosmjs/encoding');
const mchainjs = require('mchainjs');

async function sendTokens() {
  const publicRpc = 'https://testnet.rpc.mchain.network';
  const privKey = 'sua_chave_privada';

  // Crie uma carteira a partir de uma chave privada
  const wallet = await DirectSecp256k1Wallet.fromKey(fromHex(privKey), 'm');
  const [firstAccount] = await wallet.getAccounts();

  const signingClient = await mchainjs.getSigningMchainClient({
    rpcEndpoint: publicRpc,
    signer: wallet
  });

  // Envie tokens
  try {
    const result = await signingClient.sendTokens(
      firstAccount.address,
      'endereço_do_destinatário',
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

### Consultando Saldo da Conta

Exemplo: Obter um saldo (consulta sdk cosmos)

```javascript
async function getBalance() {
  // ... (inicializar carteira e cliente)
  
  // crie um cliente de consulta RPC da mchain
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

### Trabalhando com Mchain Name Service (MNS)

Exemplo: Registrando um Domínio com o MNS

```javascript
async function registerDomain() {
  // ... (inicializar carteira e cliente)

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

### Mais Exemplos

Para exemplos mais detalhados e scripts, visite [github.com/mchainnetwork/scripts/js](https://github.com/mchainnetwork/scripts/js).
