const { log } = require("console");
const fs =  require("fs")

const biodata =
{
   name : "hinal", 
   age : 22,
   lastname : "jain"
};
//fetch data
console.log(biodata.name);


//convert object into json
const jsondata = JSON.stringify(biodata);

console.log(jsondata);


//convert jsondata into object
const objectdata =JSON.parse(jsondata);

console.log(objectdata);

console.log(objectdata.name);


//1.convert json

        //const jsondata = JSON.stringify(biodata);

//2. add the json data into another file
    fs.writeFile("json1.json",jsondata,(err) =>
    {
        console.log("succesfully add data");
    })

//3 read file

    fs.readFile("json1.json","utf-8",(err,data) =>
    {
        console.log(data);
    })

    //4.