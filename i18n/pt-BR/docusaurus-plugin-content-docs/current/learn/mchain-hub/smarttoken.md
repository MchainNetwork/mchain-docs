---
sidebar_position: 5
title: Smart Tokens
---

# Smart Tokens

Os Smart Tokens são uma parte integral do ecossistema Mchain, oferecendo um meio versátil e flexível para a criação e gestão de tokens. Este guia fornece uma visão geral dos Smart Tokens e suas funcionalidades no Mchain Hub.

**URL do Testnet:** https://testnet.hub.mchain.network/mchain/smarttoken

## Entendendo os Smart Tokens

Um Smart Token no Mchain é um token personalizado com várias características e configurações. Ele pode representar qualquer coisa, desde um ativo digital até um token de utilidade ou governança dentro do ecossistema Mchain.

### Características principais dos Smart Tokens

- **Nome**: O nome completo do Smart Token, como "Pontos de Hambúrguer".
- **Símbolo**: Um identificador abreviado para o Smart Token, geralmente de 1 a 6 caracteres, como "BTC" para Bitcoin.
- **Características do Token**: Os Smart Tokens vêm com características configuráveis:
    - **Cunhagem**: Permite a criação adicional de moedas, aumentando o suprimento total. Uma vez estabelecida, esta característica pode ser desativada, mas não reativada.
    - **Queima**: Permite aos usuários destruir moedas, reduzindo o suprimento. Inclui uma opção para enviar moedas para um endereço de queima específico.
    - **Envio**: Ativa a transferibilidade de tokens entre usuários. Se desativado, apenas o proprietário ou cunhador do token pode realizar transferências.
    - **Envio Gratuito**: Permite a devolução de tokens ao proprietário ou cunhador sem incorrer em custos de transação, às custas do destinatário.
    - **Lista Branca**: Habilita uma lista de usuários autorizados a receber o token.
    - **Congelamento**: Permite o congelamento global de transferências e a criação de uma lista de endereços congelados, restringindo as transferências de tokens.

### Economia do Token

- **Configuração de Decimais**: Estabelece o número de decimais para o Smart Token, por padrão é 6. Tokens sem decimais são definidos como 0.
- **Configuração de Subunidade**: Define o símbolo da denominação mais pequena do token, geralmente o símbolo principal precedido por "u". Em tokens sem decimais, pode coincidir com o símbolo principal.

### Gestão do Token
- **Configuração de Suprimento Máximo**: Estabelece um limite no número de moedas que podem ser criadas, estabelecendo um teto no suprimento total.
- **Configuração de Suprimento Inicial**: Permite a cunhagem inicial de moedas ao emitir o token. Se a cunhagem estiver ativa, este valor pode ser zero, permitindo futuras cunhagens.

### Taxas do Token
- **Taxa de Queima no Envio**: Percentagem de tokens enviados para serem "queimados" e removidos da circulação.
- **Taxa de Comissão no Envio**: Percentagem de tokens enviados como comissão ao criador do token ou uma conta designada.
- **Taxa de Staking no Envio**: Percentagem de tokens enviados para recompensar o validador do bloco e seus stakers.
- **Taxa Comunitária no Envio**: Percentagem de tokens enviados ao "fundo comunitário" para apoiar a comunidade e o desenvolvimento do projeto.

### Informação adicional
- **Detalhes do Smart Token**: Ver detalhes como o suprimento atual, suprimento máximo, autoridade, cunhador e metadados.
- **Titulares do Token**: Consultar a lista de titulares de tokens e suas respectivas quantidades e percentagens.
- **Total Queimado**: Ver a quantidade total de tokens queimados.
- **URI**: Estabelecer ou atualizar o URI para Smart Tokens específicos.
- **Taxa de Emissão**: O custo associado à emissão do Smart Token, destinado a recompensar validadores e stakers.

Os Smart Tokens no Mchain oferecem uma abordagem robusta e personalizável para a criação e gestão de tokens, atendendo a uma ampla gama de casos de uso no espaço blockchain.
