// const functionOne = () => {
//     console.log('Function One');
//     functionTwo();
//     console.log('Function One, Part 2')
// }

// const functionTwo = () => {
//     setTimeout(
//         () => {
//             console.log('Function Two')
//         }
//     )
// }

// functionOne();

// Data Fetching

// API
const fetchUser = (username, callback) => {
    setTimeout(
        () => {
            console.log('Now we have the user.')
            callback({username: username}); 
        }
    , 2000)
}

const user = fetchUser('Michael', (user) => {
    console.log(`Your name is: ${user.username}`);
});
