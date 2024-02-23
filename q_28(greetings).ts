
var usernames = ["Eric", "Ed", "David","Cmal","Admin","John"]

for(var names of usernames)
{
    if(names == "Admin")
    {
       console.log("Hello admin, would you like to see a status report?")
    }
    else{
         console.log("Hi, "+names)
    }
    
}