import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classed from 'classed-components';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useHistory } from 'react-router-dom';

import eventSchedule from '../assets/schedule.json';
import Card from '../components/Card';
import Checkbox from '../components/Checkbox';
import useBookmarks from '../hooks/useBookmarks';
import firebaseApp from '../util/firebaseApp';
import getFormattedEventTime from '../util/getFormattedEventTime';

const DayButton = classed.button<{ current?: boolean }>`
  w-1/3
  border
  rounded-lg
  border-green-300
  h-8
  focus:outline-none
  mx-2
  ${({ current }) =>
    current ? "bg-green-300 text-white" : "bg-white text-black"}
`;

const Schedule: React.FC = () => {
  const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;
  const [day, setDay] = React.useState<"sat" | "sun">("sat");
  const [showBookmark, setShowBookmark] = React.useState(false);
  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, , , handleBookmark] = useBookmarks(user);
  const history = useHistory();

  const handleClick = (slug: string) => () => {
    history.push(`/event/${slug}`);
  };

  const handleDayToggle = (day: "sat" | "sun") => () => {
    setDay(day);
  };

  const handleBookmarkToggle = () => {
    setShowBookmark(!showBookmark);
  };

  let eventsToDisplay = day === "sat" ? saturday.events : sunday.events;

  if (showBookmark) {
    eventsToDisplay = eventsToDisplay.filter(event =>
      bookmarks?.includes(event.slug)
    );
  }

  return (
    <div>
      {/* <h1 className="text-2xl">Event Schedule</h1> */}
      <div className="max-w-xs mx-auto my-2">
        <DayButton current={day === "sat"} onClick={handleDayToggle("sat")}>
          Saturday
        </DayButton>
        <DayButton current={day === "sun"} onClick={handleDayToggle("sun")}>
          Sunday
        </DayButton>
      </div>
      {bookmarks && <Checkbox onChange={handleBookmarkToggle}>Show bookmarks</Checkbox>}
      <ul>
        {eventsToDisplay.map((event, i) => {
          const isBookmarked = bookmarks?.includes(event.slug);
          const icon = isBookmarked ? "bookmark" : ["far", "bookmark"];
          return (
            <li key={i}>
              <Card className="relative my-4">
                <button
                  className="w-full px-4 py-2"
                  onClick={handleClick(event.slug)}
                >
                  <div className="mr-12 text-xl text-left">{event.name}</div>
                  <div className="text-left">
                    {getFormattedEventTime(event.begin, event.end)}
                  </div>
                </button>
                <button
                  className="absolute inset-y-0 right-0 z-10 mr-4 focus:outline-none"
                  onClick={() => handleBookmark(event.slug)}
                >
                  <FontAwesomeIcon
                    className="text-4xl text-green-400"
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
