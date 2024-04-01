---
sidebar_position: 2
title: Interactuar con un nodo
---

# Interactuar con un nodo

Esta guía proporciona una visión general de los métodos y herramientas clave para interactuar con un nodo, permitiéndote realizar diversas operaciones como consultar datos de la blockchain, enviar transacciones y más.

## Acceso a un nodo

Hay dos formas principales de interactuar con un nodo en la red de Mchain:

1. **Acceso Directo**: Si estás ejecutando tu propio nodo de Mchain, puedes interactuar directamente con él utilizando la interfaz de línea de comandos (CLI) o APIs. Sigue la guía sobre [Ejecutar un Nodo en Testnet](/docs/validate/joining-testnet) para la configuración inicial.
2. **Nodos Públicos**: Alternativamente, puedes conectarte a nodos públicos proporcionados por Mchain u otros proveedores de servicios.

## Usando la interfaz de línea de comandos (CLI)

La interfaz de línea de comandos de Mchain es una herramienta poderosa para la interacción directa con tu nodo. Aquí tienes algunos comandos comunes de CLI:

- `mchaind status`: Muestra el estado actual del nodo.
- `mchaind query`: Permite la consulta de datos de la blockchain, como saldos de cuentas, historial de transacciones, etc.
- `mchaind tx`: Habilita la creación y difusión de transacciones.

## Interactuar a través de APIs

Los nodos de Mchain exponen varias APIs que pueden ser utilizadas para la interacción:

- **API RPC**: Utilizada para consultar datos de la blockchain y enviar transacciones. Puedes acceder a ella a través de solicitudes HTTP.
- **API REST**: Proporciona una manera más amigable de interactuar con tu nodo a través de solicitudes HTTP.

## Configuración de endpoints RPC y REST

Si estás ejecutando tu nodo de Mchain:

1. **Endpoint RPC**: Configura la opción `rpc.laddr` en el archivo de configuración de tu nodo a la IP y puerto deseados.
2. **Endpoint REST**: Establece `api.laddr` en el archivo de configuración para habilitar el acceso a la API REST.

## Ejemplo: Consultar datos de la Blockchain

Para consultar el saldo de una cuenta usando CLI:

```bash
mchaind query bank balances [dirección-de-cuenta] --chain-id [id-de-cadena]
```

Para acceso API, envía una solicitud HTTP GET al endpoint REST:

```http
GET http://[ip-del-nodo]:[puerto-rest]/bank/balances/[dirección-de-cuenta]
```

## Ejemplo: Enviar una transacción

Envía una transacción utilizando CLI:

```bash
mchaind tx send [de-cuenta] [a-cuenta] [cantidad] --chain-id [id-de-cadena] --from [nombre-de-clave] --fees [tarifa]
```

A través de la API, envía una solicitud HTTP POST con los detalles de la transacción:

```http
POST http://[ip-del-nodo]:[puerto-rest]/txs
```
