// console.log(days);

function countMyBirthday() {
  let todayDate = new Date();
}

// console.log(date);

function clock() {
  // setTimeout("clock()", 1000);
  let today = new Date(2020, 2, 5);
  // var date = today.getSeconds();
  // const seconds = (document.getElementsByClassName(
  //   "seconds-value"
  // )[0].innerHTML = date);
  // const days = (document.getElementsByClassName(
  //   "days-value"
  // )[0].innerHTML = today.getDay());
  // const hours = (document.getElementsByClassName(
  //   "hours-value"
  // )[0].innerHTML = today.getHours());
  // const minutes = (document.getElementsByClassName(
  //   "minutes-value"
  // )[0].innerHTML = today.getMinutes());

  console.log(today);
}

clock();

// Birth Date
//recent day
// Remaining Time = Birth Date - Recent Day
// eg : Remaininh Time = 7 months 12 days 14 hours 2 minutes and 30 second
// Next is to reduce these
// Logic 60s = 1 min, 60 min = 1 hours, 24 hours = 1 day
//How many days are in a month is not fixed so we need to get data from server
