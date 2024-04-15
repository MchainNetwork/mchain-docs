---
sidebar_position: 2
title: Running a Node on Testnet
---

# Running a Node on Testnet

Running a node on Mchain's testnet is a fundamental step for developers and those aspiring to become validators. You can join the network using two primary methods: through the Mchain Installer or manually setting up the Mchain CLI. 

## Option 1: Using Mchain Installer

The Mchain Installer is a convenient tool for quickly joining the network. To use it, run:

```bash
curl -sL https://get.mchain.network/install > i.py && python3 i.py --binary_path=/usr/local/bin
```

This script downloads and configures the necessary components to join the Mchain network.

## Option 2: Manual Setup with Mchain CLI

You can manually install and configure the Mchain CLI for a more hands-on approach. This method is recommended for users who prefer greater control over their node setup.

### Step 1: Install Mchain Binary from GitHub Release

Download the latest Mchain binary from the [GitHub Releases page](https://github.com/MchainNetwork/mchain/releases). Ensure you select the correct version for your operating system.

Once downloaded, you can install the binary to a directory of your choice, commonly `/usr/local/bin` for ease of use. For instance, if you downloaded `mchaind`, you can install it using:

```bash
sudo mv mchaind /usr/local/bin/
```

### Step 2: Initialize Mchain Node

After installing the binary, initialize your node with:

```bash
mchaind init NODE_NAME --chain-id=mchain-testnet-1
```

Replace `NODE_NAME` with a name of your choice.

### Step 3: Configure the Node

Edit the `config.toml` file in the `.mchain/config` directory to set up seeds and persistent peers:

```bash
cd $HOME/.mchain/config
nano config.toml
```

Add seeds and persistent peers as follows:

```bash
seeds = "422a7573d2e727a51cdca65dc0bd909e62f0b05f@64.227.74.95:26656"
persistent_peers = "422a7573d2e727a51cdca65dc0bd909e62f0b05f@64.227.74.95:26656"
```

Save and exit the editor (`Ctrl+O`, `Enter`, `Ctrl+X`).

### Step 4: Set Up Cosmovisor for Seamless Upgrades

Install and configure Cosmovisor to automate node upgrades:

```bash
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
mkdir -p ~/.mchain/cosmovisor/{genesis,upgrades}
mkdir -p ~/.mchain/cosmovisor/genesis/bin
echo "# Setup Cosmovisor" >> ~/.profile
echo "export DAEMON_NAME=mchaind" >> ~/.profile
echo "export DAEMON_HOME=$HOME/.mchain" >> ~/.profile
source ~/.profile
```

Copy the `mchaind` binary to the Cosmovisor genesis folder:

```bash
cp $GOPATH/bin/mchaind ~/.mchain/cosmovisor/genesis/bin
```

Verify the versions:

```bash
cosmovisor version
mchaind version
```

Reset the node:

```bash
mchaind unsafe-reset-all
```

### Step 5: Sync the Chain

Download and install the necessary tools:

```bash
sudo apt-get install wget liblz4-tool aria2 -y
```

Download and extract the chain data:

```bash
URL=https://mchain.fra1.cdn.digitaloceanspaces.com/mchain-testnet-1/mchain-testnet-1.tar.lz4
cd $HOME/.mchain/data/
wget -O - $URL | lz4 -d | tar -xvf -
```

### Step 6: Run the Mchain Service

Create and start a service to run Cosmovisor:

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

Check the service status:

```bash
sudo systemctl status cosmovisor
```

For live logs:

```bash
journalctl -u cosmovisor -f
```
