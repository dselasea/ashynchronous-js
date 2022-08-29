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

const fetchUserPhotos = (username, callback) => {
    setTimeout(
        () => {
            console.log(`[Now we have the photos. for ${username}]`)
            callback(['Photo 1', 'Photo 2']); 
        }
    , 2000)
}

const fetchPhotoDetails = (photo, callback) => {
    setTimeout(
        () => {
            console.log(`[Now we have the photos details for the ${photo}]`)
            callback('Details'); 
        }
    , 2000)
}

const user = fetchUser('Michael', (user) => {
    console.log(`Your name is: ${user.username}`);
    fetchUserPhotos(user.username, (userPhotos) => {
        console.log(`Your photos are: ${userPhotos}`);
        fetchPhotoDetails(userPhotos[0], (details) => {
            console.log(`Your photo details are: ${details}`)
        })
    })
});

