import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classed from 'classed-components';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';

import eventSchedule from '../assets/schedule.json';
import Card from '../components/Card';
import Toggle from '../components/Toggle';
import useBookmarks from '../hooks/useBookmarks';
import firebaseApp from '../util/firebaseApp';
import getFormattedEventTime from '../util/getFormattedEventTime';

import SwipeableViews from 'react-swipeable-views';

const DayButton = classed.button<{ current?: boolean }>`
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

const Schedule: React.FC = () => {
  const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;
  const [showBookmark, setShowBookmark] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, , , handleBookmark] = useBookmarks(user);
  const history = useHistory();

  const handleClick = (slug: string) => () => {
    history.push(`/event/${slug}`);
  };

  const handleDayToggle = (index: number) => () => {
    setIndex(index);
  };

  const handleBookmarkToggle = () => {
    console.log('change');
    setShowBookmark(!showBookmark);
  };

  const handleIndexChange = (index: number, indexLatest: number) => {
    setIndex(index);
  };

  let satEvents = saturday.events;
  let sunEvents = sunday.events;

  if (showBookmark) {
    satEvents = satEvents.filter(event => bookmarks?.includes(event.slug));
    sunEvents = sunEvents.filter(event => bookmarks?.includes(event.slug));
  }

  return (
    <div>
      <div className="flex items-center justify-between w-full my-2">
        <div className="flex-grow">
          <DayButton current={index === 0} onClick={handleDayToggle(0)}>
            Saturday
          </DayButton>
          <DayButton current={index === 1} onClick={handleDayToggle(1)}>
            Sunday
          </DayButton>
        </div>
        {bookmarks && <Toggle onChange={handleBookmarkToggle} />}
      </div>
      <SwipeableViews
        index={index}
        containerStyle={{
          height: '100vh',
          WebkitOverflowScrolling: 'touch',
        }}
        onChangeIndex={handleIndexChange}
      >
        <ul className="m-2">
          {satEvents.map((event, i) => {
            return renderEvent(event, i);
          })}
        </ul>
        <ul className="m-2">
          {sunEvents.map((event, i) => {
            return renderEvent(event, i);
          })}
        </ul>
      </SwipeableViews>
    </div>
  );

  function renderEvent(event: typeof saturday.events[0], index: number) {
    const isBookmarked = bookmarks?.includes(event.slug);
    return (
      <li key={index}>
        <Card className="flex items-center justify-between my-4">
          <button
            className="w-10/12 px-4 py-2"
            onClick={handleClick(event.slug)}
          >
            <div className="mr-12 text-xl text-left">{event.name}</div>
            <div className="text-left">
              {getFormattedEventTime(event.begin, event.end)}
            </div>
          </button>
          <div className="w-2/12 pr-3">
            <button
              className={`w-12 h-12 p-1 border-2 ${
                isBookmarked
                  ? 'bg-green-500 border-green-600'
                  : 'bg-white border-gray-400'
              } focus:outline-none block mx-auto shadow-md rounded-full`}
              onClick={() => handleBookmark(event.slug)}
            >
              <FontAwesomeIcon
                className={`text-2xl ${
                  isBookmarked ? 'text-white' : 'text-green-400'
                } my-2`}
                icon="heart"
              />
            </button>
          </div>
        </Card>
      </li>
    );
  }
};

export default Schedule;
