import { Server } from "socket.io";

let io: Server | null = null;

export const initSocket = (server: any) => {
  if (io) return io;

  io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("🟢 Client connected:", socket.id);
    socket.on("disconnect", () => console.log("🔴 Client disconnected"));
  });

  return io;
};

export const getIO = () => {
  if (!io) throw new Error("Socket.io not initialized");
  return io;
};
