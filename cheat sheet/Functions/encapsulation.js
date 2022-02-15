/*  A getter is defined by the keyword get followed by a function named after the property, taking no arguments 
    and returning the value of the property. It allows access to the object's property. A setter is defined by the 
    keyword set followed by a function named after the property taking the new value of the property as a parameter. 
    It is used to execute a function whenever a specified object's property is attempted to be changed.*/

//syntax
{ get property_name() {} }
{ get [computed_property_name]() {} }

{ set property_name(val) {} }
{ set [computed_property_name](val) {} }


//example

let obj = {
  val: 999,
  
  //getter, return data
  get prop() {
    return this.val;
  },
  
  //setter, change data
  set prop(newValue) {
    this.val = newValue;
  }
  
};

//access data
console.log(obj.prop);   //999

//change data
obj.prop = 1000;
console.log(obj.prop);   //1000

//create a read-only property by defining a getter without setter:
let obj2 = {
  get prop() {
    return -1;
  },
};

console.log(obj2.prop);   //hello

obj2.prop = 'world';      //value is read-only, no change
console.log(obj.prop);    //hello


