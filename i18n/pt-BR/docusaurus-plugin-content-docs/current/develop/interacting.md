---
sidebar_position: 2
title: Interagindo com um Nó
---

# Interagindo com um Nó

Este guia oferece uma visão geral dos métodos e ferramentas principais para interagir com um nó, permitindo realizar várias operações como consultar dados da blockchain, enviar transações e mais.

## Acesso a um Nó

Existem duas formas principais de interagir com um nó na rede Mchain:

1. **Acesso Direto**: Se você estiver executando seu próprio nó Mchain, pode interagir diretamente com ele usando a interface de linha de comando (CLI) ou APIs. Siga o guia sobre [Executar um Nó em Testnet](/docs/validate/joining-testnet) para a configuração inicial.
2. **Nós Públicos**: Alternativamente, você pode se conectar a nós públicos fornecidos pelo Mchain ou outros provedores de serviços.

## Usando a Interface de Linha de Comando (CLI)

A interface de linha de comando do Mchain é uma ferramenta poderosa para interação direta com o seu nó. Aqui estão alguns comandos comuns de CLI:

- `mchaind status`: Exibe o status atual do nó.
- `mchaind query`: Permite a consulta de dados da blockchain, como saldos de contas, histórico de transações, etc.
- `mchaind tx`: Habilita a criação e envio de transações.

## Interagindo por Meio de APIs

Os nós do Mchain expõem várias APIs que podem ser usadas para interação:

- **API RPC**: Usada para consultar dados da blockchain e enviar transações. Você pode acessá-la por meio de solicitações HTTP.
- **API REST**: Fornece uma maneira mais amigável de interagir com o seu nó por meio de solicitações HTTP.

## Configuração de Endpoints RPC e REST

Se você estiver executando seu próprio nó Mchain:

1. **Endpoint RPC**: Configure a opção `rpc.laddr` no arquivo de configuração do seu nó para o IP e porta desejados.
2. **Endpoint REST**: Defina `api.laddr` no arquivo de configuração para habilitar o acesso à API REST.

## Exemplo: Consultar Dados da Blockchain

Para consultar o saldo de uma conta usando CLI:

```bash
mchaind query bank balances [endereço-da-conta] --chain-id [id-da-cadeia]
```

Para acesso via API, envie uma solicitação HTTP GET para o endpoint REST:

```http
GET http://[ip-do-nó]:[porta-rest]/bank/balances/[endereço-da-conta]
```

## Exemplo: Enviar uma Transação

Envie uma transação usando CLI:

```bash
mchaind tx send [de-conta] [para-conta] [quantidade] --chain-id [id-da-cadeia] --from [nome-da-chave] --fees [taxa]
```

Através da API, envie uma solicitação HTTP POST com os detalhes da transação:

```http
POST http://[ip-do-nó]:[porta-rest]/txs
```
