//caching the selectors so that we do not use much power of 
//browsers
var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");

function inputLength()
{
    return input.value.length;
}
function createListElement()
{
    console.log("the value of the input is"+input.value);
    //create of a new element of list type
    var li  =document.createElement("li");
    //acc to DOM model,assigned the textnode to the new element
    li.appendChild(document.createTextNode(input.value));
    //the new element is being created,but it is not attached
    //to the unordered list

    ul.appendChild(li);

    //after we have created a li and append the element
    //to the list we want that the input to be emmpty
    input.value="";
}

//it accepts two parameters ie the event and second 
//parameter is the the action that we want to perform
button.addEventListener("click",function()
{
    if(inputLength()>0)
    {
      createListElement();
    }
})

//in above we are adding the element  by pressing the 
//enter button,but we want that if we press enter on the Keyboard
//then also the element should be added to the list

//when the user presses a key,it give the event 
//which will be happening and all the
//description about that event.
input.addEventListener("keypress",function(event)
{
    //information about the event
   // console.log(event);

     //adding here code is imp,13 is for enter event
     
    if(inputLength()>0 && event.keyCode===13)
    {
      createListElement();
    }
})

