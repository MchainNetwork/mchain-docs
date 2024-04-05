---
sidebar_position: 3
title: Validar en Testnet
---

# Validar en Testnet

Convertirse en un validador en el testnet de Mchain es un paso esencial antes de unirse al mainnet. Este proceso comienza una vez que tu nodo está sincronizado con el testnet. Sigue la guía sobre [Ejecutar un nodo en Testnet](joining-testnet) para la configuración inicial.

### Paso 1: Configurar un llavero de cartera

Para transformar tu nodo en un validador, debes establecer una cartera dentro de tu llavero. Esto se puede hacer añadiendo una cartera existente utilizando tu frase semilla o creando una nueva. Copia y guarda de forma segura la frase mnemotécnica para la recuperación futura de la cartera y anota tu dirección de Mchain.

Elige un backend de llavero (opciones: os, file, kwallet, pass, test, memory) para almacenar tus claves. Se recomiendan los backends 'file' y 'pass' para entornos headless como servidores. Más información sobre los backends de llaveros está disponible en la [documentación de Cosmos SDK](https://docs.cosmos.network/v0.47/user/run-node/keyring).

**Creando una nueva cartera:**

- Para el backend de llavero `os`:

```bash
export KEY_NAME=mykey
mchaind keys add $KEY_NAME
```

- Para el backend de llavero `file` (sustituye `KEYPASSWD` por una contraseña fuerte de al menos 8 caracteres):

```bash
export KEY_NAME=mykey
export KEYPASSWD=password
(echo $KEYPASSWD; echo $KEYPASSWD) | mchaind keys add $KEY_NAME --keyring-backend file
echo $KEYPASSWD | mchaind keys show $KEY_NAME --keyring-backend file
```

Para confirmar que se ha añadido exitosamente la cartera al llavero:

```bash
echo $KEYPASSWD | mchaind keys list --keyring-backend file
```

Continúa con los siguientes pasos para configurar completamente tu nodo validador en la testnet de Mchain.

### Paso 2: Adquirir tokens MARK de Testnet

Obtén tokens MARK para el testnet a través del [Testnet Faucet](https://testnet.hub.mchain.network/mchain/faucet). Ingresa tu dirección de Mchain y solicita "Obtener Tokens de Testnet".

### Paso 3: Recuperar clave pública del Validador

Tu clave pública de validador es crucial para la inicialización. Recupérala usando:

```bash
mchaind tendermint show-validator
```

### Paso 4: Comando de creación del Validador

Asegúrate de que tu cartera tenga un pequeño saldo de MARK. Crea tu validador con el siguiente comando, rellenado con valores apropiados:

```bash
mchaind tx staking create-validator \
--from=[KEY_NAME] \
--amount=[staking_amount_umark] \
--pubkey=$(mchaind tendermint show-validator) \
--moniker="[moniker_id_of_your_node]" \
--security-contact="[email/método de contacto de seguridad]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]"
```

Ejemplo con valores:

```bash
mchaind tx staking create-validator \
--from=$KEY_NAME \
--amount=1000000000umark \
--pubkey=$(mchaind tendermint show-validator)  \
--moniker="Mariner" \
--security-contact="mariner@email.com" \
--chain-id="mchain-testnet-1" \
--commission-rate="0.1" \
--commission-max-rate="0.2" \
--commission-max-change-rate="0.05" \
--min-self-delegation="100000000" \
--keyring-backend=file
```

Explicación de los flags del comando:

- `from`: El KEY_NAME creado para tu llavero
- `amount`: Cantidad de staking en umark (por ejemplo, 1000000000umark equivale a 1000 MARK)
- `pubkey`: Clave pública del validador recuperada anteriormente
- `moniker`: Un nombre elegido para tu validador
- `security-contact`: Email de contacto para delegadores
- `chain-id`: La ID de cadena, como 'mchain-testnet-1' para el testnet de Mchain
- `commission-rate`: La tarifa cobrada a los delegados (por ejemplo, 10%)
- `commission-max-rate`: La tasa máxima cobrable a los delegados (por ejemplo, 20%)
- `commission-max-change-rate`: La tasa máxima de cambio diario de la comisión (por ejemplo, 5% por día)
- `min-self-delegation`: Fondos personales mínimos requeridos para permanecer enlazado (por ejemplo, 100 MARK)
- `keyring-backend`: Selecciona el backend de llavero correcto

Si encuentras un error de 'falta de gas', ajusta el valor del gas:

```bash
--gas=<valor superior al gasUsed del error>
```

### Paso 5: Monitorear el estado del Validador

Para ver el conjunto actual de validadores:

```bash
mchaind query staking validators --limit 300 -o json | jq -r '.validators[] | [.operator_address, .status, (.tokens|tonumber / pow(10; 6)), .commission.update_time[0:19], .description.moniker] | @csv' | column -t -s","
```

Filtrar por tu moniker:

```bash
... | grep Mariner
