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

async function mapErrorHandling(promiseList){
    return promiseList.map(promise => {
        return promise.catch(e => {console.log("Error, Failed." + e); return {"error": e};}); 
    });
}

async function promiseAll(promiseList){
    data = [];
    for(let i = 0; i < promiseList.length; i++){
        data[i] = await promiseList[i];

        let result = data[i];
        console.log("Done Promise: " + i);
    }
    return data;
}

async function extractData(dataList){

    for(let i = 0; i < dataList.length; i++){

        let data = dataList[i];

        try{
            if("error" in data){
                console.log("Interaction number [" + i + "] failed with error [" 
                    + data["error"] + "]");
                continue;
            }
        }catch(error)
        {
        }

        // if(data.constructor === "Object"){
        //     if("error" in data){
        //         console.log("Interaction number [" + i + "] failed with error [" 
        //             + data["error"] + "]");
        //         continue;
        //     }
        // }
    }
}

async function runTest(){

    const promiseA = new Promise((resolveKA, rejectKA) => { setTimeout(() => resolveKA("answer is to be fast"), 2000)});
    //const promiseA = new Promise( async (resolveKA, rejectKA) => { await wait(resolveKA, rejectKA)}); // DOES NOT WORK!
    //const promiseA = Promise.reject("no hair");

    //const promiseB = Promise.resolve(200);
    //const promiseB = Promise.reject("no money");
    const promiseB = new Promise((resolveKA, rejectKA) => { setTimeout(() => rejectKA("no wallet"), 4000)});

    const promiseC = new Promise((resolveKA, rejectKA) => { setTimeout(() => resolveKA("got a car"), 3000)});

    const promiseD = new Promise((resolveKA, rejectKA) => { setTimeout(() => rejectKA("no gas"), 1000)});

    const promiseList = [promiseA, promiseB, promiseC, promiseD];

    const promiseListMapped = await mapErrorHandling(promiseList);
    const result = await promiseAll(promiseListMapped);

    const notUSed = await extractData(result);

    console.log("Result: ");
    console.log(result);

    console.log("End Test Promises")
}

runTest();