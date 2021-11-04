import { useIo } from '@src/hooks/useIo';
import React, { useCallback, useState } from 'react';
import Button from './common/buttons/Button';

export default function Child() {
  const socket = useIo();

  const [name, setName] = useState('');
  const [churchId, setChurchId] = useState(0);
  const [userId, setUserId] = useState(0);

  const handleSubmit = useCallback(() => {
    const params = { name, churchId, userId };
    socket.emit('create_schedule', { params });
  }, [name, churchId, userId])

  return (
    <p>
      <label>Nome da Agenda:</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <label>Igreja:</label>
      <input type="number" onChange={(e) => setChurchId(Number(e.target.value))} />

      <label>Usuário:</label>
      <input type="number" onChange={(e) => setUserId(Number(e.target.value))} />

      <Button onClick={handleSubmit}>
        Criar Agenda
      </Button>
    </p>
  );
}