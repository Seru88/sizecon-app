import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import guestList from '../assets/guests.json';
import Card from '../components/Card';
import useBookmarks from '../hooks/useBookmarks';
import firebaseApp from '../util/firebaseApp';

const GuestList: React.FC = () => {
  // const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;

  const { guests_2020: guests } = guestList;

  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, , , handleBookmark] = useBookmarks(user);

  const handleClick = (link: string) => () => {
    window.open(link);
  };

  return (
    <div>
      <h1 className="text-2xl">Special Guests</h1>
      <ul>
        {guests.map((guest, i) => {
          const isBookmarked = bookmarks?.includes(guest.slug);
          const icon = isBookmarked ? 'bookmark' : ['far', 'bookmark'];
          return (
            <li key={i}>
              <Card className="my-5">
                <button
                  className="w-full focus:outline-none"
                  onClick={handleClick(guest.website.link)}
                >
                  <img
                    className="rounded w-full"
                    src={guest.img}
                    alt={guest.slug}
                  />
                </button>
                <div className="w-full relative">
                  <button
                    className="py-2 px-4 w-full focus:outline-none"
                    onClick={handleClick(guest.website.link)}
                  >
                    <div className="text-2xl text-left mr-12">{guest.name}</div>
                    <div className="text-sm text-left mr-12">
                      {guest.description}
                    </div>
                  </button>
                  <button
                    className="absolute bottom-0 inset-y-0 right-0 mr-4 focus:outline-none z-10"
                    onClick={() => handleBookmark(guest.slug)}
                  >
                    <FontAwesomeIcon
                      className="text-green-400 text-3xl"
                      icon={icon as IconProp}
                    />
                  </button>
                </div>
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
