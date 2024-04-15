---
sidebar_position: 2
title: Verificar seu saldo v1
---

# Como verificar o saldo do seu Wallet.dat para a migração para Mchain v2

:::danger Conteúdo Arquivado
Esta seção da documentação serve como um arquivo e referência histórica. Para obter as informações mais recentes e atualizações, consulte a documentação atual da Mchain.
:::

Se você é um usuário da Mchain e está se preparando para migrar para a versão 2 da cadeia, é essencial garantir que seu wallet.dat tenha saldo antes de prosseguir com a migração. Para ajudá-lo com isso, fornecemos uma ferramenta simples que permite verificar o saldo de seus endereços MAR sem compartilhar sua chave privada. Além disso, se você só precisa verificar o saldo de um único endereço, pode usar nossa ferramenta em https://mchain.network/balance para obter essa informação. No entanto, este guia é projetado especificamente para uma consulta em massa de endereços do seu wallet.dat. Usando um arquivo HTML e o comando ‘dumpwallet’ no programa de desktop Mchain Core (semelhante ao Bitcoin Core), você pode processar seu wallet.dat localmente e consultar o saldo de seus endereços.

Siga estes passos simples para garantir que seus fundos estejam prontos para a migração.

*** Passo 1: Baixar o Arquivo HTML ***

Para começar, clique no link fornecido [Baixar Arquivo HTML](https://mchain.network/balance/processAddresses.html). Este arquivo ‘processAddresses.html’ permitirá que você carregue o dump do wallet.dat e verifique os saldos de seus endereços.

*** Passo 2: Obter o Dump do Wallet.dat ***

Antes de verificar o saldo de seus endereços, você precisa obter o dump do seu wallet.dat usando o programa de desktop Mchain Core. Siga estes passos:

1. Abra o programa Mchain Core em seu computador.
2. Vá para o menu “Ajuda” e selecione “Janela de Depuração”.
3. Na aba “Console”, você verá um campo onde pode inserir comandos.
4. Digite o seguinte comando e pressione Enter:

``dumpwallet Caminho/Para/Salvar/walletdump.txt``

Substitua “Caminho/Para/Salvar/walletdump.txt” pelo local e nome do arquivo onde você deseja salvar o dump do wallet.dat.

*** Passo 3: Carregar o Dump e Verificar Saldos ***

Uma vez que você tenha o arquivo walletdump.txt contendo o dump do wallet.dat, abra o arquivo HTML que você baixou no Passo 1 em seu navegador web.

*** Passo 4: Processar e Verificar Saldos ***

Na página HTML, você encontrará um campo para carregar o arquivo walletdump.txt. Clique no botão “Enviar Arquivo” e selecione o arquivo que você obteve no Passo 2. A ferramenta processará seu wallet.dat localmente e consultará a Mchain para o saldo de cada endereço MAR sem compartilhar sua chave privada.

*** Passo 5: Ver Endereços com Saldos ***

Após concluir o processo, a ferramenta exibirá os endereços MAR com saldo e suas chaves privadas correspondentes. Guarde esta informação com segurança, pois você precisará dela ao solicitar a migração para Mchain v2, seguindo os passos fornecidos pela equipe da Mchain.