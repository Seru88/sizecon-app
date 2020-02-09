import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import guestList from '../assets/guests.json';
import Card from '../components/Card';
import Toggle from '../components/Toggle';
import useBookmarks from '../hooks/useBookmarks';
import firebaseApp from '../util/firebaseApp';

import SwipeableViews from 'react-swipeable-views';
import classed from 'classed-components';

const GuestButton = classed.button<{ current?: boolean }>`
  w-2/5
  border
  rounded-lg
  border-green-600
  h-8
  focus:outline-none
  m-1
  font-bold
  text-sm
  p-1
  ${({ current }) =>
    current ? 'bg-green-600 text-white' : 'bg-white text-green-700'}
`;

const GuestList: React.FC = () => {
  const [showBookmarks, setShowBookmarks] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  let { guests_2020: guests } = guestList;

  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, , , handleBookmark] = useBookmarks(user);

  const handleClick = (link: string) => () => {
    window.open(link);
  };

  const handleCheckbox = () => {
    setShowBookmarks(!showBookmarks);
  };

  const handleIndexChange = (index: number, lastIndex: number) => {
    setIndex(index);
  };

  const handleGuestChange = (index: number) => () => {
    setIndex(index);
  };

  if (showBookmarks) {
    guests = guests.filter(guest => bookmarks?.includes(guest.slug));
  }

  const talets = guests.filter(guest => guest.category === 'Talent');
  const exhibitors = guests.filter(guest => guest.category === 'Exhibitor');
  const artists = guests.filter(guest => guest.category === 'Artist');
  const writers = guests.filter(guest => guest.category === 'Writer');

  return (
    <div className="h-screen">
      <div
        className={`flex items-center justify-between ${
          bookmarks ? 'mx-0' : 'mx-auto'
        } w-11/12 mb-2`}
      >
        <GuestButton current={index === 0} onClick={handleGuestChange(0)}>
          Talents
        </GuestButton>
        <GuestButton current={index === 1} onClick={handleGuestChange(1)}>
          Exhibitors
        </GuestButton>
        <GuestButton current={index === 2} onClick={handleGuestChange(2)}>
          Artists
        </GuestButton>
        <GuestButton current={index === 3} onClick={handleGuestChange(3)}>
          Writers
        </GuestButton>
        {bookmarks && (
          <div className="m-2 w-2/5">
            <Toggle onChange={handleCheckbox} />
          </div>
        )}
      </div>
      <SwipeableViews
        containerStyle={{
          height: '100vh',
          WebkitOverflowScrolling: 'touch',
        }} /* index={index} onChangeIndex={handleIndexChange} */
        index={index}
        onChangeIndex={handleIndexChange}
      >
        <ul className="m-2">
          {talets.map((guest, i) => {
            return renderGuest(guest, i);
          })}
        </ul>
        <ul className="m-2">
          {exhibitors.map((guest, i) => {
            return renderGuest(guest, i);
          })}
        </ul>
        <ul className="m-2">
          {artists.map((guest, i) => {
            return renderGuest(guest, i);
          })}
        </ul>
        <ul className="m-2">
          {writers.map((guest, i) => {
            return renderGuest(guest, i);
          })}
        </ul>
      </SwipeableViews>
    </div>
  );

  function renderGuest(guest: typeof guests[0], index: number) {
    const isBookmarked = bookmarks?.includes(guest.slug);
    return (
      <li key={index} id={guest.slug}>
        <Card className={index === 0 ? 'mt-1 mb-5' : 'my-5'}>
          <button
            className="w-full focus:outline-none"
            onClick={handleClick(guest.website.link)}
          >
            <img className="w-full rounded" src={guest.img} alt={guest.slug} />
          </button>
          <div className="flex items-center justify-between">
            <button
              className="w-10/12 px-2 py-2 focus:outline-none"
              onClick={handleClick(guest.website.link)}
            >
              <div className="text-2xl font-bold text-left">{guest.name}</div>
              <div className="text-left">{guest.description}</div>
            </button>
            <div className="w-2/12 pr-3">
              <button
                className={`w-12 h-12 p-1 border-2 ${
                  isBookmarked
                    ? 'bg-green-500 border-green-600'
                    : 'bg-white border-gray-400'
                } focus:outline-none block mx-auto shadow-md`}
                onClick={() => handleBookmark(guest.slug)}
                style={{ borderRadius: 50 }}
              >
                <FontAwesomeIcon
                  className={`text-2xl ${
                    isBookmarked ? 'text-white' : 'text-green-400'
                  } my-2`}
                  icon="heart"
                />
              </button>
            </div>
          </div>
        </Card>
        {/* </button> */}
      </li>
    );
  }
};

export default GuestList;
