var todos=[
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

//for loop
for(var i=0;i<todos.length;i++)
{
   console.log(todos[i]);
}

//while loop
var counterOne=0;
while(counterOne<10)
{
    console.log(counterOne);
    counterOne++;
}

console.log("do while loop");
counterOne=10;
do{
    console.log("counterOne",counterOne);
    counterOne--;
}while(counterOne>0);

//in ecmascript 5,it added new feature or new type of loop,ie forEach loop
console.log("using for each loop");
//here i is the element
todos.forEach(function(i)
{ 
  console.log(i);
})

//another way to use forEach loop and get the index also

//here todo is the element and i is the index
todos.forEach(function(todo,i)
{
   console.log(todo +"-> "+i);
})






