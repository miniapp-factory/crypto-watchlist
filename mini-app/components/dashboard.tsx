"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tokens, setTokens] = useState<string[]>(["ETH", "BTC", "SOL"]);
  const [customToken, setCustomToken] = useState("");

  useEffect(() => {
    // TODO: fetch real‑time data for tokens
  }, [tokens]);

  const addCustomToken = () => {
    if (customToken && !tokens.includes(customToken)) {
      setTokens([...tokens, customToken]);
      setCustomToken("");
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-semibold">Crypto Watchlist</h2>
      <div className="flex space-x-2">
        {tokens.map((t) => (
          <span key={t} className="px-3 py-1 bg-muted rounded">
            {t}
          </span>
        ))}
      </div>
      <div className="flex space-x-2 mt-2">
        <input
          type="text"
          placeholder="Token CA"
          value={customToken}
          onChange={(e) => setCustomToken(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <button
          onClick={addCustomToken}
          className="px-4 py-1 bg-primary text-white rounded"
        >
          Add
        </button>
      </div>
      <div className="mt-4">
        <p>Greed & Fear Index (placeholder)</p>
        <p>Buy/Sell indicators (placeholder)</p>
      </div>
    </section>
  );
}
