---
sidebar_position: 3
title: Validando na Testnet
---

# Validando na Testnet

Tornar-se um validador na testnet da Mchain é um passo essencial antes de juntar-se à mainnet. Esse processo começa uma vez que seu nó está sincronizado com a testnet. Siga o guia sobre [Executar um Nó na Testnet](joining-testnet) para a configuração inicial.

## Passo 1: Configurar uma Carteira no Keyring

Para transformar seu nó em um validador, você deve estabelecer uma carteira dentro do seu porta-chaves. Isso pode ser feito adicionando uma carteira existente usando sua frase-semente ou criando uma nova. Copie e guarde de forma segura a frase mnemônica para a recuperação futura da carteira e anote seu endereço Mchain.

Escolha um backend de porta-chaves (opções: os, file, kwallet, pass, test, memory) para armazenar suas chaves. Os backends 'file' e 'pass' são recomendados para ambientes headless, como servidores. Mais informações sobre backends de porta-chaves estão disponíveis na [documentação do Cosmos SDK](https://docs.cosmos.network/v0.47/user/run-node/keyring).

**Criando uma Nova Carteira:**

- Para o backend de porta-chaves `os`:

  ```bash
  export KEY_NAME=mykey
  mchaind keys add $KEY_NAME
  ```

- Para o backend de porta-chaves `file` (substitua `KEYPASSWD` por uma senha forte de pelo menos 8 caracteres):

  ```bash
  export KEY_NAME=mykey
  export KEYPASSWD=password
  (echo $KEYPASSWD; echo $KEYPASSWD) | mchaind keys add $KEY_NAME --keyring-backend file
  echo $KEYPASSWD | mchaind keys show $KEY_NAME --keyring-backend file
  ```

Para confirmar que a carteira foi adicionada com sucesso ao porta-chaves:

```bash
echo $KEYPASSWD | mchaind keys list --keyring-backend file
```

Continue com os próximos passos para configurar completamente seu nó validador na testnet Mchain.

### Passo 2: Adquirir Tokens MARK da Testnet

Obtenha tokens MARK para a testnet através do [Testnet Faucet](https://testnet.hub.mchain.network/mchain/faucet). Insira seu endereço Mchain e solicite "Obter Tokens de Testnet".

### Passo 3: Recuperar Chave Pública do Validador

Sua chave pública de validador é crucial para a inicialização. Recupere-a usando:

```bash
mchaind tendermint show-validator
```

### Passo 4: Comando de Criação do Validador

Certifique-se de que sua carteira tenha um pequeno saldo de MARK. Crie seu validador com o seguinte comando, preenchido com valores apropriados:

```bash
mchaind tx staking create-validator \
--from=[KEY_NAME] \
--amount=[staking_amount_umark] \
--pubkey=$(mchaind tendermint show-validator) \
--moniker="[moniker_id_of_your_node]" \
--security-contact="[email/método de contato de segurança]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]"
```

Exemplo com valores:

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

Explicação das flags do comando:

- `from`: O KEY_NAME criado para o seu keyring
- `amount`: Quantidade de staking em umark (por exemplo, 1000000000umark equivale a 1000 MARK)
- `pubkey`: Chave pública do validador recuperada anteriormente
- `moniker`: Um nome escolhido para seu validador
- `security-contact`: Email de contato para delegadores
- `chain-id`: A ID da cadeia, como 'mchain-testnet-1' para a testnet da Mchain
- `commission-rate`: A taxa cobrada dos delegadores (por exemplo, 10%)
- `commission-max-rate`: A taxa máxima cobrável dos delegadores (por exemplo, 20%)
- `commission-max-change-rate`: A taxa máxima de mudança diária da comissão (por exemplo, 5% por dia)
- `min-self-delegation`: Fundos pessoais mínimos requeridos para permanecer atrelado (por exemplo, 100 MARK)
- `keyring-backend`: Selecione o backend de chaveiro correto

Se encontrar um erro de 'falta de gás', ajuste o valor do gás:

```bash
--gas=<valor superior ao gasUsed do erro>
```

### Passo 5: Monitorar o Estado do Validador

Para ver o conjunto atual de validadores:

```bash
mchaind query staking validators --limit 300 -o json | jq -r '.validators[] | [.operator_address, .status, (.tokens|tonumber / pow(10; 6)), .commission.update_time[0:19], .description.moniker] | @csv' | column -t -s","
```

Filtrar pelo seu moniker:

```bash
... | grep Mariner
```