---
sidebar_position: 4
title: Ferramentas para Validadores
---

# Ferramentas para Validadores

### Monitoramento e Alertas para Nós Cosmos

https://github.com/kj89/cosmos_node_monitoring

Fornece um guia conciso para configurar o monitoramento para validadores, incluindo scripts para instalação, configuração do Prometheus e Grafana, e configuração de alertas no Telegram. O stack de monitoramento é implantado em uma máquina separada e roda em um VPS básico, facilitando a supervisão em caso de falhas do validador.

### Cosmos Validator Mission Control

https://github.com/Chainflow/cosmos-validator-mission-control

Um painel de monitoramento e alerta gratuito e de código aberto para infraestruturas de validadores, desenvolvido por Chainflow e Vitwit e financiado pela Interchain Foundation. Projetado para validadores que operam em redes baseadas no Cosmos SDK, especialmente útil para operadores menores com recursos limitados. Inclui três painéis personalizados do Grafana para monitorar a saúde do validador e um módulo de alerta configurável para enviar avisos e alarmes via Telegram ou e-mail.

### Monitor de Blocos Perdidos e Alertas para Validadores Cosmos

https://github.com/gaia/cosmosvalmon

Esta ferramenta monitora e registra blocos perdidos por um validador, enviando alertas apenas quando um limite configurado é atingido. Registra detalhes como o tempo, a altura do bloco, a ID do proponente do bloco e o número de validadores que perderam o bloco, o que é útil para analisar e melhorar o desempenho do validador.

### Cosmosvisor

https://docs.cosmos.network/v0.46/run-node/cosmovisor.html

Cosmovisor é um gerenciador de processos projetado para binários de aplicações Cosmos SDK. Sua função principal é monitorar o módulo de governança para detectar propostas de atualização da cadeia. Quando uma proposta de atualização é aprovada, o Cosmovisor automatiza o processo: baixa o novo binário, para o binário atual, muda para o novo e reinicia o nó com este binário atualizado. Esta ferramenta simplifica o processo de atualização, garantindo que os nós sejam atualizados de forma eficiente e sem interrupções.
