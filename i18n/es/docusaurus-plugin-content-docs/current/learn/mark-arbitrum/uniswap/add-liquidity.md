---
sidebar_position: 2
title: Añadir liquidez en Uniswap
---

# Añadir liquidez en Uniswap V3

Uniswap V3, la última versión del popular intercambio descentralizado, introduce varias características nuevas para los proveedores de liquidez. Esta guía te guiará para añadir liquidez a un pool de MARK y Ethereum (ETH) en la red Arbitrum.

## Prerrequisitos
Antes de añadir liquidez, asegúrate de tener:
1. **Una billetera digital**: Configura una billetera compatible con Arbitrum One, como Metamask.
2. **Tenencias en MARK y ETH**: Necesitas ambos tokens en tu billetera en la red Arbitrum One en una proporción basada en el precio actual del pool.
3. **Suficiente ETH para las tarifas de transacción**: Las tarifas de gas pueden fluctuar, así que ten ETH adicional disponible.

## Pasos para añadir liquidez
1. **Cambia tu red en Metamask a Arbitrum One**
   - Si no has configurado previamente la red, puedes seguir esta [guía](../metamask/add-arbitrum-to-metamask.md)
2. **Conéctate a Uniswap V3**: 
   - Visita la Interfaz de Uniswap en [Uniswap V3](https://app.uniswap.org/add/ETH/0x4D01397994aA636bDCC65c9e8024bC497498c3bb?chain=arbitrum) y conecta tu billetera.
3. **Selecciona el par**:
   - Elige ETH y MARK de la lista de tokens. Si MARK no está listado, agrégalo manualmente usando su [dirección de contrato](../specifications.md).
4. **Selecciona el nivel de tarifa**:
   - Elige entre los niveles de tarifa disponibles. Te aconsejamos seleccionar la tarifa del 0.3%.
5. **Establece el rango de precios**:
   - En Uniswap V3, necesitas establecer un rango de precios para tu liquidez. Tu liquidez solo generará tarifas cuando el precio del par de tokens esté dentro de este rango. Puedes hacer clic en el botón de Rango Completo para estar disponible para todo el rango.
6. **Determina la cantidad de tu liquidez**:
   - Decide cuánto ETH y MARK quieres contribuir. La interfaz te guiará sobre la proporción basada en el precio de mercado actual.
7. **Revisa y añade liquidez**:
   - Revisa los detalles de tu posición, incluyendo el nivel de tarifa y la cantidad de tokens que estás contribuyendo.
   - Confirma la transacción en tu billetera y espera a que se procese.

## Monitoreo y ajuste de tu posición
- Puedes monitorear tu posición de liquidez en la interfaz de Uniswap una vez añadida.
- Puedes ajustar tu rango de precios o añadir/quitar liquidez basado en las condiciones del mercado.

## Riesgos y consideraciones
- **Pérdida impermanente**: Cuando el precio del par de tokens diverge significativamente, podrías enfrentar una pérdida impermanente.
- **Tarifas de gas**: Las altas tarifas de gas pueden impactar la rentabilidad, especialmente con cantidades menores de capital.

## Staking de MARK Arbitrum

Puedes ganar más recompensas MARK apostando tu posición en Uniswap; aprende cómo en la guía para [Staking de MARK Arbitrum](../staking/staking-mark-arbitrum.md).