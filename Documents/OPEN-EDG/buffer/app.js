const buffer = Buffer.alloc(40)
const buffer1 = Buffer.alloc(40)

let a=buffer.write('state we out of rain')
let b=buffer1.write('moon over star')

console.log(buffer.toString('utf8'))
console.log('\n concatenated format\n -------------------------\n')
let nBuffer = Buffer.concat([a, b])
console.log(nBuffer.toString())