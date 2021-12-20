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

async function promiseAll(promiseList){
    return promiseList.map(promise => {
        return promise.catch(e => {console.log("Error, Failed." + e); return e;}); 
    });
}

async function runTest(){

    const promiseA = new Promise((resolveKA, rejectKA) => { setTimeout(() => resolveKA("answer is to be fast"), 2000)});
    //const promiseA = new Promise( async (resolveKA, rejectKA) => { await wait(resolveKA, rejectKA)}); // DOES NOT WORK!
    //const promiseA = Promise.reject("no hair");

    //const promiseB = Promise.resolve(200);
    //const promiseB = Promise.reject("no money");
    const promiseB = new Promise((resolveKA, rejectKA) => { setTimeout(() => rejectKA("no wallet"), 4000)});

    const promiseC = new Promise((resolveKA, rejectKA) => { setTimeout(() => rejectKA("no car"), 3000)});

    const promiseList = [promiseA, promiseB, promiseC];

    const promiseListMapped = await promiseAll(promiseList);
    const result = await Promise.all(promiseListMapped);

    console.log("Result: ");
    console.log(result);

    console.log("End Test Promises")
}

runTest();