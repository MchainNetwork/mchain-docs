---
sidebar_position: 2
title: Check Your v1 Balance
---

# How to Check the Balance of Your Wallet.dat for Migration to Mchain v2

If you are a user of Mchain and preparing to migrate to version 2 of the chain, it is essential to ensure that your wallet.dat has a balance before proceeding with the migration. To help with this, we provide a simple tool that allows you to verify the balance of your MAR addresses without sharing your private key. Additionally, if you only need to check the balance of a single address, you can use our tool at https://mchain.network/balance to get that information. However, this guide is specifically designed for a bulk address query from your wallet.dat. Using an HTML file and the ‘dumpwallet’ command in the Mchain Core desktop program (similar to Bitcoin Core), you can process your wallet.dat locally and query the balance of your addresses. 

Follow these straightforward steps to ensure your funds are ready for migration.

*** Step 1: Download the HTML File ***

To get started, click the provided link [Download HTML File](https://mchain.network/balance/processAddresses.html). This file ‘processAddresses.html’ will allow you to upload the wallet.dat dump and check the balances of your addresses.

*** Step 2: Obtain the Wallet.dat Dump ***

Before checking the balance of your addresses, you need to get the dump of your wallet.dat using the Mchain Core desktop program. Follow these steps:

1. Open the Mchain Core program on your computer.
2. Go to the “Help” menu and select “Debug Window.”
3. In the “Console” tab, you will see a field where you can enter commands.
4. Type the following command and press Enter:

``dumpwallet Path/To/Save/walletdump.txt``

Replace “Path/To/Save/walletdump.txt” with the location and name of the file where you want to save the wallet.dat dump.

*** Step 3: Upload the Dump and Check Balances ***

Once you have the walletdump.txt file containing the wallet.dat dump, open the HTML file you downloaded in Step 1 in your web browser.

*** Step 4: Process and Verify Balances ***

You will find a field to upload the walletdump.txt file on the HTML page. Click the “Upload File” button and select the file you obtained in Step 2. The tool will then process your wallet.dat locally and query Mchain for the balance of each MAR address without sharing your private key.

*** Step 5: View Addresses with Balances ***

After completing the process, the tool will display the MAR addresses with a balance and their corresponding private keys. Safely save this information, as you will need it when requesting the migration to Mchain v2, following the steps provided by the Mchain team.

