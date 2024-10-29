//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString('default',{
    weekday : "long"
}));
console.log(myDate.toDateString());
console.log(typeof myDate); //Objects
console.log(myDate.getMonth());


let myCreteDate = new Date(2023 , 0 , 23 , 5 , 6)
console.log(myCreteDate); 
console.log(myCreteDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreteDate.getTime());
console.log(Math.floor(Date.now()/1000)); // convert milisec to sec

