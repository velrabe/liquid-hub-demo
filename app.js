// ============================================
// LIQUIDITY HUB DEMO - Main Application
// ============================================

// Mock Data
const MOCK_ASSETS = [
    {
        id: 'eth-ethereum',
        symbol: 'ETH',
        name: 'ETH NATIVE',
        network: 'Ethereum Network',
        icon: 'crypto/assets/eth.svg',
        isNative: true,
        assetType: 'native',
        depositApr: 0,
        borrowApr: 2.5,
        price: 4220,
        canBeCollateral: true,
        ltv: 0.85,
        totalSupplied: 612450.87,
        totalBorrowed: 23156.34
    },
    {
        id: 'steth-ethereum',
        symbol: 'stETH',
        name: 'stETH',
        network: 'Ethereum Network',
        icon: 'crypto/assets/steth.svg',
        assetType: 'native',
        depositApr: 3.43,
        borrowApr: 0,
        price: 4218,
        canBeCollateral: true,
        ltv: 0.80,
        totalSupplied: 354287.45,
        totalBorrowed: 268143.22
    },
    {
        id: 'susds-gnosis',
        symbol: 'sUSDS',
        name: 'sUSDS',
        network: 'Gnosis',
        icon: 'crypto/assets/usds.svg',
        assetType: 'stable',
        depositApr: 6.0,
        borrowApr: 8.5,
        price: 1,
        canBeCollateral: true,
        ltv: 0.75,
        totalSupplied: 892340.12,
        totalBorrowed: 456789.34
    },
    {
        id: 'susds-ethereum',
        symbol: 'sUSDS',
        name: 'sUSDS',
        network: 'Ethereum Network',
        icon: 'crypto/assets/usds.svg',
        assetType: 'stable',
        depositApr: 6.0,
        borrowApr: 8.5,
        price: 1,
        canBeCollateral: true,
        ltv: 0.75,
        totalSupplied: 1245678.90,
        totalBorrowed: 789012.45
    },
    {
        id: 'sdai-gnosis',
        symbol: 'sDAI',
        name: 'sDAI',
        network: 'Gnosis',
        icon: 'crypto/assets/sdai.svg',
        assetType: 'stable',
        depositApr: 6.0,
        borrowApr: 8.0,
        price: 1,
        canBeCollateral: true,
        ltv: 0.75,
        totalSupplied: 567890.23,
        totalBorrowed: 234567.89
    },
    {
        id: 'sdai-ethereum',
        symbol: 'sDAI',
        name: 'sDAI',
        network: 'Ethereum Network',
        icon: 'crypto/assets/sdai.svg',
        assetType: 'stable',
        depositApr: 4.5,
        borrowApr: 7.5,
        price: 1,
        canBeCollateral: true,
        ltv: 0.75,
        totalSupplied: 987654.32,
        totalBorrowed: 456789.12
    },
    {
        id: 'rusdc-base',
        symbol: 'rUSDC',
        name: 'rUSDC',
        network: 'Base',
        icon: 'crypto/assets/usdc.svg',
        assetType: 'stable',
        depositApr: 8.0,
        borrowApr: 10.5,
        price: 1,
        canBeCollateral: true,
        ltv: 0.80,
        totalSupplied: 432109.87,
        totalBorrowed: 198765.43
    },
    {
        id: 'asbnb-bnb',
        symbol: 'asBNB',
        name: 'asBNB',
        network: 'BNB Chain',
        icon: 'crypto/assets/bnb.svg',
        assetType: 'native',
        depositApr: 8.0,
        borrowApr: 10.0,
        price: 650,
        canBeCollateral: true,
        ltv: 0.70,
        totalSupplied: 15678.45,
        totalBorrowed: 8901.23
    },
    {
        id: 'fusdc-arbitrum',
        symbol: 'fUSDC',
        name: 'fUSDC',
        network: 'Arbitrum',
        icon: 'crypto/assets/usdc.svg',
        assetType: 'stable',
        depositApr: 8.0,
        borrowApr: 10.5,
        price: 1,
        canBeCollateral: true,
        ltv: 0.80,
        totalSupplied: 678901.23,
        totalBorrowed: 345678.90
    },
    {
        id: 'usds-ethereum',
        symbol: 'USDS',
        name: 'USDS',
        network: 'Ethereum Network',
        icon: 'crypto/assets/usds.svg',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'usdc-ethereum',
        symbol: 'USDC',
        name: 'USDC',
        network: 'Ethereum Network',
        icon: 'crypto/assets/usdc.svg',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'usdc-base',
        symbol: 'USDC',
        name: 'USDC',
        network: 'Base',
        icon: 'crypto/assets/usdc.svg',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'usdc-arbitrum',
        symbol: 'USDC',
        name: 'USDC',
        network: 'Arbitrum',
        icon: 'crypto/assets/usdc.svg',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'usdc-avalanche',
        symbol: 'USDC',
        name: 'USDC',
        network: 'Avalanche',
        icon: 'crypto/assets/usdc.svg',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'usdc-optimism',
        symbol: 'USDC',
        name: 'USDC',
        network: 'Optimism',
        icon: 'crypto/assets/usdc.svg',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'dai-ethereum',
        symbol: 'DAI',
        name: 'DAI',
        network: 'Ethereum Network',
        icon: 'crypto/assets/sdai.svg',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'usdt-ethereum',
        symbol: 'USDT',
        name: 'USDT',
        network: 'Ethereum Network',
        icon: 'crypto/assets/usdt.png',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'usdt-avalanche',
        symbol: 'USDT',
        name: 'USDT',
        network: 'Avalanche',
        icon: 'crypto/assets/usdt.png',
        assetType: 'stable',
        depositApr: 0,
        borrowApr: 0,
        price: 1,
        canBeCollateral: false,
        ltv: 0,
        totalSupplied: 0,
        totalBorrowed: 0
    },
    {
        id: 'weeth-ethereum',
        symbol: 'weETH',
        name: 'Wrapped eETH',
        network: 'Ethereum Network',
        icon: 'crypto/assets/weeth.webp',
        assetType: 'native',
        depositApr: 3.2,
        borrowApr: 5.5,
        price: 4250,
        canBeCollateral: true,
        ltv: 0.82,
        totalSupplied: 125678.90,
        totalBorrowed: 45678.12
    },
    {
        id: 'weeth-base',
        symbol: 'weETH',
        name: 'Wrapped eETH',
        network: 'Base',
        icon: 'crypto/assets/weeth.webp',
        assetType: 'native',
        depositApr: 3.5,
        borrowApr: 5.8,
        price: 4250,
        canBeCollateral: true,
        ltv: 0.82,
        totalSupplied: 87654.32,
        totalBorrowed: 32109.87
    },
    {
        id: 'weeth-arbitrum',
        symbol: 'weETH',
        name: 'Wrapped eETH',
        network: 'Arbitrum',
        icon: 'crypto/assets/weeth.webp',
        assetType: 'native',
        depositApr: 3.3,
        borrowApr: 5.6,
        price: 4250,
        canBeCollateral: true,
        ltv: 0.82,
        totalSupplied: 98765.43,
        totalBorrowed: 38765.21
    },
    {
        id: 'ausd-ethereum',
        symbol: 'AUSD',
        name: 'Avalanche USD',
        network: 'Ethereum Network',
        icon: 'crypto/assets/ausd.webp',
        assetType: 'stable',
        depositApr: 7.8,
        borrowApr: 10.1,
        price: 1,
        canBeCollateral: true,
        ltv: 0.75,
        totalSupplied: 567890.12,
        totalBorrowed: 234567.89
    },
    {
        id: 'ausd-avalanche',
        symbol: 'AUSD',
        name: 'Avalanche USD',
        network: 'Avalanche',
        icon: 'crypto/assets/ausd.webp',
        assetType: 'stable',
        depositApr: 7.2,
        borrowApr: 9.5,
        price: 1,
        canBeCollateral: true,
        ltv: 0.75,
        totalSupplied: 432109.87,
        totalBorrowed: 198765.43
    },
    {
        id: 'usde-base',
        symbol: 'USDe',
        name: 'Ethena USD',
        network: 'Base',
        icon: 'crypto/assets/usde.webp',
        assetType: 'stable',
        depositApr: 8.5,
        borrowApr: 11.2,
        price: 1,
        canBeCollateral: true,
        ltv: 0.78,
        totalSupplied: 876543.21,
        totalBorrowed: 345678.90
    },
    {
        id: 'usde-arbitrum',
        symbol: 'USDe',
        name: 'Ethena USD',
        network: 'Arbitrum',
        icon: 'crypto/assets/usde.webp',
        assetType: 'stable',
        depositApr: 8.2,
        borrowApr: 10.9,
        price: 1,
        canBeCollateral: true,
        ltv: 0.78,
        totalSupplied: 654321.98,
        totalBorrowed: 298765.43
    }
];

// State Management
class AppState {
    constructor() {
        this.loadState();
        this.startAprCalculations();
    }

    loadState() {
        const saved = localStorage.getItem('liquidityHubState');
        if (saved) {
            const state = JSON.parse(saved);
            this.walletAddress = state.walletAddress || null;
            this.walletBalances = state.walletBalances || {};
            this.poolDeposits = state.poolDeposits || {};
            this.collateralEnabled = state.collateralEnabled || {};
            this.borrows = state.borrows || [];
            this.history = state.history || [];
            this.lastUpdateTime = state.lastUpdateTime || Date.now();
        } else {
            this.reset();
        }
    }

    saveState() {
        const state = {
            walletAddress: this.walletAddress,
            walletBalances: this.walletBalances,
            poolDeposits: this.poolDeposits,
            collateralEnabled: this.collateralEnabled,
            borrows: this.borrows,
            history: this.history,
            lastUpdateTime: Date.now()
        };
        localStorage.setItem('liquidityHubState', JSON.stringify(state));
    }

    reset() {
        this.walletAddress = null;
        this.walletBalances = {};
        this.poolDeposits = {};
        this.collateralEnabled = {};
        this.borrows = [];
        this.history = [];
        this.lastUpdateTime = Date.now();
        
        // Clear localStorage to ensure full reset
        localStorage.removeItem('liquidityHubState');
        
        this.saveState();
    }

    connectWallet(address) {
        this.walletAddress = address;
        // Initialize poolDeposits only for pool assets (depositApr > 0)
        MOCK_ASSETS.forEach(asset => {
            if (asset.depositApr > 0 && !this.poolDeposits[asset.id]) {
                this.poolDeposits[asset.id] = {
                    amount: 0,
                    initialTime: Date.now()
                };
            }
        });
        this.saveState();
    }

    disconnectWallet() {
        this.walletAddress = null;
        this.saveState();
    }

    topUp(assetIdOrSymbol, amount) {
        // Try to find by assetId first, then by symbol on Ethereum Network
        let asset = MOCK_ASSETS.find(a => a.id === assetIdOrSymbol);
        if (!asset) {
            asset = MOCK_ASSETS.find(a => a.symbol === assetIdOrSymbol && a.network === 'Ethereum Network');
        }
        if (asset) {
            this.walletBalances[asset.id] = (this.walletBalances[asset.id] || 0) + parseFloat(amount);
            this.addHistory('top_up', asset.id, amount);
            this.saveState();
        }
    }

    deposit(poolId, fromAssetId, amount) {
        const pool = MOCK_ASSETS.find(a => a.id === poolId);
        const fromAsset = MOCK_ASSETS.find(a => a.id === fromAssetId);
        
        if (!pool || !fromAsset) {
            return false;
        }

        // Convert amount to pool's asset value
        const fromValue = amount * fromAsset.price;
        const poolAmount = fromValue / pool.price;

        // Check balance
        if ((this.walletBalances[fromAssetId] || 0) < amount) {
            return false;
        }

        // Deduct from wallet
        this.walletBalances[fromAssetId] -= amount;

        // Add to pool
        if (!this.poolDeposits[poolId]) {
            this.poolDeposits[poolId] = {
                amount: 0,
                initialTime: Date.now()
            };
        } else if (!this.poolDeposits[poolId].initialTime) {
            // If poolDeposits exists but initialTime is missing, set it
            this.poolDeposits[poolId].initialTime = Date.now();
        }
        this.poolDeposits[poolId].amount += poolAmount;

        this.addHistory('deposit', poolId, poolAmount, fromAssetId, amount);
        this.saveState();
        return true;
    }

    withdraw(poolId, amount) {
        const pool = MOCK_ASSETS.find(a => a.id === poolId);
        if (!pool) return false;

        const deposit = this.poolDeposits[poolId];
        if (!deposit || deposit.amount < amount) return false;

        // Check if used as collateral and has active borrows with meaningful debt
        if (this.collateralEnabled[poolId]) {
            const activeBorrows = this.borrows.filter(b => {
                if (b.repaid) return false;
                const asset = MOCK_ASSETS.find(a => a.id === b.assetId);
                if (!asset) return false;
                const debt = b.amount + b.accumulatedInterest;
                return (debt * asset.price) >= 0.01; // Only check if debt >= $0.01
            });
            
            if (activeBorrows.length > 0) {
                const totalCollateralValue = this.getTotalCollateralValue();
                const withdrawValue = amount * pool.price;
                const remainingCollateral = totalCollateralValue - withdrawValue;
                const totalBorrowValue = this.getTotalBorrowValue();
                
                // Check if remaining collateral is sufficient
                if (remainingCollateral < totalBorrowValue * 1.2) { // 120% collateralization
                    alert('Cannot withdraw: insufficient collateral for active borrows');
                    return false;
                }
            }
        }

        // Deduct from pool
        deposit.amount -= amount;

        // Add to wallet
        this.walletBalances[poolId] = (this.walletBalances[poolId] || 0) + amount;

        this.addHistory('withdraw', poolId, amount);
        this.saveState();
        return true;
    }
    
    withdrawAndConvert(poolId, amount, toAssetId) {
        const pool = MOCK_ASSETS.find(a => a.id === poolId);
        const toAsset = MOCK_ASSETS.find(a => a.id === toAssetId);
        if (!pool || !toAsset) return false;

        // Get total available balance (deposits + wallet)
        const depositAmount = this.poolDeposits[poolId]?.amount || 0;
        const walletAmount = this.walletBalances[poolId] || 0;
        const totalAvailable = depositAmount + walletAmount;
        
        if (totalAvailable < amount) {
            alert('Insufficient balance');
            return false;
        }

        // Check if used as collateral and has active borrows with meaningful debt
        if (this.collateralEnabled[poolId]) {
            const activeBorrows = this.borrows.filter(b => {
                if (b.repaid) return false;
                const asset = MOCK_ASSETS.find(a => a.id === b.assetId);
                if (!asset) return false;
                const debt = b.amount + b.accumulatedInterest;
                return (debt * asset.price) >= 0.01; // Only check if debt >= $0.01
            });
            
            if (activeBorrows.length > 0) {
                const totalCollateralValue = this.getTotalCollateralValue();
                const withdrawValue = amount * pool.price;
                const remainingCollateral = totalCollateralValue - withdrawValue;
                const totalBorrowValue = this.getTotalBorrowValue();
                
                // Check if remaining collateral is sufficient
                if (remainingCollateral < totalBorrowValue * 1.2) { // 120% collateralization
                    alert('Cannot withdraw: insufficient collateral for active borrows');
                    return false;
                }
            }
        }

        // Deduct from wallet first, then from deposit
        let remaining = amount;
        
        if (walletAmount > 0) {
            const fromWallet = Math.min(walletAmount, remaining);
            this.walletBalances[poolId] -= fromWallet;
            remaining -= fromWallet;
            
            // Clean up very small wallet balances
            if (this.walletBalances[poolId] < 0.00000001) {
                delete this.walletBalances[poolId];
            }
        }
        
        if (remaining > 0 && depositAmount > 0) {
            const deposit = this.poolDeposits[poolId];
            if (deposit) {
                deposit.amount -= remaining;
                
                // Clean up deposit if USD value < $0.01
                const depositUsdValue = deposit.amount * pool.price;
                const walletUsdValue = (this.walletBalances[poolId] || 0) * pool.price;
                const totalUsdValue = depositUsdValue + walletUsdValue;
                
                if (totalUsdValue < 0.01) {
                    delete this.poolDeposits[poolId];
                    delete this.walletBalances[poolId];
                    delete this.collateralEnabled[poolId];
                }
            }
        }

        // Convert amount
        const valueInUsd = amount * pool.price;
        const convertedAmount = valueInUsd / toAsset.price;
        
        // If target is a pool asset (depositApr > 0), add to poolDeposits
        // Otherwise add to wallet
        if (toAsset.depositApr > 0) {
            // This is a deposit into target pool
            if (!this.poolDeposits[toAssetId]) {
                this.poolDeposits[toAssetId] = {
                    amount: 0,
                    initialTime: Date.now()
                };
            }
            this.poolDeposits[toAssetId].amount += convertedAmount;
        } else {
            // Regular stablecoin - add to wallet
            this.walletBalances[toAssetId] = (this.walletBalances[toAssetId] || 0) + convertedAmount;
        }

        this.addHistory('withdraw', poolId, amount);
        this.saveState();
        return true;
    }

    toggleCollateral(poolId) {
        this.collateralEnabled[poolId] = !this.collateralEnabled[poolId];
        this.saveState();
    }

    borrow(assetId, amount) {
        const asset = MOCK_ASSETS.find(a => a.id === assetId);
        if (!asset) return false;

        // Check collateral
        const totalCollateralValue = this.getTotalCollateralValue(); // Already includes LTV
        const borrowValue = amount * asset.price;
        const currentBorrowValue = this.getTotalBorrowValue();
        const newTotalBorrow = currentBorrowValue + borrowValue;

        // Check if collateral with LTV is sufficient for the new total borrow
        // totalCollateralValue already accounts for LTV (e.g., 0.80 means max 80% can be borrowed)
        if (totalCollateralValue < newTotalBorrow) {
            alert('Insufficient collateral for borrow');
            return false;
        }

        // Create borrow record
        const borrow = {
            id: Date.now().toString(),
            assetId: assetId,
            amount: amount,
            borrowTime: Date.now(),
            repaid: false,
            accumulatedInterest: 0
        };

        this.borrows.push(borrow);

        // If borrowed asset is a pool asset (depositApr > 0), add to poolDeposits
        // Otherwise add to wallet
        if (asset.depositApr > 0) {
            // This is borrowing a pool asset - it becomes a deposit
            if (!this.poolDeposits[assetId]) {
                this.poolDeposits[assetId] = {
                    amount: 0,
                    initialTime: Date.now()
                };
            }
            this.poolDeposits[assetId].amount += amount;
        } else {
            // Regular stablecoin - add to wallet
            this.walletBalances[assetId] = (this.walletBalances[assetId] || 0) + amount;
        }

        this.addHistory('borrow', assetId, amount);
        this.saveState();
        return true;
    }

    repayBorrow(borrowId, amount) {
        const borrow = this.borrows.find(b => b.id === borrowId);
        if (!borrow || borrow.repaid) return false;

        const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
        if (!asset) return false;

        // Calculate total debt (principal + interest)
        const totalDebt = borrow.amount + borrow.accumulatedInterest;

        const isFullRepayment = amount >= totalDebt;

        if (isFullRepayment) {
            // Full repayment
            borrow.repaid = true;
            amount = totalDebt;
        } else {
            // Partial repayment
            if (amount > borrow.accumulatedInterest) {
                borrow.amount -= (amount - borrow.accumulatedInterest);
                borrow.accumulatedInterest = 0;
            } else {
                borrow.accumulatedInterest -= amount;
            }
            
            // Check if remaining debt is negligible (< $0.01) and mark as repaid
            const remainingDebt = borrow.amount + borrow.accumulatedInterest;
            if (remainingDebt * asset.price < 0.01) {
                borrow.repaid = true;
            }
        }

        // Note: Balance deduction is handled in executeRepay(), not here
        // to avoid double deduction

        this.addHistory('repay', borrow.assetId, amount);
        
        // Auto-disable collateral if loan is fully repaid and no other active loans
        if (isFullRepayment || borrow.repaid) {
            this.checkAndReleaseCollateral();
        }
        
        this.saveState();
        return true;
    }
    
    checkAndReleaseCollateral() {
        // Check if there are any active borrows
        const hasActiveLoans = this.borrows.some(b => !b.repaid);
        
        // If no active loans, automatically disable all collateral
        if (!hasActiveLoans) {
            for (const poolId in this.collateralEnabled) {
                this.collateralEnabled[poolId] = false;
            }
        }
    }

    getTotalCollateralValue() {
        let total = 0;
        for (const [poolId, enabled] of Object.entries(this.collateralEnabled)) {
            if (enabled) {
                const pool = MOCK_ASSETS.find(a => a.id === poolId);
                if (pool) {
                    // Count both poolDeposit and walletBalance
                    const depositAmount = this.poolDeposits[poolId]?.amount || 0;
                    const walletAmount = this.walletBalances[poolId] || 0;
                    const totalAmount = depositAmount + walletAmount;
                    
                    if (totalAmount > 0) {
                        total += totalAmount * pool.price * pool.ltv;
                    }
                }
            }
        }
        return total;
    }

    getTotalBorrowValue() {
        let total = 0;
        for (const borrow of this.borrows) {
            if (!borrow.repaid) {
                const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
                if (asset) {
                    const totalDebt = borrow.amount + borrow.accumulatedInterest;
                    total += totalDebt * asset.price;
                }
            }
        }
        return total;
    }

    addHistory(type, assetId, amount, fromAssetId = null, fromAmount = null) {
        this.history.unshift({
            id: Date.now().toString(),
            type,
            assetId,
            amount,
            fromAssetId,
            fromAmount,
            timestamp: Date.now()
        });
        
        // Keep last 100 records
        if (this.history.length > 100) {
            this.history = this.history.slice(0, 100);
        }
    }

    startAprCalculations() {
        // Update every second
        setInterval(() => {
            this.updateAprEarnings();
        }, 1000);
    }

    updateAprEarnings() {
        const now = Date.now();
        let updated = false;

        // Update deposit earnings
        for (const [poolId, deposit] of Object.entries(this.poolDeposits)) {
            if (deposit.amount > 0) {
                const pool = MOCK_ASSETS.find(a => a.id === poolId);
                if (pool && pool.depositApr > 0) {
                    const secondsSinceUpdate = (now - this.lastUpdateTime) / 1000;
                    const aprPerSecond = pool.depositApr / 100 / (365 * 24 * 60 * 60);
                    const earnings = deposit.amount * aprPerSecond * secondsSinceUpdate;
                    deposit.amount += earnings;
                    updated = true;
                }
            }
        }

        // Update borrow interest
        for (const borrow of this.borrows) {
            if (!borrow.repaid) {
                const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
                if (asset && asset.borrowApr > 0) {
                    const secondsSinceUpdate = (now - this.lastUpdateTime) / 1000;
                    const aprPerSecond = asset.borrowApr / 100 / (365 * 24 * 60 * 60);
                    const interest = (borrow.amount + borrow.accumulatedInterest) * aprPerSecond * secondsSinceUpdate;
                    borrow.accumulatedInterest += interest;
                    updated = true;
                }
            }
        }

        if (updated) {
            this.lastUpdateTime = now;
            this.saveState();
        }
    }
}

// Helper function to parse numbers with both comma and dot as decimal separator
function parseNumber(value) {
    if (typeof value === 'number') return value;
    if (!value) return 0;
    // Replace comma with dot for parsing
    const normalized = String(value).replace(',', '.');
    return parseFloat(normalized) || 0;
}

// Helper function to format numbers with thousand separators
function formatNumber(value, decimals = 2) {
    if (value === null || value === undefined || isNaN(value)) return '0.00';
    return value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// Helper function to format currency (always 2 decimals)
function formatCurrency(value) {
    return formatNumber(value, 2);
}

// Helper function to format token amounts (6-8 decimals)
function formatToken(value, decimals = 6) {
    return formatNumber(value, decimals);
}

// Initialize App State
const appState = new AppState();

// ============================================
// UI Management
// ============================================

class UI {
    constructor() {
        this.currentPage = 'dashboard';
        this.selectedPoolForDeposit = null;
        this.selectedPoolSymbol = null;
        this.selectedNetworkForDeposit = null;
        this.selectedPoolForWithdraw = null;
        this.selectedPoolId = null;
        this.selectedNetworks = []; // Array for multi-select
        this.selectedNetworksBorrow = []; // Array for multi-select
        this.selectedAssetType = 'all';
        this.selectedAssetTypeBorrow = 'all';
        this.searchTerm = '';
        this.searchTermBorrow = '';
        this.sortColumn = null;
        this.sortDirection = 'asc';
        
        this.initializeEventListeners();
        this.render();
        this.startUIUpdates();
    }

    initializeEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                this.navigateToPage(page);
            });
        });

        // Back to pools button
        document.getElementById('backToPoolsBtn').addEventListener('click', () => {
            this.navigateToPage('dashboard');
        });

        // Wallet
        document.getElementById('walletButton').addEventListener('click', () => {
            if (appState.walletAddress) {
                this.openWalletSidebar();
            } else {
                this.openWalletModal();
            }
        });

        // Search
        document.getElementById('searchInput').addEventListener('input', (e) => {
            this.renderAvailableToDepositTable(e.target.value);
        });

        // Asset Type Filter buttons for Deposits
        document.querySelectorAll('.asset-type-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const assetType = e.currentTarget.dataset.assetType;
                this.selectedAssetType = assetType;
                
                // Update active state
                document.querySelectorAll('.asset-type-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                
                // Re-render
                this.renderAvailableToDepositTable(document.getElementById('searchInput').value);
            });
        });

        // Network Filter
        document.getElementById('networksFilter').addEventListener('click', (e) => {
            const dropdown = document.getElementById('networkDropdown');
            dropdown.classList.toggle('active');
        });

        // Network dropdown items - now handled by checkboxes in the end of file

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            const dropdown = document.getElementById('networkDropdown');
            const filterBtn = document.getElementById('networksFilter');
            if (!dropdown.contains(e.target) && !filterBtn.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });

        // Search for Borrow page
        const searchInputBorrow = document.getElementById('searchInputBorrow');
        if (searchInputBorrow) {
            searchInputBorrow.addEventListener('input', (e) => {
                this.renderAvailableToBorrowTable(e.target.value);
            });
        }

        // Network Filter for Borrow
        // Asset Type Filter buttons for Borrow
        document.querySelectorAll('.asset-type-btn-borrow').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const assetType = e.currentTarget.dataset.assetType;
                this.selectedAssetTypeBorrow = assetType;
                
                // Update active state
                document.querySelectorAll('.asset-type-btn-borrow').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                
                // Re-render
                this.renderAvailableToBorrowTable(document.getElementById('searchInputBorrow')?.value || '');
            });
        });

        const networksFilterBorrow = document.getElementById('networksFilterBorrow');
        const networkDropdownBorrow = document.getElementById('networkDropdownBorrow');
        
        if (networksFilterBorrow && networkDropdownBorrow) {
            networksFilterBorrow.addEventListener('click', (e) => {
                networkDropdownBorrow.classList.toggle('active');
            });

            // Network dropdown items for Borrow - now handled by checkboxes in the end of file

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!networkDropdownBorrow.contains(e.target) && !networksFilterBorrow.contains(e.target)) {
                    networkDropdownBorrow.classList.remove('active');
                }
            });
        }

        // Table sorting
        document.querySelectorAll('.sortable').forEach(th => {
            th.addEventListener('click', (e) => {
                const sortType = e.currentTarget.dataset.sort;
                
                if (this.sortColumn === sortType) {
                    // Toggle direction if same column
                    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
                } else {
                    // New column, default to ascending
                    this.sortColumn = sortType;
                    this.sortDirection = 'asc';
                }
                
                // Update UI
                document.querySelectorAll('.sortable').forEach(header => {
                    header.classList.remove('active', 'desc');
                });
                e.currentTarget.classList.add('active');
                if (this.sortDirection === 'desc') {
                    e.currentTarget.classList.add('desc');
                }
                
                // Re-render table based on current page
                if (this.currentPage === 'dashboard') {
                    this.renderAvailableToDepositTable(document.getElementById('searchInput').value);
                } else if (this.currentPage === 'borrow') {
                    this.renderAvailableToBorrowTable(document.getElementById('searchInputBorrow')?.value || '');
                }
            });
        });

        // Modals
        this.initializeModals();

        // Settings
        document.getElementById('resetBtn').addEventListener('click', () => {
            if (confirm('Are you sure you want to reset all data?')) {
                appState.reset();
                this.render();
                alert('Data reset successfully');
            }
        });

        // Wallet Sidebar
        document.getElementById('walletSidebarOverlay').addEventListener('click', () => {
            this.closeWalletSidebar();
        });

        document.getElementById('disconnectBtn').addEventListener('click', () => {
            if (confirm('Disconnect wallet?')) {
                appState.disconnectWallet();
                this.closeWalletSidebar();
                this.render();
            }
        });

        // Top Up in Sidebar
        document.getElementById('topupTriggerBtn').addEventListener('click', () => {
            const dropdown = document.getElementById('topupDropdown');
            dropdown.classList.toggle('active');
        });

        document.getElementById('topupSubmitBtn').addEventListener('click', () => {
            const amount = parseFloat(document.getElementById('topupAmountSidebar').value);
            if (amount && amount > 0) {
                appState.topUp('usdc-base', amount);
                document.getElementById('topupAmountSidebar').value = '';
                
                // Show notification
                const notification = document.getElementById('topupNotification');
                notification.classList.add('active');
                
                // Update UI immediately
                this.renderWalletSidebar();
                this.renderStatsCards();
                this.renderYourDepositsTable();
                this.renderAvailableToDepositTable();
                
                // Hide notification after 3 seconds
                setTimeout(() => {
                    notification.classList.remove('active');
                }, 3000);
            } else {
                alert('Please enter a valid amount');
            }
        });
    }

    initializeModals() {
        // Close buttons
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                modal.classList.remove('active');
                // Close any open dropdowns
                document.querySelectorAll('.collateral-selector').forEach(s => s.classList.remove('active'));
            });
        });

        // Click outside to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    // Close any open dropdowns
                    document.querySelectorAll('.collateral-selector').forEach(s => s.classList.remove('active'));
                }
            });
        });

        // Wallet Modal
        document.getElementById('connectWalletBtn').addEventListener('click', () => {
            // Generate random address automatically
            const randomAddress = '0x' + Array.from({length: 40}, () => 
                Math.floor(Math.random() * 16).toString(16)).join('');
            appState.connectWallet(randomAddress);
            document.getElementById('walletModal').classList.remove('active');
            this.render();
        });

        // Top Up Modal
        document.getElementById('confirmTopUpBtn').addEventListener('click', () => {
            const asset = document.getElementById('topUpAssetSelect').value;
            const amount = parseFloat(document.getElementById('topUpAmount').value);
            
            if (amount && amount > 0) {
                appState.topUp(asset, amount);
                document.getElementById('topUpModal').classList.remove('active');
                document.getElementById('topUpAmount').value = '';
                this.render();
            }
        });

        // Deposit Modal - Custom Dropdowns
        this.initializeCustomDropdown('depositPool', (symbol) => {
            this.selectedPoolSymbol = symbol;
            this.updatePoolNetworkSelector(); // This sets selectedNetworkForDeposit
            this.updateActualPoolSelection(); // This sets selectedPoolForDeposit based on symbol + network
            this.updateDepositModal();
        });

        this.initializeCustomDropdown('depositNetwork', (network) => {
            this.selectedNetworkForDeposit = network;
            this.updateActualPoolSelection(); // Update selectedPoolForDeposit based on symbol + network
            this.updateDepositModal();
        });

        this.initializeCustomDropdown('depositFromAsset', (assetId) => {
            this.selectedFromAssetForDeposit = assetId;
            this.updateDepositModal();
        });

        document.getElementById('depositAmountInput').addEventListener('input', (e) => {
            this.syncDualInput('deposit', 'token');
            this.updateDepositModal();
        });

        document.getElementById('depositAmountUsdInput').addEventListener('input', (e) => {
            this.syncDualInput('deposit', 'usd');
            this.updateDepositModal();
        });

        document.getElementById('depositMaxBtnModal').addEventListener('click', () => {
            const fromAssetId = this.selectedFromAssetForDeposit;
            const balance = appState.walletBalances[fromAssetId] || 0;
            document.getElementById('depositAmountInput').value = balance.toFixed(8);
            this.syncDualInput('deposit', 'token');
            this.updateDepositModal();
        });

        document.getElementById('confirmDepositBtn').addEventListener('click', () => {
            const poolId = this.selectedPoolForDeposit;
            const fromAssetId = this.selectedFromAssetForDeposit;
            const amount = parseNumber(document.getElementById('depositAmountInput').value);

            if (!poolId || !fromAssetId) {
                alert('Please select pool and asset');
                return;
            }

            if (amount && amount > 0) {
                const result = appState.deposit(poolId, fromAssetId, amount);
                
                if (result) {
                    // Close modal
                    document.getElementById('depositModal').classList.remove('active');
                    
                    // Clear inputs
                    document.getElementById('depositAmountInput').value = '';
                    document.getElementById('depositAmountUsdInput').value = '';
                    
                    // Update all tables
                    this.render();
                    
                    // Show success notification
                    const notification = document.getElementById('topUpNotification');
                    if (notification) {
                        notification.textContent = 'Deposit successful!';
                        notification.classList.add('active');
                        setTimeout(() => {
                            notification.classList.remove('active');
                        }, 3000);
                    }
                } else {
                    alert('Deposit failed. Check your balance.');
                }
            } else {
                alert('Please enter a valid amount');
            }
        });

        // Withdraw Modal
        this.initializeCustomDropdown('withdrawToAsset', (symbol) => {
            this.selectedWithdrawToSymbol = symbol;
            this.updateWithdrawToNetworkSelector();
            this.updateActualWithdrawToAssetSelection();
            this.updateWithdrawPreview();
        });
        
        this.initializeCustomDropdown('withdrawToNetwork', (network) => {
            this.selectedWithdrawToNetwork = network;
            this.updateActualWithdrawToAssetSelection();
            this.updateWithdrawPreview();
        });
        
        document.getElementById('withdrawAmountInput').addEventListener('input', () => {
            this.syncDualInput('withdraw', 'token');
            this.updateWithdrawPreview();
        });

        document.getElementById('withdrawAmountUsdInput').addEventListener('input', () => {
            this.syncDualInput('withdraw', 'usd');
            this.updateWithdrawPreview();
        });

        document.getElementById('withdrawMaxBtn').addEventListener('click', () => {
            if (this.selectedPoolForWithdraw) {
                // Get total available (deposits + wallet)
                const depositAmount = appState.poolDeposits[this.selectedPoolForWithdraw]?.amount || 0;
                const walletAmount = appState.walletBalances[this.selectedPoolForWithdraw] || 0;
                const totalAvailable = depositAmount + walletAmount;
                
                if (totalAvailable > 0) {
                    document.getElementById('withdrawAmountInput').value = totalAvailable.toFixed(8);
                    this.syncDualInput('withdraw', 'token');
                    this.updateWithdrawPreview();
                }
            }
        });

        document.getElementById('confirmWithdrawBtn').addEventListener('click', () => {
            const amount = parseNumber(document.getElementById('withdrawAmountInput').value);
            const toAssetId = this.selectedWithdrawToAsset;
            
            if (!toAssetId) {
                alert('Please select an asset to withdraw to');
                return;
            }
            
            if (amount && amount > 0 && this.selectedPoolForWithdraw) {
                if (appState.withdrawAndConvert(this.selectedPoolForWithdraw, amount, toAssetId)) {
                    document.getElementById('withdrawModal').classList.remove('active');
                    document.getElementById('withdrawAmountInput').value = '';
                    document.getElementById('withdrawAmountUsdInput').value = '';
                    this.render();
                } else {
                    alert('Withdrawal failed.');
                }
            }
        });

        // Borrow Modal
        const borrowAmountInput = document.getElementById('borrowAmountInput');
        if (borrowAmountInput) {
            borrowAmountInput.addEventListener('input', () => {
                this.syncDualInput('borrow', 'token');
                this.updateBorrowModal();
            });
        }

        const borrowAmountUsdInput = document.getElementById('borrowAmountUsdInput');
        if (borrowAmountUsdInput) {
            borrowAmountUsdInput.addEventListener('input', () => {
                this.syncDualInput('borrow', 'usd');
                this.updateBorrowModal();
            });
        }

        const borrowMaxBtn = document.getElementById('borrowMaxBtn');
        if (borrowMaxBtn) {
            borrowMaxBtn.addEventListener('click', () => {
                const asset = this.selectedBorrowAsset;
                if (!asset) return;

                // Check if any collateral is selected
                const selectedCollateralItems = document.querySelectorAll('.collateral-item.selected');
                
                if (selectedCollateralItems.length === 0) {
                    // No collateral selected - highlight the collateral selector
                    const collateralSelector = document.querySelector('.collateral-selector');
                    const collateralTrigger = document.getElementById('collateralTrigger');
                    
                    if (collateralSelector && collateralTrigger) {
                        // Add error class
                        collateralSelector.classList.add('error-highlight');
                        
                        // Update trigger text to show hint
                        const originalText = collateralTrigger.querySelector('#collateralTriggerText').textContent;
                        collateralTrigger.querySelector('#collateralTriggerText').textContent = 'Please select collateral';
                        collateralTrigger.querySelector('#collateralTriggerText').style.color = '#ef4444';
                        
                        // Remove highlight after 3 seconds
                        setTimeout(() => {
                            collateralSelector.classList.remove('error-highlight');
                            collateralTrigger.querySelector('#collateralTriggerText').textContent = originalText;
                            collateralTrigger.querySelector('#collateralTriggerText').style.color = '';
                        }, 3000);
                    }
                    
                    return;
                }

                let totalSelectedCollateralValue = 0;
                selectedCollateralItems.forEach(item => {
                    const poolId = item.dataset.assetId;
                    const deposit = appState.poolDeposits[poolId];
                    const collAsset = MOCK_ASSETS.find(a => a.id === poolId);
                    if (deposit && collAsset) {
                        // Calculate collateral value with LTV
                        totalSelectedCollateralValue += deposit.amount * collAsset.price * collAsset.ltv;
                    }
                });

                const currentBorrow = appState.getTotalBorrowValue();
                // Max borrow = collateral value with LTV - current borrows
                // No need to divide by 1.5 because LTV already limits borrowing
                const maxBorrow = Math.max(0, totalSelectedCollateralValue - currentBorrow);
                const maxBorrowInAsset = maxBorrow / asset.price;

                document.getElementById('borrowAmountInput').value = maxBorrowInAsset.toFixed(6);
                this.syncDualInput('borrow', 'token');
                this.updateBorrowModal();
            });
        }

        const confirmBorrowBtn = document.getElementById('confirmBorrowBtn');
        if (confirmBorrowBtn) {
            confirmBorrowBtn.addEventListener('click', () => {
                const asset = this.selectedBorrowAsset;
                if (!asset) return;

                const amount = parseFloat(document.getElementById('borrowAmountInput').value);
                if (!amount || amount <= 0) {
                    alert('Please enter a valid amount');
                    return;
                }

                // Check if any collateral selected
                const selectedCollateral = document.querySelectorAll('.collateral-item.selected');
                if (selectedCollateral.length === 0) {
                    alert('Please select at least one collateral asset');
                    return;
                }

                if (appState.borrow(asset.id, amount)) {
                    document.getElementById('borrowModal').classList.remove('active');
                    this.render();
                } else {
                    alert('Borrow failed. Please check your collateral.');
                }
            });
        }

        // Repay Modal - Custom Dropdown
        this.initializeCustomDropdown('repayWithAsset', (assetId) => {
            this.selectedRepayWithAsset = assetId;
            this.updateRepayModal();
        });

        const repayAmountInput = document.getElementById('repayAmountInput');
        if (repayAmountInput) {
            repayAmountInput.addEventListener('input', () => {
                this.syncDualInput('repay', 'token');
                this.updateRepayModal();
            });
        }

        const repayAmountUsdInput = document.getElementById('repayAmountUsdInput');
        if (repayAmountUsdInput) {
            repayAmountUsdInput.addEventListener('input', () => {
                this.syncDualInput('repay', 'usd');
                this.updateRepayModal();
            });
        }

        const repayMaxBtn = document.getElementById('repayMaxBtn');
        if (repayMaxBtn) {
            repayMaxBtn.addEventListener('click', () => {
                const totalDebt = parseFloat(document.getElementById('repayTotalDebt').dataset.debtAmount) || 0;
                
                // Get debt asset price
                const debtAsset = MOCK_ASSETS.find(a => a.symbol === this.selectedRepaySymbol);
                const debtAssetPrice = debtAsset ? debtAsset.price : 1;
                
                // Get repay-with asset price
                const repayWithAsset = MOCK_ASSETS.find(a => a.id === this.selectedRepayWithAsset);
                const repayAssetPrice = repayWithAsset ? repayWithAsset.price : 1;
                
                // Convert debt amount to repay asset amount
                const repayAmount = (totalDebt * debtAssetPrice) / repayAssetPrice;
                
                document.getElementById('repayAmountInput').value = repayAmount.toFixed(8);
                this.syncDualInput('repay', 'token');
                this.updateRepayModal();
            });
        }

        const repayPartialBtn = document.getElementById('repayPartialBtn');
        if (repayPartialBtn) {
            repayPartialBtn.addEventListener('click', () => {
                this.executeRepay(false);
            });
        }

        const repayFullBtn = document.getElementById('repayFullBtn');
        if (repayFullBtn) {
            repayFullBtn.addEventListener('click', () => {
                this.executeRepay(true);
            });
        }

        // Pool Page
        document.getElementById('poolDepositBtn').addEventListener('click', () => {
            if (this.selectedPoolId) {
                this.openDepositModal(this.selectedPoolId);
            }
        });

        document.getElementById('poolBorrowBtn').addEventListener('click', () => {
            if (this.selectedPoolId) {
                const pool = MOCK_ASSETS.find(a => a.id === this.selectedPoolId);
                if (pool) {
                    // Open borrow modal or navigate to borrow page with pre-selected asset
                    this.navigateToPage('borrow');
                }
            }
        });

        document.getElementById('poolCollateralToggle').addEventListener('change', (e) => {
            if (this.selectedPoolId) {
                appState.toggleCollateral(this.selectedPoolId);
                this.renderPoolPage();
            }
        });
    }

    navigateToPage(page) {
        this.currentPage = page;
        
        // Update nav items
        document.querySelectorAll('.nav-link').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === page);
        });

        // Update pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.toggle('active', p.id === page + 'Page');
        });

        this.render();
    }

    openPoolPage(poolId) {
        this.selectedPoolId = poolId;
        this.currentPage = 'pool';
        
        // Update nav items
        document.querySelectorAll('.nav-link').forEach(btn => {
            btn.classList.remove('active');
        });

        // Update pages
        document.querySelectorAll('.page').forEach(p => {
            p.classList.toggle('active', p.id === 'poolPage');
        });

        this.renderPoolPage();
    }

    render() {
        this.renderWalletButton();
        this.renderStatsCards();
        this.renderYourDepositsTable();
        this.renderAvailableToDepositTable();
        this.renderYourBorrowsTable();
        this.renderAvailableToBorrowTable();
        this.renderBorrowPage();
        this.renderHistory();
    }

    renderWalletButton() {
        const btn = document.getElementById('walletButton');
        const addressEl = document.getElementById('walletAddress');

        if (appState.walletAddress) {
            const short = appState.walletAddress.slice(0, 6) + '....' + appState.walletAddress.slice(-4);
            addressEl.textContent = short.toUpperCase();
            btn.classList.add('connected');
        } else {
            addressEl.textContent = 'Connect Wallet';
            btn.classList.remove('connected');
        }
    }

    renderStatsCards() {
        // Calculate user deposits (poolDeposits + wallet balance of pool assets)
        let totalUserDeposits = 0;
        const countedAssets = new Set();
        
        // Count actual deposits
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            if (deposit && deposit.amount > 0) {
                const pool = MOCK_ASSETS.find(a => a.id === poolId);
                if (pool) {
                    totalUserDeposits += deposit.amount * pool.price;
                    countedAssets.add(pool.symbol);
                }
            }
        }
        
        // Count wallet balance of pool assets
        for (const [assetId, balance] of Object.entries(appState.walletBalances)) {
            if (balance > 0.00000001) {
                const asset = MOCK_ASSETS.find(a => a.id === assetId);
                if (asset && asset.depositApr > 0) {
                    totalUserDeposits += balance * asset.price;
                    countedAssets.add(asset.symbol);
                }
            }
        }
        
        const assetsWithDeposits = countedAssets.size;

        // Calculate user profit (from actual poolDeposits + wallet balance with time tracking)
        let totalUserProfit = 0;
        
        // Profit from poolDeposits
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            if (deposit && deposit.amount > 0 && deposit.initialTime) {
                const pool = MOCK_ASSETS.find(a => a.id === poolId);
                if (pool && pool.depositApr > 0) {
                    const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
                    const aprPerSecond = pool.depositApr / 100 / (365 * 24 * 60 * 60);
                    const profit = deposit.amount * aprPerSecond * timeElapsed;
                    totalUserProfit += profit * pool.price;
                }
            }
        }
        
        // Profit from wallet balance of pool assets (since they auto-deposit)
        for (const [assetId, balance] of Object.entries(appState.walletBalances)) {
            if (balance > 0.00000001) {
                const asset = MOCK_ASSETS.find(a => a.id === assetId);
                if (asset && asset.depositApr > 0) {
                    // Use initialTime from poolDeposits if exists
                    const deposit = appState.poolDeposits[assetId];
                    if (deposit && deposit.initialTime) {
                        const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
                        const aprPerSecond = asset.depositApr / 100 / (365 * 24 * 60 * 60);
                        const profit = balance * aprPerSecond * timeElapsed;
                        totalUserProfit += profit * asset.price;
                    }
                }
            }
        }

        // Calculate health factor
        const totalCollateral = appState.getTotalCollateralValue();
        const totalBorrow = appState.getTotalBorrowValue();
        let healthFactor = '∞';
        let healthClass = '';
        
        // Only calculate health factor if debt is meaningful (>= $0.01)
        if (totalBorrow >= 0.01) {
            const hf = totalCollateral / totalBorrow;
            healthFactor = hf.toFixed(2);
            
            // Since totalCollateral includes LTV, hf >= 1.0 means safe
            if (hf >= 1.2) {
                healthClass = 'good';
            } else if (hf >= 1.0) {
                healthClass = 'warning';
            } else {
                healthClass = 'danger';
            }
        }

        // Update user stats
        document.getElementById('userDepositsValue').textContent = 
            `$${totalUserDeposits.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        document.getElementById('userDepositsDetail').textContent = 
            `${assetsWithDeposits} asset${assetsWithDeposits !== 1 ? 's' : ''}`;

        document.getElementById('userProfitValue').textContent = 
            `+$${totalUserProfit.toLocaleString('en-US', {minimumFractionDigits: 4, maximumFractionDigits: 4})}`;
        
        const profitPercent = totalUserDeposits > 0 ? (totalUserProfit / totalUserDeposits * 100) : 0;
        document.getElementById('userProfitDetail').textContent = 
            `+${formatNumber(profitPercent, 3)}%`;

        const healthValueEl = document.getElementById('healthFactorValue');
        healthValueEl.textContent = healthFactor;
        healthValueEl.className = 'stats-value health-value ' + healthClass;
        document.getElementById('healthFactorDetail').textContent = 
            `Total borrowed: $${totalBorrow.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

        // Protocol stats (realistic mock data) - SAME FOR BOTH PAGES
        const totalMarketSize = 14273850.67;
        const totalValueLocked = 10835204.23;
        const totalBorrowedProtocol = 4186721.89;
        const utilization = (totalBorrowedProtocol / totalValueLocked * 100).toFixed(1);

        // Update Deposits page stats
        const depositMarketEl = document.getElementById('totalMarketSize');
        const depositTvlEl = document.getElementById('totalValueLocked');
        const depositBorrowedEl = document.getElementById('totalBorrowed');
        
        if (depositMarketEl) {
            depositMarketEl.textContent = `$${(totalMarketSize / 1000000).toFixed(2)}M`;
        }
        if (depositTvlEl) {
            depositTvlEl.textContent = `$${(totalValueLocked / 1000000).toFixed(2)}M`;
        }
        if (depositBorrowedEl) {
            depositBorrowedEl.textContent = `$${(totalBorrowedProtocol / 1000000).toFixed(2)}M`;
        }

        // Update Borrow page stats (SAME VALUES)
        const borrowMarketEl = document.getElementById('borrowTotalMarketSize');
        const borrowTvlEl = document.getElementById('borrowTotalValueLocked');
        const borrowBorrowedEl = document.getElementById('borrowTotalBorrowed');
        
        if (borrowMarketEl) {
            borrowMarketEl.textContent = `$${(totalMarketSize / 1000000).toFixed(2)}M`;
        }
        if (borrowTvlEl) {
            borrowTvlEl.textContent = `$${(totalValueLocked / 1000000).toFixed(2)}M`;
        }
        if (borrowBorrowedEl) {
            borrowBorrowedEl.textContent = `$${(totalBorrowedProtocol / 1000000).toFixed(2)}M`;
        }

        // Calculate user borrows and debt for Borrow page
        let totalUserBorrows = 0;
        let activeBorrowsCount = 0;
        let totalUserDebt = 0;
        let totalInterest = 0;
        
        appState.borrows.filter(b => !b.repaid).forEach(borrow => {
            const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
            if (asset) {
                totalUserBorrows += borrow.amount * asset.price;
                totalUserDebt += (borrow.amount + borrow.accumulatedInterest) * asset.price;
                totalInterest += borrow.accumulatedInterest * asset.price;
                activeBorrowsCount++;
            }
        });

        const userBorrowsEl = document.getElementById('userBorrowsValue');
        const userBorrowsDetailEl = document.getElementById('userBorrowsDetail');
        const userDebtEl = document.getElementById('userDebtValue');
        const userDebtDetailEl = document.getElementById('userDebtDetail');
        const borrowHealthFactorEl = document.getElementById('borrowHealthFactorValue');
        const borrowHealthFactorDetailEl = document.getElementById('borrowHealthFactorDetail');

        if (userBorrowsEl) {
            userBorrowsEl.textContent = `$${totalUserBorrows.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }
        if (userBorrowsDetailEl) {
            userBorrowsDetailEl.textContent = `${activeBorrowsCount} asset${activeBorrowsCount !== 1 ? 's' : ''}`;
        }
        if (userDebtEl) {
            userDebtEl.textContent = `$${totalUserDebt.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }
        if (userDebtDetailEl) {
            const avgInterestRate = totalUserBorrows > 0 ? (totalInterest / totalUserBorrows * 100) : 0;
            userDebtDetailEl.textContent = `Interest rate: ${avgInterestRate.toFixed(2)}%`;
        }

        if (borrowHealthFactorEl && borrowHealthFactorDetailEl) {
            // Only calculate health factor if debt is meaningful (>= $0.01)
            if (totalBorrow >= 0.01) {
                const hf = totalCollateral / totalBorrow;
                borrowHealthFactorEl.textContent = hf.toFixed(2);
                // Since totalCollateral includes LTV, hf >= 1.0 means safe
                borrowHealthFactorEl.className = 'stats-value health-value ' + (hf >= 1.2 ? 'good' : hf >= 1.0 ? 'warning' : 'danger');
            } else {
                borrowHealthFactorEl.textContent = '∞';
                borrowHealthFactorEl.className = 'stats-value health-value';
            }
            borrowHealthFactorDetailEl.textContent = `Total collateral: $${totalCollateral.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
        }
    }

    renderAvailableToDepositTable(searchTerm = '') {
        const tbody = document.getElementById('availableToDepositTableBody');
        if (!tbody) {
            return;
        }
        tbody.innerHTML = '';

        let assets = [...MOCK_ASSETS];
        
        // Filter out non-pool assets (depositApr = 0 and borrowApr = 0)
        assets = assets.filter(a => a.depositApr > 0 || a.borrowApr > 0);

        // Filter by asset type
        if (this.selectedAssetType && this.selectedAssetType !== 'all') {
            assets = assets.filter(a => a.assetType === this.selectedAssetType);
        }

        // Filter by network (multi-select)
        // Only filter if not all networks are selected
        const totalNetworks = document.querySelectorAll('.network-checkbox').length;
        if (this.selectedNetworks && this.selectedNetworks.length > 0 && this.selectedNetworks.length < totalNetworks) {
            assets = assets.filter(a => this.selectedNetworks.includes(a.network));
        }

        // Filter by search
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            assets = assets.filter(a => 
                a.name.toLowerCase().includes(term) ||
                a.symbol.toLowerCase().includes(term) ||
                a.network.toLowerCase().includes(term)
            );
        }

        // Group assets by symbol
        const groupedAssets = new Map();
        assets.forEach(asset => {
            if (!groupedAssets.has(asset.symbol)) {
                groupedAssets.set(asset.symbol, []);
            }
            groupedAssets.get(asset.symbol).push(asset);
        });

        // Convert to array for sorting
        assets = Array.from(groupedAssets.values()).map(group => {
            // Use first asset as base, but aggregate data
            const baseAsset = group[0];
            return {
                ...baseAsset,
                networks: group.map(a => a.network),
                allAssets: group,
                totalSupplied: group.reduce((sum, a) => sum + a.totalSupplied, 0),
                totalBorrowed: group.reduce((sum, a) => sum + a.totalBorrowed, 0),
                avgDepositApr: group.reduce((sum, a) => sum + a.depositApr, 0) / group.length,
                avgBorrowApr: group.reduce((sum, a) => sum + a.borrowApr, 0) / group.length
            };
        });

        // Sort assets
        if (this.sortColumn) {
            assets.sort((a, b) => {
                let aVal, bVal;
                
                switch (this.sortColumn) {
                    case 'name':
                        aVal = a.name.toLowerCase();
                        bVal = b.name.toLowerCase();
                        break;
                    case 'supplied':
                        aVal = a.totalSupplied;
                        bVal = b.totalSupplied;
                        break;
                    case 'depositApy':
                        aVal = a.avgDepositApr;
                        bVal = b.avgDepositApr;
                        break;
                    case 'borrowed':
                        aVal = a.totalBorrowed;
                        bVal = b.totalBorrowed;
                        break;
                    case 'borrowApy':
                        aVal = a.avgBorrowApr;
                        bVal = b.avgBorrowApr;
                        break;
                    case 'profit':
                        // Calculate profit for all assets in group
                        aVal = 0;
                        a.allAssets.forEach(asset => {
            const deposit = appState.poolDeposits[asset.id];
                            if (deposit && deposit.amount > 0 && deposit.initialTime) {
                                const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
                                const aprPerSecond = asset.depositApr / 100 / (365 * 24 * 60 * 60);
                                aVal += deposit.amount * aprPerSecond * timeElapsed * asset.price;
                            }
                        });
                        
                        bVal = 0;
                        b.allAssets.forEach(asset => {
                            const deposit = appState.poolDeposits[asset.id];
            if (deposit && deposit.amount > 0 && deposit.initialTime) {
                                const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
                const aprPerSecond = asset.depositApr / 100 / (365 * 24 * 60 * 60);
                                bVal += deposit.amount * aprPerSecond * timeElapsed * asset.price;
                            }
                        });
                        break;
                    default:
                        return 0;
                }
                
                // Compare values
                if (typeof aVal === 'string') {
                    return this.sortDirection === 'asc' 
                        ? aVal.localeCompare(bVal)
                        : bVal.localeCompare(aVal);
                } else {
                    return this.sortDirection === 'asc'
                        ? aVal - bVal
                        : bVal - aVal;
                }
            });
        }

        // Format numbers helper
        const formatNumber = (num) => {
            if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
            if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
            return num.toFixed(2);
        };

        const formatUsd = (num) => {
            if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
            if (num >= 1000) return '$' + (num / 1000).toFixed(1) + 'K';
            return '$' + num.toFixed(2);
        };

        // Get network icon helper
        const getNetworkIcon = (network) => {
            const networkIcons = {
                'Ethereum Network': 'crypto/networks/eth.svg',
                'Gnosis': 'crypto/networks/gno.svg',
                'Base': 'crypto/networks/base.svg',
                'BNB Chain': 'crypto/assets/bnb.svg',
                'Arbitrum': 'crypto/networks/arbitrum.svg',
                'Avalanche': 'crypto/networks/avalanche.svg',
                'Bitcoin': 'crypto/networks/btc.svg',
                'Optimism': 'crypto/networks/optimism.svg',
                'Solana': 'crypto/networks/solana.svg'
            };
            return networkIcons[network] || '';
        };

        assets.forEach(groupedAsset => {
            // Use aggregated FIXED values
            const totalSupplied = groupedAsset.totalSupplied;
            const totalSuppliedUsd = totalSupplied * groupedAsset.price;
            const totalBorrowed = groupedAsset.totalBorrowed;
            const totalBorrowedUsd = totalBorrowed * groupedAsset.price;

            // Render network icons (show first 3, then +N badge)
            let networksHtml = '<div class="network-icons-cell">';
            const maxVisible = 3;
            groupedAsset.networks.slice(0, maxVisible).forEach(network => {
                networksHtml += `
                    <div class="network-icon-item">
                        <img src="${getNetworkIcon(network)}" alt="${network}">
                    </div>
                `;
            });
            if (groupedAsset.networks.length > maxVisible) {
                networksHtml += `<div class="network-more-badge">+${groupedAsset.networks.length - maxVisible}</div>`;
            }
            networksHtml += '</div>';

            const row = document.createElement('tr');
            row.dataset.assetSymbol = groupedAsset.symbol;
            row.innerHTML = `
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">
                            <img src="${groupedAsset.icon}" alt="${groupedAsset.symbol}">
                        </div>
                        <div class="asset-details">
                            <span class="asset-name">
                                ${groupedAsset.name}
                                ${groupedAsset.isNative ? '<span class="asset-tag">NATIVE</span>' : ''}
                            </span>
                            <span class="asset-network">${groupedAsset.symbol}</span>
                        </div>
                    </div>
                </td>
                <td>
                    ${networksHtml}
                </td>
                <td>
                    <div class="metric-cell">
                        <span class="metric-value">${formatNumber(totalSupplied)}</span>
                        <span class="metric-usd">${formatUsd(totalSuppliedUsd)}</span>
                    </div>
                </td>
                <td>
                    <span class="apr-value">${groupedAsset.avgDepositApr < 0.01 ? '<0.01' : formatNumber(groupedAsset.avgDepositApr, 2)}%</span>
                </td>
                <td>
                    <div class="metric-cell">
                        <span class="metric-value">${formatNumber(totalBorrowed)}</span>
                        <span class="metric-usd">${formatUsd(totalBorrowedUsd)}</span>
                        </div>
                </td>
                <td>
                    <span class="apr-value">${groupedAsset.avgBorrowApr < 0.01 ? '<0.01' : formatNumber(groupedAsset.avgBorrowApr, 2)}%</span>
                </td>
                <td>
                    <button class="btn btn-primary" onclick="event.stopPropagation(); ui.openDepositModal('${groupedAsset.id}')">
                            Deposit
                        </button>
                </td>
            `;

            tbody.appendChild(row);
        });
    }

    renderYourDepositsTable() {
        const tbody = document.getElementById('yourDepositsTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        // Check if wallet is connected
        if (!appState.walletAddress) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="7" style="text-align: center; padding: 40px;">
                    <div style="color: #6b7280; margin-bottom: 16px;">
                        Connect your wallet to view your deposits
                    </div>
                    <button class="btn btn-primary connect-wallet-trigger">
                        Connect Wallet
                            </button>
                </td>
            `;
            tbody.appendChild(row);
            
            // Add event listener to the button
            const connectBtn = row.querySelector('.connect-wallet-trigger');
            if (connectBtn) {
                connectBtn.addEventListener('click', () => {
                    this.openWalletModal();
                });
            }
            return;
        }

        // Get network icon helper
        const getNetworkIcon = (network) => {
            const networkIcons = {
                'Ethereum Network': 'crypto/networks/eth.svg',
                'Gnosis': 'crypto/networks/gno.svg',
                'Base': 'crypto/networks/base.svg',
                'BNB Chain': 'crypto/assets/bnb.svg',
                'Arbitrum': 'crypto/networks/arbitrum.svg',
                'Avalanche': 'crypto/networks/avalanche.svg',
                'Bitcoin': 'crypto/networks/btc.svg',
                'Optimism': 'crypto/networks/optimism.svg',
                'Solana': 'crypto/networks/solana.svg'
            };
            return networkIcons[network] || '';
        };

        // Group deposits by symbol (show deposits + wallet balances for pool assets)
        const depositGroups = new Map();
        
        // Add deposits (only if USD value >= $0.01)
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            if (deposit) {
                const asset = MOCK_ASSETS.find(a => a.id === poolId);
                if (asset) {
                    const depositAmount = deposit.amount || 0;
                    const walletBalance = appState.walletBalances[poolId] || 0;
                    const totalUsdValue = (depositAmount + walletBalance) * asset.price;
                    
                    // Only add if total USD value >= $0.01
                    if (totalUsdValue >= 0.01) {
                        if (!depositGroups.has(asset.symbol)) {
                            depositGroups.set(asset.symbol, {
                                assets: [],
                                totalAmount: 0,
                                totalUsd: 0,
                                networks: [],
                                icon: asset.icon
                            });
                        }
                        const group = depositGroups.get(asset.symbol);
                        group.assets.push({ asset, deposit });
                        group.totalAmount += depositAmount;
                        group.totalUsd += depositAmount * asset.price;
                        group.networks.push(asset.network);
                    }
                }
            }
        }
        
        // Add pool assets from wallet balances
        for (const [assetId, balance] of Object.entries(appState.walletBalances)) {
            if (balance > 0.00000001) {
                const asset = MOCK_ASSETS.find(a => a.id === assetId);
                if (asset && asset.depositApr > 0) {
                    // Only add if USD value >= $0.01
                    const usdValue = balance * asset.price;
                    if (usdValue >= 0.01) {
                        // This is a pool asset - show it in deposits table
                        if (!depositGroups.has(asset.symbol)) {
                            depositGroups.set(asset.symbol, {
                                assets: [],
                                totalAmount: 0,
                                totalUsd: 0,
                                networks: [],
                                icon: asset.icon
                            });
                        }
                        const group = depositGroups.get(asset.symbol);
                        
                        // Check if already added from poolDeposits
                        const existingAsset = group.assets.find(a => a.asset.id === assetId);
                        if (existingAsset) {
                            // Asset already in deposits - mark that it has wallet balance
                            existingAsset.deposit.walletBalance = balance;
                        } else {
                            // Check if poolDeposit exists (for initialTime)
                            const existingDeposit = appState.poolDeposits[assetId];
                            const initialTime = existingDeposit?.initialTime || Date.now();
                            
                            // Add new entry for wallet-only balance
                            group.assets.push({ 
                                asset, 
                                deposit: { amount: 0, initialTime: initialTime, isWalletOnly: true, walletBalance: balance }
                            });
                            if (!group.networks.includes(asset.network)) {
                                group.networks.push(asset.network);
                            }
                        }
                    }
                }
            }
        }

        if (depositGroups.size === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #6b7280;">No deposits yet</td></tr>';
            return;
        }

        depositGroups.forEach((group, symbol) => {
            const firstAsset = group.assets[0].asset;

            // Recalculate totalAmount and totalUsd including wallet balances for each asset
            let recalcTotalAmount = 0;
            let recalcTotalUsd = 0;

            // Calculate profit
            let totalProfit = 0;
            let totalProfitUsd = 0;
            group.assets.forEach(({asset, deposit}) => {
                // Get actual amount (deposit + wallet for this specific asset)
                const depositAmt = deposit.amount || 0;
                const walletAmt = deposit.isWalletOnly ? (deposit.walletBalance || 0) : (appState.walletBalances[asset.id] || 0);
                const actualAmount = depositAmt + walletAmt;
                
                recalcTotalAmount += actualAmount;
                recalcTotalUsd += actualAmount * asset.price;
                
                // Calculate profit from poolDeposits
                if (deposit.initialTime && depositAmt > 0) {
                    const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
                    const aprPerSecond = asset.depositApr / 100 / (365 * 24 * 60 * 60);
                    const profit = depositAmt * aprPerSecond * timeElapsed;
                    totalProfit += profit;
                    totalProfitUsd += profit * asset.price;
                }
                
                // Calculate profit from wallet balance (auto-earning)
                if (walletAmt > 0 && asset.depositApr > 0) {
                    // Assume wallet balance earns from creation time
                    const timeElapsed = deposit.initialTime ? (Date.now() - deposit.initialTime) / 1000 : 60;
                    const aprPerSecond = asset.depositApr / 100 / (365 * 24 * 60 * 60);
                    const profit = walletAmt * aprPerSecond * timeElapsed;
                    totalProfit += profit;
                    totalProfitUsd += profit * asset.price;
                }
            });
            
            // Update group totals
            group.totalAmount = recalcTotalAmount;
            group.totalUsd = recalcTotalUsd;
            
            // Skip groups with balance less than $0.01
            if (group.totalUsd < 0.01) {
                return;
            }

            // Calculate average APY
            const avgApy = group.assets.reduce((sum, {asset}) => sum + asset.depositApr, 0) / group.assets.length;

            // Check if any asset in group is used as collateral
            const isCollateral = group.assets.some(({asset}) => appState.collateralEnabled[asset.id]);

            // Render network icons
            let networksHtml = '<div class="network-icons-cell">';
            const maxVisible = 3;
            group.networks.slice(0, maxVisible).forEach(network => {
                networksHtml += `<div class="network-icon-item"><img src="${getNetworkIcon(network)}" alt="${network}"></div>`;
            });
            if (group.networks.length > maxVisible) {
                networksHtml += `<div class="network-more-badge">+${group.networks.length - maxVisible}</div>`;
            }
            networksHtml += '</div>';

            // Check if stablecoin (use 2 decimals for stablecoins, 6 for others)
            const isStablecoin = symbol.includes('USD') || symbol.includes('DAI');
            const balanceDecimals = isStablecoin ? 2 : 6;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">
                            <img src="${group.icon}" alt="${symbol}">
                        </div>
                        <div class="asset-details">
                            <span class="asset-name">${symbol}</span>
                            <span class="asset-network">${firstAsset.name}</span>
                        </div>
                    </div>
                </td>
                <td>${networksHtml}</td>
                <td>
                    <div class="metric-cell">
                        <span class="metric-value">${formatToken(group.totalAmount, balanceDecimals)} ${symbol}</span>
                        <span class="metric-usd">$${formatCurrency(group.totalUsd)}</span>
                    </div>
                </td>
                <td>
                    <span class="apr-value">${formatNumber(avgApy, 2)}%</span>
                </td>
                <td class="profit-cell" data-symbol="${symbol}">
                    <div class="profit-positive">
                        <span class="profit-value">+${formatToken(totalProfit, 8)}</span><span class="profit-symbol"> ${symbol}</span>
                        <div class="balance-usd">+$<span class="profit-usd-value">${formatNumber(totalProfitUsd, 4)}</span></div>
                    </div>
                </td>
                <td>
                        <label class="toggle-switch">
                            <input type="checkbox" ${isCollateral ? 'checked' : ''} 
                               data-symbol="${symbol}" class="collateral-toggle">
                            <span class="toggle-slider"></span>
                        </label>
                </td>
                <td>
                    <button class="btn btn-secondary withdraw-btn" data-asset-id="${firstAsset.id}">Withdraw</button>
                </td>
            `;
            
            // Add event listener for collateral toggle
            const toggle = row.querySelector('.collateral-toggle');
            if (toggle) {
                toggle.addEventListener('change', (e) => {
                    e.stopPropagation();
                    this.toggleCollateralForGroup(symbol, e.target.checked);
                });
            }
            
            // Add event listener for withdraw button
            const withdrawBtn = row.querySelector('.withdraw-btn');
            if (withdrawBtn) {
                withdrawBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.openWithdrawModal(firstAsset.id);
                });
            }
            
            tbody.appendChild(row);
        });
        
        // If all groups were filtered out (zero balance), show empty message
        if (tbody.children.length === 0) {
            tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; padding: 40px; color: #6b7280;">No deposits yet</td></tr>';
        }
    }

    renderYourBorrowsTable() {
        const tbody = document.getElementById('yourBorrowsTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        // Check if wallet is connected
        if (!appState.walletAddress) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td colspan="6" style="text-align: center; padding: 40px;">
                    <div style="color: #6b7280; margin-bottom: 16px;">
                        Connect your wallet to view your borrows
                    </div>
                    <button class="btn btn-primary connect-wallet-trigger">
                        Connect Wallet
                        </button>
                </td>
            `;
            tbody.appendChild(row);
            
            // Add event listener to the button
            const connectBtn = row.querySelector('.connect-wallet-trigger');
            if (connectBtn) {
                connectBtn.addEventListener('click', () => {
                    this.openWalletModal();
                });
            }
            return;
        }

        // Group borrows by symbol (only show if debt > 0.001)
        const borrowGroups = new Map();
        appState.borrows.filter(b => !b.repaid).forEach(borrow => {
            const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
            if (asset) {
                const debt = borrow.amount + borrow.accumulatedInterest;
                // Skip if debt is negligible (< $0.01 USD)
                if (debt * asset.price < 0.01) {
                    return;
                }
                
                if (!borrowGroups.has(asset.symbol)) {
                    borrowGroups.set(asset.symbol, {
                        assets: [],
                        totalAmount: 0,
                        totalDebt: 0,
                        networks: [],
                        icon: asset.icon
                    });
                }
                const group = borrowGroups.get(asset.symbol);
                group.assets.push({ asset, borrow, debt });
                group.totalAmount += borrow.amount;
                group.totalDebt += debt;
                group.networks.push(asset.network);
            }
        });

        const getNetworkIcon = (network) => {
            const networkIcons = {
                'Ethereum Network': 'crypto/networks/eth.svg',
                'Gnosis': 'crypto/networks/gno.svg',
                'Base': 'crypto/networks/base.svg',
                'BNB Chain': 'crypto/assets/bnb.svg',
                'Arbitrum': 'crypto/networks/arbitrum.svg',
                'Avalanche': 'crypto/networks/avalanche.svg',
                'Bitcoin': 'crypto/networks/btc.svg',
                'Optimism': 'crypto/networks/optimism.svg',
                'Solana': 'crypto/networks/solana.svg'
            };
            return networkIcons[network] || '';
        };

        if (borrowGroups.size === 0) {
            tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 40px; color: #6b7280;">No active borrows</td></tr>';
            return;
        }

        borrowGroups.forEach((group, symbol) => {
            const firstAsset = group.assets[0].asset;
            const totalDebtUsd = group.totalDebt * firstAsset.price;
            const avgApy = group.assets.reduce((sum, {asset}) => sum + asset.borrowApr, 0) / group.assets.length;

            let networksHtml = '<div class="network-icons-cell">';
            const maxVisible = 3;
            group.networks.slice(0, maxVisible).forEach(network => {
                networksHtml += `<div class="network-icon-item"><img src="${getNetworkIcon(network)}" alt="${network}"></div>`;
            });
            if (group.networks.length > maxVisible) {
                networksHtml += `<div class="network-more-badge">+${group.networks.length - maxVisible}</div>`;
            }
            networksHtml += '</div>';

            // Check if stablecoin (use 2 decimals for stablecoins, 6 for others)
            const isStablecoin = symbol.includes('USD') || symbol.includes('DAI');
            const balanceDecimals = isStablecoin ? 2 : 6;
            const debtDecimals = isStablecoin ? 2 : 8;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">
                            <img src="${group.icon}" alt="${symbol}">
                        </div>
                        <div class="asset-details">
                            <span class="asset-name">${symbol}</span>
                            <span class="asset-network">${firstAsset.name}</span>
                        </div>
                    </div>
                </td>
                <td>${networksHtml}</td>
                <td>
                    <div class="metric-cell">
                        <span class="metric-value">${formatToken(group.totalAmount, balanceDecimals)} ${symbol}</span>
                        <span class="metric-usd">$${formatCurrency(group.totalAmount * firstAsset.price)}</span>
                    </div>
                </td>
                <td>
                    <span class="apr-value">${formatNumber(avgApy, 2)}%</span>
                </td>
                <td class="debt-cell" data-symbol="${symbol}">
                    <div class="profit-negative">
                        <span class="debt-value">${formatToken(group.totalDebt, debtDecimals)}</span><span class="debt-symbol"> ${symbol}</span>
                        <div class="balance-usd">$<span class="debt-usd-value">${formatNumber(totalDebtUsd, 4)}</span></div>
                    </div>
                </td>
                <td>
                    <button class="btn btn-primary repay-btn" data-symbol="${symbol}">Repay</button>
                </td>
            `;
            
            // Add event listener for repay button
            const repayBtn = row.querySelector('.repay-btn');
            if (repayBtn) {
                repayBtn.addEventListener('click', () => {
                    this.repayLoan(symbol);
                });
            }

            tbody.appendChild(row);
        });
    }

    renderAvailableToBorrowTable(searchTerm = '') {
        const tbody = document.getElementById('availableToBorrowTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';

        let assets = [...MOCK_ASSETS];
        
        // Filter out non-pool assets (depositApr = 0 and borrowApr = 0)
        assets = assets.filter(a => a.depositApr > 0 || a.borrowApr > 0);

        // Filter by asset type
        if (this.selectedAssetTypeBorrow && this.selectedAssetTypeBorrow !== 'all') {
            assets = assets.filter(a => a.assetType === this.selectedAssetTypeBorrow);
        }

        // Filter by network (multi-select)
        // Only filter if not all networks are selected
        const totalNetworksBorrow = document.querySelectorAll('.network-checkbox-borrow').length;
        if (this.selectedNetworksBorrow && this.selectedNetworksBorrow.length > 0 && this.selectedNetworksBorrow.length < totalNetworksBorrow) {
            assets = assets.filter(a => this.selectedNetworksBorrow.includes(a.network));
        }

        // Filter by search
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            assets = assets.filter(a => 
                a.name.toLowerCase().includes(term) ||
                a.symbol.toLowerCase().includes(term) ||
                a.network.toLowerCase().includes(term)
            );
        }

        // Group assets by symbol
        const groupedAssets = new Map();
        assets.forEach(asset => {
            if (!groupedAssets.has(asset.symbol)) {
                groupedAssets.set(asset.symbol, []);
            }
            groupedAssets.get(asset.symbol).push(asset);
        });

        const assetsArray = Array.from(groupedAssets.values()).map(group => {
            const baseAsset = group[0];
            return {
                ...baseAsset,
                networks: group.map(a => a.network),
                allAssets: group,
                totalSupplied: group.reduce((sum, a) => sum + a.totalSupplied, 0),
                totalBorrowed: group.reduce((sum, a) => sum + a.totalBorrowed, 0),
                avgDepositApr: group.reduce((sum, a) => sum + a.depositApr, 0) / group.length,
                avgBorrowApr: group.reduce((sum, a) => sum + a.borrowApr, 0) / group.length
            };
        });

        const getNetworkIcon = (network) => {
            const networkIcons = {
                'Ethereum Network': 'crypto/networks/eth.svg',
                'Gnosis': 'crypto/networks/gno.svg',
                'Base': 'crypto/networks/base.svg',
                'BNB Chain': 'crypto/assets/bnb.svg',
                'Arbitrum': 'crypto/networks/arbitrum.svg',
                'Avalanche': 'crypto/networks/avalanche.svg',
                'Bitcoin': 'crypto/networks/btc.svg',
                'Optimism': 'crypto/networks/optimism.svg',
                'Solana': 'crypto/networks/solana.svg'
            };
            return networkIcons[network] || '';
        };

        const formatNumber = (num) => {
            if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
            if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
            return num.toFixed(2);
        };

        const formatUsd = (num) => {
            if (num >= 1000000) return '$' + (num / 1000000).toFixed(2) + 'M';
            if (num >= 1000) return '$' + (num / 1000).toFixed(1) + 'K';
            return '$' + num.toFixed(2);
        };

        assetsArray.forEach(groupedAsset => {
            const totalSupplied = groupedAsset.totalSupplied;
            const totalSuppliedUsd = totalSupplied * groupedAsset.price;
            const totalBorrowed = groupedAsset.totalBorrowed;
            const totalBorrowedUsd = totalBorrowed * groupedAsset.price;

            let networksHtml = '<div class="network-icons-cell">';
            const maxVisible = 3;
            groupedAsset.networks.slice(0, maxVisible).forEach(network => {
                networksHtml += `
                    <div class="network-icon-item">
                        <img src="${getNetworkIcon(network)}" alt="${network}">
                    </div>
                `;
            });
            if (groupedAsset.networks.length > maxVisible) {
                networksHtml += `<div class="network-more-badge">+${groupedAsset.networks.length - maxVisible}</div>`;
            }
            networksHtml += '</div>';

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div class="asset-info">
                        <div class="asset-icon">
                            <img src="${groupedAsset.icon}" alt="${groupedAsset.symbol}">
                        </div>
                        <div class="asset-details">
                            <span class="asset-name">
                                ${groupedAsset.name}
                                ${groupedAsset.isNative ? '<span class="asset-tag">NATIVE</span>' : ''}
                            </span>
                            <span class="asset-network">${groupedAsset.symbol}</span>
                        </div>
                    </div>
                </td>
                <td>
                    ${networksHtml}
                </td>
                <td>
                    <div class="metric-cell">
                        <span class="metric-value">${formatNumber(totalSupplied)}</span>
                        <span class="metric-usd">${formatUsd(totalSuppliedUsd)}</span>
                    </div>
                </td>
                <td>
                    <span class="apr-value">${groupedAsset.avgDepositApr < 0.01 ? '<0.01' : formatNumber(groupedAsset.avgDepositApr, 2)}%</span>
                </td>
                <td>
                    <div class="metric-cell">
                        <span class="metric-value">${formatNumber(totalBorrowed)}</span>
                        <span class="metric-usd">${formatUsd(totalBorrowedUsd)}</span>
                    </div>
                </td>
                <td>
                    <span class="apr-value">${groupedAsset.avgBorrowApr < 0.01 ? '<0.01' : formatNumber(groupedAsset.avgBorrowApr, 2)}%</span>
                </td>
                <td>
                    <button class="btn btn-primary" onclick="ui.openBorrowModal('${groupedAsset.id}')">Borrow</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    openBorrowModal(assetId) {
        // Check if user has any collateral enabled
        const userHasCollateral = Object.values(appState.collateralEnabled).some(enabled => enabled);
        
        if (!userHasCollateral) {
            alert('Please enable collateral first in Your Deposits to borrow assets');
            return;
        }
        
        const asset = MOCK_ASSETS.find(a => a.id === assetId);
        if (!asset) return;

        this.selectedBorrowAsset = asset;
        this.selectedCollaterals = [];

        // Set asset name
        document.getElementById('borrowAssetName').value = `${asset.symbol} - ${asset.name}`;

        // Populate collateral dropdown
        const collateralDropdown = document.getElementById('collateralDropdown');
        collateralDropdown.innerHTML = '';

        // Get all pool assets that can be used as collateral (deposits + wallet)
        let hasCollateralItems = false;
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            if (deposit && appState.collateralEnabled[poolId]) {
                const collAsset = MOCK_ASSETS.find(a => a.id === poolId);
                const depositAmount = deposit.amount || 0;
                const walletAmount = appState.walletBalances[poolId] || 0;
                const totalAmount = depositAmount + walletAmount;
                
                if (collAsset && totalAmount > 0) {
                    hasCollateralItems = true;
                    const item = document.createElement('div');
                    item.className = 'collateral-item';
                    item.dataset.assetId = poolId;
                    item.innerHTML = `
                        <div class="collateral-item-checkbox">✓</div>
                        <div class="collateral-item-info">
                            <div class="collateral-item-icon">
                                <img src="${collAsset.icon}" alt="${collAsset.symbol}">
                            </div>
                            <div class="collateral-item-details">
                                <span class="collateral-item-name">${collAsset.symbol}</span>
                                <span class="collateral-item-amount">${deposit.amount.toFixed(4)} (${(deposit.amount * collAsset.price * collAsset.ltv).toFixed(2)} USD available)</span>
                            </div>
                        </div>
                    `;
                    
                    item.addEventListener('click', (e) => {
                        e.stopPropagation();
                        item.classList.toggle('selected');
                        this.updateCollateralTriggerText();
                        this.updateBorrowModal();
                    });
                    
                    collateralDropdown.appendChild(item);
                }
            }
        }

        if (!hasCollateralItems) {
            collateralDropdown.innerHTML = '<div style="padding: 20px; text-align: center; color: #6b7280;">No collateral available</div>';
        }

        // Setup collateral trigger click handler
        const setupCollateralTrigger = () => {
            const trigger = document.getElementById('collateralTrigger');
            const selector = document.querySelector('.collateral-selector');
            
            if (trigger && selector) {
                trigger.onclick = (e) => {
                    e.stopPropagation();
                    selector.classList.toggle('active');
                };
            }
        };
        
        setupCollateralTrigger();

        // Reset inputs
        document.getElementById('borrowAmountInput').value = '';
        document.getElementById('borrowAmountUsdInput').value = '';
        document.getElementById('collateralTriggerText').textContent = 'Select collateral assets...';
        
        // Set currency label
        const borrowCurrency = document.getElementById('borrowCurrency');
        if (borrowCurrency && asset) {
            this.updateCurrencyLabel(borrowCurrency, asset);
        }
        
        this.updateBorrowModal();

        // Open modal
        document.getElementById('borrowModal').classList.add('active');
    }

    updateCollateralTriggerText() {
        const selected = document.querySelectorAll('.collateral-item.selected');
        const triggerText = document.getElementById('collateralTriggerText');
        
        if (selected.length === 0) {
            triggerText.textContent = 'Select collateral assets...';
        } else if (selected.length === 1) {
            const symbol = selected[0].querySelector('.collateral-item-name').textContent;
            triggerText.textContent = symbol;
        } else {
            triggerText.textContent = `${selected.length} assets selected`;
        }
    }

    updateBorrowModal() {
        const asset = this.selectedBorrowAsset;
        if (!asset) return;

        // Calculate total collateral from selected items
        let totalSelectedCollateral = 0;
        document.querySelectorAll('.collateral-item.selected').forEach(item => {
            const poolId = item.dataset.assetId;
            const deposit = appState.poolDeposits[poolId];
            const collAsset = MOCK_ASSETS.find(a => a.id === poolId);
            if (deposit && collAsset) {
                totalSelectedCollateral += deposit.amount * collAsset.price * collAsset.ltv;
            }
        });

        // Calculate current borrows
        const currentBorrow = appState.getTotalBorrowValue();
        
        // Available to borrow = collateral (with LTV) - current borrows
        // totalSelectedCollateral already includes LTV, so no need to divide
        const maxBorrow = Math.max(0, totalSelectedCollateral - currentBorrow);
        const maxBorrowInAsset = maxBorrow / asset.price;

        document.getElementById('borrowMaxAmount').textContent = 
            `Max available: ${formatToken(maxBorrowInAsset, 6)} ${asset.symbol} ($${formatCurrency(maxBorrow)})`;

        // Update health factor preview
        const borrowAmount = parseNumber(document.getElementById('borrowAmountInput').value);
        const borrowValue = borrowAmount * asset.price;
        const newTotalBorrow = currentBorrow + borrowValue;

        let healthFactor = '∞';
        let healthClass = '';
        let warningText = '';

        // Only calculate health factor if debt is meaningful (>= $0.01)
        if (newTotalBorrow >= 0.01 && totalSelectedCollateral > 0) {
            const hf = totalSelectedCollateral / newTotalBorrow;
            healthFactor = hf.toFixed(2);

            // Since totalSelectedCollateral has LTV, hf should be >= 1.0 for safe borrowing
            if (hf < 1.0) {
                healthClass = 'danger';
                warningText = '⚠ High risk of liquidation!';
            } else if (hf < 1.2) {
                healthClass = 'warning';
                warningText = 'Moderate risk - consider borrowing less';
            } else {
                healthClass = '';
                warningText = 'Safe to borrow';
            }
        }

        const healthPreview = document.getElementById('borrowHealthPreview');
        const healthWarning = document.getElementById('borrowHealthWarning');
        
        healthPreview.textContent = healthFactor;
        healthPreview.className = 'health-factor-value ' + healthClass;
        healthWarning.textContent = warningText;
        healthWarning.className = 'health-factor-warning ' + healthClass;
    }

    repayLoan(symbol) {
        this.openRepayModal(symbol);
    }

    openRepayModal(symbol) {
        // Find all borrows for this symbol
        const borrows = appState.borrows.filter(b => !b.repaid);
        const symbolBorrows = borrows.filter(b => {
            const asset = MOCK_ASSETS.find(a => a.id === b.assetId);
            return asset && asset.symbol === symbol;
        });

        if (symbolBorrows.length === 0) return;

        const firstBorrow = symbolBorrows[0];
        const asset = MOCK_ASSETS.find(a => a.id === firstBorrow.assetId);
        if (!asset) return;

        this.selectedRepaySymbol = symbol;

        // Calculate total debt for this symbol
        let totalDebt = 0;
        symbolBorrows.forEach(b => {
            totalDebt += b.amount + b.accumulatedInterest;
        });

        // Set asset info
        document.getElementById('repayAssetName').value = `${symbol} - ${asset.name}`;
        const debtField = document.getElementById('repayTotalDebt');
        debtField.value = `${formatToken(totalDebt, 8)} ${symbol} ($${formatCurrency(totalDebt * asset.price)})`;
        debtField.dataset.debtAmount = totalDebt;

        // Populate assets to pay with
        const repayWithItems = [];

        // Add same asset option
        const walletBalance = appState.walletBalances[asset.id] || 0;
        repayWithItems.push({
            id: asset.id,
            symbol: symbol,
            name: 'from wallet',
            icon: asset.icon,
            balance: walletBalance
        });

        // Add other assets from wallet (only with balance > 0)
        for (const [assetId, balance] of Object.entries(appState.walletBalances)) {
            if (balance > 0) {
                const walletAsset = MOCK_ASSETS.find(a => a.id === assetId);
                if (walletAsset && walletAsset.symbol !== symbol) {
                    repayWithItems.push({
                        id: assetId,
                        symbol: walletAsset.symbol,
                        name: walletAsset.name,
                        icon: walletAsset.icon,
                        balance: balance
                    });
                }
            }
        }

        // Add collateral option
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            if (deposit && deposit.amount > 0 && appState.collateralEnabled[poolId]) {
                const collAsset = MOCK_ASSETS.find(a => a.id === poolId);
                if (collAsset && !repayWithItems.find(item => item.id === poolId)) {
                    repayWithItems.push({
                        id: poolId,
                        symbol: collAsset.symbol,
                        name: 'from collateral',
                        icon: collAsset.icon,
                        balance: deposit.amount
                    });
                }
            }
        }

        this.selectedRepayWithAsset = asset.id;
        this.populateCustomDropdown('repayWithAsset', repayWithItems, this.selectedRepayWithAsset);

        // Reset inputs
        document.getElementById('repayAmountInput').value = '';
        document.getElementById('repayAmountUsdInput').value = '';
        
        this.updateRepayModal();
        document.getElementById('repayModal').classList.add('active');
    }

    updateRepayModal() {
        const selectedAssetId = this.selectedRepayWithAsset;
        if (!selectedAssetId) return;

        const selectedAsset = MOCK_ASSETS.find(a => a.id === selectedAssetId);
        if (!selectedAsset) return;
        
        // Update currency label
        const repayCurrency = document.getElementById('repayCurrency');
        if (repayCurrency && selectedAsset) {
            this.updateCurrencyLabel(repayCurrency, selectedAsset);
        }

        // Get available balance (wallet + deposits)
        let availableBalance = appState.walletBalances[selectedAssetId] || 0;
        const deposit = appState.poolDeposits[selectedAssetId];
        if (deposit && deposit.amount > 0) {
            availableBalance += deposit.amount;
        }

        document.getElementById('repayAssetBalance').textContent = 
            `Available: ${formatToken(availableBalance, 8)} ${selectedAsset.symbol}`;
    }

    executeRepay(fullRepay) {
        const symbol = this.selectedRepaySymbol;
        if (!symbol) return;

        const repayWithAssetId = this.selectedRepayWithAsset;
        const repayWithAsset = MOCK_ASSETS.find(a => a.id === repayWithAssetId);
        if (!repayWithAsset) return;

        const totalDebt = parseFloat(document.getElementById('repayTotalDebt').dataset.debtAmount);

        // Find borrow for this symbol
        const borrows = appState.borrows.filter(b => !b.repaid);
        const borrow = borrows.find(b => {
            const asset = MOCK_ASSETS.find(a => a.id === b.assetId);
            return asset && asset.symbol === symbol;
        });

        if (!borrow) return;

        const borrowAsset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
        
        let amount; // Amount in debt asset (borrowed asset)
        let amountInRepayAsset; // Amount in repay asset

        if (fullRepay) {
            amount = totalDebt;
            // Convert to repay asset
        if (repayWithAsset.id !== borrow.assetId) {
            const usdValue = amount * borrowAsset.price;
            amountInRepayAsset = usdValue / repayWithAsset.price;
            } else {
                amountInRepayAsset = amount;
            }
        } else {
            // Partial repay: input contains amount in repay asset
            amountInRepayAsset = parseNumber(document.getElementById('repayAmountInput').value);
            if (!amountInRepayAsset || amountInRepayAsset <= 0) {
                alert('Please enter a valid amount');
                return;
            }
            
            // Convert from repay asset to debt asset
            if (repayWithAsset.id !== borrow.assetId) {
                const usdValue = amountInRepayAsset * repayWithAsset.price;
                amount = usdValue / borrowAsset.price;
            } else {
                amount = amountInRepayAsset;
            }
            
            // Cap at total debt
            if (amount > totalDebt) {
                amount = totalDebt;
                // Recalculate amountInRepayAsset
                if (repayWithAsset.id !== borrow.assetId) {
                    const usdValue = amount * borrowAsset.price;
                    amountInRepayAsset = usdValue / repayWithAsset.price;
                } else {
                    amountInRepayAsset = amount;
                }
            }
        }

        // Check if we have enough balance
        let availableBalance = appState.walletBalances[repayWithAssetId] || 0;
        const deposit = appState.poolDeposits[repayWithAssetId];
        if (deposit && deposit.amount > 0) {
            availableBalance += deposit.amount;
        }

        if (availableBalance < amountInRepayAsset) {
            alert('Insufficient balance to repay');
            return;
        }

        // Deduct from wallet or deposit
        if (appState.walletBalances[repayWithAssetId] >= amountInRepayAsset) {
            appState.walletBalances[repayWithAssetId] -= amountInRepayAsset;
            // Clean up very small balances
            if (appState.walletBalances[repayWithAssetId] < 0.00000001) {
                delete appState.walletBalances[repayWithAssetId];
            }
        } else {
            const fromWallet = appState.walletBalances[repayWithAssetId] || 0;
            const fromDeposit = amountInRepayAsset - fromWallet;
            appState.walletBalances[repayWithAssetId] = 0;
            delete appState.walletBalances[repayWithAssetId];
            if (deposit) {
                deposit.amount -= fromDeposit;
                
                // Clean up if total USD value < $0.01
                const depositUsdValue = deposit.amount * repayWithAsset.price;
                const walletUsdValue = (appState.walletBalances[repayWithAssetId] || 0) * repayWithAsset.price;
                const totalUsdValue = depositUsdValue + walletUsdValue;
                
                if (totalUsdValue < 0.01) {
                    delete appState.poolDeposits[repayWithAssetId];
                    delete appState.walletBalances[repayWithAssetId];
                    delete appState.collateralEnabled[repayWithAssetId];
                }
            }
        }
        
        // Save state after balance deduction
        appState.saveState();

        // Repay borrow
        if (appState.repayBorrow(borrow.id, amount)) {
            document.getElementById('repayModal').classList.remove('active');
            this.render();
        }
    }

    toggleCollateral(poolId) {
        appState.toggleCollateral(poolId);
        this.render();
    }

    toggleCollateralForGroup(symbol, enabled) {
        // Toggle collateral for all assets in this group
        const assetsInGroup = MOCK_ASSETS.filter(a => a.symbol === symbol && a.depositApr > 0);
        
        assetsInGroup.forEach(asset => {
            const deposit = appState.poolDeposits[asset.id];
            const walletBalance = appState.walletBalances[asset.id] || 0;
            
            // If asset exists in poolDeposits or wallet
            if ((deposit && deposit.amount > 0) || walletBalance > 0) {
                // If asset only in wallet, create poolDeposit entry
                if (!deposit && walletBalance > 0) {
                    appState.poolDeposits[asset.id] = {
                        amount: 0, // Keep in wallet for now
                        initialTime: Date.now()
                    };
                }
                
                // Toggle collateral
                if (enabled) {
                    appState.collateralEnabled[asset.id] = true;
                } else {
                    appState.collateralEnabled[asset.id] = false;
                }
            }
        });
        
        appState.saveState();
        this.render();
    }

    updateProfitCells() {
        // Update profit cells in Your Deposits table
        const depositsRows = document.querySelectorAll('#yourDepositsTableBody tr');
        depositsRows.forEach((row) => {
            const profitCell = row.querySelector('.profit-cell');
            if (!profitCell) return;
            
            const symbol = profitCell.dataset.symbol;
            if (!symbol) return;
            
            const assetsInGroup = MOCK_ASSETS.filter(a => a.symbol === symbol);
            let totalProfit = 0;
            let totalProfitUsd = 0;
            
            assetsInGroup.forEach(asset => {
                const deposit = appState.poolDeposits[asset.id];
                if (deposit && deposit.amount > 0 && deposit.initialTime) {
                    const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
                    const aprPerSecond = asset.depositApr / 100 / (365 * 24 * 60 * 60);
                    const profit = deposit.amount * aprPerSecond * timeElapsed;
                    totalProfit += profit;
                    totalProfitUsd += profit * asset.price;
                }
            });
            
            if (totalProfit > 0) {
                profitCell.innerHTML = `
                    <div class="profit-positive">
                        +${totalProfit.toFixed(8)} ${symbol}
                        <div class="balance-usd">+$${totalProfitUsd.toFixed(4)}</div>
                    </div>
                `;
            }
        });

        // Update debt cells in Your Loans table
        const loansRows = document.querySelectorAll('#yourLoansTableBody tr');
        loansRows.forEach((row) => {
            const debtCell = row.querySelector('.debt-cell');
            if (!debtCell) return;
            
            const symbol = debtCell.dataset.symbol;
            if (!symbol) return;
            
            const borrows = appState.borrows.filter(b => !b.repaid);
            let totalDebt = 0;
            let totalDebtUsd = 0;
            
            borrows.forEach(borrow => {
                const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId && a.symbol === symbol);
                if (asset) {
                    const debt = borrow.amount + borrow.accumulatedInterest;
                    totalDebt += debt;
                    totalDebtUsd += debt * asset.price;
                }
            });
            
            if (totalDebt > 0) {
                debtCell.innerHTML = `
                    <div class="profit-negative">
                        ${totalDebt.toFixed(8)} ${symbol}
                        <div class="balance-usd">$${totalDebtUsd.toFixed(4)}</div>
                    </div>
                `;
            }
        });
    }

    openWalletModal() {
        document.getElementById('walletModal').classList.add('active');
    }

    openWalletSidebar() {
        this.renderWalletSidebar();
        document.getElementById('walletSidebar').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeWalletSidebar() {
        document.getElementById('walletSidebar').classList.remove('active');
        document.body.style.overflow = '';
    }

    renderWalletSidebar() {
        if (!appState.walletAddress) return;

        // Update wallet address
        const short = appState.walletAddress.slice(0, 6) + '...' + appState.walletAddress.slice(-4);
        document.getElementById('sidebarWalletAddress').textContent = short.toUpperCase();

        // Calculate total balance
        let totalBalance = 0;
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            if (deposit && deposit.amount > 0) {
                const pool = MOCK_ASSETS.find(a => a.id === poolId);
                if (pool) {
                    totalBalance += deposit.amount * pool.price;
                }
            }
        }

        // Add wallet balances
        for (const [assetId, balance] of Object.entries(appState.walletBalances)) {
            if (balance > 0) {
                const asset = MOCK_ASSETS.find(a => a.id === assetId);
                if (asset) {
                    totalBalance += balance * asset.price;
                }
            }
        }

        document.getElementById('sidebarTotalBalance').textContent = 
            `$${totalBalance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

        // Render assets list
        const assetsList = document.getElementById('sidebarAssetsList');
        assetsList.innerHTML = '';

        // Get all assets with balance (deposits + wallet)
        const assetsMap = new Map();

        // Network icons mapping
        const networkIcons = {
            'Ethereum Network': 'crypto/networks/eth.svg',
            'Gnosis': 'crypto/networks/gno.svg',
            'Base': 'crypto/networks/base.svg',
            'Arbitrum': 'crypto/networks/arbitrum.svg',
            'BNB Chain': 'crypto/assets/bnb.svg',
            'Avalanche': 'crypto/networks/avalanche.svg',
            'Optimism': 'crypto/networks/optimism.svg',
            'Solana': 'crypto/networks/solana.svg'
        };

        // Add deposits (group by assetId, not symbol)
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            if (deposit && deposit.amount > 0.00000001) {
                const pool = MOCK_ASSETS.find(a => a.id === poolId);
                if (pool) {
                    const usdValue = deposit.amount * pool.price;
                    // Only add if USD value >= $0.01
                    if (usdValue >= 0.01) {
                        const existing = assetsMap.get(pool.id) || { amount: 0, usd: 0 };
                        existing.amount += deposit.amount;
                        existing.usd += usdValue;
                        existing.asset = pool;
                        assetsMap.set(pool.id, existing);
                    }
                }
            }
        }

        // Add wallet balances (group by assetId, not symbol)
        for (const [assetId, balance] of Object.entries(appState.walletBalances)) {
            if (balance > 0.00000001) {
                const asset = MOCK_ASSETS.find(a => a.id === assetId);
                if (asset) {
                    const usdValue = balance * asset.price;
                    // Only add if USD value >= $0.01
                    if (usdValue >= 0.01) {
                        const existing = assetsMap.get(asset.id) || { amount: 0, usd: 0 };
                        existing.amount += balance;
                        existing.usd += usdValue;
                        existing.asset = asset;
                        assetsMap.set(asset.id, existing);
                    }
                }
            }
        }

        // Render assets
        if (assetsMap.size === 0) {
            assetsList.innerHTML = '<div style="text-align: center; color: #6b7280; padding: 20px;">No assets yet</div>';
        } else {
            assetsMap.forEach((data, assetId) => {
                const asset = data.asset;
                const symbol = asset.symbol;
                const networkIcon = networkIcons[asset.network] || '';
                const change = Math.random() * 20 - 10; // Mock change percentage
                const changeClass = change >= 0 ? 'positive' : 'negative';
                const changeSign = change >= 0 ? '+' : '';
                
                // Check if stablecoin (use 2 decimals for stablecoins, 6 for others)
                const isStablecoin = symbol.includes('USD') || symbol.includes('DAI');
                const balanceDecimals = isStablecoin ? 2 : 6;

                const assetItem = document.createElement('div');
                assetItem.className = 'wallet-asset-item';
                assetItem.innerHTML = `
                    <div class="wallet-asset-icon">
                        <img src="${asset.icon}" alt="${symbol}">
                        ${networkIcon ? `<img src="${networkIcon}" alt="${asset.network}" class="network-badge">` : ''}
                    </div>
                    <div class="wallet-asset-info">
                        <span class="wallet-asset-name">${symbol}</span>
                        <span class="wallet-asset-balance">${formatToken(data.amount, balanceDecimals)} ${symbol}</span>
                    </div>
                    <div class="wallet-asset-value">
                        <span class="wallet-asset-usd">$${formatCurrency(data.usd)}</span>
                        <span class="wallet-asset-change ${changeClass}">${changeSign}${formatNumber(change, 2)}%</span>
                    </div>
                `;
                assetsList.appendChild(assetItem);
            });
        }
    }

    openTopUpModal() {
        document.getElementById('topUpModal').classList.add('active');
        document.getElementById('topUpAmount').value = '';
        document.getElementById('topUpAmount').focus();
    }

    openDepositModal(poolId = null) {
        if (!appState.walletAddress) {
            alert('Please connect wallet first');
            return;
        }

        const modal = document.getElementById('depositModal');
        
        // Group pools by symbol (show only pool assets with depositApr > 0)
        const poolGroups = new Map();
        MOCK_ASSETS.forEach(asset => {
            // Only show pool assets, not regular stablecoins
            if (asset.depositApr > 0) {
            if (!poolGroups.has(asset.symbol)) {
                poolGroups.set(asset.symbol, {
                    symbol: asset.symbol,
                    name: asset.name,
                    icon: asset.icon,
                    networks: []
                });
            }
            poolGroups.get(asset.symbol).networks.push({
                network: asset.network,
                id: asset.id
            });
            }
        });

        // Convert to array for dropdown
        const poolItems = Array.from(poolGroups.values()).map(group => ({
            id: group.symbol, // Use symbol as ID for first dropdown
            symbol: group.symbol,
            name: group.name,
            icon: group.icon
        }));

        // If poolId is provided, find its symbol
        if (poolId) {
            const selectedAsset = MOCK_ASSETS.find(a => a.id === poolId);
            if (selectedAsset) {
                this.selectedPoolSymbol = selectedAsset.symbol;
                this.selectedNetworkForDeposit = selectedAsset.network;
                this.selectedPoolForDeposit = poolId;
            }
        } else {
            this.selectedPoolSymbol = poolItems[0].symbol;
            const firstGroup = poolGroups.get(this.selectedPoolSymbol);
            this.selectedNetworkForDeposit = firstGroup.networks[0].network;
            this.selectedPoolForDeposit = firstGroup.networks[0].id;
        }

        this.populateCustomDropdown('depositPool', poolItems, this.selectedPoolSymbol);
        this.updatePoolNetworkSelector();
        this.updateDepositModal();
        modal.classList.add('active');
    }

    updatePoolNetworkSelector() {
        const networkSelector = document.getElementById('depositNetworkSelector');
        const networkTrigger = document.getElementById('depositNetworkTrigger');
        
        if (!networkSelector || !networkTrigger) return;

        // Helper to get network icon
        const getNetworkIcon = (network) => {
            const networkIcons = {
                'Ethereum Network': 'crypto/networks/eth.svg',
                'Gnosis': 'crypto/networks/gno.svg',
                'Base': 'crypto/networks/base.svg',
                'BNB Chain': 'crypto/assets/bnb.svg',
                'Arbitrum': 'crypto/networks/arbitrum.svg',
                'Avalanche': 'crypto/networks/avalanche.svg',
                'Bitcoin': 'crypto/networks/btc.svg',
                'Optimism': 'crypto/networks/optimism.svg',
                'Solana': 'crypto/networks/solana.svg'
            };
            return networkIcons[network] || '';
        };

        // Find all networks for the selected pool symbol
        const poolNetworks = MOCK_ASSETS
            .filter(a => a.symbol === this.selectedPoolSymbol)
            .map(a => ({
                network: a.network,
                id: a.id
            }));

        if (poolNetworks.length > 1) {
            // Multiple networks - show dropdown enabled
            networkSelector.style.display = 'block';
            networkTrigger.disabled = false;
            networkTrigger.style.opacity = '1';
            networkTrigger.style.cursor = 'pointer';

            const networkItems = poolNetworks.map(pn => ({
                id: pn.network,
                name: pn.network,
                symbol: pn.network,
                icon: getNetworkIcon(pn.network)
            }));

            this.populateCustomDropdown('depositNetwork', networkItems, this.selectedNetworkForDeposit);
        } else if (poolNetworks.length === 1) {
            // Single network - show dropdown disabled
            networkSelector.style.display = 'block';
            networkTrigger.disabled = true;
            networkTrigger.style.opacity = '0.6';
            networkTrigger.style.cursor = 'not-allowed';

            this.selectedNetworkForDeposit = poolNetworks[0].network;
            this.selectedPoolForDeposit = poolNetworks[0].id;

            const networkItems = [{
                id: poolNetworks[0].network,
                name: poolNetworks[0].network,
                symbol: poolNetworks[0].network,
                icon: getNetworkIcon(poolNetworks[0].network)
            }];

            this.populateCustomDropdown('depositNetwork', networkItems, this.selectedNetworkForDeposit);
        } else {
            // No networks (shouldn't happen)
            networkSelector.style.display = 'none';
        }
    }

    updateActualPoolSelection() {
        // Find the actual pool ID based on selected symbol + network
        const pool = MOCK_ASSETS.find(a => 
            a.symbol === this.selectedPoolSymbol && 
            a.network === this.selectedNetworkForDeposit
        );
        
        if (pool) {
            this.selectedPoolForDeposit = pool.id;
        }
    }

    updateDepositModal() {
        // Populate from asset dropdown - show ONLY assets with balance > 0 + collateral
        const fromAssetItems = [];
        const addedAssetIds = new Set();
        
        // 1. Add assets with non-zero balance from wallet
        for (const [assetId, balance] of Object.entries(appState.walletBalances)) {
            if (balance > 0) {
                const asset = MOCK_ASSETS.find(a => a.id === assetId);
                if (asset && !addedAssetIds.has(assetId)) {
                    fromAssetItems.push({
                        id: asset.id,
                        symbol: asset.symbol,
                        name: asset.name,
                        icon: asset.icon,
                        balance: balance,
                        disabled: false
                    });
                    addedAssetIds.add(assetId);
                }
            }
        }

        // 2. Add assets used as collateral (disabled)
        for (const [poolId, enabled] of Object.entries(appState.collateralEnabled)) {
            if (enabled) {
                const deposit = appState.poolDeposits[poolId];
                if (deposit && deposit.amount > 0) {
                    const asset = MOCK_ASSETS.find(a => a.id === poolId);
                    if (asset && !addedAssetIds.has(poolId)) {
                        fromAssetItems.push({
                            id: asset.id,
                            symbol: asset.symbol,
                            name: 'used as collateral',
                            icon: asset.icon,
                            balance: deposit.amount,
                            disabled: true
                        });
                        addedAssetIds.add(poolId);
                    }
                }
            }
        }

        // If no assets available, show message
        if (fromAssetItems.length === 0) {
            fromAssetItems.push({
                id: 'none',
                symbol: 'No assets',
                name: 'Please top up your wallet',
                icon: 'crypto/assets/usdc.svg',
                balance: 0,
                disabled: true
            });
        }

        // Check if currently selected asset is still in the list
        const isSelectedInList = fromAssetItems.find(item => item.id === this.selectedFromAssetForDeposit);
        
        if (!isSelectedInList || !this.selectedFromAssetForDeposit) {
            // Select first non-disabled asset
            const firstAvailable = fromAssetItems.find(item => !item.disabled);
            this.selectedFromAssetForDeposit = firstAvailable ? firstAvailable.id : fromAssetItems[0].id;
        }

        this.populateCustomDropdown('depositFromAsset', fromAssetItems, this.selectedFromAssetForDeposit);

        const fromAsset = MOCK_ASSETS.find(a => a.id === this.selectedFromAssetForDeposit);
        const balance = appState.walletBalances[this.selectedFromAssetForDeposit] || 0;

        document.getElementById('depositFromBalance').textContent = 
            `Balance: ${formatToken(balance, 8)} ${fromAsset ? fromAsset.symbol : ''}`;

        // Update currency label - show FROM ASSET currency, not pool!
        const depositCurrency = document.getElementById('depositCurrency');
        if (depositCurrency && fromAsset) {
            this.updateCurrencyLabel(depositCurrency, fromAsset);
        }

        // Update deposit preview - show how much pool tokens user will receive
        this.updateDepositPreview();
    }

    updateDepositPreview() {
        const amountInput = document.getElementById('depositAmountInput');
        const previewAmount = document.getElementById('depositPreviewAmount');
        const previewSymbol = document.getElementById('depositPreviewSymbol');
        
        if (!amountInput || !previewAmount || !previewSymbol) return;

        const amount = parseNumber(amountInput.value);
        
        if (amount > 0 && this.selectedFromAssetForDeposit && this.selectedPoolForDeposit) {
            const fromAsset = MOCK_ASSETS.find(a => a.id === this.selectedFromAssetForDeposit);
            const poolAsset = MOCK_ASSETS.find(a => a.id === this.selectedPoolForDeposit);
            
            if (fromAsset && poolAsset) {
                // Calculate how much pool tokens user will receive
                const fromValue = amount * fromAsset.price;
                const poolAmount = fromValue / poolAsset.price;
                
                previewAmount.textContent = poolAmount.toFixed(8);
                previewSymbol.textContent = poolAsset.symbol;
            }
        } else {
            previewAmount.textContent = '0.00000000';
            previewSymbol.textContent = 'TOKEN';
        }
    }

    openWithdrawModal(poolId) {
        if (!appState.walletAddress) {
            alert('Please connect wallet first');
            return;
        }

        this.selectedPoolForWithdraw = poolId;
        const pool = MOCK_ASSETS.find(a => a.id === poolId);
        
        if (!pool) return;
        
        // Get total available balance (deposits + wallet)
        const depositAmount = appState.poolDeposits[poolId]?.amount || 0;
        const walletAmount = appState.walletBalances[poolId] || 0;
        const totalAvailable = depositAmount + walletAmount;
        
        if (totalAvailable <= 0) {
            alert('No balance to withdraw');
            return;
        }

        // Update pool display card
        const poolIcon = document.getElementById('withdrawPoolIcon');
        const networkIcon = this.getNetworkIcon(pool.network);
        if (poolIcon) {
            poolIcon.innerHTML = `
                <img src="${pool.icon}" alt="${pool.symbol}">
                ${networkIcon ? `<img src="${networkIcon}" alt="${pool.network}" class="network-badge-pool">` : ''}
            `;
        }
        
        document.getElementById('withdrawPoolDisplayName').textContent = pool.symbol;
        document.getElementById('withdrawPoolDisplayNetwork').textContent = pool.network;
        document.getElementById('withdrawPoolDisplayBalance').textContent = 
            `${formatToken(totalAvailable, 8)} ${pool.symbol}`;
        
        document.getElementById('withdrawBalance').textContent = 
            `Available: ${formatToken(totalAvailable, 8)} ${pool.symbol}`;
        document.getElementById('withdrawAmountInput').value = '';
        document.getElementById('withdrawAmountUsdInput').value = '';
        
        // Set currency label
        const withdrawCurrency = document.getElementById('withdrawCurrency');
        if (withdrawCurrency && pool) {
            this.updateCurrencyLabel(withdrawCurrency, pool);
        }
        
        // Check if asset is being used as collateral for any active loans
        const isCollateral = appState.collateralEnabled[poolId];
        const warningDiv = document.getElementById('withdrawCollateralWarning');
        const confirmBtn = document.getElementById('confirmWithdrawBtn');
        
        if (isCollateral) {
            // Find all active borrows with meaningful debt (>= $0.01)
            const activeBorrows = appState.borrows.filter(b => {
                if (b.repaid) return false;
                const asset = MOCK_ASSETS.find(a => a.id === b.assetId);
                if (!asset) return false;
                const debt = b.amount + b.accumulatedInterest;
                return (debt * asset.price) >= 0.01; // Only show if debt >= $0.01
            });
            
            if (activeBorrows.length > 0) {
                // Show warning
                warningDiv.style.display = 'flex';
                confirmBtn.disabled = true;
                confirmBtn.style.opacity = '0.5';
                confirmBtn.style.cursor = 'not-allowed';
                
                // Populate loan list with clickable items
                const loanList = document.getElementById('withdrawWarningLoanList');
                loanList.innerHTML = '';
                
                activeBorrows.forEach(borrow => {
                    const borrowAsset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
                    if (borrowAsset) {
                        const li = document.createElement('li');
                        const debt = borrow.amount + borrow.accumulatedInterest;
                        
                        // Create clickable link
                        const link = document.createElement('a');
                        link.href = '#';
                        link.style.color = '#3b82f6';
                        link.style.textDecoration = 'underline';
                        link.style.cursor = 'pointer';
                        link.textContent = `${borrowAsset.symbol}: ${debt.toFixed(6)} ${borrowAsset.symbol} ($${(debt * borrowAsset.price).toFixed(2)})`;
                        
                        link.addEventListener('click', (e) => {
                            e.preventDefault();
                            // Close withdraw modal
                            document.getElementById('withdrawModal').classList.remove('active');
                            // Open repay modal for this asset
                            this.repayLoan(borrowAsset.symbol);
                        });
                        
                        li.appendChild(link);
                        loanList.appendChild(li);
                    }
                });
            } else {
                // No meaningful debt - allow withdrawal
                warningDiv.style.display = 'none';
                confirmBtn.disabled = false;
                confirmBtn.style.opacity = '1';
                confirmBtn.style.cursor = 'pointer';
            }
        } else {
            warningDiv.style.display = 'none';
            confirmBtn.disabled = false;
            confirmBtn.style.opacity = '1';
            confirmBtn.style.cursor = 'pointer';
        }
        
        // Populate withdraw to assets dropdown (by symbol)
        const withdrawToSymbols = new Set();
        const withdrawToItems = [];
        
        MOCK_ASSETS.forEach(asset => {
            if (!withdrawToSymbols.has(asset.symbol)) {
                withdrawToSymbols.add(asset.symbol);
                withdrawToItems.push({
                    id: asset.symbol,
                    symbol: asset.symbol,
                    name: asset.symbol,
                    icon: asset.icon,
                    disabled: false
                });
            }
        });
        
        // Set default to USDC on Base
        const defaultToAsset = withdrawToItems.find(a => a.symbol === 'USDC') || withdrawToItems[0];
        this.selectedWithdrawToSymbol = defaultToAsset ? defaultToAsset.symbol : null;
        this.selectedWithdrawToNetwork = 'Base'; // Default to Base network for USDC
        this.selectedWithdrawToAsset = 'usdc-base'; // Will be verified in updateActualWithdrawToAssetSelection
        
        // Populate asset dropdown first
        this.populateCustomDropdown('withdrawToAsset', withdrawToItems, this.selectedWithdrawToSymbol);
        
        // Then update network selector (this will show available networks)
        this.updateWithdrawToNetworkSelector();
        
        // Then verify/update actual asset ID based on symbol + network
        this.updateActualWithdrawToAssetSelection();
        
        // Finally update preview
        this.updateWithdrawPreview();

        document.getElementById('withdrawModal').classList.add('active');
    }
    
    updateWithdrawToNetworkSelector() {
        const symbol = this.selectedWithdrawToSymbol;
        if (!symbol) {
            document.getElementById('withdrawToNetworkSelector').style.display = 'none';
            return;
        }
        
        // Find all networks for this symbol
        const networksForSymbol = MOCK_ASSETS
            .filter(a => a.symbol === symbol)
            .map(a => ({ network: a.network, icon: this.getNetworkIcon(a.network) }));
        
        // Always show network selector
        document.getElementById('withdrawToNetworkSelector').style.display = 'block';
        
        const networkItems = networksForSymbol.map(n => ({
            id: n.network,
            symbol: n.network,
            name: n.network,
            icon: n.icon,
            disabled: networksForSymbol.length === 1 // Disable if only one network
        }));
        
        // Set default to first network if not selected or not valid for this symbol
        if (!this.selectedWithdrawToNetwork || !networksForSymbol.find(n => n.network === this.selectedWithdrawToNetwork)) {
            this.selectedWithdrawToNetwork = networkItems[0]?.network || null;
        }
        
        // Populate dropdown with selected network
        this.populateCustomDropdown('withdrawToNetwork', networkItems, this.selectedWithdrawToNetwork);
        
        // Disable trigger if only one network and ensure it shows the selected network
        const trigger = document.getElementById('withdrawToNetworkTrigger');
        const networkText = document.getElementById('withdrawToNetworkText');
        const networkIcon = trigger?.querySelector('.dropdown-icon');
        
        if (trigger) {
            if (networksForSymbol.length === 1) {
                trigger.style.opacity = '0.6';
                trigger.style.cursor = 'not-allowed';
                trigger.disabled = true;
                
                // Make sure the selected network is displayed even when disabled
                if (networkText && networkIcon && this.selectedWithdrawToNetwork) {
                    const selectedNetworkItem = networkItems[0];
                    networkText.textContent = selectedNetworkItem.name;
                    networkIcon.innerHTML = `<img src="${selectedNetworkItem.icon}" alt="${selectedNetworkItem.name}">`;
                    networkIcon.classList.add('has-icon');
                }
            } else {
                trigger.style.opacity = '1';
                trigger.style.cursor = 'pointer';
                trigger.disabled = false;
            }
        }
    }
    
    updateActualWithdrawToAssetSelection() {
        const symbol = this.selectedWithdrawToSymbol;
        const network = this.selectedWithdrawToNetwork;
        
        if (!symbol || !network) {
            this.selectedWithdrawToAsset = null;
            return;
        }
        
        // Find actual asset by symbol + network
        const asset = MOCK_ASSETS.find(a => a.symbol === symbol && a.network === network);
        this.selectedWithdrawToAsset = asset ? asset.id : null;
    }
    
    updateWithdrawPreview() {
        const amountInput = document.getElementById('withdrawAmountInput');
        const previewAmount = document.getElementById('withdrawPreviewAmount');
        const previewSymbol = document.getElementById('withdrawPreviewSymbol');
        const previewDiv = document.getElementById('withdrawPreview');
        
        if (!amountInput || !previewAmount || !previewSymbol || !previewDiv) return;

        const amount = parseNumber(amountInput.value);
        
        if (amount > 0 && this.selectedPoolForWithdraw && this.selectedWithdrawToAsset) {
            const fromAsset = MOCK_ASSETS.find(a => a.id === this.selectedPoolForWithdraw);
            const toAsset = MOCK_ASSETS.find(a => a.id === this.selectedWithdrawToAsset);
            
            if (fromAsset && toAsset) {
                // Calculate how much of target asset user will receive
                const fromValue = amount * fromAsset.price;
                const toAmount = fromValue / toAsset.price;
                
                previewAmount.textContent = toAmount.toFixed(8);
                previewSymbol.textContent = toAsset.symbol;
                previewDiv.style.display = 'flex';
            } else {
                previewDiv.style.display = 'none';
            }
        } else {
            previewDiv.style.display = 'none';
        }
    }

    renderBorrowPage() {
        // Update available to borrow
        const totalCollateral = appState.getTotalCollateralValue();
        const totalBorrow = appState.getTotalBorrowValue();
        const availableToBorrow = Math.max(0, totalCollateral / 1.5 - totalBorrow);

        document.getElementById('availableToBorrow').textContent = `$${availableToBorrow.toFixed(2)}`;
        document.getElementById('collateralLocked').textContent = `$${totalCollateral.toFixed(2)}`;

        // Update already deposited
        let totalDeposited = 0;
        for (const [poolId, deposit] of Object.entries(appState.poolDeposits)) {
            const pool = MOCK_ASSETS.find(a => a.id === poolId);
            if (pool && deposit) {
                totalDeposited += deposit.amount * pool.price;
            }
        }
        document.getElementById('depositedStatus').innerHTML = 
            `<span>Already deposited ~$${totalDeposited.toFixed(2)}</span>`;
    }

    repayBorrow(borrowId, full) {
        const borrow = appState.borrows.find(b => b.id === borrowId);
        if (!borrow) return;

        const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId);
        if (!asset) return;

        const totalDebt = borrow.amount + borrow.accumulatedInterest;
        let amount;

        if (full) {
            amount = totalDebt;
        } else {
            const input = prompt(`Enter amount to repay (max: ${totalDebt.toFixed(8)} ${asset.symbol}):`);
            if (!input) return;
            amount = parseFloat(input);
            if (isNaN(amount) || amount <= 0 || amount > totalDebt) {
                alert('Invalid amount');
                return;
            }
        }

        if (appState.repayBorrow(borrowId, amount)) {
            this.render();
            alert('Repayment successful!');
        }
    }

    renderHistory() {
        const container = document.getElementById('historyList');
        
        if (appState.history.length === 0) {
            container.innerHTML = '<div class="empty-state">No transaction history</div>';
            return;
        }

        container.innerHTML = '';
        appState.history.forEach(item => {
            const asset = MOCK_ASSETS.find(a => a.id === item.assetId);
            if (!asset) return;

            let title = '';
            let description = '';

            switch (item.type) {
                case 'top_up':
                    title = 'Top Up';
                    description = `+${item.amount.toFixed(2)} ${asset.symbol}`;
                    break;
                case 'deposit':
                    title = 'Deposit';
                    if (item.fromAssetId) {
                        const fromAsset = MOCK_ASSETS.find(a => a.id === item.fromAssetId);
                        description = `${item.fromAmount.toFixed(4)} ${fromAsset.symbol} → ${item.amount.toFixed(4)} ${asset.symbol}`;
                    } else {
                        description = `${item.amount.toFixed(4)} ${asset.symbol}`;
                    }
                    break;
                case 'withdraw':
                    title = 'Withdraw';
                    description = `${item.amount.toFixed(4)} ${asset.symbol}`;
                    break;
                case 'borrow':
                    title = 'Borrow';
                    description = `${item.amount.toFixed(4)} ${asset.symbol}`;
                    break;
                case 'repay':
                    title = 'Repay';
                    description = `${item.amount.toFixed(4)} ${asset.symbol}`;
                    break;
            }

            const date = new Date(item.timestamp);
            const timeStr = date.toLocaleString();

            const div = document.createElement('div');
            div.className = 'history-item';
            div.innerHTML = `
                <div class="history-item-info">
                    <h4>${title}</h4>
                    <p>${description} · ${asset.network}</p>
                </div>
                <div class="history-item-amount">
                    <div class="timestamp">${timeStr}</div>
                </div>
            `;
            container.appendChild(div);
        });
    }

    renderPoolPage() {
        if (!this.selectedPoolId) return;

        const pool = MOCK_ASSETS.find(a => a.id === this.selectedPoolId);
        if (!pool) return;

        // Set title
        document.getElementById('poolPageTitle').textContent = `${pool.name} Pool`;

        // Mock data for pool statistics
        const totalSupplied = 326900; // Mock value
        const totalSuppliedUsd = totalSupplied * pool.price;
        const supplyCap = 2000000;
        const supplyCapUsd = supplyCap * pool.price;
        const availableSupply = 157700;
        const availableSupplyUsd = availableSupply * pool.price;

        // Calculate utilization
        const borrowed = totalSupplied * 0.8042; // 80.42% utilization
        const borrowedUsd = borrowed * pool.price;
        const instantAvailable = totalSupplied - borrowed;
        const instantAvailableUsd = instantAvailable * pool.price;
        const utilizationRate = (borrowed / totalSupplied * 100).toFixed(2);

        // Update pool stats
        document.getElementById('poolTotalSupplied').textContent = `${formatNumber(totalSupplied, 0)} ${pool.symbol}`;
        document.getElementById('poolTotalSuppliedUsd').textContent = `$${formatCurrency(totalSuppliedUsd)}`;
        document.getElementById('poolDepositApy').textContent = `${formatNumber(pool.depositApr, 2)}%`;
        document.getElementById('poolSupplyCap').textContent = `${formatNumber(supplyCap, 0)} ${pool.symbol}`;
        document.getElementById('poolSupplyCapUsd').textContent = `$${formatCurrency(supplyCapUsd)}`;
        document.getElementById('poolAvailableSupply').textContent = `${formatNumber(availableSupply, 0)} ${pool.symbol}`;
        document.getElementById('poolAvailableSupplyUsd').textContent = `$${availableSupplyUsd.toLocaleString()}`;

        // Update collateral parameters
        const maxLtv = (pool.ltv * 100).toFixed(2);
        const liqThreshold = (pool.ltv * 100 + 1).toFixed(2);
        const liqPenalty = '5.00';
        
        document.getElementById('poolMaxLtv').textContent = `${maxLtv}%`;
        document.getElementById('poolLiqThreshold').textContent = `${liqThreshold}%`;
        document.getElementById('poolLiqPenalty').textContent = `${liqPenalty}%`;

        // E-Mode parameters
        const emodeMaxLtv = (pool.ltv * 100 + 7).toFixed(2);
        const emodeLiqThreshold = (pool.ltv * 100 + 8).toFixed(2);
        const emodeLiqPenalty = '1.00';

        document.getElementById('poolEmodeMaxLtv').textContent = `↑ ${emodeMaxLtv}%`;
        document.getElementById('poolEmodeLiqThreshold').textContent = `↑ ${emodeLiqThreshold}%`;
        document.getElementById('poolEmodeLiqPenalty').textContent = `↓ ${emodeLiqPenalty}%`;

        // Update market overview
        document.getElementById('poolUtilizationRate').textContent = `${utilizationRate}%`;
        document.getElementById('poolUtilizationAmount').textContent = 
            `$${borrowedUsd.toLocaleString()} of $${totalSuppliedUsd.toLocaleString()}`;
        document.getElementById('poolBorrowed').textContent = `$${borrowedUsd.toLocaleString()}`;
        document.getElementById('poolInstantAvailable').textContent = `$${instantAvailableUsd.toLocaleString()}`;

        // Update donut chart
        const circumference = 2 * Math.PI * 80;
        const dashArray = (parseFloat(utilizationRate) / 100) * circumference;
        document.getElementById('poolUtilizationCircle').setAttribute('stroke-dasharray', `${dashArray} ${circumference}`);

        // Update user wallet info
        const walletBalance = appState.walletBalances[pool.id] || 0;
        const walletBalanceUsd = walletBalance * pool.price;

        document.getElementById('poolWalletBalance').textContent = `${walletBalance.toFixed(8)} ${pool.symbol}`;
        document.getElementById('poolAvailableDeposit').textContent = `${walletBalance.toFixed(8)} ${pool.symbol}`;
        document.getElementById('poolAvailableDepositUsd').textContent = `$${walletBalanceUsd.toFixed(2)}`;

        // Calculate available to borrow
        const totalCollateral = appState.getTotalCollateralValue();
        const totalBorrow = appState.getTotalBorrowValue();
        const availableToBorrow = Math.max(0, totalCollateral / 1.5 - totalBorrow);
        const availableToBorrowInAsset = availableToBorrow / pool.price;

        document.getElementById('poolAvailableBorrow').textContent = `${formatToken(availableToBorrowInAsset, 8)} ${pool.symbol}`;
        document.getElementById('poolAvailableBorrowUsd').textContent = `$${formatCurrency(availableToBorrow)}`;

        // User position
        const deposit = appState.poolDeposits[pool.id];
        const depositAmount = deposit ? deposit.amount : 0;
        const depositUsd = depositAmount * pool.price;

        document.getElementById('poolUserDeposited').textContent = `${formatToken(depositAmount, 8)} ${pool.symbol}`;
        document.getElementById('poolUserDepositedUsd').textContent = `$${formatCurrency(depositUsd)}`;

        // Calculate profit
        let profit = 0;
        let profitUsd = 0;
        if (deposit && deposit.amount > 0 && deposit.initialTime) {
            const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
            const aprPerSecond = pool.depositApr / 100 / (365 * 24 * 60 * 60);
            profit = deposit.amount * aprPerSecond * timeElapsed;
            profitUsd = profit * pool.price;
        }

        document.getElementById('poolUserProfit').textContent = `+${formatToken(profit, 12)} ${pool.symbol}`;
        document.getElementById('poolUserProfit').innerHTML = `
            +${formatToken(profit, 12)} ${pool.symbol}
            <span class="position-usd">+$${formatToken(profitUsd, 8)}</span>
        `;

        // Collateral toggle
        const isCollateral = appState.collateralEnabled[pool.id] || false;
        document.getElementById('poolCollateralToggle').checked = isCollateral;

        // Check if user has borrows for this asset
        const userBorrows = appState.borrows.filter(b => !b.repaid && b.assetId === pool.id);
        if (userBorrows.length > 0) {
            let totalBorrowed = 0;
            userBorrows.forEach(b => {
                totalBorrowed += b.amount + b.accumulatedInterest;
            });
            const totalBorrowedUsd = totalBorrowed * pool.price;

            document.getElementById('poolBorrowSection').style.display = 'flex';
            document.getElementById('poolUserBorrowed').textContent = `${formatToken(totalBorrowed, 8)} ${pool.symbol}`;
            document.getElementById('poolUserBorrowedUsd').textContent = `$${formatCurrency(totalBorrowedUsd)}`;
        } else {
            document.getElementById('poolBorrowSection').style.display = 'none';
        }

        // Draw simple chart (placeholder)
        this.drawPoolChart(pool);
    }

    drawPoolChart(pool) {
        const canvas = document.getElementById('poolSupplyChart');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Simple line chart simulation
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.beginPath();

        const points = 50;
        const baseRate = pool.depositApr;
        
        for (let i = 0; i < points; i++) {
            const x = (i / points) * width;
            // Create random fluctuation
            const variation = (Math.sin(i * 0.3) + Math.cos(i * 0.5)) * 2;
            const rate = baseRate + variation;
            const normalizedRate = Math.max(0, rate) / 10; // Normalize to 0-10%
            const y = height - (normalizedRate * height);

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }

        ctx.stroke();

        // Draw axes
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        
        // Y-axis
        ctx.beginPath();
        ctx.moveTo(30, 10);
        ctx.lineTo(30, height - 20);
        ctx.stroke();

        // X-axis
        ctx.beginPath();
        ctx.moveTo(30, height - 20);
        ctx.lineTo(width - 10, height - 20);
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#6b7280';
        ctx.font = '10px sans-serif';
        ctx.fillText('0%', 5, height - 15);
        ctx.fillText('10%', 5, 15);
        ctx.fillText('2025', 35, height - 5);
        ctx.fillText('Oct', width - 30, height - 5);
    }

    startUIUpdates() {
        // Update stats cards every second
        setInterval(() => {
            this.renderStatsCards();
        }, 1000);

        // Update profit cells with animation every 5 seconds
        setInterval(() => {
            if (this.currentPage === 'dashboard') {
                this.updateProfitCellsWithAnimation();
            }
        }, 5000);

        // Update borrow page
        setInterval(() => {
            if (this.currentPage === 'borrow') {
                this.renderBorrowPage();
            } else if (this.currentPage === 'pool') {
                this.renderPoolPage();
            }
        }, 1000);
    }

    initializeCustomDropdown(dropdownId, onChange) {
        const trigger = document.getElementById(`${dropdownId}Trigger`);
        const dropdown = document.getElementById(`${dropdownId}Dropdown`);
        const container = trigger?.closest('.custom-dropdown');
        
        if (!trigger || !dropdown || !container) return;
        
        // Toggle dropdown
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Close all other dropdowns
            document.querySelectorAll('.custom-dropdown.active').forEach(d => {
                if (d !== container) d.classList.remove('active');
            });
            
            container.classList.toggle('active');
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                container.classList.remove('active');
            }
        });
        
        // Store onChange callback
        container.dataset.onChange = dropdownId;
        this[`${dropdownId}OnChange`] = onChange;
    }
    
    populateCustomDropdown(dropdownId, items, selectedId = null) {
        const dropdown = document.getElementById(`${dropdownId}Dropdown`);
        const trigger = document.getElementById(`${dropdownId}Trigger`);
        const text = document.getElementById(`${dropdownId}Text`);
        const icon = trigger?.querySelector('.dropdown-icon');
        
        if (!dropdown) return;
        
        dropdown.innerHTML = '';
        
        let selectedItem = null;
        
        items.forEach(item => {
            const div = document.createElement('div');
            div.className = 'custom-dropdown-item';
            if (item.id === selectedId) {
                div.classList.add('selected');
                selectedItem = item;
            }
            if (item.disabled) {
                div.classList.add('disabled');
            }
            div.dataset.value = item.id;
            
            // Display text: show only name if symbol === name, otherwise show both
            const displayText = (item.symbol === item.name) ? item.name : `${item.symbol} - ${item.name}`;
            
            div.innerHTML = `
                <div class="custom-dropdown-item-icon">
                    <img src="${item.icon}" alt="${item.symbol}">
                </div>
                <div class="custom-dropdown-item-info">
                    <div class="custom-dropdown-item-name">${displayText}</div>
                    ${item.balance !== undefined ? `<div class="custom-dropdown-item-balance">Balance: ${item.balance.toFixed(4)}</div>` : ''}
                </div>
            `;
            
            div.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Ignore if disabled
                if (item.disabled) {
                    return;
                }
                
                // Update selected
                dropdown.querySelectorAll('.custom-dropdown-item').forEach(i => i.classList.remove('selected'));
                div.classList.add('selected');
                
                // Update trigger display
                if (text && icon) {
                    text.textContent = displayText;
                    icon.innerHTML = `<img src="${item.icon}" alt="${item.symbol}">`;
                    icon.classList.add('has-icon');
                }
                
                // Close dropdown
                trigger.closest('.custom-dropdown').classList.remove('active');
                
                // Call onChange callback
                const onChangeName = `${dropdownId}OnChange`;
                if (this[onChangeName]) {
                    this[onChangeName](item.id);
                }
            });
            
            dropdown.appendChild(div);
        });
        
        // Set initial trigger display if there's a selected item (even if disabled)
        if (selectedItem && text && icon) {
            const displayText = (selectedItem.symbol === selectedItem.name) ? selectedItem.name : `${selectedItem.symbol} - ${selectedItem.name}`;
            text.textContent = displayText;
            icon.innerHTML = `<img src="${selectedItem.icon}" alt="${selectedItem.symbol}">`;
            icon.classList.add('has-icon');
        } else if (items.length === 1 && text && icon) {
            // If only one item (disabled), still show it
            const item = items[0];
            const displayText = (item.symbol === item.name) ? item.name : `${item.symbol} - ${item.name}`;
            text.textContent = displayText;
            icon.innerHTML = `<img src="${item.icon}" alt="${item.symbol}">`;
            icon.classList.add('has-icon');
        }
    }

    getNetworkIcon(network) {
        const networkIcons = {
            'Ethereum Network': 'crypto/networks/eth.svg',
            'Gnosis': 'crypto/networks/gno.svg',
            'Base': 'crypto/networks/base.svg',
            'Arbitrum': 'crypto/networks/arbitrum.svg',
            'BNB Chain': 'crypto/assets/bnb.svg',
            'Avalanche': 'crypto/networks/avalanche.svg',
            'Optimism': 'crypto/networks/optimism.svg',
            'Solana': 'crypto/networks/solana.svg'
        };
        return networkIcons[network] || '';
    }

    updateCurrencyLabel(currencyLabel, asset) {
        if (!currencyLabel || !asset) return;
        
        const networkIcon = this.getNetworkIcon(asset.network);
        currencyLabel.innerHTML = `
            <div class="currency-icon">
                <img src="${asset.icon}" alt="${asset.symbol}">
                ${networkIcon ? `<img src="${networkIcon}" alt="${asset.network}" class="network-badge-small">` : ''}
            </div>
        `;
    }

    syncDualInput(modalType, sourceType) {
        // Get asset price based on modal type
        let assetPrice = 1;
        
        if (modalType === 'deposit') {
            // Use FROM ASSET price, not pool price!
            const fromAssetId = this.selectedFromAssetForDeposit;
            const asset = MOCK_ASSETS.find(a => a.id === fromAssetId);
            if (asset) assetPrice = asset.price;
            // Update currency label
            const currencyLabel = document.getElementById('depositCurrency');
            this.updateCurrencyLabel(currencyLabel, asset);
        } else if (modalType === 'withdraw') {
            if (this.selectedPoolForWithdraw) {
                const asset = MOCK_ASSETS.find(a => a.id === this.selectedPoolForWithdraw);
                if (asset) assetPrice = asset.price;
                // Update currency label
                const currencyLabel = document.getElementById('withdrawCurrency');
                this.updateCurrencyLabel(currencyLabel, asset);
            }
        } else if (modalType === 'borrow') {
            if (this.selectedBorrowAsset) {
                assetPrice = this.selectedBorrowAsset.price;
                // Update currency label
                const currencyLabel = document.getElementById('borrowCurrency');
                this.updateCurrencyLabel(currencyLabel, this.selectedBorrowAsset);
            }
        } else if (modalType === 'repay') {
            const repayWithAssetId = this.selectedRepayWithAsset;
            const asset = MOCK_ASSETS.find(a => a.id === repayWithAssetId);
            if (asset) assetPrice = asset.price;
            // Update currency label
            const currencyLabel = document.getElementById('repayCurrency');
            this.updateCurrencyLabel(currencyLabel, asset);
        }
        
        const tokenInput = document.getElementById(`${modalType}AmountInput`);
        const usdInput = document.getElementById(`${modalType}AmountUsdInput`);
        
        if (!tokenInput || !usdInput) return;
        
        if (sourceType === 'token') {
            const tokenValue = parseNumber(tokenInput.value);
            const usdValue = tokenValue * assetPrice;
            usdInput.value = usdValue > 0 ? usdValue.toFixed(2) : '';
        } else if (sourceType === 'usd') {
            const usdValue = parseNumber(usdInput.value);
            const tokenValue = assetPrice > 0 ? usdValue / assetPrice : 0;
            tokenInput.value = tokenValue > 0 ? tokenValue.toFixed(8) : '';
        }
    }

    animateValue(element, start, end, duration, decimals, suffix, useFormatting = true) {
        const startTime = performance.now();
        const difference = end - start;

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = start + (difference * easeOutQuart);
            
            if (useFormatting) {
                element.textContent = formatToken(current, decimals) + suffix;
            } else {
            element.textContent = current.toFixed(decimals) + suffix;
            }
            
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        
        requestAnimationFrame(step);
    }

    updateProfitCellsWithAnimation() {
        // Update profit cells in Your Deposits table with animation
        const depositsRows = document.querySelectorAll('#yourDepositsTableBody tr');
        depositsRows.forEach((row) => {
            const profitCell = row.querySelector('.profit-cell');
            if (!profitCell) return;
            
            const symbol = profitCell.dataset.symbol;
            if (!symbol) return;
            
            const assetsInGroup = MOCK_ASSETS.filter(a => a.symbol === symbol && a.depositApr > 0);
            let totalProfit = 0;
            let totalProfitUsd = 0;
            
            assetsInGroup.forEach(asset => {
                const deposit = appState.poolDeposits[asset.id];
                const walletBalance = appState.walletBalances[asset.id] || 0;
                
                if (deposit && deposit.initialTime) {
                    const timeElapsed = (Date.now() - deposit.initialTime) / 1000;
                    const aprPerSecond = asset.depositApr / 100 / (365 * 24 * 60 * 60);
                    
                    // Calculate profit from actual deposit
                    if (deposit.amount > 0) {
                    const profit = deposit.amount * aprPerSecond * timeElapsed;
                    totalProfit += profit;
                    totalProfitUsd += profit * asset.price;
                    }
                    
                    // Calculate profit from wallet balance
                    if (walletBalance > 0) {
                        const profit = walletBalance * aprPerSecond * timeElapsed;
                        totalProfit += profit;
                        totalProfitUsd += profit * asset.price;
                    }
                }
            });
            
            if (totalProfit > 0) {
                // Get current displayed value
                const currentValueEl = profitCell.querySelector('.profit-value');
                const currentUsdEl = profitCell.querySelector('.profit-usd-value');
                
                let currentValue = 0;
                let currentUsd = 0;
                
                if (currentValueEl) {
                    const text = currentValueEl.textContent.replace('+', '').replace(symbol, '').trim();
                    currentValue = parseNumber(text);
                }
                if (currentUsdEl) {
                    const text = currentUsdEl.textContent.replace('+$', '').trim();
                    currentUsd = parseNumber(text);
                }
                
                // Only update if structure doesn't exist
                if (!profitCell.querySelector('.profit-value')) {
                    profitCell.innerHTML = `
                        <div class="profit-positive">
                            <span class="profit-value">+${formatToken(currentValue, 8)}</span><span class="profit-symbol"> ${symbol}</span>
                            <div class="balance-usd">+$<span class="profit-usd-value">${formatNumber(currentUsd, 4)}</span></div>
                        </div>
                    `;
                }
                
                const valueEl = profitCell.querySelector('.profit-value');
                const usdEl = profitCell.querySelector('.profit-usd-value');
                
                // Animate from current to new value over 4.8 seconds
                if (valueEl && usdEl) {
                    this.animateValue(valueEl, currentValue, totalProfit, 4800, 8, '', true);
                    this.animateValue(usdEl, currentUsd, totalProfitUsd, 4800, 4, '', true);
                }
            }
        });

        // Update debt cells in Your Loans table with animation
        const loansRows = document.querySelectorAll('#yourBorrowsTableBody tr');
        loansRows.forEach((row) => {
            const debtCell = row.querySelector('.debt-cell');
            if (!debtCell) return;
            
            const symbol = debtCell.dataset.symbol;
            if (!symbol) return;
            
            const borrows = appState.borrows.filter(b => !b.repaid);
            let totalDebt = 0;
            let totalDebtUsd = 0;
            
            borrows.forEach(borrow => {
                const asset = MOCK_ASSETS.find(a => a.id === borrow.assetId && a.symbol === symbol);
                if (asset) {
                    const debt = borrow.amount + borrow.accumulatedInterest;
                    totalDebt += debt;
                    totalDebtUsd += debt * asset.price;
                }
            });
            
            if (totalDebt > 0) {
                const currentValueEl = debtCell.querySelector('.debt-value');
                const currentUsdEl = debtCell.querySelector('.debt-usd-value');
                
                let currentValue = 0;
                let currentUsd = 0;
                
                if (currentValueEl) {
                    currentValue = parseFloat(currentValueEl.textContent) || 0;
                }
                if (currentUsdEl) {
                    const text = currentUsdEl.textContent.replace('$', '').trim();
                    currentUsd = parseFloat(text) || 0;
                }
                
                // Only update if structure doesn't exist
                if (!debtCell.querySelector('.debt-value')) {
                    debtCell.innerHTML = `
                        <div class="profit-negative">
                            <span class="debt-value">${currentValue.toFixed(8)}</span><span class="debt-symbol"> ${symbol}</span>
                            <div class="balance-usd">$<span class="debt-usd-value">${currentUsd.toFixed(4)}</span></div>
                        </div>
                    `;
                }
                
                const valueEl = debtCell.querySelector('.debt-value');
                const usdEl = debtCell.querySelector('.debt-usd-value');
                
                if (valueEl && usdEl) {
                    this.animateValue(valueEl, currentValue, totalDebt, 4800, 8, '');
                    this.animateValue(usdEl, currentUsd, totalDebtUsd, 4800, 4, '');
                }
            }
        });
    }

}


// Initialize UI when DOM is ready
let ui;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        ui = new UI();
window.ui = ui;
    });
} else {
    ui = new UI();
    window.ui = ui;
}

// ============================================
// Network Filter Multi-Select Logic
// ============================================

// Initialize all networks as selected by default
function initializeNetworkFilters() {
    const allNetworks = [];
    document.querySelectorAll('.network-checkbox').forEach(checkbox => {
        checkbox.checked = true;
        allNetworks.push(checkbox.dataset.network);
    });
    ui.selectedNetworks = allNetworks;
    updateNetworkDisplay();
    
    const allNetworksBorrow = [];
    document.querySelectorAll('.network-checkbox-borrow').forEach(checkbox => {
        checkbox.checked = true;
        allNetworksBorrow.push(checkbox.dataset.network);
    });
    ui.selectedNetworksBorrow = allNetworksBorrow;
    updateNetworkDisplayBorrow();
}

// Call initialization
initializeNetworkFilters();

// Setup network filter checkboxes for Deposits
document.querySelectorAll('.network-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const network = checkbox.dataset.network;
        
        if (checkbox.checked) {
            if (!ui.selectedNetworks.includes(network)) {
                ui.selectedNetworks.push(network);
            }
        } else {
            ui.selectedNetworks = ui.selectedNetworks.filter(n => n !== network);
        }
        
        updateNetworkDisplay();
        updateResetButtonVisibility();
        ui.renderAvailableToDepositTable(ui.searchTerm);
    });
});

// Setup network filter checkboxes for Borrow
document.querySelectorAll('.network-checkbox-borrow').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const network = checkbox.dataset.network;
        
        if (checkbox.checked) {
            if (!ui.selectedNetworksBorrow.includes(network)) {
                ui.selectedNetworksBorrow.push(network);
            }
        } else {
            ui.selectedNetworksBorrow = ui.selectedNetworksBorrow.filter(n => n !== network);
        }
        
        updateNetworkDisplayBorrow();
        updateResetButtonVisibilityBorrow();
        ui.renderAvailableToBorrowTable(ui.searchTermBorrow);
    });
});

function updateNetworkDisplay() {
    const display = document.getElementById('selectedNetworksDisplay');
    const text = document.getElementById('networksFilterText');
    const totalNetworks = document.querySelectorAll('.network-checkbox').length;
    
    if (ui.selectedNetworks.length === 0 || ui.selectedNetworks.length === totalNetworks) {
        // No networks selected OR all networks selected - show just text
        display.innerHTML = '';
        text.style.display = 'inline';
    } else {
        // Some networks selected - show icons NEXT TO the text
        text.style.display = 'inline';
        display.innerHTML = ui.selectedNetworks.map(network => {
            const checkbox = document.querySelector(`.network-checkbox[data-network="${network}"]`);
            const icon = checkbox ? checkbox.dataset.icon : '';
            return `<img src="${icon}" alt="${network}">`;
        }).join('');
    }
}

function updateNetworkDisplayBorrow() {
    const display = document.getElementById('selectedNetworksDisplayBorrow');
    const text = document.getElementById('networksFilterTextBorrow');
    const totalNetworksBorrow = document.querySelectorAll('.network-checkbox-borrow').length;
    
    if (ui.selectedNetworksBorrow.length === 0 || ui.selectedNetworksBorrow.length === totalNetworksBorrow) {
        // No networks selected OR all networks selected - show just text
        display.innerHTML = '';
        text.style.display = 'inline';
    } else {
        // Some networks selected - show icons NEXT TO the text
        text.style.display = 'inline';
        display.innerHTML = ui.selectedNetworksBorrow.map(network => {
            const checkbox = document.querySelector(`.network-checkbox-borrow[data-network="${network}"]`);
            const icon = checkbox ? checkbox.dataset.icon : '';
            return `<img src="${icon}" alt="${network}">`;
        }).join('');
    }
}

function updateResetButtonVisibility() {
    const resetBtn = document.getElementById('resetFiltersBtn');
    const searchInput = document.getElementById('searchInput');
    const hasSearch = searchInput && searchInput.value.trim().length > 0;
    const totalNetworks = document.querySelectorAll('.network-checkbox').length;
    const hasNetworkFilter = ui.selectedNetworks.length > 0 && ui.selectedNetworks.length < totalNetworks;
    const hasTypeFilter = ui.selectedAssetType !== 'all';
    
    if (hasSearch || hasNetworkFilter || hasTypeFilter) {
        resetBtn.style.display = 'inline-block';
    } else {
        resetBtn.style.display = 'none';
    }
}

function updateResetButtonVisibilityBorrow() {
    const resetBtn = document.getElementById('resetFiltersBtnBorrow');
    const searchInput = document.getElementById('searchInputBorrow');
    const hasSearch = searchInput && searchInput.value.trim().length > 0;
    const totalNetworksBorrow = document.querySelectorAll('.network-checkbox-borrow').length;
    const hasNetworkFilter = ui.selectedNetworksBorrow.length > 0 && ui.selectedNetworksBorrow.length < totalNetworksBorrow;
    const hasTypeFilter = ui.selectedAssetTypeBorrow !== 'all';
    
    if (hasSearch || hasNetworkFilter || hasTypeFilter) {
        resetBtn.style.display = 'inline-block';
    } else {
        resetBtn.style.display = 'none';
    }
}

// Reset button handlers
document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
    // Clear search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        ui.searchTerm = '';
    }
    
    // Select ALL networks (reset to default)
    const allNetworks = [];
    document.querySelectorAll('.network-checkbox').forEach(cb => {
        cb.checked = true;
        allNetworks.push(cb.dataset.network);
    });
    ui.selectedNetworks = allNetworks;
    updateNetworkDisplay();
    
    // Reset asset type
    ui.selectedAssetType = 'all';
    document.querySelectorAll('.asset-type-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.assetType === 'all');
    });
    
    // Hide reset button
    updateResetButtonVisibility();
    
    // Re-render
    ui.renderAvailableToDepositTable('');
});

document.getElementById('resetFiltersBtnBorrow')?.addEventListener('click', () => {
    // Clear search
    const searchInput = document.getElementById('searchInputBorrow');
    if (searchInput) {
        searchInput.value = '';
        ui.searchTermBorrow = '';
    }
    
    // Select ALL networks (reset to default)
    const allNetworksBorrow = [];
    document.querySelectorAll('.network-checkbox-borrow').forEach(cb => {
        cb.checked = true;
        allNetworksBorrow.push(cb.dataset.network);
    });
    ui.selectedNetworksBorrow = allNetworksBorrow;
    updateNetworkDisplayBorrow();
    
    // Reset asset type
    ui.selectedAssetTypeBorrow = 'all';
    document.querySelectorAll('.asset-type-btn-borrow').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.assetType === 'all');
    });
    
    // Hide reset button
    updateResetButtonVisibilityBorrow();
    
    // Re-render
    ui.renderAvailableToBorrowTable('');
});

// Update search handlers to track search term and show reset button
document.getElementById('searchInput')?.addEventListener('input', (e) => {
    ui.searchTerm = e.target.value;
    updateResetButtonVisibility();
});

document.getElementById('searchInputBorrow')?.addEventListener('input', (e) => {
    ui.searchTermBorrow = e.target.value;
    updateResetButtonVisibilityBorrow();
});

// Update asset type handlers to show reset button
document.querySelectorAll('.asset-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(updateResetButtonVisibility, 0);
    });
});

document.querySelectorAll('.asset-type-btn-borrow').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(updateResetButtonVisibilityBorrow, 0);
    });
});

// "All Networks" button handlers
document.getElementById('networkAllItem')?.addEventListener('click', () => {
    const allCheckboxes = document.querySelectorAll('.network-checkbox');
    const allChecked = Array.from(allCheckboxes).every(cb => cb.checked);
    
    if (allChecked) {
        // If all checked, uncheck all
        allCheckboxes.forEach(cb => cb.checked = false);
        ui.selectedNetworks = [];
    } else {
        // If not all checked, check all
        allCheckboxes.forEach(cb => {
            cb.checked = true;
            const network = cb.dataset.network;
            if (!ui.selectedNetworks.includes(network)) {
                ui.selectedNetworks.push(network);
            }
        });
    }
    
    updateNetworkDisplay();
    updateResetButtonVisibility();
    ui.renderAvailableToDepositTable(ui.searchTerm);
});

document.getElementById('networkAllItemBorrow')?.addEventListener('click', () => {
    const allCheckboxes = document.querySelectorAll('.network-checkbox-borrow');
    const allChecked = Array.from(allCheckboxes).every(cb => cb.checked);
    
    if (allChecked) {
        // If all checked, uncheck all
        allCheckboxes.forEach(cb => cb.checked = false);
        ui.selectedNetworksBorrow = [];
    } else {
        // If not all checked, check all
        allCheckboxes.forEach(cb => {
            cb.checked = true;
            const network = cb.dataset.network;
            if (!ui.selectedNetworksBorrow.includes(network)) {
                ui.selectedNetworksBorrow.push(network);
            }
        });
    }
    
    updateNetworkDisplayBorrow();
    updateResetButtonVisibilityBorrow();
    ui.renderAvailableToBorrowTable(ui.searchTermBorrow);
});

