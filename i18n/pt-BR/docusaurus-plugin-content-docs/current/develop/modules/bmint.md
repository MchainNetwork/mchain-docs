---
sidebar_position: 4
title: Bmint
---

# Módulo Bmint

O módulo Bmint é responsável pela cunhagem do [token BEER](/docs/learn/beer) no Mchain. Para cada bloco gerado, um token BEER é cunhado e concedido ao validador que propõe o bloco e aos seus stakers.

## Interagindo com o Token BEER

Para interagir com o token BEER na blockchain Mchain, aqui estão algumas das funcionalidades que você pode usar:

- **Transações de BEER:** O módulo `bank` do Cosmos SDK é a sua principal ferramenta para operações padrão, como transferências e consultas de saldo. Facilita transações sem problemas com tokens BEER.
- **Queima de Tokens:** Se você deseja reduzir a oferta de tokens BEER em circulação, o token BEER pode ser queimado usando o módulo `burn`, semelhante a outros tokens na plataforma Mchain. Esta característica permite ajustar dinamicamente a oferta do token.

## Parâmetros

Os seguintes parâmetros regem a operação do módulo Bmint:

| Parâmetro          | Descrição                                 | Tipo     | Valor de Exemplo |
|--------------------|-------------------------------------------|----------|------------------|
| `mint_denom`       | A denominação do token cunhado.           | `string` | `"beer"`         |
| `tokens_per_block` | O número de tokens cunhados por bloco.    | `int64`  | `1`              |
