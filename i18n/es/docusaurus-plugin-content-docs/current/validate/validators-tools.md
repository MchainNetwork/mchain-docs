---
sidebar_position: 4
title: Herramientas para Validadores
---

# Herramientas para Validadores

### Monitoreo y alertas para nodos Cosmos

https://github.com/kj89/cosmos_node_monitoring

Proporciona una guía concisa para configurar monitoreo para validadores, incluyendo scripts para la instalación, configuración de Prometheus y Grafana, y establecimiento de alertas de Telegram. El stack de monitoreo se despliega en una máquina separada y se ejecuta en un VPS básico, facilitando la supervisión en caso de fallos del validador.

### Cosmos Validator Mission Control

https://github.com/Chainflow/cosmos-validator-mission-control

Es un tablero de monitoreo y alerta gratuito y de código abierto para infraestructuras de validadores, desarrollado por Chainflow y Vitwit y financiado por la Interchain Foundation. Diseñado para validadores que operan en redes basadas en Cosmos SDK, especialmente útil para operadores más pequeños con recursos limitados. Incluye tres tableros personalizados de Grafana para monitorear la salud del validador y un módulo de alerta configurable para enviar advertencias y alarmas a través de Telegram o correo electrónico.

### Monitor de bloques perdidos y alertas para validadores de Cosmos

https://github.com/gaia/cosmosvalmon

Esta herramienta monitorea y registra los bloques perdidos por un validador, enviando alertas solo cuando se alcanza un umbral configurado. Registra detalles como el tiempo, la altura del bloque, la ID del proponente del bloque y el número de validadores que perdieron el bloque, lo cual es útil para analizar y mejorar el rendimiento del validador.

### Cosmovisor

https://docs.cosmos.network/v0.46/run-node/cosmovisor.html

Cosmovisor es un gestor de procesos diseñado para binarios de aplicaciones Cosmos SDK. Su función principal es monitorear el módulo de gobernanza para detectar propuestas de actualización de la cadena. Cuando se aprueba una propuesta de actualización, Cosmovisor automatiza el proceso: descarga el nuevo binario, detiene el binario actual, cambia al nuevo y reinicia el nodo con este binario actualizado. Esta herramienta simplifica el proceso de actualización, asegurando que los nodos se actualicen de manera eficiente y sin interrupciones.