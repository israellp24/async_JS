const dosomethingAsync = ()=>{
    return new Promise((resolve,reject) => {
        (true)
        ? setTimeout(() => resolve('Do Something Async'), 3000)
        : reject(new Error('Test Error'))
    })
}

const dosomething = async () => {
    const something = await dosomethingAsync()
    console.log(something);
}

console.log('Before');
dosomething();
console.log('After');

const anotherFunction = async() => {
    try {
        const something2 = await dosomethingAsync();
        console.log(`${something2} 2`);
    }catch{
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');