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
d.setMonth(monthValue, dayValue)
d.setSeconds(secondsValue, msValue)
d.setTime(timeValue)                          //timeValue: an integer representing the number of milliseconds since 1 January 1970, 00:00:00 UTC

d.valueOf()                                   //returns the primitive value of a Date object

d.toLocaleTimeString(locales, options)
d.toLocaleString(locales, options)
d.toUTCString()
d.toJSON()                                    //returns a string representation of the Date object
d.toString()
//eg
var d = new Date(2000, 5, 28, 14, 39, 7);
console.log(d.toString());                    //Mon Jun 28 2000 14:39:07 GMT-0600 (PDT)

d.toDateString()                              //returns the date portion of a Date object in English     
//eg
console.log(d.toDateString());                //Mon Jun 28 2000

//static method
Date.now()                                                      //returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
Date.parse(dateString)                                          //parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC or NaN
Date.UTC(year, month, day, hour, minute, second, millisecond)   //accepts parameters similar to the Date constructor, but treats them as UTC


