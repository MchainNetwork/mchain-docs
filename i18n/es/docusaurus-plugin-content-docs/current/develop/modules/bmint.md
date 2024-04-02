---
sidebar_position: 4
title: Bmint
---

# Módulo Bmint

El módulo Bmint es responsable de acuñar el [token BEER](/docs/learn/beer) en Mchain. Por cada bloque generado, se acuña un token BEER y se otorga al validador que propone el bloque y a sus stakers.

## Interactuando con el Token BEER

Para interactuar con el token BEER en la blockchain de Mchain, aquí hay algunas de las funcionalidades que puedes utilizar:

- **Transacciones de BEER:** El módulo `bank` del Cosmos SDK es tu herramienta principal para operaciones estándar como transferencias y consultas de saldo. Facilita transacciones sin problemas con tokens BEER.
- **Quema de tokens:** Si deseas reducir la oferta de tokens BEER en circulación, el token BEER puede ser quemado utilizando el módulo `burn`, similar a otros tokens en la plataforma Mchain. Esta característica permite ajustar dinámicamente la oferta del token.

## Parámetros

Los siguientes parámetros rigen la operación del módulo Bmint:

| Parámetro          | Descripción                             | Tipo     | Valor de ejemplo |
|--------------------|-----------------------------------------|----------|------------------|
| `mint_denom`       | La denominación del token acuñado.       | `string` | `"beer"`         |
| `tokens_per_block` | El número de tokens acuñados por bloque. | `int64`  | `1`              |