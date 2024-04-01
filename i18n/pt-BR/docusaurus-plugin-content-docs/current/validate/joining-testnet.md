---
sidebar_position: 2
title: Executando um nó em Testnet
---

# Executando um nó em Testnet

Executar um nó na testnet do Mchain é um passo fundamental para desenvolvedores e aqueles que aspiram ser validadores. Você pode se juntar à rede utilizando dois métodos principais: através do Instalador do Mchain ou configurando manualmente a CLI do Mchain.

## Opção 1: Usando o instalador do Mchain

O Instalador do Mchain é uma ferramenta conveniente para se juntar rapidamente à rede. Para usá-lo, execute:

```bash
curl -sL https://get.mchain.network/install > i.py && python3 i.py --binary_path=/usr/local/bin
```

Este script baixa e configura os componentes necessários para se juntar à rede Mchain.

## Opção 2: Configuração manual com CLI do Mchain

Você pode instalar e configurar manualmente a CLI do Mchain para uma abordagem mais prática. Este método é recomendado para usuários que preferem um maior controle sobre a configuração de seu nó.

### Passo 1: Instalar binário do Mchain do GitHub Release

Baixe o último binário do Mchain da [página de Releases no GitHub](https://github.com/MchainNetwork/mchain/releases). Certifique-se de selecionar a versão correta para o seu sistema operacional.

Uma vez baixado, você pode instalar o binário em um diretório de sua escolha, comumente em `/usr/local/bin` para facilitar seu uso. Por exemplo, se você baixou `mchaind`, pode instalá-lo usando:

```bash
sudo mv mchaind /usr/local/bin/
```

### Passo 2: Inicializar o nó do Mchain

Após instalar o binário, inicialize seu nó com:

```bash
mchaind init NODE_NAME --chain-id=mchain-testnet-1
```

Substitua `NODE_NAME` por um nome de sua escolha.

### Passo 3: Configurar o nó

Edite o arquivo `config.toml` no diretório `.mchain/config` para configurar sementes e pares persistentes:

```bash
cd $HOME/.mchain/config
nano config.toml
```

Adicione sementes e pares persistentes da seguinte maneira:

```bash
seeds = "422a7573d2e727a51cdca65dc0bd909e62f0b05f@64.227.74.95:26656"
persistent_peers = "422a7573d2e727a51cdca65dc0bd909e62f0b05f@64.227.74.95:26656"
```

Salve e feche o editor (`Ctrl+O`, `Enter`, `Ctrl+X`).

### Passo 4: Configurar o Cosmovisor para atualizações automáticas

Instale e configure o Cosmovisor para automatizar as atualizações do nó:

```bash
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
mkdir -p ~/.mchain/cosmovisor/{genesis,upgrades}
mkdir -p ~/.mchain/cosmovisor/genesis/bin
echo "# Configuração do Cosmovisor" >> ~/.profile
echo "export DAEMON_NAME=mchaind" >> ~/.profile
echo "export DAEMON_HOME=$HOME/.mchain" >> ~/.profile
source ~/.profile
```

Copie o binário `mchaind` para a pasta genesis do Cosmovisor:

```bash
cp $GOPATH/bin/mchaind ~/.mchain/cosmovisor/genesis/bin
```

Verifique as versões:

```bash
cosmovisor version
mchaind version
```

Reinicie o nó:

```bash
mchaind unsafe-reset-all
```

### Passo 5: Sincronizar a chain

Baixe e instale as ferramentas necessárias:

```bash
sudo apt-get install wget liblz4-tool aria2 -y
```

Baixe e extraia os dados da cadeia:

```bash
URL=https://mchain.fra1.cdn.digitaloceanspaces.com/mchain-testnet-1/mchain-testnet-1.tar.lz4
cd $HOME/.mchain/data/
wget -O - $URL | lz4 -d | tar -xvf -
```

### Passo 6: Executar o serviço do Mchain

Crie e inicie um serviço para executar o Cosmovisor:



```bash
echo "[Unit]
Description=Daemon Cosmovisor
After=network-online.target
[Service]
Variáveis de ambiente...
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

Verifique o estado do serviço:

```bash
sudo systemctl status cosmovisor
```

Para ver os logs ao vivo:

```bash
journalctl -u cosmovisor -f
```
