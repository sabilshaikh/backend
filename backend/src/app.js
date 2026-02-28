const express = require("express");
const noteModel = require("./model/note.model");
const cors = require("cors")
const path = require("path");
const { log } = require("console");


const app = express();

app.use(cors())
app.use(express.json())
app.use(express.static("./public"))

app.post("/api/notes", async (req , res) =>{

    const {title , description} = req.body;

 const note = await noteModel.create({title , description})

    res.status(201).json({
        message : "client sabil added a new data",
        note,

    })
})

app.get("/api/notes", async (req, res)=>{
  const notes =  await  noteModel.find()
  

  res.status(200).json({
    message : "notes fetched successfully",
    notes
  })
})


app.delete("/api/notes/:id", async (req , res) =>{

  const noteId =  req.params.id;


  

  await noteModel.findByIdAndDelete(noteId);

  

   res.status(200).json({
    message : "note successfully deleted"

   })

})  


app.patch("/api/notes/:id", async (req , res) =>{
  const id = req.params.id;




 const newNote = await noteModel.findByIdAndUpdate(id, req.body);
 console.log(newNote);
 

  res.status(200).json({
    message : "data updated successfully",
    newNote

  })


})



app.use("*name",(req , res) =>{
  console.log(__dirname);
  
res.sendFile(path.join(__dirname,"..", "public", "index.html"))
})


module.exports = app;