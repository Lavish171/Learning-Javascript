var user=
{
    name:"John",
    age:34,
    hobby:"Soccer",
    isMarried:false,
    favouriteBrands:["Adidas","Rebook","Nike"],

    //we can also have funtion inside a object,shout is a method of user
    shout:function(){
     console.log("Oooooo")
    }
};

console.log(user.age);
console.log(user.isMarried);

/** In order to add the properties to the object,just like we add the elements to the list,
    we can use the below method
*/

user.favouriteFood="Spinach";
console.log(user);

//now we can also create a list of objects

var list=[
    {
        username:"Andy",
        age:35
    },
    {
        username:"Rahul",
        age:49
    }
];

console.log(list);//[ { username: 'Andy', age: 35 }, { username: 'Rahul', age: 49 } ]
console.log(list[0].username);//andy

console.log(user.shout());

//to get all the avaiable propeties that can be used with the console
console.log(console);
/*Object [console] {
  log: [Function: log],
  warn: [Function: warn],
  dir: [Function: dir],
  time: [Function: time],
  timeEnd: [Function: timeEnd],
  timeLog: [Function: timeLog],
  trace: [Function: trace],
  assert: [Function: assert],
  clear: [Function: clear],
  count: [Function: count],
  countReset: [Function: countReset],
  group: [Function: group],
  groupEnd: [Function: groupEnd],
  table: [Function: table],
  debug: [Function: debug],
  info: [Function: info],
  dirxml: [Function: dirxml],
  error: [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console: [Function: Console],
  profile: [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp: [Function: timeStamp],
  context: [Function: context]
}*/

var emptyObject={};
var nullObject=null;
console.log(emptyObject);
console.log(nullObject);

//we can't add entries to the null object,it will throw us an error,but we can add the 
//entries to the empty object

emptyObject.name="lavish";
//nullObject.name="first name";-> Cannot set property 'name' of null
console.log(emptyObject);//{ name: 'lavish' }
console.log(nullObject);//null
