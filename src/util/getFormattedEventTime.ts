export default function getFormattedEventTime(begin: number, end: number | undefined) {
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