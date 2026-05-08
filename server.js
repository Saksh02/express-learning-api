const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

let items = [];

app.post('/items', (req, res) => {
    const data = req.body;

    if(data.name === undefined){
        return res.status(400).json({error: "Name is required"});
    }
    if(typeof data.name !== "string"){
        return res.status(400).json({error: "Name must be a string"});
    }
    if(data.name.trim() === ""){
        return res.status(400).json({error: "Name cannot be empty"})
    }

    items.push(data);
    return res.status(201).json({message: "Item added successfully"});
})

app.get('/items', (req, res) => {
    return res.json(items);
})

app.listen(port, () => {
    console.log(`The Server is running at port: ${port}`);
})