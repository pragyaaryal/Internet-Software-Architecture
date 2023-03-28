const fetch = require('node-fetch');
const readline = require('readline');

async function fetchUserData(userId) {
try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
    }

    const userData = await response.json();
    return {
    name: userData.name,
    email: userData.email
    };
} catch (error) {
    throw new Error(`Failed to fetch user data: ${error.message}`);
}
}
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Enter a user ID: ', async (userId) => {
try {
    const user = await fetchUserData(userId);
    console.log(user);
} catch (error) {
    console.error(error);
} finally {
    rl.close();
}
});