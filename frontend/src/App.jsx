import React, { useEffect, useState } from 'react'
import axios from "axios"


const App = () => {

  const [notes, setNotes] = useState(
[
  
]
)

function fetchNotes (){
axios.get("http://localhost:3000/api/notes").then((res) =>{

setNotes(res.data.notes)
  

})

}

useEffect(()=>{

  fetchNotes()

},[])

function submitHandler(e){
  e.preventDefault();

const {title , description} = e.target.elements;

// console.log(title.value , description.value);

axios.post("http://localhost:3000/api/notes", {
  title : title.value,
  description : description.value,
}).then((res)=>{
  // console.log(res.data);
  fetchNotes()
  
  
})

}

function deleteHandler(id){

axios.delete("http://localhost:3000/api/notes/" + id)
.then((res)=>{

  fetchNotes()
  
})

}

// function updateHandler (id){

//   axios.patch("http://localhost:3000/api/notes/"+id).then((res)=>{
// console.log(res);

//   })

// }


  return (
   <>

<form onSubmit={submitHandler}>

<input type="text" name='title' placeholder='Enter title' />
<input type="text" name='description' placeholder='enter description' />
<button>Create note</button>

</form>

<div className="notes">
  
  {
    notes.map((item,idx) =>{

      return <div key={idx} className="note">
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    <button onClick={()=>{
      deleteHandler(item._id)
    }}>delete</button>
  </div>

    })
  }
</div>
   </>
  )
}

export default App