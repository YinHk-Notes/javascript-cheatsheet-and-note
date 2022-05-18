/* The String object is used to represent and manipulate a sequence of characters */

//create a String object
const str = new String(string)
str.length.                                     //return length
str[i]                                          //return character in the specific position

const iterator = str[Symbol.iterator]()         //returns a new iterator object that iterates over the code points of a String value, returning each code point as a String value
str.charAt(index)                               //retuens a character for specificed index
str.concat(str1, str2, ... , strN)              //concatenates the string arguments to the calling string and returns a new string

str.endsWith(searchString)                      //determines whether a string ends with the characters of a specified string, returning true or false
str.endsWith(searchString, length)

str.includes(searchString)                      //determine whether one string may be found within another string, returning true or false
str.includes(searchString, position)

str.indexOf(searchString)                       //return the index of character/string, if multiple fullfil, return the index of first one.
str.indexOf(searchString, position)

str.lastIndexOf(searchString)                   //return the index of character/string, if multiple fullfil, return the index of last one.
str.lastIndexOf(searchString, position)

str.match(regexp)                               //retrieves the result of matching a string against a regular expression
str.matchAll(regexp)

str.repeat(count)                               //returns a new string which contains the specified number of copies of the string

str.replace(regexp, newSubstr)
str.replace(regexp, replacerFunction)
str.replace(substr, newSubstr)
str.replace(substr, replacerFunction)

str.replaceAll(regexp, newSubstr)
str.replaceAll(regexp, replacerFunction)
str.replaceAll(substr, newSubstr)
str.replaceAll(substr, replacerFunction)

str.search(regexp)                              //returns index of the first match between the regular expression and the given string, or -1 if no match was found

str.slice(beginIndex)                           //returns new string containing the extracted section of the string
str.slice(beginIndex, endIndex)

str.split(separator)                            //divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array
str.split(separator, limit)

str.startsWith(searchString)                    //determines whether a string begins with the characters of a specified string, returning true or false
str.startsWith(searchString, position)

str.substring(indexStart)                       //returns the part of the string between the start and end indexes, or to the end of the string
str.substring(indexStart, indexEnd)

str.toLowerCase()
str.toUpperCase()
str.toString()

str.trim()                                      //returns a new string representing str stripped of whitespace from both its beginning and end.
str.trimEnd()
str.trimRight()
str.trimStart()
str.trimLeft()

str.valueOf()                                   //returns the primitive value of a String object


