//Checking if the document is ready or not
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  setInterval(birthdayWish, 1000);
}
function birthdayWish() {
  const currentDate = new Date();
  const todayDate = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
    time: currentDate.getTime(),
  };

  const setEventDate = new Date(2020, 11, 6);
  const eventDate = {
    year: setEventDate.getFullYear(),
    month: setEventDate.getMonth(),
    day: setEventDate.getDate(),
    time: setEventDate.getTime(),
  };

  const checkBirthday = isBirthday(todayDate, eventDate);

  if (checkBirthday === true) {
    console.log("Happy Birthday");
  } else {
    const remainingTime = calculateRemainingTime(todayDate, eventDate);

    if (remainingTime < 0) {
      eventDate.year += 1;
    } else {
      let storeconvertedDate = convertMillisecond(todayDate, remainingTime);
      updateDOM(storeconvertedDate);
    }
  }
}

function calculateRemainingTime({ time: todayTime }, { time: eventTime }) {
  return eventTime - todayTime;
}

function isBirthday(
  { month: todayMonth, day: todayDay },
  { month: eventMonth, day: eventDay }
) {
  return todayMonth === eventMonth && todayDay === eventDay ? true : false;
}

function convertMillisecond({ year, month }, remainingTime) {
  //Total days in a month
  let totalDaysInMonth = new Date(year, month, 0).getDate();

  // Converting millisecond
  let _second = 1000;
  let _minute = _second * 60;
  let _hour = _minute * 60;
  let _day = _hour * 24;
  let _month = _day * totalDaysInMonth;

  let months = Math.floor(remainingTime / _month);
  let days = Math.floor((remainingTime % _month) / _day);
  let hours = Math.floor((remainingTime % _day) / _hour);
  let minutes = Math.floor((remainingTime % _hour) / _minute);
  let seconds = Math.floor((remainingTime % _minute) / _second);

  return [months, days, hours, minutes, seconds];
}

function updateDOM(storeconvertedDate) {
  let finalTimeValue = storeconvertedDate.map((timeValue) => {
    if (timeValue < 10) {
      timeValue = "0" + timeValue;
    }
    return timeValue;
  });

  const [
    finalMonth,
    finalDay,
    finalHour,
    finalMinute,
    finalSecond,
  ] = finalTimeValue;

  //Updating in the innerBox
  let innerBox = document.querySelectorAll(".inner-box");
  innerBox[0].innerHTML = finalMonth;
  innerBox[1].innerHTML = finalDay;
  innerBox[2].innerHTML = finalHour;
  innerBox[3].innerHTML = finalMinute;
  innerBox[4].innerHTML = finalSecond;
}
