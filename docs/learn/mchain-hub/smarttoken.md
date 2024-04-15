---
sidebar_position: 5
title: Smart Tokens
---

# Smart Tokens

Smart Tokens are an integral part of the Mchain ecosystem, offering a versatile and flexible means of token creation and management. This guide provides an overview of Smart Tokens and their functionalities on the Mchain Hub.

**Testnet URL:** https://testnet.hub.mchain.network/mchain/smarttoken

## Understanding Smart Tokens

A Smart Token on Mchain is a custom token with various features and configurations. It can represent anything from a digital asset to a utility or governance token within the Mchain ecosystem.

### Key Features of Smart Tokens

- **Name**: The full name of the Smart Token, such as "Burger Points."
- **Symbol**: A shorthand identifier for the Smart Token, typically 1 to 6 characters long, like "BTC" for Bitcoin.
- **Token Features**: Smart Tokens come with configurable features:
    - **Minting**: Allows additional creation of coins, increasing the total supply. Once set, this feature can be disabled but not reactivated.
    - **Burning**: Enables users to destroy coins, reducing the supply. Includes an option to send coins to a specific burn address.
    - **Sending**: Activates the transferability of tokens among users. If disabled, only the token owner or minter can perform transfers.
    - **Free Send**: Allows the return of tokens to the owner or minter without incurring transaction costs, borne by the recipient.
    - **Whitelist**: Enables a list of authorized users to receive the token.
    - **Freezing**: Allows global freezing of transfers and the creation of a list of frozen addresses, restricting token transfers.

### Token Economics

- **Decimals Configuration**: Sets the number of decimals for the Smart Token, defaulting to 6. Tokens without decimals are set to 0.
- **Subunit Configuration**: Defines the symbol of the smallest denomination of the token, typically the main symbol preceded by "u". In tokens without decimals, it may match the main symbol.

### Token Management
- **Maximum Supply Configuration**: Sets a limit on the number of coins that can be created, establishing a cap on the total supply.
- **Initial Supply Configuration**: Allows the initial minting of coins when issuing the token. If minting is active, this value can be zero, allowing for future minting.

### Token Rates
- **Send Burn Rate**: Percentage of tokens sent to be "burned" or removed from circulation.
- **Send Commission Rate**: Percentage of tokens sent as a commission to the token creator or a designated account.
- **Send Stake Rate**: Percentage of tokens sent to reward the block validator and their stakers.
- **Send Community Rate**: Percentage of tokens sent to the "community pool" for supporting the community and project development.

### Additional Information
- **Smart Token Details**: View details like the current supply, max supply, authority, minter, and metadata.
- **Token Holders**: Check the list of token holders and their respective quantities and percentages.
- **Total Burned**: See the total amount of tokens burned.
- **URI**: Set or update the URI for specific Smart Tokens.
- **Issue Fee**: The cost associated with issuing the Smart Token, aimed at rewarding validators and stakers.

Smart Tokens on Mchain offer a robust and customizable approach to token creation and management, catering to a wide range of use cases in the blockchain space.