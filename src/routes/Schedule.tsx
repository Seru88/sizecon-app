import React from 'react';

interface ConEvent {
  name: string;
  startTime: string;
  endTime?: string;
  description: string | string[];
}

interface ConDaySchedule {
  day: string;
  timeframe: string;
  events: ConEvent[]
}

const Schedule: React.FC = () => {
  return (
    <div>
      Schedule
    </div>
  )
}

export default Schedule;