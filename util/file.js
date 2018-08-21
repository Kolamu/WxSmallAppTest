
function FileHandler(){
    var fs = require('fs')

    this.listAllFiles = dirName => {
        var files = []
        var child = fs.readdirSync(dirName)
        var childFiles = []
        child.forEach(file => {
            var filePath = dirName + '/' + file
            if(fs.statSync(filePath).isDirectory()){
                this.listDirectory(filePath).forEach(f=>{
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
}

module.exports = FileHandler