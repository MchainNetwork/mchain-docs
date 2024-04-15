---
sidebar_position: 2
title: MNS
---

# Módulo MNS

El Mchain Name Service juega un papel importante en la red Mchain proporcionando un sistema de nombres fácil de usar. Esta característica actúa como un puente entre direcciones y nombres más fáciles de entender para los humanos, mejorando significativamente la experiencia general del usuario dentro del ecosistema Mchain.

### Registrar un Nuevo Nombre

Este comando te permite registrar un nuevo nombre en la red Mchain.

```bash
mchaind tx mns register [nombre] [años] [datos] [set_reverse] [referente] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre que quieres registrar. Ej. mchain.mark
- `años`: El número de años por los que quieres registrar este nombre.
- `datos`: Cualquier dato asociado que quieras adjuntar al nombre.
- `set_reverse`: Valor booleano (`true` o `false`) que indica si configurar este nombre como el registro inverso para la dirección.
- `referente`: La dirección del referente.

**Ejemplo**:
```bash
$ mchaind tx mns register "minombre.mark" "2" "{\"github\":\"mchainnetwork\""}" true "referente.mark" --from=mykey --chain-id=mchain --fees=100token
```

Este comando:
1. Registrará el nombre `minombre.mark` por 2 años.
2. Adjuntará el nombre de usuario de Github como dato adicional.
3. Configurará este nombre como el registro inverso para tu dirección si `set_reverse` es `true`.
4. Acreditará cualquier recompensa de referido al nombre `referente.mark`.

**Nota**:
- Asegúrate de que el nombre no esté ya registrado y cumpla con las convenciones de nombres de Mchain.
- `--from=<nombre-llave>`: Especifica el nombre de la llave de la cuenta desde la que estás enviando la transacción.
- `--chain-id=<chain-id>`: Especifica el ID de la cadena de Mchain.
- `--fees=<fee>`: Especifica la tarifa de la transacción.

### Transferir un Nombre

Este comando se usa para transferir la propiedad de un nombre registrado a otra dirección.

```bash
mchaind tx mns transfer [nombre] [receptor] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre que quieres transferir.
- `receptor`: La dirección del receptor a quien quieres transferir el nombre.

### Agregar un Registro a un Nombre

Este comando te permite agregar un nuevo registro a un nombre ya registrado.

```bash
mchaind tx mns add-record [nombre] [registro] [resolver] [datos] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre al que quieres agregar el registro.
- `registro`: El nombre del registro que estás añadiendo.
- `resolver`: La dirección del resolver asociado con el registro.
- `datos`: Datos o información adicional relacionada con el registro.

**Ejemplo**:
```bash
$ mchaind tx mns add-record "minombre.mark" "blog" "m1..." "" --from=mykey --chain-id=mchain-testnet-1 --fees=100umark
```

Este comando:
1. Agregará un registro de subdominio `blog` al nombre `minombre.mark`.
2. Configurará los datos para este registro como "Mi Blog Personal".
3. La transacción es iniciada por la cuenta asociada con `mykey`.

### Listar un Nombre para la Venta

Este comando permite a los usuarios listar sus nombres registrados para la venta en el Marketplace de Mchain.

```bash
mchaind tx mns list [nombre] [precio] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre registrado que deseas listar para la venta.
- `precio`: El precio de venta del nombre.

**Ejemplo**:
```bash
$ mchaind tx mns list "minombre.mark" "1000000000umark" --from=mykey --chain-id=mchain --fees=50token
```

Este comando:
1. Listará el nombre `minombre.mark` para la venta.
2. Establecerá el precio de venta en `1000 MARK`.
3. Iniciará la transacción desde la cuenta vinculada a `mykey`.

### Delistar un Nombre

Este comando permite a los usuarios eliminar sus nombres listados del mercado.

```bash
mchaind tx mns delist [nombre] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```
### Ofertar por un Nombre

Este comando se utiliza para hacer una oferta por un nombre que está en venta en el mercado de Mchain.

```bash
mchaind tx mns bid [nombre] [oferta] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre por el que deseas ofertar.
- `oferta`: La cantidad que ofreces por el nombre.

**Ejemplo**:
```bash
$ mchaind tx mns bid "nombredeseado.mark" "100000000umark" --from=mykey --chain-id=mchain --fees=50token
```

Este comando:
1. Hará una oferta de `100 MARK` por el nombre `nombredeseado.mark`.
2. Ejecutará la transacción desde la cuenta vinculada a `mykey`.

### Aceptar una Oferta por un Nombre

Este comando es utilizado por el propietario de un nombre para aceptar una oferta hecha por otro usuario.

```bash
mchaind tx mns accept-bid [nombre] [de] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre por el cual se ha realizado la oferta.
- `de`: La dirección del oferente cuya oferta estás aceptando.

**Ejemplo**:
```bash
$ mchaind tx mns accept-bid "nombredeseado.mark" "1mdirecciondelofertante..." --from=mykey --chain-id=mchain --fees=50token
```

Este comando:
1. Aceptar la oferta por `nombredeseado.mark` de la dirección `1mdirecciondelofertante...`.
2. Ejecutará la transacción desde la cuenta vinculada a `mykey`.

Aceptar una oferta transferirá la propiedad del nombre al oferente tras una transacción exitosa. Esta acción es definitiva y debes confirmar los detalles de la oferta antes de proceder.

### Cancelar una Oferta por un Nombre

Este comando permite a un usuario cancelar una oferta previamente realizada por un nombre en el mercado de Mchain.

```bash
mchaind tx mns cancel-bid [nombre] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre por el cual has hecho una oferta y deseas cancelarla.

**Ejemplo**:
```bash
$ mchaind tx mns cancel-bid "nombredeseado.mark" --from=mykey --chain-id=mchain --fees=50token
```

Este comando:
1. Cancelará tu oferta por el nombre `nombredeseado.mark`.
2. Ejecutará la transacción desde la cuenta vinculada a `mykey`.

Al cancelar una oferta, retiras tu propuesta de compra del nombre especificado.

### Comprar un Nombre Listado

Este comando se utiliza para comprar un nombre que está actualmente en venta en el mercado de Mchain.

```bash
mchaind tx mns buy [nombre] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre que deseas comprar en el mercado.

**Ejemplo**:
```bash
$ mchaind tx mns buy "nombredeseado.mark" --from=mykey --chain-id=mchain --fees=100token
```

Este comando:
1. Comprará el nombre `nombredeseado`.
2. Ejecutará la transacción desde la cuenta vinculada a `mykey`.

Comprar un nombre listado transfiere la propiedad de ese nombre a tu cuenta, siempre que cumplas con el precio listado y completes la transacción con éxito. Esta acción es irreversible una vez ejecutada.

### Actualizar un Nombre

Este comando se utiliza para actualizar los datos asociados con un nombre que posees.

```bash
mchaind tx mns update [nombre] [datos] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre que deseas actualizar.
- `datos`: Los nuevos datos que deseas asociar con el nombre.

**Ejemplo**:
```bash
$ mchaind tx mns update "minombre.mark" "{\"nuevos datos aquí\":\"\"}" --from=mykey --chain-id=mchain --fees=100token
```

Este comando:
1. Actualizará los datos del nombre `minombre` con `"nuevos datos aquí"`.
2. Ejecutará la transacción desde la cuenta vinculada a `mykey`.
### Eliminar un Registro

Este comando permite a los usuarios eliminar un registro asociado con un nombre.

```bash
mchaind tx mns del-record [nombre] --from=<nombre-llave> --chain-id=<chain-id> --fees=<fee>
```

**Uso**:
- `nombre`: El nombre cuyo registro asociado quieres eliminar.

**Ejemplo**:
```bash
$ mchaind tx mns del-record "blog.minombre.mark" --from=mykey --chain-id=mchain --fees=100token
```

### Listar Todos los Nombres

Comando para listar todos los nombres registrados en la red Mchain.

```bash
mchaind query mns list-names
```

**Uso**:
- Este comando no requiere argumentos.
- Soporta flags de paginación para navegar a través de grandes conjuntos de datos.

**Ejemplo**:
```bash
mchaind query mns list-names --page=1 --limit=20
```

Esto listará los primeros 20 nombres registrados en la red.

### Mostrar un Nombre Específico

Comando para mostrar detalles de un nombre registrado específico.

```bash
mchaind query mns show-names [índice]
```

**Uso**:
- `índice`: El identificador único o nombre que deseas consultar.

**Ejemplo**:
```bash
mchaind query mns show-names "alice.mark"
```

Esto mostrará detalles sobre el nombre `alice.mark`.

### Consultar el Costo de Registro de un Nombre

Comando para consultar el costo de registrar un nombre específico.

```bash
mchaind query mns cost [nombre]
```

**Uso**:
- `nombre`: El nombre cuyo costo de registro deseas conocer.

**Ejemplo**:
```bash
mchaind query mns cost "nuevonombre.mark"
```

Esto mostrará el costo requerido para registrar `nuevonombre.mark` en la red.

### Listar Nombres Propios

Este comando se utiliza para consultar todos los nombres propiedad de un usuario específico.

**Uso**:
- `list-owned-names [dirección]`: Recupera una lista de nombres propiedad de la dirección proporcionada.
- `[dirección]`: La dirección del usuario cuya propiedad de nombres deseas consultar.
- Soporta flags de paginación para navegar a través de conjuntos de datos potencialmente grandes.

**Ejemplo**:
```bash
mchaind query mns list-owned-names m1xxx... --page=1 --limit=10
```

- Este comando listará los primeros 10 nombres propiedad de la dirección `m1xxx...`.

**Descripción**:
- Este comando es particularmente útil para que los usuarios realicen un seguimiento de todos los nombres que han registrado bajo su dirección en la red Mchain.
- Proporciona una forma rápida y eficiente de gestionar múltiples registros de nombres, especialmente para usuarios que pueden haber registrado numerosos nombres.
- La adición de flags de paginación ayuda en la gestión y navegación a través de grandes listas de nombres propios, mejorando la experiencia del usuario al consultar sus activos.

**Notas**:
- Asegúrate de que la dirección proporcionada esté correctamente formateada según los estándares de la red Mchain.
- El comando devolverá una lista de nombres junto con detalles relevantes asociados a cada nombre.

### Listar Todos los Dominios en Venta

Este comando recupera una lista de todos los dominios actualmente listados para la venta en la red Mchain.

**Uso**:
- `list-forsale`: Ejecuta el comando sin parámetros adicionales para obtener la lista.
- Soporta flags de paginación para manejar grandes conjuntos de datos.

**Ejemplo**:
```bash
mchaind query mns list-forsale --page=1 --limit=5
```
- Este ejemplo recupera los primeros 5 dominios listados para la venta.

### Mostrar un Dominio Específico en Venta

**Comando**: `show-forsale`

Este comando proporciona información detallada sobre un dominio específico que está listado para la venta.

**Uso**:
- `show-forsale [nombre]`: Proporciona el nombre del dominio para obtener sus detalles.
- `[nombre]`: El nombre del dominio que deseas consultar.

**Ejemplo**:
```bash
mchaind query mns show-forsale ejemplo
```
- Este ejemplo recupera detalles del dominio llamado `ejemplo`.

**Notas**:
- Estos comandos son útiles para usuarios interesados en el mercado de dominios, permitiéndoles explorar y recuperar información detallada sobre dominios disponibles para la compra.
- La característica de paginación en el comando `list-forsale` ayuda a gestionar grandes listas de dominios, mejorando la experiencia del usuario.
- Asegúrate de que el nombre del dominio esté correctamente formateado y exista en la red para el comando `show-forsale`.
### Listar Todas las Ofertas

Este comando recupera una lista de todas las ofertas actualmente realizadas en nombres dentro de la red Mchain.

**Uso**:
- `list-bids`: Ejecuta el comando sin parámetros adicionales para obtener la lista.
- Soporta flags de paginación para manejar grandes conjuntos de datos.

**Ejemplo**:
```bash
mchaind query mns list-bids --page=1 --limit=5
```
- Este ejemplo recupera las primeras 5 ofertas realizadas en nombres.

### Mostrar una Oferta Específica

Este comando proporciona información detallada sobre una oferta específica.

**Uso**:
- `show-bids [índice]`: Proporciona el índice de la oferta para obtener sus detalles.
- `[índice]`: El identificador único o índice de la oferta que deseas consultar.

**Ejemplo**:
```bash
mchaind query mns show-bids bidIndex123
```
- Este ejemplo recupera detalles de la oferta con el índice `bidIndex123`.

**Notas**:
- El comando `list-bids` es crucial para usuarios que participan activamente en la oferta de nombres, permitiéndoles rastrear todas las ofertas existentes.
- La paginación en el comando `list-bids` ayuda a gestionar y ver eficientemente un gran número de ofertas.
- Para el comando `show-bids`, asegúrate de proporcionar correctamente el índice de la oferta para obtener información precisa. El índice de oferta es un identificador único para cada oferta en el sistema.

### Consultar el Nombre Asociado con una Dirección Dada

Este comando recupera el nombre asociado con una dirección específica en la red Mchain.

**Uso**:
- `reverses [dirección]`: Proporciona la dirección para obtener su nombre asociado.
- `[dirección]`: La dirección cuyo nombre asociado deseas consultar.

**Ejemplo**:
```bash
mchaind query mns reverses m1direcciondeejemplo123
```
- Este ejemplo recupera el nombre asociado con la dirección `m1direcciondeejemplo123`.

### Consultar Todos los Registros Inversos

Este comando proporciona una lista de todos los registros inversos, mapeando direcciones a sus nombres.

**Uso**:
- `list-reverses`: Ejecuta el comando sin parámetros adicionales para obtener la lista.
- Soporta flags de paginación para manejar grandes conjuntos de datos.

**Ejemplo**:
```bash
mchaind query mns list-reverses --page=1 --limit=10
```
- Este ejemplo recupera los primeros 10 registros inversos.

**Notas**:
- El comando `reverses` es crucial para que los usuarios verifiquen el nombre asociado con una dirección particular. Esto es especialmente útil en casos donde los nombres se usan como marcadores de identidad o para fácil reconocimiento dentro de la red.
- El comando `list-reverses` es beneficioso para que los usuarios vean el mapeo general de direcciones a nombres, proporcionando una vista comprensiva de los registros inversos en la red.
- La paginación en el comando `list-reverses` ayuda a gestionar y ver eficientemente un gran número de registros inversos.

## Parámetros

Aquí tienes un resumen de los parámetros configurables para el módulo Mchain Name Service (MNS):

| Parámetro                | Descripción                                                       | Tipo           | Valor de Ejemplo                    |
|--------------------------|-------------------------------------------------------------------|----------------|-------------------------------------|
| `base_cost`              | Define el costo base para el registro de nombres.                 | Coin           | `{denom: "umark", amount: "50"}`    |
| `base_expiration`        | Define la duración de expiración base para los nombres.           | Duration       | `365 days` (por un año)             |
| `grace_period`           | Define el período de gracia para el registro de nombres.          | Duration       | `30 days`                           |
| `referral_register_rate` | Define la tasa de referidos para el registro de nombres.          | Decimal        | `0.05` (5%)                         |
| `referral_extend_rate`   | Comisión por referidos para extender el registro de nombres.      | Decimal        | `0.03` (3%)                         |
| `sell_commission_rate`   | Tasa de comisión cobrada al vender un dominio.                    | Decimal        | `0.1` (10%)                         |
| `referral_sell_rate`     | Proporción de la comisión cobrada asignada al referido.           | Decimal        | `0.5` (50%)                         |