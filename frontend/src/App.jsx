import React, { useState } from 'react'
import axios from "axios"


const App = () => {

  const [notes, setNotes] = useState(
[
  
]
)

axios.get("http://localhost:3000/api/notes").then((res) =>{

setNotes(res.data.notes)
  

})

  return (
   <>
<div className="notes">
  
  {
    notes.map((item) =>{

      return <div className="note">
    <h1>{item.title}</h1>
    <p>{item.description}</p>
  </div>

    })
  }
</div>
   </>
  )
}

export default App