---
sidebar_position: 2
title: mchaind
---

# `mchaind`: A Interface de Linha de Comando Principal para Mchain

`mchaind` é a ferramenta principal de interface de linha de comando (CLI) para interação com o blockchain Mchain. É o portal para várias operações de blockchain, desde consultar o estado do blockchain até executar transações e gerenciar nós. Seja você um desenvolvedor, validador ou entusiasta, `mchaind` oferece [uma série de comandos](https://github.com/MchainNetwork/mchain/blob/main/docs/cli/toc.md) para interagir com o ecossistema Mchain.

## Principais Recursos

- **Interação com Blockchain**: Consultar dados do blockchain, enviar transações e explorar o estado do blockchain.
- **Gerenciamento de Nós**: Inicializar, configurar e gerenciar nós Mchain.
- **Gerenciamento de Carteiras**: Criar e gerenciar carteiras, gerar chaves e lidar com tokens.
- **Operações de Staking**: Participar do staking, delegar tokens e gerenciar recompensas de staking.
- **Participação em Governança**: Criar propostas, votar e participar do processo de governança.
- **Interação com Smart Tokens**: Emitir, cunhar e interagir com Smart Tokens na rede Mchain.

## Instalação

`mchaind` é geralmente distribuído como parte dos binários de lançamento da Mchain. Para instalar o `mchaind`, você pode baixar a versão mais recente do [repositório do GitHub da Mchain](https://github.com/mchainnetwork/mchain/releases) ou usar o [Instalador da Mchain](/docs/validate/joining-testnet).

## Uso Básico

Após instalar o `mchaind`, você pode usar a interface de linha de comando para interagir com a rede Mchain. Aqui estão alguns comandos básicos:

- Inicializar um novo nó Mchain:
  ```
  mchaind init [nome-do-nó] --chain-id [chain-id]
  ```

- Iniciar um nó Mchain:
  ```
  mchaind start
  ```

- Consultar informações do blockchain:
  ```
  mchaind query [subcomando]
  ```

- Enviar transações:
  ```
  mchaind tx [subcomando]
  ```

- Gerenciar chaves e carteiras:
  ```
  mchaind keys [subcomando]
  ```

## Recursos Avançados

O `mchaind` também oferece funcionalidades avançadas, incluindo:

- **Interação com Módulo Personalizado**: Interagir com módulos personalizados como Mchain Name Service (MNS), Smart Tokens e outros.
- **Exportar e Importar Estado**: Exportar e importar estado do blockchain para configuração ou migração de nó.
- **Ferramentas de Depuração**: Utilizar ferramentas de depuração e diagnóstico para solucionar problemas do nó.

## Diretório de Trabalho

O diretório de trabalho principal para `mchaind` é `$HOME/.mchain`. É um local crucial onde são armazenados todos os arquivos de configuração, dados da blockchain e dados chave relacionados às contas do Mchain.

`mchaind` oferece a flexibilidade de escolher um diretório de trabalho diferente. Você pode conseguir isso utilizando a opção `--home` durante a execução do `mchaind`.

## Documentação e Suporte

Para documentação abrangente sobre o uso do `mchaind`, incluindo descrições detalhadas dos comandos, visite a [documentação CLI da Mchain](https://github.com/MchainNetwork/mchain/blob/main/docs/cli/toc.md). A comunidade e a equipe de desenvolvimento também fornecem suporte através de vários canais, incluindo o Discord da Mchain e problemas no GitHub.
