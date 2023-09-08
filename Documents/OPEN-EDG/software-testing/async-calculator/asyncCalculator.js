const addAsync = function (x, y, cb) {
    return cb(x+y)
}
const subtruct = function (x, y, cb) {
    return cb(x-y)
}
module.exports
    = {
    addAsync,subtruct
}