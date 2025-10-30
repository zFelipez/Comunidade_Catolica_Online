"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function OnlineUsers() {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    // Cria o canal de presença (todos entram no mesmo "grupo")
    const channel = supabase.channel("online-users", {
      config: {
        presence: {
          key: crypto.randomUUID(), // identificador único por aba
        },
      },
    });

    // Quando o Supabase sincroniza o estado de presença
    channel.on("presence", { event: "sync" }, () => {
      const state = channel.presenceState();
      const total = Object.keys(state).length;
      setOnlineCount(total);
    });

    // Quando a conexão é estabelecida
    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel.track({
          online_at: new Date().toISOString(),
        });
      }
    });

    // Quando o componente desmonta (fecha aba, muda de página, etc.)
    return () => {
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="text-sm text-gray-200 bg-blue-900 px-3 py-1 rounded-full">
      🟢 Usuários online: {onlineCount}
    </div>
  );
}
