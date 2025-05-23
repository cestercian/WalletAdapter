import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import Airdrop from "./Airdrop.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="title">Solana Wallet Adapter Demo</div>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/c1M-5kml56ZKd4bCCknfmVZ_AYevBidY"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="wallet-buttons">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <Airdrop />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App
