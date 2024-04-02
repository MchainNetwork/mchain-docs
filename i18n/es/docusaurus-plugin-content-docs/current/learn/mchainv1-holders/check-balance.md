---
sidebar_position: 2
title: Verificar tu saldo v1
---

# Cómo verificar el saldo de tu Wallet.dat para la migración a Mchain v2

:::danger Contenido Archivado
Esta sección de la documentación sirve como un archivo y referencia histórica. Para obtener la información más reciente y actualizaciones, por favor consulta la documentación actual de Mchain.
:::

Si eres usuario de Mchain y te estás preparando para migrar a la versión 2 de la cadena, es esencial asegurarte de que tu wallet.dat tenga saldo antes de proceder con la migración. Para ayudarte con esto, proporcionamos una herramienta simple que te permite verificar el saldo de tus direcciones MAR sin compartir tu clave privada. Además, si solo necesitas verificar el saldo de una sola dirección, puedes usar nuestra herramienta en https://mchain.network/balance para obtener esa información. Sin embargo, esta guía está específicamente diseñada para una consulta masiva de direcciones desde tu wallet.dat. Usando un archivo HTML y el comando ‘dumpwallet’ en el programa de escritorio Mchain Core (similar a Bitcoin Core), puedes procesar tu wallet.dat localmente y consultar el saldo de tus direcciones.

Sigue estos pasos sencillos para asegurarte de que tus fondos estén listos para la migración.

*** Paso 1: Descargar el archivo HTML ***

Para comenzar, haz clic en el enlace proporcionado [Descargar Archivo HTML](https://mchain.network/balance/processAddresses.html). Este archivo ‘processAddresses.html’ te permitirá cargar el volcado del wallet.dat y verificar los saldos de tus direcciones.

*** Paso 2: Obtener el volcado del Wallet.dat ***

Antes de verificar el saldo de tus direcciones, necesitas obtener el volcado de tu wallet.dat usando el programa de escritorio Mchain Core. Sigue estos pasos:

1. Abre el programa Mchain Core en tu computadora.
2. Ve al menú “Ayuda” y selecciona “Ventana de Depuración”.
3. En la pestaña “Consola”, verás un campo donde puedes ingresar comandos.
4. Escribe el siguiente comando y presiona Enter:

``dumpwallet Ruta/Para/Guardar/walletdump.txt``

Reemplaza “Ruta/Para/Guardar/walletdump.txt” con la ubicación y el nombre del archivo donde deseas guardar el volcado del wallet.dat.

*** Paso 3: Cargar el volcado y verificar saldos ***

Una vez que tengas el archivo walletdump.txt que contiene el volcado del wallet.dat, abre el archivo HTML que descargaste en el Paso 1 en tu navegador web.

*** Paso 4: Procesar y verificar saldos ***

En la página HTML, encontrarás un campo para cargar el archivo walletdump.txt. Haz clic en el botón “Subir Archivo” y selecciona el archivo que obtuviste en el Paso 2. La herramienta procesará tu wallet.dat localmente y consultará Mchain para el saldo de cada dirección MAR sin compartir tu clave privada.

*** Paso 5: Ver direcciones con saldos ***

Después de completar el proceso, la herramienta mostrará las direcciones MAR con saldo y sus claves privadas correspondientes. Guarda esta información de forma segura, ya que la necesitarás al solicitar la migración a Mchain v2, siguiendo los pasos proporcionados por el equipo de Mchain.
