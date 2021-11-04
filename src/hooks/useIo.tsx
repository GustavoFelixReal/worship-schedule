import React, { createContext, ReactNode, useContext } from 'react';
import SocketIOClient, { Socket } from "socket.io-client";
import { SOCKET_URL} from "@src/config/vars";

interface IoProviderProps {
  children: ReactNode;
}

export const IoContext = createContext<Socket>({} as Socket);

export function IoProvider({ children } : IoProviderProps) {

  const socket = SocketIOClient(SOCKET_URL);

  return (
    <IoContext.Provider value={socket}>
      {children}
    </IoContext.Provider>
  );
}

export function useIo() {
  const context = useContext(IoContext);

  return context;
}
