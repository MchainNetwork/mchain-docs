---
sidebar_position: 5
title: Smart Tokens
---

# Smart Tokens

Los Smart Tokens son una parte integral del ecosistema de Mchain, ofreciendo un medio versátil y flexible para la creación y gestión de tokens. Esta guía proporciona una visión general de los Smart Tokens y sus funcionalidades en el Mchain Hub.

**URL del Testnet:** https://testnet.hub.mchain.network/mchain/smarttoken

## Entendiendo los Smart Tokens

Un Smart Token en Mchain es un token personalizado con varias características y configuraciones. Puede representar cualquier cosa, desde un activo digital hasta un token de utilidad o gobernanza dentro del ecosistema de Mchain.

### Características clave de los Smart Tokens

- **Nombre**: El nombre completo del Smart Token, como "Puntos de Hamburguesa".
- **Símbolo**: Un identificador abreviado para el Smart Token, generalmente de 1 a 6 caracteres, como "BTC" para Bitcoin.
- **Características del Token**: Los Smart Tokens vienen con características configurables:
    - **Acuñación**: Permite la creación adicional de monedas, aumentando el suministro total. Una vez establecida, esta característica puede desactivarse pero no reactivarse.
    - **Quema**: Permite a los usuarios destruir monedas, reduciendo el suministro. Incluye una opción para enviar monedas a una dirección de quema específica.
    - **Envío**: Activa la transferibilidad de tokens entre usuarios. Si se desactiva, solo el propietario o acuñador del token puede realizar transferencias.
    - **Envío Gratuito**: Permite la devolución de tokens al propietario o acuñador sin incurrir en costos de transacción, a cargo del destinatario.
    - **Lista Blanca**: Habilita una lista de usuarios autorizados para recibir el token.
    - **Congelación**: Permite la congelación global de transferencias y la creación de una lista de direcciones congeladas, restringiendo las transferencias de tokens.

### Economía del Token

- **Configuración de Decimales**: Establece el número de decimales para el Smart Token, por defecto es 6. Los tokens sin decimales se establecen en 0.
- **Configuración de Subunidad**: Define el símbolo de la denominación más pequeña del token, generalmente el símbolo principal precedido por "u". En tokens sin decimales, puede coincidir con el símbolo principal.

### Gestión del Token
- **Configuración de Suministro Máximo**: Establece un límite en el número de monedas que se pueden crear, estableciendo un tope en el suministro total.
- **Configuración de Suministro Inicial**: Permite la acuñación inicial de monedas al emitir el token. Si la acuñación está activa, este valor puede ser cero, permitiendo futuras acuñaciones.

### Tasas del Token
- **Tasa de Quema en Envío**: Porcentaje de tokens enviados para ser "quemados" y eliminados de la circulación.
- **Tasa de Comisión en Envío**: Porcentaje de tokens enviados como comisión al creador del token o una cuenta designada.
- **Tasa de Staking en Envío**: Porcentaje de tokens enviados para recompensar al validador del bloque y sus stakers.
- **Tasa Comunitaria en Envío**: Porcentaje de tokens enviados al "fondo comunitario" para apoyar a la comunidad y el desarrollo del proyecto.

### Información adicional
- **Detalles del Smart Token**: Ver detalles como el suministro actual, suministro máximo, autoridad, acuñador y metadatos.
- **Titulares del Token**: Consultar la lista de titulares de tokens y sus respectivas cantidades y porcentajes.
- **Total Quemado**: Ver la cantidad total de tokens quemados.
- **URI**: Establecer o actualizar el URI para Smart Tokens específicos.
- **Tasa de Emisión**: El costo asociado con la emisión del Smart Token, destinado a recompensar a validadores y stakers.

Los Smart Tokens en Mchain ofrecen un enfoque robusto y personalizable para la creación y gestión de tokens, atendiendo a una amplia gama de casos de uso en el espacio blockchain.
