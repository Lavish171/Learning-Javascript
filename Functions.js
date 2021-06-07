//in Javasript functions act as the variables*/

//An argument is a value passed to a function when the function is called. 

//A parameter is a variable used to define a particular value during a function definition

function sayHello()
{
    console.log("Hello");
}
sayHello();


//this is called as the anonymous funtion,which do not have any name
var sayBye=function()
{
    console.log("Bye");
}

sayBye();

function multiply(a,b)
{
    if(a>10 || b>10)
    {
        return "that's too hard";
    }
    else
    {
        return a*b;
    }
}
console.log(multiply(14,5));
/*Hello
Bye
that's too hard*/