const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kate', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const oldManInThis = (arr) => {
    return arr.some(people => people.year < 1980);
}

const oldMansInThis = (arr) => {
    return arr.every(people => people.year < 2016);
}

const oldManFinding = (arr) => {
    return arr.find(people => people.year === 1970);
}

const indexFinding = (arr) => {
    return arr.findIndex(people => people.year === 2015);
}

console.log(oldManInThis(people));
console.log(oldMansInThis(people));
console.log(oldManFinding(people));
console.log(indexFinding(people));