//OS MODULE

const os = require('os')

//info about current user
const user = os.userInfo()

//method returns the system uptime in seconds
console.log(`The system has been running for ${os.uptime()} seconds`)
console.log(user)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)