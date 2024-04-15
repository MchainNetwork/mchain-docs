---
sidebar_position: 3
title: Reverse Lookup
---

# Reverse Lookup in Mchain Name Service (MNS)

Reverse Lookup in Mchain Name Service (MNS) is a feature that identifies domain names associated with specific Mchain addresses. This functionality is essential for verifying identities and enhances the user experience by linking easy-to-remember domain names with blockchain addresses.

## How Does Reverse Lookup Work?

Reverse Lookup allows users and developers to find the domain name linked to an Mchain address. For example, if you have someone's Mchain address, you can use Reverse Lookup to determine if that address is associated with a domain name in MNS.

## Methods for Performing Reverse Lookup

### 1. Using the CLI `mchaind`
- You can use the CLI `mchaind` to perform Reverse Lookup queries directly from the command line.
- The specific command will depend on the current version of `mchaind`, but it generally follows a format similar to `mchaind query mns reverses [address]`.

### 2. Using the API
- The Mchain API provides endpoints to perform Reverse Lookup.
- Developers can integrate this feature into their applications and services for automated name resolution.

### 3. Through the Mchain Hub
- The Mchain Hub offers a graphical interface where users can efficiently perform Reverse Lookup.
- Enter the Mchain address in the relevant section of the Mchain Hub to find the associated domain name.

## Applications of Reverse Lookup

- **Identity Verification**: Assists verifying user identities by associating blockchain addresses with known domain names.
- **UX Improvement in dApps**: dApps can use Reverse Lookup to display domain names instead of cryptic addresses, thus improving the user experience.
- **Integration with Web3 Services**: Web3 services and applications can utilize Reverse Lookup to enhance their interfaces and functionalities.
