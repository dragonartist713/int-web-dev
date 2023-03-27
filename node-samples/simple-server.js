const http = require("http")

const app = http.createServer((req, res)=>{
    console.log("Request recieved")
    res.write("Hello World!")
    res.end()
})
//ctrl+c to kill server
app.listen(8080)
console.log("Listening for requests on port 8080")