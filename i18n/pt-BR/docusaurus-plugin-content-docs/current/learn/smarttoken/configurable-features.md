---
sidebar_position: 2
title: Características Configuráveis
---

# Características Configuráveis dos Smart Tokens

Graças à sua natureza programável, os Smart Tokens do Mchain oferecem um quadro flexível para diversas aplicações. Estas características permitem a criação de tokens personalizados para várias necessidades, fomentando a inovação e o envolvimento na economia circular. Aqui está uma análise de suas principais características configuráveis:

### Emissão de Tokens
- **Definição de Nome**: Nome completo do Smart Token.
  - Exemplo: Pontos de Hambúrguer
- **Definição de Símbolo**: Abreviatura única para o Smart Token, de 1 a 6 caracteres.
  - Exemplo: BTC
- **Configuração de Subunidade**: Símbolo para a denominação mais pequena, geralmente "u" seguido do símbolo principal. Para tokens não decimais, coincide com o símbolo principal.

### Características do Token
- **Cunhagem**: Permite a criação de moedas adicionais, aumentando o suprimento total. Irreversível uma vez desativado.
- **Queima**: Habilita os usuários a destruir moedas, reduzindo o suprimento total. Inclui uma opção específica de endereço de queima. Irreversível uma vez desativado.

### Transferência de Tokens
- **Envio**: Ativa a transferibilidade de tokens. Irreversível uma vez desabilitado.
- **Envio Gratuito**: Devolve tokens ao proprietário ou cunhador sem custos de transação.
- **Lista Branca**: Restringe a recepção de tokens a usuários autorizados. Irreversível.
- **Congelamento**: Congela as transferências globais e cria uma lista de endereços congelados.

### Taxas do Token
Percentuais configuráveis aplicados a cada transação:
- **Taxa de Queima em Envio**: Percentual de tokens a queimar, eliminando-os da circulação.
- **Taxa de Comissão em Envio**: Percentual de tokens como comissão ao criador do token ou uma conta designada.
- **Taxa de Participação em Envio**: Percentual de tokens recompensados ao validador do bloco e seus stakers.
- **Taxa Comunitária em Envio**: Percentual de tokens contribuídos ao fundo comunitário para o suporte e desenvolvimento do projeto.

### Configurações de Suprimento
- **Suprimento Máximo**: Limita a criação total possível de moedas.
- **Suprimento Inicial**: Quantidade de moedas cunhadas ao emitir o token. Futuras cunhagens possíveis se habilitado.
- **Configuração Decimal**: Número de decimais para o token, por padrão 6. Pode ser estabelecido em 0 para tokens sem decimais ou baseados em pontos.

### Parâmetros Configuráveis por Governança
Os Smart Tokens incluem parâmetros configuráveis através da governança da blockchain, melhorando a adaptabilidade e a capacidade de resposta às necessidades da comunidade:

- **Taxa de Emissão**: Um custo associado com a emissão de um Smart Token, destinado a incentivar os validadores e stakers.
- **Taxa de Cunhagem**: Uma tarifa paga pelo emissor ou cunhador ao criar um Smart Token, contribuindo para a Taxa de Emissão.
