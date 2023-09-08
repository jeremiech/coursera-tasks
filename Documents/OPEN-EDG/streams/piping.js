const { error } = require('console')
const zlib=require('zlib')
const fs = require('fs')
let data=""
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./input.txt.gz'))
console.log('file compressed successfully')
