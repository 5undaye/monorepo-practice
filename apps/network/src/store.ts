import { create } from "zustand";
import { type MyNetworkType, type ConnectionType } from "./types";

interface MyNetworkStore {
  myNetwork: MyNetworkType | null;
  setMyNetwork: (myNetwork: MyNetworkType | null) => void;
}

interface ConnectionsStore {
  connections: ConnectionType[];
  setConnections: (connections: ConnectionType[]) => void;
}

export const useMyNetworkStore = create<MyNetworkStore>((set) => ({
  myNetwork: null,
  setMyNetwork: (myNetwork) => set({ myNetwork }),
}));

export const useConnectionsStore = create<ConnectionsStore>((set) => ({
  connections: [],
  setConnections: (connections) => set({ connections }),
}));
