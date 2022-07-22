
const fs =require ('fs');

const http =require("http");

const server =http.createServer((req,res) =>
{
      
   /* fs.readFile('input.txt',"utf-8",(err,data) =>
    {
        if(err) return console.error(err);
        console.log(data);
        res.end(data);

    });
*/
//2 way readable stream and write

/*const rstream = fs.createReadStream("input.txt");
rstream.on('data',(chunkdata)=>
{
    res.write(chunkdata);
    
});
rstream.on('end',()=>
{
    res.end();
});
rstream.on('err',(err)=>
{
    console.log(err);
    res.end('file not found');
});
})





*/
//3rd way stream.pipe by and is used to read also and write alsoe
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);
})
server.listen(8009,()=>
{
    console.log("server listen on port 8009");
});
