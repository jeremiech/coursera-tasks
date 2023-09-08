const fs=require('fs')
let data = "we found this lost ->"
// const readStream = fs.createReadStream('./input.txt')
// readStream.on('data', chuc => {
//     data+=chuc
// })
// readStream.setEncoding('utf-8')
// readStream.on('end', () => console.log(data))
// readStream.on('error', e => console.log(e.stack))


//create new data to read
const writeStream = fs.createWriteStream('./output.txt')
writeStream.write(data, 'utf-8')
writeStream.end()
writeStream.on('finish', () => console.log('new Stream wrote successfully'))
writeStream.on('error', function(err){
    console.log(err.stack);
   });