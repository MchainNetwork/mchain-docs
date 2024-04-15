---
sidebar_position: 4
title: Validator Tools
---

# Validator Tools

### Monitoring and Alerts for Cosmos Nodes

https://github.com/kj89/cosmos_node_monitoring

Provides a concise guide for monitoring validators, including scripts for installation, configuration of Prometheus and Grafana, and setting up Telegram alerts. The monitoring stack is deployed on a separate machine and runs on a basic VPS, facilitating supervision in case of validator failures.

### Cosmos Validator Mission Control

https://github.com/Chainflow/cosmos-validator-mission-control

A free and open-source monitoring and alert dashboard for validator infrastructures, developed by Chainflow and Vitwit and funded by the Interchain Foundation, is designed for validators operating on Cosmos SDK-based networks and is particularly useful for smaller operators with limited resources. Includes three customized Grafana dashboards for monitoring validator health and a configurable alert module to send warnings and alarms via Telegram or email.

### Cosmos Validator Missed Block Monitor and Alerts

https://github.com/gaia/cosmosvalmon

This tool monitors and logs missed blocks by a validator, sending alerts only when a configured threshold is reached. It records details such as time, block height, block proposer ID, and the number of validators that missed the block, which helps analyze and improve validator performance.

### Cosmosvisor

https://docs.cosmos.network/v0.46/run-node/cosmovisor.html

Cosmovisor is a process manager designed for Cosmos SDK application binaries. Its primary function is to monitor the governance module for incoming chain upgrade proposals. When an upgrade proposal is approved, Cosmovisor automates the upgrade process: it downloads the new binary, stops the current binary, switches to the new one, and restarts the node with this updated binary. This tool simplifies the upgrade process, ensuring that nodes are seamlessly and efficiently updated in line with governance decisions.
