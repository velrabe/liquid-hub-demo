# Liquidity Hub Demo

An interactive liquidity management application prototype with mock data.

## Getting Started

Simply open the `index.html` file in your browser. All data is stored in localStorage.

## Features

### 1. Wallet Connection
- Click "Connect Wallet" in the top right corner
- Wallet address is generated automatically (demo mode)
- All data is saved in localStorage
- To disconnect, click on the wallet address and confirm

### 2. Balance Top-Up
- After connecting your wallet, a "Top Up" button will appear
- Select a stablecoin (USDS, USDC, DAI, USDT)
- Enter the amount to top up
- Balance will update instantly

### 3. Deposits
- Click "Deposit" on the main page or in the assets table
- Select a pool for deposit
- Choose an asset from your balance (you can deposit any asset into any pool)
- The system automatically converts at current prices
- Click "Confirm Deposit"

**Feature**: You can deposit, for example, USDC into the stETH pool - the system will automatically convert at market rate.

### 4. Withdrawals
- In the assets table, find a pool with balance > 0
- Click "Withdraw"
- Enter the amount or click "MAX"
- If the asset is used as collateral and there are active loans, the system will check for sufficient remaining collateral

### 5. Use as Collateral
- For assets with balance > 0, a "Use as collateral" toggle is available
- Enable the toggle to use the asset as collateral
- Active collateral allows you to take out loans

### 6. Borrowing
- Go to the "Borrow" tab
- Make sure you have active collateral
- Available loan amount = Collateral value / 1.5 (150% collateralization required)
- Enter the loan amount
- Click "Confirm Borrow"
- The loan will appear in the "Your Active Borrows" section

### 7. Loan Repayment
- In the "Your Active Borrows" section, find an active loan
- Two options available:
  - **Repay Part**: partial repayment (enter amount)
  - **Repay Full**: full repayment of debt + interest
- After full repayment, collateral is unlocked

### 8. Pool Detail Page
- Click on any row in the assets table to open the pool detail page
- Complete pool information:
  - Total supplied (total deposit volume)
  - Deposit APY (yield percentage)
  - Supply cap (deposit limit)
  - Supply Rate (APR) chart over time
  - Market Overview with Utilization rate
  - Collateral parameters (Max LTV, Liquidation threshold, penalty)
  - E-Mode parameters
- "My Wallet" section shows:
  - User balance in this asset
  - Available to deposit / borrow
  - Quick deposit/borrow buttons
- "Your Position" section displays:
  - Deposited (your deposits)
  - Profit Earned (real-time earnings with 12 decimals)
  - Used as Collateral (toggle)
  - Borrowed Amount (loan amount, if any)

### 9. Earnings (APY)
- Deposits automatically accrue interest in real-time
- Updates every second with high precision (12 decimal places)
- "Profit" column shows accumulated earnings
- APR for each asset is displayed in the table

### 10. Loan Debt
- Loan interest also accrues in real-time
- Current debt is visible in the "Your Active Borrows" section
- "Interest" shows accumulated interest
- "Total Debt" = Principal + Interest

### 11. Transaction History
- Go to the "History" tab in the top menu
- Complete history of all operations:
  - Top Up
  - Deposit
  - Withdraw
  - Borrow
  - Repay

### 12. Filtering and Search
- Use the search field to filter by asset name or network
- Filter buttons (Markets, Networks, Collateral Status, Sort by) are prepared for expansion

### 13. Data Reset
- Go to the "Settings" tab in the top menu
- Click "Reset All Data" for a complete reset

## Technical Details

### Architecture
- Pure HTML/CSS/JavaScript with no dependencies
- All data in localStorage
- Real-time APY calculations every second
- Automatic asset conversion at current rates

### Mock Data
Supported assets:
- ETH (Ethereum)
- stETH (Ethereum)
- sUSDS (Gnosis, Ethereum)
- sDAI (Gnosis, Ethereum)
- rUSDC (Base)
- asBNB (BNB Chain)
- fUSDC (Arbitrum)
- USDS, USDC, DAI, USDT (Ethereum)

### Parameters
- **LTV (Loan-to-Value)**: 70-85% depending on asset
- **Minimum collateralization**: 150% (1.5x)
- **Calculation precision**: 8 decimal places
- **Update frequency**: 1 second

### localStorage Structure
```javascript
{
  walletAddress: string,
  walletBalances: { [assetId]: number },
  poolDeposits: { 
    [assetId]: { 
      amount: number, 
      initialTime: number 
    } 
  },
  collateralEnabled: { [assetId]: boolean },
  borrows: [{
    id: string,
    assetId: string,
    amount: number,
    borrowTime: number,
    repaid: boolean,
    accumulatedInterest: number
  }],
  history: [{
    id: string,
    type: string,
    assetId: string,
    amount: number,
    timestamp: number
  }],
  lastUpdateTime: number
}
```

## Usage Examples

### Example 1: Simple Deposit
1. Connect wallet (automatic address generation)
2. Top up balance: 1000 USDC via "Top Up"
3. Click on ETH row in the table - pool detail page opens
4. Click "Deposit" on the pool page
5. Select USDC, enter 500
6. Confirm - receive ~0.118 ETH in deposit
7. Watch profit grow in real-time (12 decimal places)

### Example 2: Collateralized Loan
1. Connect wallet
2. Top up 10000 USDC
3. Click on ETH pool and deposit 10000 USDC
4. Enable "Use as collateral" toggle on pool page
5. Click "Borrow" on pool page or go to Borrow tab
6. ~$6666 available for borrowing
7. Borrow 5000 USDS
8. Watch debt grow in real-time

### Example 3: Earning on Deposits
1. Connect wallet
2. Top up 10000 USDS
3. Open sUSDS pool page (6% APR)
4. Deposit via button on pool page
5. Watch profit grow every second with 12 decimal precision
6. Earn ~600 USDS per year

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Demo Limitations

- No real blockchain integration
- Simplified liquidation model
- Fixed asset prices
- All data is local

## New Features v2

✅ **Implemented:**
- Detailed pool pages with complete information
- Donut chart for pool utilization
- Supply Rate (APR) chart
- Header navigation (sidebar removed)
- Automatic wallet address generation
- High precision profit display (12 decimals)
- Click on table row to open pool page
- Deposit/borrow integration directly from pool page

## Additional Development Opportunities

- Implement liquidations on collateral drop
- Add more networks and assets
- Integration with Web3 wallet providers (MetaMask, WalletConnect)
- Detailed portfolio analytics
- Yield calculator
- Historical charts with real data
- Important event notifications
