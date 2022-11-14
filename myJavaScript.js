console.log('hello! this is JS');
const serverUri = 'example.com:4000';
let  currentStep = 5;
setTimeout(() => {
  currentStep = 6;
  console.log(currentStep);
}, 500);

setTimeout(()=>currentStep = 'game over', 500);
const appElem = document.getElementById('app');
console.log(appElem);
const h2 = appElem.appendChild(document.createElement('h2'));
console.log(h2);
h2.textContent = currentStep;

const myNumber = 5;
const myString = '100';

console.log('num 5 + string 100: ', myNumber + myString);
console.log( myNumber + myString);
console.log('string 100 + num 5: ', myString + myNumber);
console.log( myString + myNumber);

function sum (num1, num2) {
  return num1 + num2;
}

/**
    Calling this function freeze your browser tab.
    you can call it from the console.
**/

function getTheBrowserStuck() {
  console.log('starting');
  while(true) {
    JSON.stringify({hello: 'world'});
  }
  console.log('finished');
  alert('finished!');

}

const person = {
  firstName: 'Shmuela',
  lastName: 'Jacobs',
  age: 16,
  dateOfBirth: new Date('10-02-2005'),
  address: {
    street: 'רחוב שומשום ',
    number: '1א'
  },
  phoneNumber: '+972-054-1234567',
  greeting: 'hi!',
  sayHello: function(greeting, times) {
    let res;
    for (let i=0; i<times; i++) {
      res += greeting + ' ';
    }
    return res;
  },

  sayHello2: function() {
    let res;
    for (let i=0; i<4; i++) {
      res += this.greeting + ' ';
    }
    console.log(res);
    return res;
  }
};

// wrapping a primitive with an object
// just when we need it
console.log('length:', person.firstName.length);
// no longer wrapped
console.log('type:', typeof person.firstName);
// no length for numbers
console.log('age length:',  person.age.length);

const key = 'lastName';
console.log('my name is', person.firstName);
console.log('my last name is', person[key]);
console.log('my street is', person.address.street);
console.log('my street is', person['address']['street']);
console.log('my street is', person['address'].street);
console.log('my street is', person.address['street']);
console.log(Object.keys(person));

console.log(person[key].length);

function printLength(item, index, x, y) {
  console.log(`length of key item ${index} is ${item.length}`);
  console.log(x, y);
}

console.log('printing using  forEach');
Object.keys(person).forEach(
    printLength

  // (k, i)=>console.log(`length of key item ${i} is ${k.length}`)
);

console.log('printing forEach console.log');
Object.keys(person).forEach(console.log);

console.log('say hello 2');
Object.keys(person).forEach( person.sayHello2.bind(person));
Object.keys(person).forEach((value, index) => {
  person.sayHello2();
  console.log('forEach in say hello 2:', value, index);
});

const keysLengths =  Object.keys(person).map((value) => {
  return value.length;
});


const keysLengths2 =  Object.keys(person).
  map((value) =>  value.length);

console.log('keysLengths:', keysLengths2);
























