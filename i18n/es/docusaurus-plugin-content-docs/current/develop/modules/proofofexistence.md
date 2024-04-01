---
sidebar_position: 3
title: Proof of Existence
---

# Módulo Proof of Existence

El módulo de Prueba de Existencia en Mchain es un mecanismo basado en blockchain para registrar y verificar la existencia de cualquier dato o documento. Este módulo se basa en SHA-256, una función de hash criptográfica, para almacenar hashes únicos que representan los datos o documentos. Es importante señalar que el módulo no almacena el archivo o dato real en la blockchain, sino solo el hash. Esto asegura privacidad y eficiencia, ya que el hash funciona como una huella digital de los datos.

## Generando Hash SHA-256

Para crear una prueba, primero necesitas generar un hash SHA-256 de tus datos o documento. En Ubuntu, puedes usar el comando `sha256sum` para hacerlo. Por ejemplo:

```sh
sha256sum nombrearchivo.ext
```

Este comando mostrará el hash SHA-256 del archivo especificado.

## Comandos CLI

### Crear Prueba

Permite a los usuarios crear una nueva prueba para un hash dado.

```sh
mchaind tx proofofexistence create-proof [hash] --from [key-name] --chain-id [chain-id] --fees [fee]
```

Reemplaza `[hash]` con el hash SHA-256 generado de tus datos o documento.

**Ejemplo**:
```bash
$ mchaind tx proofofexistence create-proof a8e6b925fb040fb25b719516b5f5b1efa10850e7f61c1baf58964d8ee925e0d2 --from=mykey --chain-id=mchain-testnet-1 --fees=50umark
```

Este comando:
1. Creará una prueba.
2. Ejecutará la transacción desde la cuenta vinculada a `mykey`.


### Consultar Prueba por Hash

Recupera una prueba específica utilizando su hash.

```sh
mchaind q proofofexistence proof [hash]
```

### Consultar Total de Pruebas

Devuelve el número total de pruebas registradas en el sistema.

```sh
mchaind q proofofexistence total-proofs
```

### Consultar Lista de Pruebas

Enumera todas las pruebas registradas en el sistema.

```sh
mchaind q proofofexistence list-proofs
```

### Consultar Parámetros del Módulo

Muestra los parámetros actuales del módulo de Proof of Existence.

```sh
mchaind q proofofexistence params
```

## Parámetros

La siguiente tabla resume los parámetros configurables para el módulo de Proof of Existence:

| Parámetro    | Descripción                            | Tipo    |
|--------------|----------------------------------------|---------|
| `issue_fee`  | Tarifa cobrada por emitir una prueba.   | `Coin`  |