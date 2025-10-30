"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function OnlineUsers() {
  const [onlineCount, setOnlineCount] = useState<number | null>(null);

  useEffect(() => {
    if (!supabase) return; // se não há client (server-side), não faz nada

    const channel = supabase.channel("online-users", {
      config: {
        presence: {
          key: crypto.randomUUID(),
        },
      },
    });

    channel.on("presence", { event: "sync" }, () => {
      const state = channel.presenceState();
      const total = Object.keys(state).length;
      setOnlineCount(total);
    });

    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel.track({
          online_at: new Date().toISOString(),
        });
      }
    });

    return () => {
      channel.unsubscribe();
    };
  }, []);

  if (onlineCount === null)
    return (
      <div className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
        Carregando...
      </div>
    );

  return (
    <div className="text-sm text-gray-200 bg-blue-900 px-3 py-1 rounded-full">
      🟢 Usuários online: {onlineCount}
    </div>
  );
}
