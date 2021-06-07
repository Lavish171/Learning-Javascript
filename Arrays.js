//we can put different types of values/items in array in js
var list=["one","two","three","Four"];
console.log(list[2]);

var list1=["one",2,"three"];
console.log(list1[1]);

//array within array
var list3=[["tiger","cat","dog","Elephant","fish"]];
console.log(list3[0][2]);

console.log(list.pop());

/*Removes the last element from an array and returns it. 
If the array is empty, undefined is returned and the array is not modified.*/
console.log(list.length);
console.log(list.push("elephant"));
console.log(list);

var hege = ["Cecilie", "Lone"];
//concat basically creates a new list,so here list on left hand side is basically the new list
//whereas,push and pop do not creates the new list,they update the original list itself.
list=list.concat(hege);
console.log(list);

console.log(list.sort());


/*OUTPUT
three
2
dog
Four
3
4
[ 'one', 'two', 'three', 'elephant' ]
[ 'one', 'two', 'three', 'elephant', 'Cecilie', 'Lone' ]
[ 'Cecilie', 'Lone', 'elephant', 'one', 'three', 'two' ]
PS D:\Learning Javascript> */