---
sidebar_position: 3
title: Proof of Existence
---

# Módulo Proof of Existence

O módulo de Prova de Existência no Mchain é um mecanismo baseado em blockchain para registrar e verificar a existência de quaisquer dados ou documentos. Este módulo baseia-se em SHA-256, uma função de hash criptográfica, para armazenar hashes únicos que representam os dados ou documentos. É importante notar que o módulo não armazena o arquivo ou dado real na blockchain, mas apenas o hash. Isso garante privacidade e eficiência, já que o hash funciona como uma impressão digital dos dados.

## Gerando Hash SHA-256

Para criar uma prova, primeiro você precisa gerar um hash SHA-256 dos seus dados ou documento. No Ubuntu, você pode usar o comando `sha256sum` para isso. Por exemplo:

```sh
sha256sum nomearquivo.ext
```

Este comando mostrará o hash SHA-256 do arquivo especificado.

## Comandos CLI

### Criar Prova

Permite aos usuários criar uma nova prova para um hash dado.

```sh
mchaind tx proofofexistence create-proof [hash] --from [key-name] --chain-id [chain-id] --fees [fee]
```

Substitua `[hash]` pelo hash SHA-256 gerado dos seus dados ou documento.

**Exemplo**:
```bash
$ mchaind tx proofofexistence create-proof a8e6b925fb040fb25b719516b5f5b1efa10850e7f61c1baf58964d8ee925e0d2 --from=mykey --chain-id=mchain-testnet-1 --fees=50umark
```

Este comando:
1. Criará uma prova.
2. Executará a transação da conta vinculada a `mykey`.


### Consultar Prova por Hash

Recupera uma prova específica utilizando seu hash.

```sh
mchaind q proofofexistence proof [hash]
```

### Consultar Total de Provas

Retorna o número total de provas registradas no sistema.

```sh
mchaind q proofofexistence total-proofs
```

### Listar Provas

Lista todas as provas registradas no sistema.

```sh
mchaind q proofofexistence list-proofs
```

### Consultar Parâmetros do Módulo

Exibe os parâmetros atuais do módulo de Prova de Existência.

```sh
mchaind q proofofexistence params
```

## Parâmetros

A tabela a seguir resume os parâmetros configuráveis para o módulo de Prova de Existência:

| Parâmetro   | Descrição                            | Tipo   |
|-------------|--------------------------------------|--------|
| `issue_fee` | Taxa cobrada para emitir uma prova.   | `Coin` |
