const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
 
const app = express();

app.get('/',(req,res) => {
    res.send("API is Running");

});
app.get("/api/chat",(req, res) => {
    
    res.send(chats);
}); 


app.get('/api/chat/:id',(req, res) => {
        const singleChat = chats.find((c) => c._id === req.params.id);
        res.send(singleChat);
    });

const PORT  = process.env.PORT || 5000;

app.listen(5000,console.log("Server Started on PORT ${PORT} "));