import { useEffect, useState } from "react";
import { Connection } from "@solana/web3.js";
import Accounts from "./Accounts";

export default function Right({ keys }) {
  const [index, setIndex] = useState(0);
  const [balance, setBalance] = useState(0);

  async function connect() {
    const connection = new Connection(
      "https://solana-mainnet.g.alchemy.com/v2/cMN9lRpFgJd5Z02kKk_z6TPnYK4qE_OX",
    );
    try {
      setBalance(await connection.getBalance(keys[index].publicKey));
    } catch (error) {
      console.log("error");
    }
  }
  connect();

  return (
    <div className="flex h-[520px] w-[420px] flex-col items-center justify-start gap-8 rounded-2xl bg-[#222222]">
      <Accounts index={index} setIndex={setIndex} />
      <p className="text-white w-[360px] text-center text-3xl">{balance} sol</p>
      <p className="text-white w-[360px] break-words">
        Public Key {keys[index].publicKey.toBase58()}
      </p>
      <p className="text-white w-[360px] break-words">
        Private Key {keys[index].secretKey}
      </p>
    </div>
  );
}
