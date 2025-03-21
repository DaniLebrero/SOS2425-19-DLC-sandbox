const express = require("express");
const app = express();
const PORT = process.env.PORT || 16078;
const BASE_API =  "/api/v1"

app.use("/",express.static("./public"));
app.use(express.json());

let contacts = [
    {
        name: "peter",
        phone: 12345
    },
    {
        name: "pablo",
        phone: 78910
    }
]

app.get(BASE_API + "/contacts",(request,response)=>{
    console.log("New GET to /contacts")
    response.send(JSON.stringify(contacts, null,2));
});
app.post(BASE_API + "/contacts",(request,response)=>{
    console.log("POST to /contacts")
    let newContact = JSON.parse(request.body)
    contacts.push(newContact)
    response.sendStatus(201);
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}!`);
});


