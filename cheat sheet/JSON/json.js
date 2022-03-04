//Parses a JSON string
const json = '{"id": 1001, "user_name": "Yamada", "age": 18}';
const obj = JSON.parse(json);                                   //{ id: 1001, 'user_name': 'Yamada', age: 18 }

//Converts a JavaScript object or value to a JSON string
const obj2 = {id: 1002, user name: "Kimura", age: 23}
const toJson = JSON.stringify(obj2);                            //'{"id":1002,"user_name":"Kimura","age":23}'


