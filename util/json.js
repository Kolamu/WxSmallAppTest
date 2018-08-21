
function JsonHandler(){
    var FileHandler = require('./file')
    var handler = new FileHandler()

    this.load = jsonFile => {
        return JSON.parse(handler.read(jsonFile))
    }

    this.save = (jsonFile, json) => {
        handler.write(jsonFile, JSON.stringify(json), false)
    }
}

module.exports = JsonHandler