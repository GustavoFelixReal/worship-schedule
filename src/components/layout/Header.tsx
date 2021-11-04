import { useIo } from '@src/hooks/useIo';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { HeaderContainer } from './styles';

interface Schedule {
  id: number;
  churchId: number;
  name: string;
  status: string;
  createdAt: string;
  createdBy: number;
  updatedAt: string;
  updatedBy: number;
  isArchived: boolean;
}

interface SocketResponse {
  schedules?: Schedule[];
}

interface ScheduleEmitter {
  schedule?: Schedule;
}

export default function Header () {
  const socket = useIo();

  const [schedules, setSchedules] = useState<Schedule[]>([]);

  useEffect(() => {
    const params = { churchId: 1 };

    socket.emit('join_church', { params }, ({ schedules }: SocketResponse) => {
      setSchedules([...schedules]);
    });
  }, []);

  useEffect(() => {
    socket.on('exception', data => {
      toast.info(data.errors.join(', '));
    });

    socket.on('schedule', ({ schedule }: ScheduleEmitter) => {
      setSchedules([...schedules, schedule]);
    })
  }, [schedules, socket]);

  return (
    <HeaderContainer>
      <div>
        <h1>Schedules</h1>

        {schedules.map(schedule => (
          <h6 key={schedule.id}>{schedule.name}</h6>
        ))}
      </div>
    </HeaderContainer>
  );
}