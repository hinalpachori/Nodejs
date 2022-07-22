const path=require('path');
//find the directory means folder name
console.log(path.dirname('C:/Users/baps/Desktop/vacation/nodejs/pathmodule/path.js'));

//find the extension of file
console.log(path.extname('C:/Users/baps/Desktop/vacation/nodejs/pathmodule/path.js'));

//find the name of the file
console.log(path.basename('C:/Users/baps/Desktop/vacation/nodejs/pathmodule/path.js'));

//complete directory name 
//root name
//base name
//ext name
//name of file


console.log(path.parse('C:/Users/baps/Desktop/vacation/nodejs/pathmodule/path.js'));

//find only name of the file with parse method
const  mypath = path.parse('C:/Users/baps/Desktop/vacation/nodejs/pathmodule/path.js');
console.log(mypath.name);
console.log(mypath.root);