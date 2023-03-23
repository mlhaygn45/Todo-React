import React, { useState } from "react";
import AddTodoForm from "./componet/AddTodoForm";
import Todo from "./componet/Todo";
import Modal from "./Modal";

function App() {
  const [yapilacaklar,setYapilacaklar]=useState([])
  const[karanlik,setKaranlik ]=useState("blue")

  return(
    <div style={{ minHeight:"100vh"}}  className={karanlik==="blue"?" bg-primary":" bg-danger"}>

      {
        karanlik==="blue"?(<button className="btn btn-danger my-3" onClick={()=>setKaranlik("red")}> {karanlik} </button>):(

          <button onClick={()=>setKaranlik("blue")}  className="btn btn-primary my-3">{karanlik} </button>
        )

      }
<AddTodoForm yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar}   />



{
  yapilacaklar.length===0 ?( <h1 className="text-center">yapılacak bişey yok</h1>

  ):( <div>  
   {yapilacaklar.map((item,index)=>(
     <>
      <Todo key={item.id} item={item} yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} />
      </>
  ))


  }


  </div>

  )
}


    </div>
  )
}
  
 


  //`bg-${karanlik==="light" ?"primary":"warning"} ` //

export default App;
