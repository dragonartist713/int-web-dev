const fs = require("fs")
const content = "Hello World!"
const path = __dirname + "\\my-file.txt"
console.log(path)

fs.writeFile(path, content, (err)=>{
    if(err){
        console.log("Error")
    }else{
        console.log("Success")
    }

})

fs.readFile(path, "utf-8", (err, fileContents)=>{
    if(err){
        console.log("Error")
    }else{
        console.log(fileContents)
    }
})