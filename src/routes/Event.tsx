import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';

import eventSchedule from '../assets/schedule.json';
import BookmarkButton from '../containers/BookmarkButton';
import firebaseApp from '../util/firebaseApp';
import getFormattedEventTime from '../util/getFormattedEventTime';

const Event: React.FC = () => {
  const { slug } = useParams();
  const dayOne = eventSchedule.schedule_2020.day_one.events;
  const dayTwo = eventSchedule.schedule_2020.day_two.events;
  const events = dayOne.concat(dayTwo);
  const event = events.find(event => event.slug === slug);

  const [user] = useAuthState(firebaseApp.auth());

  if (event === undefined) return null;

  return (
    <div className="text-left">
      {/* <h1 className="text-3xl">{event.name}</h1> */}
      <div className="my-1">
        {getFormattedEventTime(event.begin, event.end)}
      </div>
      <div className="my-1">Room ???</div>
      {event.description &&
        event.description.split('\n').map((section, i) => (
          <p key={i} className="text-xl my-4">
            {section}
          </p>
        ))}
      <div className="text-xs my-3">Notes ...</div>
      {user && slug && <BookmarkButton user={user} slug={slug} />}
    </div>
  );
};

export default Event;
