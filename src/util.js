import dayjs from 'dayjs';

const DATE_FORMAT = 'MMM D';

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function humanizeTravelDate(date) {
  return date ? dayjs(date).format(DATE_FORMAT) : '';
}

function subtractDates(day, finishTime, startTime) {
  const currentDay = dayjs(day).toISOString().slice(0, 10);
  const currentStart = dayjs(startTime.length > 6 ? startTime : (`${currentDay}T${startTime}`));
  const currentFinish = dayjs(finishTime.length > 6 ? finishTime : (`${currentDay}T${finishTime}`));
  let hourDiff = currentFinish.diff(currentStart, 'h');
  let minuteDiff = currentFinish.diff(currentStart, 'm');
  if(hourDiff > 0) {
    if (hourDiff < 10) {
      hourDiff = `0${hourDiff}`;
    }
    minuteDiff = minuteDiff - (60 * hourDiff);
    if (minuteDiff === 0) {
      minuteDiff = `0${minuteDiff}`;
    }
    return `${hourDiff}H ${minuteDiff}M`;
  }
  return `${minuteDiff}M`;
}

export{getRandomElement, humanizeTravelDate, subtractDates};
