const fs = require('fs')
const readline = require('readline')
const file = readline.createInterface({
    input:fs.createReadStream('input.txt')
})
const outputFile = fs.createWriteStream('output.txt')
let finalData=[]
file.on('line', line => {
    let lineArr = line.split(',')
    for (let i of lineArr) {
        finalData.push(i.toUpperCase())
        
    }
    outputFile.write(finalData.toString() + "\n")
    finalData=[]
})