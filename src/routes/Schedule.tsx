import React from 'react';
import eventSchedule from '../assets/schedule.json';

const Schedule: React.FC = () => {
  const { saturday, sunday } = eventSchedule;

  return (
    <div>
      <h1>Event Schedule</h1>
      <ul>
        {saturday.map((event, i) => (
          <li key={i}>
            <div className="py-2 px-4 my-4 block border border-gray-400 rounded shadow  text-left">
              <div className="text-xl">{event.name}</div>
              <div /* className="font-bold" */>
                {getFormattedEventTime(event.begin, event.end)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;

function getFormattedEventTime(begin: number, end: number | undefined) {
  if (end === undefined) end = begin + 100;
  const bAP = begin >= 1200 ? 'PM' : 'AM';
  const eAP = end >= 1200 ? 'PM' : 'AM';
  if (begin >= 1300) begin -= 1200;
  else if (begin === 0) begin = 1200;
  if (end >= 1300) end -= 1200;
  else if (end === 0) end = 1200;
  let beginText = begin.toString();
  let endText = end.toString();
  beginText = beginText
    .slice(0, beginText.length - 2)
    .concat(':')
    .concat(beginText.slice(beginText.length - 2) + bAP);
  endText = endText
    .slice(0, endText.length - 2)
    .concat(':')
    .concat(endText.slice(endText.length - 2) + eAP);
  return beginText + ' - ' + endText;
}
