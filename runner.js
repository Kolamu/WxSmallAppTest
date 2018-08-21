require("./wxapi/wx")
require("./wxapi/config")

console.log("loading...")

console.log("********************************************")
console.log("***** This is a driver for Weixin App  *****")
console.log("********************************************")

var FileHandler = require('./util/file.js')
var handler = new FileHandler()
var child = handler.listDirectory('c:\\test')

child.forEach(element => {
    console.log(element)
});
