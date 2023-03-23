import React, { useState } from "react"





const AddTodoForm = ({ yapilacaklar,setYapilacaklar}) => {
  const [Textyapilacaklar, setTextYapilacaklar] = useState("")

 const formDenetle=(e)=>{
  e.preventDefault()


  if(Textyapilacaklar===""){
    alert("kayıt boş olamaz")
   return 

   
  }

  var textmevcutmu=false
  yapilacaklar.map(x=>{
         
    if(x.id.toLowerCase()===Textyapilacaklar.toLowerCase()){
           
      textmevcutmu=true

    }
   

  })

  if(textmevcutmu===true){
    alert("böyle bir kayıt zaten mevcut")
    return
  }
              
  
     
      


 

  const newTodo={
    id: String(new Date().getTime().toString()),
    text:Textyapilacaklar,
    date:new Date(),
    yapildimi:true
  }
  setYapilacaklar([...yapilacaklar,newTodo])
  setTextYapilacaklar("")
  
 }
 


  return (
    <div className="container my-5">
     <form onSubmit={formDenetle}> 
    <div class="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value={Textyapilacaklar} onChange={(e)=>setTextYapilacaklar(e.target.value)} />
  <button className="btn btn-primary" type="submit" id="button-addon2">add</button>
</div>
</form>
    
    

    </div>
    

  )

}
 

export default AddTodoForm