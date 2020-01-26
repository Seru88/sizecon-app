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

const Schedule: React.FC = () => {
  const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;
  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, , , handleBookmark] = useBookmarks(user);
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
                    className="text-green-400 text-3xl"
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
