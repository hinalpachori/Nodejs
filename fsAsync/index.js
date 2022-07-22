const fs=require('fs');
    //create a new file with asycnhronus callback function is neccessary means it is a parameter
    //callbacke = we pass a function as an argument
    // the callback has an agument tell you whether the opeartaion has succesfully completed
    //now it happend then it check any erorr or not  
    fs.writeFile('read.txt',"today is awesome de=ay :)",
        (err) =>
        {
            console.log("file is created");
        });

    //append the data
    fs.appendFile("read.txt","append the data with callback", (err)=>
    {
        console.log("data append succesfully");

    })

    //read the data

    fs.readFile("read.txt","utf-8",(err,data)=>
    {
        console.log(data);
        
    })