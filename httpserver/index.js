const http=require("http");
const fs = require("fs");
//to create a webserver the method is http.createServer() 
//which include request and response parameter which is supplied by node js


//the request object is used to get the information about the 
//current http request


//the response object is used to send the response for a current 
//request
const server=http.createServer((req, res) =>
{
    
 if(req.url == "/")
 {
   res.end("this is te response from home site ")
 }
 else if(req.url == "/aboutus")
 {
   res.end("this is response from about us page</h1>")
 }

 else if(req.url == "/userapi")
 {
    fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data) => 
    {
      console.log(data);
      res.end(data);
    })
    
  
 }
 else
 {
        res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1> 404 error. page does not exist: </h1>")
 }
});

server.listen(8004,()=>
{
    
    console.log("listen on the port 8002")
});