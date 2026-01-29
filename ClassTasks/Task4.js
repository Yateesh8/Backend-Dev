const os = require("os");
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "system-log.txt");

setInterval(() => {
  fs.appendFile(
    file,
    JSON.stringify({
      time: new Date(),     // Current timestamp
      cpu: os.cpus().length,     // Number of CPU cores
      freeMem: os.freemem(),     // Free memory
      totalMem: os.totalmem(),    // Total memory
      platform: os.platform()     // OS platform
    }) + "\n",
    () => {}
  );
}, 5000);
