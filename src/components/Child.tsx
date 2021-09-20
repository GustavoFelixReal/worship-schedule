import moment from 'moment';
import React, { useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

interface ResponseProps {
  date: string;
  users?: [{
    createdAt: string;
    ip: string;
    isAdmin: boolean;
    isBlocked: boolean;
    isDeleted: boolean;
    macAddress?: string;
    name?: string;
    updatedAt: string;
    userId: number;
  }]
}

export default function Child() {
  const [response, setResponse] = useState<ResponseProps>({} as ResponseProps);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromApi", data => {
      console.log(data);
      setResponse(data);

      socket.on('error', () => {
        console.log('Disconnected');
      })
    });
  }, []);

  return (
    <p>
      Its <time dateTime={response.date}>{moment(response.date).format('DD/MM/YYYY HH:mm:ss')}</time>
      {response.users?.map(user => (
        <code key={user.userId}>{user.name}</code>
      ))}
    </p>
  );
}