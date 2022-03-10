//-----------------------------------------------------------------
//El callback en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.-------------------------
//-----------------------------------------------------------------

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1,num2,callback){
    return callback(num1, num2);
}

console.log(calc(6,2,sum));

//--------------------------------------------------------------

function date(callback){
    console.log('1 ejecucion');
    console.log(new Date);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow){
    console.log('2 ejecucion');
    console.log(dateNow);
}

date(printDate);


//llamada: npm run callback