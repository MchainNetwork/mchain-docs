---
sidebar_position: 1
title: Introdução
---

# Visão Geral dos Módulos

## Módulos Mchain

Os módulos Mchain são cruciais para a funcionalidade e operações do blockchain Mchain. Eles oferecem uma ampla gama de funcionalidades, organizadas de maneira ordenada no diretório Mchain. Aqui está uma lista desses módulos com links para informações mais detalhadas:

| Módulo Personalizado                    | Funcionalidade                                                                                                  | Status            |
|-----------------------------------------|-----------------------------------------------------------------------------------------------------------------|-------------------|
| [smarttoken](./smarttoken)              | Permite a criação de Smart Tokens programáveis na Mchain.                                                       | Ativo             |
| [mns](./mns)                            | Serviço de Nomes Mchain - Gerencia nomes de domínio na blockchain Mchain e mercado de domínios.                 | Ativo             |
| [burn](./burn)                          | Permite a queima de tokens específicos, incluindo MARK, BEER e qualquer Smart Token.                            | Ativo             |
| [proofofexistence](./proofofexistence)  | Para registrar e verificar a existência de qualquer dado ou documento.                                          | Ativo             |
| [epoch](./epoch)                        | Gerencia atividades e eventos limitados por tempo cruciais para aplicações como jogos.                          | Em Desenvolvimento |
| [oracle](./oracle)                      | Módulo para integração de feeds de dados externos e oráculos.                                                   | Em Desenvolvimento |
| [dex](./dex)                            | Exchange descentralizada para negociação de ativos e criptomoedas na Mchain.                                    | Em Desenvolvimento |

## Módulos Cosmos

Os módulos do Cosmos SDK fornecem as ferramentas essenciais para o desenvolvimento de blockchains personalizáveis e interoperáveis. Eles variam desde o gerenciamento de contas até protocolos de consenso dentro do diretório padrão do Cosmos SDK.

Para saber mais sobre como construir e explorar esses módulos do Cosmos, visite a [documentação dos Módulos Cosmos SDK](https://docs.cosmos.network/main/build/modules).

| Módulo         | Descrição                                                                        |
|----------------|----------------------------------------------------------------------------------|
| auth           | Gerencia a autenticação de contas e transações.                                  |
| authz          | Autorização para contas agirem em nome de outras.                                |
| bank           | Fornece funcionalidades para transferências de tokens.                           |
| crisis         | Interrompe o blockchain sob condições críticas específicas.                      |
| distribution   | Gerencia a distribuição de taxas e tokens de staking.                             |
| evidence       | Lida com evidências relacionadas a má condutas como assinatura dupla.            |
| feegrant       | Permite a concessão de permissões de taxa para transações.                        |
| gov            | Facilita propostas e votações on-chain.                                          |
| mint           | Responsável por criar novas unidades de token de staking.                        |
| slashing       | Implementa mecanismos de punição de validadores.                                 |
| staking        | Fornece uma camada Proof-of-Stake para blockchains.                              |
| upgrade        | Gerencia e coordena atualizações de software.                                    |
| nft            | Implementa um módulo NFT baseado no ADR43.                                       |
| consensus      | Modifica os parâmetros de consenso do CometBFT's ABCI.                           |
| genutil        | Oferece utilitários de gênese para o Cosmos SDK.                                 |
