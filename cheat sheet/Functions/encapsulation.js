



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


