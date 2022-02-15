//create date object
const d = new Date()
const d = new Date(value)
const d = new Date(dateString)
const d = new Date(dateObject)
const d = new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

//eg
console.log(new Date('01-01-1999'))         //1999-01-01T00:00:00.000Z
console.log(new Date(1996,05,08,45,05,00))  //1996-06-09T21:05:00.000Z

d.getDate()
d.getDay()
d.getFullYear()
d.getHours()
d.getMilliseconds()
d.getMinutes()
d.getMonth()
d.getSeconds()
d.getTime()

d.setDate(dayValue)
d.setFullYear(yearValue, monthValue, dateValue)
d.setHours(hoursValue, minutesValue, secondsValue, msValue)
d.setMilliseconds(millisecondsValue)
d.setMinutes(minutesValue, secondsValue, msValue)



//static method
Date.now()     //returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
Date.parse()   //parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN

