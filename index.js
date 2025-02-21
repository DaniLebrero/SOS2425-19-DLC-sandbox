const express = require("express");
const app = express();
const PORT = process.env.port || 16078

/*function handler(request,response){
    response.send("Hello from the server  3")
}
app.get("/", handler)*/

app.get("/", (request, response)=>response.send("Hello from the server"))
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);});


var cool  = require('cool-ascii-faces');
function handler2(request,response){
    response.send(`${cool()}`)
}
app.use("/",express.static("./public"))
app.get("/cool", (request, response)=>response.send(`${cool()}`))
app.listen(PORT,()=>{console.log(`Server running on port ${PORT}`);});

console.log(`Finish setup`);

