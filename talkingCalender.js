const talkingCalendar = function(date) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year = date.slice(0, 4);
    let month = months[date.slice(5, 7) -1];
    let day = date.slice(8,10);
    let suffix;
    let operator = date.slice(8, 10).split('').pop();
    if (day === '11' || day === '12' || day === '13') {
        suffix = "th";
      } else { switch(operator) {
        case "1":
          suffix = "st";
          break;
        case "2":
          suffix = "nd";
          break;
        case "3":
          suffix = "rd";
          break;
        default:
          suffix = "th";
      }
  }
  let reply = month + ' ' + day + suffix + ',' + year;
  return reply;
}
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

// another solution from forum
// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];
// const getDay = (day) => {
//     if (day === 1 || day === 21 || day === 31) {
//       day = day + 'st';
//     } else if (day === 2 || day === 22) {
//       day = day + 'nd';
//     } else if (day === 3 || day === 23) {
//       day = day + 'rd';
//     } else {
//       day = day + 'th';
//     }
//     return day;
// };
// const talkingCalendar = (date) => {
//     const parts = date.split('/');
//     const YYYY = Number(parts[0]);
//     const MM = Number(parts[1]);
//     const DD = Number(parts[2]);
//     let month = months[MM - 1];
//     let day = getDay(DD);
//     return month + ' ' + day + ', ' + YYYY;
// };