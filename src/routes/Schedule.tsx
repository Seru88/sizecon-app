import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';

import eventSchedule from '../assets/schedule.json';
import Card from '../components/Card';
import useBookmarks from '../hooks/useBookmarks';
import firebaseApp from '../util/firebaseApp';
import getFormattedEventTime from '../util/getFormattedEventTime';
import classed from 'classed-components';

const DayButton = classed.button<{current?: boolean}>`
  w-1/3
  border
  rounded-lg
  border-green-300
  h-8
  focus:outline-none
  mx-2
  ${({current}) => current ? 'bg-green-300 text-white' : 'bg-white text-black'}
`;

const Schedule: React.FC = () => {
  const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;
  const [showing, setShowing] = React.useState<'sat' | 'sun'>('sat');
  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, , , handleBookmark] = useBookmarks(user);
  const history = useHistory();

  const handleClick = (slug: string) => () => {
    history.push(`/event/${slug}`);
  };

  const handleDayToggle = (day: 'sat'|'sun') => () => {
    setShowing(day);
  }

  const eventsToDisplay = showing === 'sat' ? saturday.events : sunday.events;

  return (
    <div>
      {/* <h1 className="text-2xl">Event Schedule</h1> */}
      <div className="max-w-xs mx-auto my-2">
        <DayButton current={showing === 'sat'} onClick={handleDayToggle('sat')}>Saturday</DayButton>
        <DayButton current={showing === 'sun'} onClick={handleDayToggle('sun')}>Sunday</DayButton>
      </div>
      <ul>
        {eventsToDisplay.map((event, i) => {
          const isBookmarked = bookmarks?.includes(event.slug);
          const icon = isBookmarked ? 'bookmark' : ['far', 'bookmark'];
          return (
            <li key={i}>
              <Card className="my-4 relative">
                <button
                  className="py-2 px-4 w-full"
                  onClick={handleClick(event.slug)}
                >
                  <div className="text-xl text-left mr-12">{event.name}</div>
                  <div className="text-left">
                    {getFormattedEventTime(event.begin, event.end)}
                  </div>
                </button>
                <button
                  className="absolute inset-y-0 right-0 mr-4 focus:outline-none z-10"
                  onClick={() => handleBookmark(event.slug)}
                >
                  <FontAwesomeIcon
                    className="text-green-400 text-4xl"
                    icon={icon as IconProp}
                  />
                </button>
              </Card>
              {/* </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Schedule;
