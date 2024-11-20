import { useState } from "react";
import Accounts from "./Accounts";

export default function Right({ keys }) {
  const [index, setIndex] = useState(0);

  return !keys[index] ? null : (
    <div className="flex h-[520px] w-[420px] flex-col items-center justify-start gap-12 rounded-2xl bg-[#222222]">
      <Accounts index={index} setIndex={setIndex} />
      <p className="w-[360px] break-words text-white">
        Public Key: {keys[index].publicKey.toBase58()}
      </p>
    </div>
  );
}
