/* The RegExp object is used for matching text with a pattern 
   There are two ways to create a RegExp object: a literal notation and a constructor.
   - The literal notation's parameters are enclosed between slashes and do not use quotation marks.
   - The constructor function's parameters are not enclosed between slashes but do use quotation marks.
   */

//The following three expressions create the same regular expression object
let re = /ab+c/i;                 // literal notation
let re = new RegExp('ab+c', 'i')  // constructor with string pattern as first argument
let re = new RegExp(/ab+c/, 'i')  // constructor with regular expression literal as first argument (Starting with ECMAScript 6)


//create the regular expression object
let reg = new RegExp(regular_expression, flags)
/*
 d (indices)
 Generate indices for substring matches
 
 g (global match)
 Find all matches rather than stopping after the first match
 
 i (ignore case)
 If u flag is also enabled, use Unicode case folding
 
 m (multiline)
 Treat beginning and end characters (^ and $) as working over multiple lines. In other words, match the beginning or end of each line (delimited by \n or \r), not only the very beginning or end of the whole input string.

 s ("dotAll")
 Allows . to match newlines.

 u (unicode)
 Treat pattern as a sequence of Unicode code points. (See also Binary strings).

 y (sticky)
 Matches only from the index indicated by the lastIndex property of this regular expression in the target string. Does not attempt to match from any later indexes

 */

reg.dotAll        //indicates whether or not the "s" flag is used with the regular expression
reg.global        //indicates whether or not the "g" flag is used with the regular expression
reg..hasIndices   //indicates whether or not the "d" flag is used with the regular expression
reg.ignoreCase    //indicates whether or not the "i" flag is used with the regular expression
reg.multiline     //indicates whether or not the "m" flag is used with the regular expression
reg.unicode       //indicates whether or not the "u" flag is used with a regular expression
reg.source        //returns a String containing the source text of the regexp object
reg.flags         //returns a string consisting of the flags of the current regular expression object
reg.sticky        //reflects whether or not the search is sticky (searches in strings only from the index indicated by the lastIndex property of this regular expression

reg.test(string)  //returns boolean whether there is a match between the regular expression and the string str
reg.exec(string)  //executes a search for a match in a specified string. Returns a result array, or null
reg.toString()    //returns a string representing the regular expression

//eg

console.log(new RegExp('a+b+c'));
// expected output: /a+b+c/

console.log(new RegExp('a+b+c').toString());
// expected output: "/a+b+c/"

console.log(new RegExp('bar', 'g').toString());
// expected output: "/bar/g"


