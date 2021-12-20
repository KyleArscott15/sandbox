function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTest(){

    console.log("Test Delays")

    await sleep(2000);

    console.log("Result: ");

    console.log("End Test Delays")
}

runTest();



