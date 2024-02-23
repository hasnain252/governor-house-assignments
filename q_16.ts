var guests = [ "Saad","Hasan", "Ali", "Faiz"]

guests.push("Farrukh")

for(var guestlist of guests)
{
    console.log("Hi! " + guestlist + " I have planned a dinner, so u r invited!")
}

console.log("---------------------------------------------------------")

console.log("Sorry but I can't arrange the table right now,.... I can only invite 2 peoples")

console.log("---------------------------------------------------------")


do{
	var removeguest = guests.pop()
    console.log("Sorry, "+removeguest+ " I can't invite you")
}

while(guests[2])


for(var guestlist of guests)
{
    console.log("Hi! " + guestlist + " u r still invited!")
}

