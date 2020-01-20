import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';

import eventSchedule from '../assets/schedule.json';
import Button from '../components/Button';
import firebaseApp from '../util/firebaseApp';
import getFormattedEventTime from '../util/getFormattedEventTime';
import useAlert from '../hooks/useAlert';

const Event: React.FC = () => {
  const { slug } = useParams();
  const dayOne = eventSchedule.schedule_2020.day_one.events;
  const dayTwo = eventSchedule.schedule_2020.day_two.events;
  const events = dayOne.concat(dayTwo);
  const event = events.find(event => event.slug === slug);

  const [user] = useAuthState(firebaseApp.auth());
  const { enqueueAlert } = useAlert();

  const handleBookmark = () => {
    if (user) {
    } else {
      enqueueAlert('You must be logged in to bookmark', { variant: 'error' });
    }
  };

  if (event === undefined) return null;

  return (
    <div className="text-left">
      <h1 className="text-3xl">{event.name}</h1>
      <div className="my-1">
        {getFormattedEventTime(event.begin, event.end)}
      </div>
      <div className="my-1">Room ???</div>
      {/* <p className="text-xl my-4">{event.description}</p> */}
      {event.description &&
        event.description.split('\n').map((section, i) => (
          <p key={i} className="text-xl my-4">
            {section}
          </p>
        ))}
      <div className="text-xs my-3">Notes ...</div>
      <div className="mt-10 mb-4">
        <Button fullwidth onClick={handleBookmark}>
          <div className="w-8 inline-block">
            <FontAwesomeIcon icon="plus" />
          </div>
          {` `}Add to bookmark
        </Button>
      </div>
    </div>
  );
};

export default Event;
