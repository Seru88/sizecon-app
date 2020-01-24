import React from 'react';
import { useHistory } from 'react-router-dom';

import eventSchedule from '../assets/schedule.json';
import guestList from '../assets/guests.json';
import Card from '../components/Card';
import getFormattedEventTime from '../util/getFormattedEventTime';
import useBookmarks from '../hooks/useBookmarks';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseApp from '../util/firebaseApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const GuestList: React.FC = () => {
  // const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;

  const { guests_2020: guests } = guestList;

  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, loading, error, handleBookmark] = useBookmarks(user);
  const history = useHistory();

  const handleClick = (slug: string) => () => {
    history.push(`/guest/${slug}`);
  };

  return (
    <div>
      <h1 className="text-2xl">Event Schedule</h1>
      <ul>
        {guests.map((guest, i) => {
          const isBookmarked = bookmarks?.includes(guest.slug);
          const icon = isBookmarked ? 'bookmark' : ['far', 'bookmark'];
          return (
            <li key={i}>
              <Card className="my-3">
                <button className="w-full" onClick={handleClick(guest.slug)}>
                  <img className="rounded w-full" src={guest.img} alt={guest.slug} />
                  <div className="py-2 px-4 w-full relative">
                    <div className="text-xl text-left mr-12">{guest.name}</div>
                    <div className="text-left mr-12">{guest.description}</div>
                    <button
                      className="absolute inset-y-0 right-0 mr-4 focus:outline-none"
                      onClick={() => handleBookmark(guest.slug)}
                    >
                      <FontAwesomeIcon
                        className="text-green-400 text-2xl"
                        icon={icon as IconProp}
                      />
                    </button>
                  </div>
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

export default GuestList;
