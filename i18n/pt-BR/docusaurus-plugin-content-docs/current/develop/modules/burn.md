---
sidebar_position: 3
title: Burn
---

# Módulo Burn

O módulo Burn no Mchain permite a queima de tokens específicos, incluindo MARK e qualquer Smart Token com a função de queima ativada.

## Comando de Queima

Permite que os usuários queimem uma quantidade especificada de uma denominação dada.

```sh
mchaind tx burn burn [amount][denom] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Exemplo**:
```bash
$ mchaind tx burn burn 1000000umark --from=mykey --chain-id=mchain-testnet-1 --fees=50umark
```

Este comando:
1. Queimará `1 MARK`.
2. Executará a transação da conta vinculada a `mykey`.

## Consultar Total Queimado por Denominação

Recupera o total de moedas queimadas para uma denominação específica.

```sh
mchaind q burn total-burned-by-denom [denom]
```

## Consultar Endereço de Queima

Recupera o endereço de queima. Qualquer moeda enviada para o Endereço de Queima é automaticamente queimada.

```sh
mchaind q burn burn-address
```

## Parâmetros

O módulo Burn não possui parâmetros configuráveis.
