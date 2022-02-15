



let obj = {
  v: 999,
  
  //getter, return data
  get prop() {
    return this.v;
  },
  
  //setter, change data
  set prop(newValue) {
    this.v = newValue;
  }
  
};

//access data
console.log(obj.prop);   //999

//change data
obj.prop = 1000;
console.log(obj.prop);   //1000


