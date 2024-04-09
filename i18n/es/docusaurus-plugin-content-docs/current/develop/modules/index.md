---
sidebar_position: 1
título: Introducción
---

# Visión general de los módulos

## Módulos de Mchain

Los módulos de Mchain son cruciales para la funcionalidad y operaciones de la blockchain de Mchain. Ofrecen una amplia gama de funcionalidades, organizadas de manera ordenada dentro del directorio de Mchain. Aquí tienes una lista de estos módulos con enlaces para obtener más información detallada:

| Módulo personalizado                  | Funcionalidad                                                                                                    | Estado             |
|----------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------|
| [smarttoken](./smarttoken)       | Permite la creación de Smart Tokens programables en Mchain.                                                     | Activo            |
| [mns](./mns)                     | Servicio de Nombres de Mchain - Gestiona nombres de dominio en la blockchain de Mchain y el mercado de dominios. | Activo            |
| [burn](./burn)                   | Permite la quema de tokens específicos, incluidos MARK, BEER, y cualquier Smart Token.                          | Activo            |
| [proofofexistence](./proofofexistence) | Para registrar y verificar la existencia de cualquier dato o documento.                                   | Activo            |
| [epoch](./epoch)                 | Gestiona actividades y eventos vinculados al tiempo cruciales para aplicaciones como juegos.                    | En Desarrollo     |
| [oracle](./oracle)               | Módulo para integrar fuentes de datos externas y oráculos.                                                      | En Desarrollo     |
| [dex](./dex)                     | Intercambio descentralizado para comerciar activos y criptomonedas en Mchain.                                   | En Desarrollo     |

## Módulos de Cosmos

Los módulos de Cosmos SDK proporcionan las herramientas esenciales para desarrollar blockchains personalizables e interoperables. Van desde la gestión de cuentas hasta los protocolos de consenso dentro del directorio estándar de Cosmos SDK.

Para aprender más sobre cómo construir y explorar estos módulos de Cosmos, visita la [documentación de Módulos de Cosmos SDK](https://docs.cosmos.network/main/build/modules).

| Módulo         | Descripción                                                                       |
|----------------|-----------------------------------------------------------------------------------|
| auth           | Gestiona la autenticación de cuentas y transacciones.                             |
| authz          | Autorización para que las cuentas actúen en nombre de otros.                       |
| bank           | Proporciona funcionalidades para transferencias de tokens.                         |
| crisis         | Detiene la blockchain bajo condiciones críticas específicas.                      |
| distribution   | Gestiona la distribución de comisiones y tokens de staking.                        |
| evidence       | Maneja pruebas relacionadas con mal comportamientos como la doble firma.           |
| feegrant       | Permite la concesión de permisos de comisión para transacciones.                   |
| gov            | Facilita propuestas en cadena y votaciones.                                        |
| mint           | Responsable de crear nuevas unidades de token de staking.                          |
| slashing       | Implementa mecanismos de castigo para validadores.                                 |
| staking        | Proporciona una capa de Proof-of-Stake para blockchains.                           |
| upgrade        | Gestiona y coordina actualizaciones de software.                                   |
| nft            | Implementa un módulo NFT basado en ADR43.                                          |
| consensus      | Modifica los parámetros de consenso ABCI de CometBFT.                              |
| genutil        | Ofrece utilidades de génesis para el Cosmos SDK.                                   |
