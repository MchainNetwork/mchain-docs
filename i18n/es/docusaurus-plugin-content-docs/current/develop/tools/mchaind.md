---
sidebar_position: 2
title: mchaind
---

# `mchaind`: La interfaz de línea de comandos principal para Mchain

`mchaind` es la herramienta principal de interfaz de línea de comandos (CLI) para interactuar con la blockchain de Mchain. Es la puerta de entrada para varias operaciones de blockchain, desde consultar el estado de la blockchain hasta ejecutar transacciones y administrar nodos. Ya seas un desarrollador, validador o entusiasta, `mchaind` proporciona una [suite de comandos](https://github.com/MchainNetwork/mchain/blob/main/docs/cli/toc.md) para interactuar con el ecosistema de Mchain.

## Características clave

- **Interacción con Blockchain**: Consulta datos de blockchain, envía transacciones y explora el estado de la blockchain.
- **Gestión de Nodos**: Inicializa, configura y gestiona nodos de Mchain.
- **Gestión de Carteras**: Crea y gestiona carteras, genera claves y maneja tokens.
- **Operaciones de Staking**: Participa en staking, delega tokens y gestiona recompensas de staking.
- **Participación en la Gobernanza**: Crea propuestas, vota y participa en el proceso de gobernanza.
- **Interacción con Smart Tokens**: Emite, acuña e interactúa con Smart Tokens en la red de Mchain.

## Instalación

`mchaind` se distribuye típicamente como parte de los binarios de lanzamiento de Mchain. Para instalar `mchaind`, puedes descargar la última versión del [repositorio de GitHub de Mchain](https://github.com/mchainnetwork/mchain/releases) o usar el [Instalador de Mchain](/docs/validate/joining-testnet).

## Uso básico

Después de instalar `mchaind`, puedes usar la interfaz de línea de comandos para interactuar con la red de Mchain. Aquí tienes algunos comandos básicos:

- Inicializa un nuevo nodo de Mchain:
  ```
  mchaind init [nombre-del-nodo] --chain-id [chain-id]
  ```

- Inicia un nodo de Mchain:
  ```
  mchaind start
  ```

- Consulta información de la blockchain:
  ```
  mchaind query [subcomando]
  ```

- Envía transacciones:
  ```
  mchaind tx [subcomando]
  ```

- Gestiona claves y carteras:
  ```
  mchaind keys [subcomando]
  ```

## Funcionalidades avanzadas

`mchaind` también ofrece funcionalidades avanzadas, incluyendo:

- **Interacción con Módulos Personalizados**: Interactúa con módulos personalizados como Mchain Name Service (MNS), Smart Tokens y otros.
- **Exportar e Importar Estado**: Exporta e importa el estado de la blockchain para configuración o migración de nodos.
- **Herramientas de Depuración**: Utiliza herramientas de depuración y diagnóstico para solucionar problemas de nodos.

## Directorio de Trabajo

El directorio de trabajo principal para `mchaind` es `$HOME/.mchain`. Es un lugar crucial donde se almacenan todos los archivos de configuración, datos de blockchain y datos clave relacionados con las cuentas de Mchain.

`mchaind` ofrece la flexibilidad de elegir un directorio de trabajo diferente. Puedes lograr esto utilizando la opcion `--home` durante la ejecución de `mchaind`.

## Documentación y soporte

Para documentación completa sobre el uso de `mchaind`, incluyendo descripciones detalladas de comandos, visita la [documentación de CLI de Mchain](https://github.com/MchainNetwork/mchain/blob/main/docs/cli/toc.md). La comunidad y el equipo de desarrollo también ofrecen soporte a través de varios canales, incluyendo el Discord de Mchain y problemas en GitHub.
