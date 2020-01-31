import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import guestList from "../assets/guests.json";
import Card from "../components/Card";
import useBookmarks from "../hooks/useBookmarks";
import firebaseApp from "../util/firebaseApp";
import Checkbox from "../components/Checkbox";

const GuestList: React.FC = () => {
  // const { day_one: saturday, day_two: sunday } = eventSchedule.schedule_2020;
  const [showBookmarks, setShowBookmarks] = React.useState(false);
  let { guests_2020: guests } = guestList;

  const [user] = useAuthState(firebaseApp.auth());
  const [bookmarks, , , handleBookmark] = useBookmarks(user);

  const handleClick = (link: string) => () => {
    window.open(link);
  };

  const handleCheckbox = () => {
    setShowBookmarks(!showBookmarks);
  };

  if (showBookmarks) {
    guests = guests.filter(guest => bookmarks?.includes(guest.slug));
  }

  return (
    <div>
      {/* <h1 className="text-2xl">Special Guests</h1> */}
      {bookmarks && (
        <Checkbox onChange={handleCheckbox}>Show bookmarks</Checkbox>
      )}
      <ul>
        {guests.map((guest, i) => {
          const isBookmarked = bookmarks?.includes(guest.slug);
          const icon = isBookmarked ? "bookmark" : ["far", "bookmark"];
          return (
            <li key={i}>
              <Card className="my-5">
                <button
                  className="w-full focus:outline-none"
                  onClick={handleClick(guest.website.link)}
                >
                  <img
                    className="w-full rounded"
                    src={guest.img}
                    alt={guest.slug}
                  />
                </button>
                <div className="relative w-full">
                  <button
                    className="w-full px-4 py-2 focus:outline-none"
                    onClick={handleClick(guest.website.link)}
                  >
                    <div className="mr-12 text-2xl text-left">{guest.name}</div>
                    <div className="mr-12 text-sm text-left">
                      {guest.description}
                    </div>
                  </button>
                  <button
                    className="absolute inset-y-0 bottom-0 right-0 z-10 mr-4 focus:outline-none"
                    onClick={() => handleBookmark(guest.slug)}
                  >
                    <FontAwesomeIcon
                      className="text-4xl text-green-400"
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
