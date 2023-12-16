// task1
let req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=function(){
    let data=req.response;
    let result=JSON.parse(data);
// a. Get all countries from Asia continent/region using Filter function
const countryInAsian=result.filter((ele)=>ele.region === "Asia")
console.log(countryInAsian);

// b. Get all countries with a population of less than 2 lakhs using Filter function
const pop=result.filter((ele)=>ele.population < 200000);
const a=pop.map((ele)=>ele.name.common);
console.log(a);
console.log(pop);

// c. Print name, capital, and flag using forEach function
const details=result.forEach(ele => console.log(` 
name : ${ele.name.common}
capital : ${ele.capital}
flag : ${ele.flags.png}`));

// d. Print the total population of countries using reduce function

const totalPop=result.reduce((acc,cur)=>acc+cur.population,0)
console.log(totalPop);

// e. Print the country that uses US dollars as currency
 const dollars=result.filter((ele)=>ele.currencies && ele.currencies.USD)
 console.log(dollars);
const b=dollars.map((ele)=>ele.name.common)
console.log(b);
















