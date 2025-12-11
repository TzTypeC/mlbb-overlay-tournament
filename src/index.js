import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";

const clients = new Map(); // { matchId: Set(ws) }

const app = new Elysia()
  .use(staticPlugin({
    prefix: "/",        // serve file dari root domain
    assets: "public",   // folder tempat file html
  }))
  .ws("/ws", {
    open(ws) {
      console.log("✓ WebSocket client connected");
    },
    message(ws, msg) {
      try {
        const data = typeof msg === "string" ? JSON.parse(msg) : msg;
        console.log("📩 Received message:", data);

        if (data.type === "subscribe") {
          const { matchId } = data;
          console.log("👤 Client subscribing to matchId:", matchId);

          if (!clients.has(matchId)) clients.set(matchId, new Set());
          clients.get(matchId).add(ws);
          ws.matchId = matchId;

          ws.send(JSON.stringify({ status: "subscribed", matchId }));
          console.log("✓ Subscription confirmed for:", matchId);
        }

        if (data.type === "update") {
          const { matchId, payload } = data;
          console.log("🔄 Update received for matchId:", matchId, "payload:", payload);

          const subs = clients.get(matchId);
          if (!subs) {
            console.warn("⚠️ No subscribers for matchId:", matchId);
            return;
          }

          console.log("📤 Broadcasting to", subs.size, "clients");
          subs.forEach((client) => {
            client.send(JSON.stringify({ type: "broadcast", payload }));
          });
        }
      } catch (error) {
        console.error("❌ Message handler error:", error);
      }
    },

    close(ws) {
      console.log("❌ WebSocket client disconnected");
      if (ws.matchId && clients.has(ws.matchId)) {
        clients.get(ws.matchId).delete(ws);
      }
    }
  })
  .get('/Hello', 'Hello World')
  .get('/stream', function* () {
		yield 'Hello'
		yield 'World'
	})
  .listen(3000);

console.log("🔥 Ready at http://localhost:3000");
