const currentUsers: string[] = ['john', 'alice', 'bob', 'emma', 'charlie'];
const newUsers: string[] = ['Alice', 'johnny', 'Bob', 'dave', 'emily'];

const currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

for (let i = 0; i < newUsers.length; i++) {
    const newUser = newUsers[i];
    const isUsernameTaken = currentUsersLower.includes(newUser.toLowerCase());

    if (isUsernameTaken) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    } else {
        console.log(`The username '${newUser}' is available.`);
    }
}
