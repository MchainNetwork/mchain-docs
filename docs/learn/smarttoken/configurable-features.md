---
sidebar_position: 2
title: Configurable Features
---

# Configurable Features of Smart Tokens

Thanks to their programmable nature, Mchain's Smart Tokens offer a flexible framework for various applications. These features enable the creation of customized tokens for various needs, fostering innovation and engagement in the circular economy. Here's a breakdown of their key configurable features:

### Token Issuance
- **Name Definition**: Full name of the Smart Token.
  - Example: Burger Points
- **Symbol Definition**: Unique abbreviation for the Smart Token, 1-6 characters.
  - Example: BTC
- **Subunit Configuration**: Symbol for the smallest denomination, usually "u" followed by the main symbol. For non-decimal tokens, it matches the main symbol.

### Token Characteristics
- **Minting**: Allows creation of additional coins, increasing total supply. Irreversible once deactivated.
- **Burning**: Enables users to destroy coins, reducing total supply. Includes a specific burn address option. Irreversible once deactivated.

### Token Transfer
- **Sending**: Activates transferability of tokens. Irreversible once disabled.
- **Free Sending**: Returns tokens to the owner or minter without transaction costs.
- **Whitelisting**: Restricts token reception to authorized users. Irreversible.
- **Freezing**: Freezes global transfers and creates a list of frozen addresses.

### Token Rates
Configurable percentages applied to each transaction:
- **Send Burn Rate**: Percentage of tokens to be burned, removing them from circulation.
- **Send Commission Rate**: Percentage of tokens as a commission to the token creator or a designated account.
- **Send Stake Rate**: Percentage of tokens rewarded to the block validator and their stakers.
- **Send Community Rate**: Percentage of tokens contributed to the community pool for project support and development.

### Supply Settings
- **Maximum Supply**: Caps the total possible coin creation.
- **Initial Supply**: Amount of coins minted upon token issuance. Future minting possible if enabled.
- **Decimal Configuration**: Number of decimals for the token, defaulting to 6. Set to 0 for non-decimal or point-based tokens.

### Governance-Configurable Parameters
Smart Tokens include parameters configurable through blockchain governance, enhancing adaptability and responsiveness to the community's needs:

- **Issue Fee**: A cost associated with the issuance of a Smart Token, aimed to incentivize validators and stakers.
- **Mint Fee**: A fee paid by the issuer or minter when creating a Smart Token, contributing to the Emission Rate.

