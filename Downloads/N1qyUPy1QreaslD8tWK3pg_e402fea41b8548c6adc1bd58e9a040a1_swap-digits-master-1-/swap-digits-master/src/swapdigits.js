const swapDigits = (number)=>{
    if(typeof number==='undefined' || typeof number==='string'){
        return;
    }

    let swappedNumber = 0
    let digitNumber=number.toString().split("")
    if(number<0){
        return swappedNumber
    }


    if(digitNumber.length%2===0){
        for(let i=0;i<digitNumber.length-1;i+=2){
            const temp=digitNumber[i]
            digitNumber[i]=digitNumber[i+1]
            digitNumber[i+1]=temp
        }
        swappedNumber=Number.parseInt(digitNumber.join(""))

    
    }
   
    else{
        for(let i=1;i<digitNumber.length-1;i+=2){
            const temp=digitNumber[i]
            digitNumber[i]=digitNumber[i+1]
            digitNumber[i+1]=temp
        }
        swappedNumber=Number.parseInt(digitNumber.join(""))
    }

    //write logic here
    return swappedNumber;
    
}
module.exports = swapDigits
