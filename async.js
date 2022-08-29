// Async functions return promises
const fetchNumber = async () => {
    return 25;
}

const consoleFetchedNumber = async () => {
    const number = await fetchNumber();
    console.log(number);
}

consoleFetchedNumber();