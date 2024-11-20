import { useState } from "react";
import { Keypair } from "@solana/web3.js";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import InputBoxes from "@/components/InputBoxes";

export default function Left({ setKeys }) {
  const [mnemonic, setMnemonic] = useState(Array(12).fill(""));

  function generateKeys(mnemonic) {
    const mnemonicArray = mnemonic.join(" ");
    const seed = mnemonicToSeedSync(mnemonicArray);
    const newKeys = [];
    for (let i = 0; i < 10; i++) {
      const path = `m/44'/501'/${i}'/0'`;
      const derivedSeed = derivePath(path, seed.toString("hex")).key;
      const keypair = Keypair.fromSeed(derivedSeed);
      newKeys.push(keypair);
    }
    setKeys(newKeys);
  }

  return (
    <div className="flex h-[520px] w-[420px] flex-col items-center justify-start gap-4 rounded-2xl bg-[#222222]">
      <h1 className="mt-9 text-center text-2xl text-white">
        Enter Recovery Phrase
      </h1>
      <h3 className="w-[360px] text-center text-lg font-light text-[#999999]">
        Import an existing existing wallet with your 12 word secret recovery
        phrase.
      </h3>
      <InputBoxes mnemonic={mnemonic} setMnemonic={setMnemonic} />
      <button
        onClick={() => {
          generateKeys(mnemonic);
        }}
        className="mx-8 w-[360px] rounded-lg bg-[#2c2c2c] py-3 text-[#a6a6a6]"
      >
        Generate Keypair
      </button>
      <button
        onClick={() => {
          const generatedMnemonic = generateMnemonic().split(" ");
          generateKeys(generatedMnemonic);
          setMnemonic(generatedMnemonic);
        }}
        className="mx-8 w-[360px] rounded-lg bg-[#2c2c2c] py-3 text-[#a6a6a6]"
      >
        Generate Mnemonic
      </button>
    </div>
  );
}
