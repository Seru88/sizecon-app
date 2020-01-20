import React from 'react';
import eventSchedule from '../assets/schedule.json';
import Card from '../components/Card';
import getFormattedEventTime from '../util/getFormattedEventTime';
import { useHistory } from 'react-router-dom';
import useAlert from '../hooks/useAlert';

const Schedule: React.FC = () => {
  const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;

  const history = useHistory();

  const handleClick = (slug: string) => () => {
    history.push(`/event/${slug}`);
  };

  const { enqueueAlert } = useAlert();

  React.useEffect(() => {
    enqueueAlert('just a test', );
  }, [enqueueAlert]);

  return (
    <div>
      <h1 className="text-2xl">Event Schedule</h1>
      <ul>
        {saturday.events.map((event, i) => (
          <li key={i}>
            <button className="w-full my-2" onClick={handleClick(event.slug)}>
              <Card>
                <div className="text-xl text-left">{event.name}</div>
                <div className="text-left">
                  {getFormattedEventTime(event.begin, event.end)}
                </div>
              </Card>{' '}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
