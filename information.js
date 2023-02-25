const os = require("os");

// infor about crruent user
const user = os.userInfo();
console.log(user);
console.log(`the system uptime is ${os.uptime()} second`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

// method return the system uptime in second
