//create a folder
const fs=require('fs');
fs.mkdir('thapa',(err)=>
{
    console.log('folder is created');
});


//2.create a file bio.txt with data
fs.writeFile('thapa/bio.txt',"The data is in with asynchrounu file",(err)=>
{
        console.log('text file is created');
})

//3.add more data into the existing file

fs.appendFile('thapa/bio.txt',') this is the append data into the existing file',(err)=>
{
    console.log('data append succesffully');
})

//4 read the data before getting the buffer data
    fs.readFile('thapa/bio.txt',"utf-8",(err,data)=>
    {
        console.log(data);
    
    })

    //5. rename the file with bio.txt to mybio.txt
    fs.rename('thapa/bio.txt','thapa/mybio.txt',(err)=>
    {
        console.log('change the name of file is succesfully update');
    })