import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import guestList from "../assets/guests.json";
import Card from "../components/Card";
import Toggle from "../components/Toggle";
import useBookmarks from "../hooks/useBookmarks";
import firebaseApp from "../util/firebaseApp";

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
      {bookmarks && (
        <div className="flex justify-end w-full my-2">
          <Toggle onChange={handleCheckbox}>Show bookmarks</Toggle>
        </div>
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
                <div className="flex items-center justify-between">
                  <button
                    className="w-10/12 px-4 py-2 focus:outline-none"
                    onClick={handleClick(guest.website.link)}
                  >
                    <div className="mr-12 text-2xl text-left">{guest.name}</div>
                    <div className="mr-12 text-sm text-left">
                      {guest.description}
                    </div>
                  </button>
                  <div className="w-2/12">
                    <button
                      className={`w-12 h-12 p-1 border-2 ${
                        isBookmarked
                          ? "bg-green-500 border-green-600"
                          : "bg-white border-gray-400"
                      } focus:outline-none block mx-auto shadow-md`}
                      onClick={() => handleBookmark(guest.slug)}
                      style={{ borderRadius: 50 }}
                    >
                      <FontAwesomeIcon
                        className={`text-2xl ${
                          isBookmarked ? "text-white" : "text-green-400"
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
        })}
      </ul>
    </div>
  );
};

export default GuestList;
