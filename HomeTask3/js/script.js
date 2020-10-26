function generatePassword(length , isNumbers, isSymbols) {

    const addNumbers =  isNumbers;
    const addSymbols =  isSymbols;

    const Characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['!', '?', '@'];

    const getRandom = array => array[Math.floor(Math.random() * array.length)];

    let finalCharacters = '';

    if (addNumbers) {
      finalCharacters = finalCharacters.concat(getRandom(numbers));
    }

    if (addSymbols) {
      finalCharacters = finalCharacters.concat(getRandom(symbols));
    }

    for (let i = 0; i < length - 2; i++) {
      finalCharacters = finalCharacters.concat(getRandom(Characters));
    }

    return  finalCharacters.split('').sort(() => 0.5 - Math.random()).join('');
}

generatePassword(5, true, true, (rusult)=> {
    console.log(result)
})
// 1 завдання
function passwordCallback(callback){
    const result = generatePassword(5, true, true)
    setTimeout(()=> {
        console.groupCollapsed('Завдання 1-2')
        callback(result)

    }, 500)

}

function callback(result) {
    console.log(result)
}


passwordCallback(callback)

// 2 завдання
function passwordPromis(){
    const promis = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(generatePassword(5, true, true))
        }, 500)
    })

    return promis
}


passwordPromis()
.then(callback)
.catch((err) => console.log(err))
.finally(()=>{
    console.groupEnd('Завдання 1-2')
})




// 3 завдання
const before1 = Date.now();
Promise.all([
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
    passwordPromis(callback),
])
.then(res => {
    console.groupCollapsed('Завдання 3(Promis.all)')
    res.forEach(element => console.log(element))
})
.then(() => {
    const after1 = Date.now();
    console.log('Час виконання Promis.all: ', after1 - before1);
    console.groupEnd('Завдання 3(Promis.all)')
  })
.catch(err => {})

async function passwordAwait() {
try {

    const res1 = await passwordPromis(callback)
    const res2 = await passwordPromis(callback)
    const res3 = await passwordPromis(callback)
    const res4 = await passwordPromis(callback)
    const res5 = await passwordPromis(callback)
    const res6 = await passwordPromis(callback)
    const res7 = await passwordPromis(callback)
    const res8 = await passwordPromis(callback)
    const res9 = await passwordPromis(callback)
    const res10 = await passwordPromis(callback)

    console.groupCollapsed('Завдання 3(Async/await)')
    console.log('1: ',res1)
    console.log('2: ',res2)
    console.log('3: ',res3)
    console.log('4: ',res4)
    console.log('5: ',res5)
    console.log('6: ',res6)
    console.log('7: ',res7)
    console.log('8: ',res8)
    console.log('9: ',res9)
    console.log('10: ',res10)


}catch(err) {
    console.log(err)
}

}

const before2 = Date.now();
passwordAwait().then(() => {
  const after2 = Date.now();
  console.log('Час виконання async/await: ',after2 - before2);
  console.groupEnd('Завдання 3(Async/await)')
});


