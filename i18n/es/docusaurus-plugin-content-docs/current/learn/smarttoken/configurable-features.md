---
sidebar_position: 2
title: Características configurables
---

# Características configurables de los Smart Tokens

Gracias a su naturaleza programable, los Smart Tokens de Mchain ofrecen un marco flexible para diversas aplicaciones. Estas características permiten la creación de tokens personalizados para varias necesidades, fomentando la innovación y el compromiso en la economía circular. Aquí hay un desglose de sus principales características configurables:

### Emisión de Tokens
- **Definición de nombre**: Nombre completo del Smart Token.
  - Ejemplo: Puntos de Hamburguesa
- **Definición de símbolo**: Abreviatura única para el Smart Token, de 1 a 6 caracteres.
  - Ejemplo: BTC
- **Configuración de subunidad**: Símbolo para la denominación más pequeña, generalmente "u" seguido del símbolo principal. Para tokens no decimales, coincide con el símbolo principal.

### Características del Token
- **Acuñación**: Permite la creación de monedas adicionales, aumentando el suministro total. Irreversible una vez desactivado.
- **Quema**: Habilita a los usuarios para destruir monedas, reduciendo el suministro total. Incluye una opción específica de dirección de quema. Irreversible una vez desactivado.

### Transferencia de Tokens
- **Envío**: Activa la transferibilidad de tokens. Irreversible una vez deshabilitado.
- **Envío gratuito**: Devuelve tokens al propietario o acuñador sin costos de transacción.
- **Lista blanca**: Restringe la recepción de tokens a usuarios autorizados. Irreversible.
- **Congelamiento**: Congela las transferencias globales y crea una lista de direcciones congeladas.

### Tasas del Token
Porcentajes configurables aplicados a cada transacción:
- **Tasa de quema en envío**: Porcentaje de tokens a quemar, eliminándolos de la circulación.
- **Tasa de comisión en envío**: Porcentaje de tokens como comisión al creador del token o una cuenta designada.
- **Tasa de participación en envío**: Porcentaje de tokens recompensados al validador del bloque y sus stakers.
- **Tasa comunitaria en envío**: Porcentaje de tokens contribuidos al fondo comunitario para el soporte y desarrollo del proyecto.

### Configuraciones de suministro
- **Suministro máximo**: Limita la creación total posible de monedas.
- **Suministro inicial**: Cantidad de monedas acuñadas al emitir el token. Futuras acuñaciones posibles si se habilita.
- **Configuración decimal**: Número de decimales para el token, por defecto 6. Se puede establecer en 0 para tokens sin decimales o basados en puntos.

### Parámetros configurables por gobernanza
Los Smart Tokens incluyen parámetros configurables a través de la gobernanza de la blockchain, mejorando la adaptabilidad y la capacidad de respuesta a las necesidades de la comunidad:

- **Tasa de emisión**: Un costo asociado con la emisión de un Smart Token, destinado a incentivar a los validadores y stakers.
- **Tasa de acuñación**: Una tarifa pagada por el emisor o acuñador al crear un Smart Token, contribuyendo a la Tasa de Emisión.
