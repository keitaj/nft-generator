# nft-generator contract

## Overview

### Installation

```
npm install
```

## Usage

### Setting up a local blockchain

```
npx ganache-cli —deterministic
```

Listen on 127.0.0.1:8545

### Deploying a Smart Contract to localhost

```
npx truffle migrate --network development
```

### Usage

#### Interacting from the Console

```
npx truffle console --network development
truffle(development)> mco = await MyCollectible.deployed()
undefined
truffle(development)> mco.name()
'MyCollectible'
truffle(development)> mco.symbol()
'MCO'
```

Generating a NFT(ERC721) from console

Use function mint to generate NFT, Specify uint256 type tokenId as an argument.

```
truffle(development)> mco.mint(1)
```

Check the owner of the NFT

```
truffle(development)> mco.ownerOf(1)
```

Transfer NFT

```
truffle(development)> mco.safeTransferFrom(accounts[0], accounts[1], 1)
```
