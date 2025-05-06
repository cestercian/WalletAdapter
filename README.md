```markdown
# 🚀 Solana Wallet Adapter + Airdrop Demo

This is a minimal React + Vite app demonstrating integration with the Solana Wallet Adapter and an airdrop feature on the Devnet.

## ✨ Features

- 🔌 Connect/disconnect Solana wallets via Wallet Adapter UI
- 🎁 Airdrop SOL to the connected wallet using `connection.requestAirdrop`
- 🧼 Clean UI with React and basic CSS styling
- ⚡️ Vite for blazing-fast development experience
- ✅ ESLint configured with React best practices

## 🧱 Project Structure

```
.
├── src/
│   ├── App.jsx               # Main app entry
│   ├── App.css               # Styles
│   ├── Airdrop.jsx           # Airdrop component
│   ├── main.jsx              # React DOM bootstrap
│   └── index.css             # Global styles (currently empty)
├── index.html                # Root HTML file
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint rules
└── README.md                 # You're here!
```

## 🛠️ Tech Stack

- **React** – UI library
- **Vite** – Fast dev server and build tool
- **Solana Wallet Adapter** – Easy wallet integration
- **Solana Web3.js** – Blockchain interaction
- **ESLint** – Linting and code quality

## 🧪 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/solana-wallet-airdrop-demo.git
cd solana-wallet-airdrop-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

## 📦 Build for production

```bash
npm run build
```

## 🧩 Notes

- Airdrops only work on **Solana Devnet**
- Uses `UnsafeBurnerWalletAdapter` for demonstration – consider adding secure wallets for production use
- You need to connect your wallet before sending an airdrop
