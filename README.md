# GojaCoin

## Overview
GojaCoin is a cross-chain ERC-20 token, designed to operate on both Ethereum and Binance Smart Chain. This repository contains the smart contracts, AWS integrations, and deployment scripts for the GojaCoin project.

## Features
- Cross-chain functionality between Ethereum (Sepolia Testnet) and Binance Smart Chain.
- ERC-20 compliant token with built-in security measures.
- AWS integration for transaction processing and data storage.
  
## Setup
### Prerequisites
- Node.js (v14 or above)
- Hardhat or Truffle
- AWS CLI configured
- MetaMask (for Sepolia Testnet and Binance Smart Chain)

### Smart Contract Deployment
1. Install dependencies:
    ```bash
    npm install
    ```

2. Compile contracts:
    ```bash
    npx hardhat compile
    ```

3. Deploy to Sepolia:
    ```bash
    npx hardhat run scripts/deploy.js --network sepolia
    ```

4. Deploy to Binance Smart Chain:
    ```bash
    npx hardhat run scripts/deploy.js --network bsc
    ```

### AWS Integration
1. Set up **Lambda** function for transaction monitoring:
    - Deploy Lambda function using the AWS CLI or through the console.
    - Configure DynamoDB to store token-related data.

2. Monitor token transactions via **Amazon CloudWatch**.

## Testing
1. Run tests:
    ```bash
    npx hardhat test
    ```

## Future Plans
- List GojaCoin on major exchanges (Binance, etc.).
- Expand governance features using OpenZeppelin.
