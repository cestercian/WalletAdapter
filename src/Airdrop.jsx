import {useConnection, useWallet} from "@solana/wallet-adapter-react";

export default function Airdrop() {

    const wallet = useWallet()
    const { connection} = useConnection()

    async function sendAirdropToUser() {
       await connection.requestAirdrop(wallet.publicKey, 1000000000)
        alert("airdropped sol")
    }

    return (
        <>
            HI {wallet.publicKey ? wallet.publicKey.toString() : "Wallet not connected"}
            <input type={"text"} placeholder={"Amount"} ></input>
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </>
    )
}