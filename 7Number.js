// ++++++++++++++++ Numbers ++++++++++++++

const score = 700
console.log(score);

const balance = new Number(100.385532)
console.log(balance);

console.log(balance.toFixed(2));  
console.log(balance.toPrecision(5));  

const hun = 1000000
console.log(hun.toLocaleString());// US 
console.log(hun.toLocaleString('en-IN'));//apply commas according to indan numbers

// +++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-3));
console.log(Math.round(4.9));
console.log(Math.ceil(4.9)); //uppar vali value
console.log(Math.floor(4.9)); // nice vali value

console.log(Math.random()); //0 se 1 k bich m value aati h 
console.log((Math.random()*10) + 1);
console.log(MAth.floor(Math.random()*10) + 1); // round up to lowest value

const min = 10 
const max = 20 

console.log(Math.floor(Math.random()*(max-min+1))+min);
