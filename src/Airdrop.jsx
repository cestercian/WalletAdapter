import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export default function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(false);

  async function sendAirdropToUser() {
    if (!wallet.publicKey) {
      alert("Connect your wallet first.");
      return;
    }
    setLoading(true);
    try {
      await connection.requestAirdrop(wallet.publicKey, (amount || 1) * 1_000_000_000);
      alert("Airdropped " + amount + " SOL");
    } catch (e) {
      alert("Airdrop failed: " + e.message);
    }
    setLoading(false);
  }

  return (
    <div className="airdrop-section">
      <div className="wallet-public-key">
        {wallet.publicKey ? (
          <>
            Connected: <span style={{ fontWeight: 500 }}>{wallet.publicKey.toString()}</span>
          </>
        ) : (
          "Wallet not connected"
        )}
      </div>
      <input
        type="number"
        min={1}
        placeholder="Amount (SOL)"
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        disabled={loading}
      />
      <button onClick={sendAirdropToUser} disabled={loading}>
        {loading ? "Sending..." : "Send Airdrop"}
      </button>
    </div>
  );
}