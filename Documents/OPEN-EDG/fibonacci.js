function* getFibonaci(range = Infinity) {
    let leastLast=0, last=1
    yield leastLast
    yield last
    for (let i = 1; i <= range; i++){
        let tmp = leastLast + last
        leastLast = last
        last = tmp
        yield last
    }
}

let fibon=getFibonaci(10)
console.log([...fibon])