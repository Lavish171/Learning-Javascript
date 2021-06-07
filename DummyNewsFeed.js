var database=[
    {
        username:"Lavish",
        password:"Supersecret"
    }
];

var newsFeed=[
    {
        username:"Bobby",
        timeline:"Bobby was so tired of doing programming"
    },
    {
        username:"Robert",
        timeline:"Robert was a killer in that comic"
    },
    {
        username:"Salman",
        timeline:"Salmon boy  was a killer in that accident"
    }
];

var userName=prompt("Enter your Name");
var password=prompt("Enter your password");

if(userName==database[0].username && password==database[0].password)
{
    console.log(newsFeed);
}
else alert("Sry wrong password and username entered");