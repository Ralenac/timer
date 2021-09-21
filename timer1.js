

//process.stdout.write('\x07'); -> for the beep sound






const args = process.argv;
let newArgs = process.argv.slice(2);
for (let i = 0; i < newArgs.length; i++) {
  let newTime = 1000 * newArgs[i] //wee need to get ms (1s=1000ms)
  setTimeout(() => {console.log(`${newArgs[i]} seconds`, process.stdout.write('\x07'))
}, newTime)
};

//node timer1.js 10 3 5 15 9

