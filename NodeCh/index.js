const fs=require('fs')
//1.create a folder
        //fs.mkdirSync("thapa");
//2.create a file that name is bio.txt and data into it

        fs.writeFileSync("thapa/bio.txt","Hii how are you i am hinal i am very glad");
//3. add more data in the bio.txt 
    fs.appendFileSync("thapa/bio.txt"," please subscribe my channel this is append data")

//4. read data of bio.txt 
   const or_data= fs.readFileSync("thapa/bio.txt","utf-8");
  
   console.log(or_data);
//5 rename bio to mybio.txt

    fs.renameSync("thapa/bio.txt","thapa/mybio.txt");

//delete the folder and file
//1.delete file

        //fs.unlink("thapa/mybio.txt");
//delete folder
    
        //fs.rmdirSync("thapa");

