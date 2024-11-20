"use client";

import { useState } from "react";
import Left from "@/components/Left";
import Right from "@/components/Right";

export default function Home() {
  const [keys, setKeys] = useState([]);

  return (
    <div className="flex h-[100vh] w-[100vw] flex-wrap items-center justify-center gap-5">
      <Left setKeys={setKeys} />
      <Right keys={keys} />
    </div>
  );
}
