//REPL
//1. JS expression is nothing but combination of operand and operatorvar 
//2. Use variable
//3. Multiline code
//4. use (_) to get last result
//5. we can use editor mode


//const name='hinal';
//console.log(name);

//module
const fs=require('fs');

//create a new file or write data in a file
//fs.writeFileSync("read.txt","welcome to my channel");

fs.writeFileSync("read.txt"," hinal pachori parsola , welcome to my channel");

fs.appendFileSync("read.txt", "  i am fine thank you so much");


//read a data in a differnet file

const buf_data=fs.readFileSync("read.txt")

const or_data=buf_data.toString()
console.log(or_data);

//to rename a file
fs.renameSync("read.txt","readwrite.txt");