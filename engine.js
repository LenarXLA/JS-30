const element = document.querySelector('.title');

const dogs =
    [{  name: 'Snickers',
        age: 2 },
    {   name: 'hugo',
        age: 8 },
];

function changeText() {
    element.style.color = 'cyan';
    element.style.fontSize = '50px';
}

 // log
console.log(element);
console.dir(element);

 // formatter
console.log('%cHave a nice day!', 'color: green; font-size: 20px');

// warn
console.warn('Warning!!!');

// error
console.error('Error detected!');

// info
console.info('Information data');

// assert
console.assert(2 === 5,'Great change');

// grouping
dogs.forEach( ( dog ) => {
    console.groupCollapsed( dog.name );
    console.log(`This is ${dog.name}.`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${Math.min( 2, dog.age) * 10.5 + Math.max(0, dog.age - 2) * 4} years old.`);
    console.groupEnd(dog.name);
} );

// counting
let y = 'game';
console.count(y);
console.count(y);
console.count(y);

// time
console.time('fetching');
setTimeout(() => console.timeEnd('fetching' ), 555);

// table
console.table(dogs);