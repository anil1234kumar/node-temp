// GLOBAL - NO WINDOW

//__dirname - path to cureent directory
// __filename -file name
//requier - funaction to use modules (commonjs)
//module --info about current module(file)
//process --info  about env where the program is being executed
// console.log(__dirname);
// setInterval(() => {
//   console.log("hellow word");
// }, 1000);

// commanjs ,every file is module (by default)
//modules -Encapsulate code (only shear minimum)
const names = require("./name");
const sayHi = require("./utile");
const data = require("./alternative");
require("./mind");
console.log(data);

// console.log(names);

//

sayHi(names.peter);
sayHi(names.anil);
