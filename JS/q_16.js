var guests = ["Saad", "Hasan", "Ali", "Faiz"];
guests.push("Farrukh");
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guestlist = guests_1[_i];
    console.log("Hi! " + guestlist + " I have planned a dinner, so u r invited!");
}
console.log("---------------------------------------------------------");
console.log("Sorry but I can't arrange the table right now,.... I can only invite 2 peoples");
console.log("---------------------------------------------------------");
do {
    var removeguest = guests.pop();
    console.log("Sorry, " + removeguest + " I can't invite you");
} while (guests[2]);
for (var _a = 0, guests_2 = guests; _a < guests_2.length; _a++) {
    var guestlist = guests_2[_a];
    console.log("Hi! " + guestlist + " u r still invited!");
}
