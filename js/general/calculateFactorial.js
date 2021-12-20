function calculateFactorial(value){

    let factorial = 1;

    for (let i = value; i > 0; i--) {
        factorial *= i;
    } 
    
    return factorial;
}

// console.log(calculateFactorial(5));
export{
    calculateFactorial
}