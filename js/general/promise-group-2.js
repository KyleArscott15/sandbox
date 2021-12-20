console.log("Test Promises");

function showMessage(timeMs){
    console.log("Waited " + timeMs + " ms")
}

async function wait(pass, fail){
    //timeMS = Math.floor(Math.random() * 3000);
    timeMS = 2000;
    await setTimeout(showMessage, timeMS, timeMS);
    pass("answer is to wait");
}

async function runTest(){

    const promiseA = new Promise((resolveKA, rejectKA) => { setTimeout(() => resolveKA("answer is to be fast"), 2000)});
    //const promiseA = new Promise( async (resolveKA, rejectKA) => { await wait(resolveKA, rejectKA)}); // DOES NOT WORK!
    //const promiseA = Promise.reject("no hair");

    //const promiseB = Promise.resolve(200);
    //const promiseB = Promise.reject("no money");
    const promiseB = new Promise((resolveKA, rejectKA) => { setTimeout(() => rejectKA("no wallet"), 4000)});

    const promiseList = [promiseA, promiseB];

    const result = Promise.all(promiseList);

    result.then(
        (value) => { console.log("Success: " + value); console.log(result); },
        (value) => { console.log("Fail: " + value); console.log(result); }
    );

    console.log("Result: ");
    console.log(result);

    console.log("End Test Promises")
}

runTest();