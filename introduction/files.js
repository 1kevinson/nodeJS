//In node js we import Module with require nor Import
const fs = require('fs');

fs.readFile('user-data.txt', (err,data) => {
    if(err) {
        console.log(err.message);
        return;
    }
    console.log(data.toString())
})

fs.writeFile('user-data.txt','username = max', err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log('wrote ok')
    }
})
