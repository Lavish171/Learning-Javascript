var database=[
    {
        username:"Lavish",
        password:"Supersecret"
    },
    {
        username:"Raj",
        password:"password"
    },
    {
        username:"Suyash",
        password:"12345"
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



function isUserValid(username,password)
{
    for(var i=0;i<database.length;i++)
    {
        if(userName==database[i].username && password==database[i].password)
        {
            return true;
        }
    }
    return false;
}

function signIn(userName,password)
{
    if(isUserValid(userName,password))
    {
        console.log(newsFeed);
    }
    else{
        console.log("Sry password and username do not matched");
    }
}

var userName=prompt("Enter your Name");
var password=prompt("Enter your password");
signIn(userName,password);
