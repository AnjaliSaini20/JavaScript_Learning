const name = "Amjali"
const num = 33


// console.log(name + num + "Value");
console.log(`My name is ${name} and my number is ${num}`);//String interpolation

const naam = new String('Anjali Saini')
console.log(naam[0]);
console.log(naam.length);
console.log(naam.toUpperCase());
console.log(naam.charAt(3));
console.log(naam.indexOf('j'));
 
const newStrinng = naam.substring(0,4)
console.log(newStrinng);

const anotherStrinng = naam.slice(1,-4)
console.log(anotherStrinng); // is me negative values bhi de skte h 

const Str1 = "       ndjnjfn       "
console.log(Str1.trim()); //remove the spaces

const url = "http://amazon.com/jeans%20loose"
console.log(url.replace('%20','-'));
console.log(url.split('/'));

