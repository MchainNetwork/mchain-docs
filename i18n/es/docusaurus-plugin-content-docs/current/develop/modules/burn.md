---
sidebar_position: 3
title: Burn
---

# Módulo Burn

El módulo Burn en Mchain permite la quema de tokens específicos, incluyendo MARK y cualquier Smart Token con la función de quema activada.

## Comando de quema

Permite a los usuarios quemar una cantidad especificada de una denominación dada.

```sh
mchaind tx burn burn [amount][denom] --from=<key-name> --chain-id=<chain-id> --fees=<fee>
```

**Ejemplo**:
```bash
$ mchaind tx burn burn 1000000umark --from=mykey --chain-id=mchain-testnet-1 --fees=50umark
```

Este comando:
1. Quemará `1 MARK`.
2. Ejecutará la transacción desde la cuenta vinculada a `mykey`.

## Consultar total quemado por denominación

Recupera el total de monedas quemadas para una denominación específica.

```sh
mchaind q burn total-burned-by-denom [denom]
```

## Consultar dirección de Burn

Recupera la dirección de quema. Cualquier moneda enviada a la Dirección de Burn se quema automáticamente.

```sh
mchaind q burn burn-address
```

## Parámetros

El módulo Burn no tiene parámetros configurables.