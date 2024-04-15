---
sidebar_position: 2
title: Adicionar Liquidez no Uniswap
---

# Adicionar Liquidez no Uniswap V3

Uniswap V3, a versão mais recente da popular exchange descentralizada, introduz várias novas funcionalidades para os fornecedores de liquidez. Este guia irá guiá-lo na adição de liquidez a um pool de MARK e Ethereum (ETH) na rede Arbitrum.

## Pré-requisitos
Antes de adicionar liquidez, certifique-se de ter:
1. **Uma carteira digital**: Configure uma carteira compatível com Arbitrum One, como o Metamask.
2. **Posse de MARK e ETH**: Você precisa de ambos os tokens na sua carteira na rede Arbitrum One em uma proporção baseada no preço atual do pool.
3. **ETH suficiente para taxas de transação**: As taxas de gás podem flutuar, então tenha ETH extra disponível.

## Passos para Adicionar Liquidez
1. **Mude sua rede no Metamask para Arbitrum One**
   - Se você não configurou a rede anteriormente, você pode seguir este [guia](../metamask/add-arbitrum-to-metamask.md)
2. **Conecte-se ao Uniswap V3**: 
   - Visite a Interface do Uniswap em [Uniswap V3](https://app.uniswap.org/add/ETH/0x4D01397994aA636bDCC65c9e8024bC497498c3bb/3000?chain=arbitrum) e conecte sua carteira.
3. **Selecione o par**:
   - Escolha ETH e MARK da lista de tokens. Se MARK não estiver listado, adicione-o manualmente usando seu [endereço de contrato](../specifications.md).
4. **Selecione o nível de taxa**:
   - Escolha entre os níveis de taxa disponíveis. Aconselhamos que você selecione a taxa de 0,3% para participar do MARK Arbitrum Staking.
5. **Defina a faixa de preço**:
   - No Uniswap V3, você precisa definir uma faixa de preço para sua liquidez. Sua liquidez só ganhará taxas quando o preço do par de tokens estiver dentro desta faixa. Você pode clicar no botão Faixa Completa para estar disponível para toda a faixa.
6. **Determine a quantidade de sua liquidez**:
   - Decida quanto ETH e MARK você deseja contribuir. A interface o guiará sobre a proporção com base no preço de mercado atual.
7. **Revise e adicione liquidez**:
   - Revise os detalhes de sua posição, incluindo o nível de taxa e a quantidade de tokens que você está contribuindo.
   - Confirme a transação em sua carteira e espere que ela seja processada.

## Monitoramento e Ajuste de Sua Posição
- Você pode monitorar sua posição de liquidez na interface do Uniswap uma vez adicionada.
- Você pode ajustar sua faixa de preço ou adicionar/remover liquidez com base nas condições de mercado.

## Riscos e Considerações
- **Perda impermanente**: Quando o preço do par de tokens diverge significativamente, você pode enfrentar uma perda impermanente.
- **Taxas de gás**: Taxas de gás altas podem impactar a rentabilidade, especialmente com menores quantidades de capital.

## Staking de MARK Arbitrum

Você pode ganhar mais recompensas de MARK fazendo staking de sua posição no Uniswap; aprenda como no guia para [Staking de MARK Arbitrum](../staking/staking-mark-arbitrum.md).
