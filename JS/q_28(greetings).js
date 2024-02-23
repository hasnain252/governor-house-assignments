var usernames = ["Eric", "Ed", "David", "Cmal", "Admin", "John"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var names = usernames_1[_i];
    if (names == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hi, " + names);
    }
}
