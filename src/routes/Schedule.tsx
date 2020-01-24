import React from 'react';
import { useHistory } from 'react-router-dom';

import eventSchedule from '../assets/schedule.json';
import Card from '../components/Card';
import getFormattedEventTime from '../util/getFormattedEventTime';
import useBookmarks from '../hooks/useBookmarks';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseApp from '../util/firebaseApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Schedule: React.FC = () => {
  const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;
  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, loading, error, handleBookmark] = useBookmarks(user);
  const history = useHistory();

  const handleClick = (slug: string) => () => {
    history.push(`/event/${slug}`);
  };

  return (
    <div>
      <h1 className="text-2xl">Event Schedule</h1>
      <ul>
        {saturday.events.map((event, i) => {
          const isBookmarked = bookmarks?.includes(event.slug);
          const icon = isBookmarked ? 'bookmark' : ['far', 'bookmark'];
          return (
            <li key={i}>
              <Card className="my-3 relative">
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
                    className="text-green-400 text-2xl"
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
