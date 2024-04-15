---
sidebar_position: 2
title: Ejecutar un nodo en Testnet
---

# Ejecutar un nodo en Testnet

Ejecutar un nodo en la testnet de Mchain es un paso fundamental para desarrolladores y aquellos que aspiran a ser validadores. Puedes unirte a la red utilizando dos métodos principales: a través del Instalador de Mchain o configurando manualmente la CLI de Mchain.

## Opción 1: Usando el instalador de Mchain

El Instalador de Mchain es una herramienta conveniente para unirse rápidamente a la red. Para usarlo, ejecuta:

```bash
curl -sL https://get.mchain.network/install > i.py && python3 i.py --binary_path=/usr/local/bin
```

Este script descarga y configura los componentes necesarios para unirte a la red Mchain.

## Opción 2: Configuración manual con CLI de Mchain

Puedes instalar y configurar manualmente la CLI de Mchain para un enfoque más práctico. Este método se recomienda para usuarios que prefieren un mayor control sobre la configuración de su nodo.

### Paso 1: Instalar binario de Mchain desde GitHub Release

Descarga el último binario de Mchain de la [página de Releases en GitHub](https://github.com/MchainNetwork/mchain/releases). Asegúrate de seleccionar la versión correcta para tu sistema operativo.

Una vez descargado, puedes instalar el binario en un directorio de tu elección, comúnmente en `/usr/local/bin` para facilitar su uso. Por ejemplo, si descargaste `mchaind`, puedes instalarlo utilizando:

```bash
sudo mv mchaind /usr/local/bin/
```

### Paso 2: Inicializar el nodo de Mchain

Después de instalar el binario, inicializa tu nodo con:

```bash
mchaind init NODE_NAME --chain-id=mchain-testnet-1
```

Reemplaza `NODE_NAME` con un nombre de tu elección.

### Paso 3: Configurar el nodo

Edita el archivo `config.toml` en el directorio `.mchain/config` para configurar semillas y pares persistentes:

```bash
cd $HOME/.mchain/config
nano config.toml
```

Agrega semillas y pares persistentes de la siguiente manera:

```bash
seeds = "422a7573d2e727a51cdca65dc0bd909e62f0b05f@64.227.74.95:26656"
persistent_peers = "422a7573d2e727a51cdca65dc0bd909e62f0b05f@64.227.74.95:26656"
```

Guarda y cierra el editor (`Ctrl+O`, `Enter`, `Ctrl+X`).

### Paso 4: Configurar Cosmovisor para actualizaciones automáticas

Instala y configura Cosmovisor para automatizar las actualizaciones del nodo:

```bash
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
mkdir -p ~/.mchain/cosmovisor/{genesis,upgrades}
mkdir -p ~/.mchain/cosmovisor/genesis/bin
echo "# Configuración de Cosmovisor" >> ~/.profile
echo "export DAEMON_NAME=mchaind" >> ~/.profile
echo "export DAEMON_HOME=$HOME/.mchain" >> ~/.profile
source ~/.profile
```

Copia el binario `mchaind` a la carpeta genesis de Cosmovisor:

```bash
cp $GOPATH/bin/mchaind ~/.mchain/cosmovisor/genesis/bin
```

Verifica las versiones:

```bash
cosmovisor version
mchaind version
```

Reinicia el nodo:

```bash
mchaind unsafe-reset-all
```

### Paso 5: Sincronizar la chain

Descarga e instala las herramientas necesarias:

```bash
sudo apt-get install wget liblz4-tool aria2 -y
```

Descarga y extrae los datos de la cadena:

```bash
URL=https://mchain.fra1.cdn.digitaloceanspaces.com/mchain-testnet-1/mchain-testnet-1.tar.lz4
cd $HOME/.mchain/data/
wget -O - $URL | lz4 -d | tar -xvf -
```

### Paso 6: Ejecutar el servicio de Mchain

Crea e inicia un servicio para ejecutar Cosmovisor:

```bash
echo "[Unit]
Description=Cosmovisor daemon
After=network-online.target
[Service]
Environment variables...
User=$USER
ExecStart=${HOME}/go/bin/cosmovisor run start
Restart=always
RestartSec=3
[Install]
WantedBy=multi-user.target
" >cosmovisor.service
sudo mv cosmovisor.service /etc/systemd/system/cosmovisor.service
sudo systemctl daemon-reload
systemctl restart systemd-journald
sudo systemctl start cosmovisor
```

Verifica el estado del servicio:

```bash
sudo systemctl status cosmovisor
```

Para ver los logs en vivo:

```bash
journalctl -u cosmovisor -f
```
