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

const DayButton = classed.button<{ current?: boolean }>`
  w-1/3
  border
  rounded-lg
  border-green-600
  h-8
  focus:outline-none
  mx-2
  font-bold
  ${({ current }) =>
    current ? "bg-green-600 text-white" : "bg-white text-green-700"}
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
      <div className="flex items-center justify-between w-full my-2">
        <div className="flex-grow">
          <DayButton current={day === "sat"} onClick={handleDayToggle("sat")}>
            Saturday
          </DayButton>
          <DayButton current={day === "sun"} onClick={handleDayToggle("sun")}>
            Sunday
          </DayButton>
        </div>
        {bookmarks && (
          <Toggle onChange={handleBookmarkToggle}>Show bookmarks</Toggle>
        )}
      </div>
      <ul>
        {eventsToDisplay.map((event, i) => {
          const isBookmarked = bookmarks?.includes(event.slug);
          return (
            <li key={i}>
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
                <div className="w-2/12">
                  <button
                    className={`w-12 h-12 p-1 border-2 ${
                      isBookmarked
                        ? "bg-green-500 border-green-600"
                        : "bg-white border-gray-400"
                    } focus:outline-none block mx-auto shadow-md rounded-full`}
                    onClick={() => handleBookmark(event.slug)}
                  >
                    <FontAwesomeIcon
                      className={`text-2xl ${
                        isBookmarked ? "text-white" : "text-green-400"
                      } my-2`}
                      icon="heart"
                    />
                  </button>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Schedule;
