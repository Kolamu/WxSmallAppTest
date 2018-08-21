
function FileHandler(){
    var fs = require('fs')

    this.listAllFiles = dirName => {
        var files = []
        var child = fs.readdirSync(dirName)
        var childFiles = []
        child.forEach(file => {
            var filePath = dirName + '/' + file
            if(fs.statSync(filePath).isDirectory()){
                this.listAllFiles(filePath).forEach(f=>{
                    files.push(f)
                })
            }
            else{

                childFiles.push(filePath)
            }
        })
        childFiles.forEach(f=>{
            files.push(f)
        })

        return files
    }

    this.getChildDirectories = dirName => {
        var files = []
        var child = fs.readdirSync(dirName)
        child.forEach(file => {
            var filePath = dirName + '/' + file
            if(fs.statSync(filePath).isDirectory()){
                files.push(filePath)
            }
        })

        return files
    }

    this.getChildFiles = dirName => {
        var files = []
        var child = fs.readdirSync(dirName)
        child.forEach(file => {
            var filePath = dirName + '/' + file
            if(fs.statSync(filePath).isFile()){
                files.push(filePath)
            }
        })

        return files
    }

    this.read = fileName => {
        return fs.readFileSync('./config/config.json')
    }

    this. write = (fileName, value, append = true) => {
        fs.openSync(fileName)
        if(append){
            value = read(fileName) + "\r\n" + value;
        }
        fs.writeFileSync(fileName, value);
        fs.close()
    }
}

module.exports = FileHandler