var currentUsers = ['john', 'alice', 'bob', 'emma', 'charlie'];
var newUsers = ['Alice', 'johnny', 'Bob', 'dave', 'emily'];
var currentUsersLower = currentUsers.map(function (user) { return user.toLowerCase(); });
for (var i = 0; i < newUsers.length; i++) {
    var newUser = newUsers[i];
    var isUsernameTaken = currentUsersLower.includes(newUser.toLowerCase());
    if (isUsernameTaken) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("The username '".concat(newUser, "' is available."));
    }
}
