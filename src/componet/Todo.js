import React, { useState } from "react";
import Modal from "../Modal";


const Todo = ({ item, yapilacaklar, setYapilacaklar ,}) => {
  const[ güncellemebutonu,setgüncellemebutonu]=useState(false)
  const[input,setinput]=useState(item.text)
  const[has,sethas]=useState(false)
  
  

   
  


  const yapidimiDegistir=()=>{




    var gecici=[]
    for(let i=0;i<yapilacaklar.length;i++){
      if(yapilacaklar[i].id===item.id){
        var güncelleText={
          ...item,
          yapildimi:!item.yapildimi
        }
        gecici.push(güncelleText)
      }else{
        gecici.push(yapilacaklar[i])
      }
    }
    setYapilacaklar(gecici)
  }
  
  const todogüncelle=()=>{
   if(input===""){
      alert("boş kayıt yapılamaz")
      return
      
    }

    const digeryapilacaklar=yapilacaklar.filter(x=>x.id!==item.id)
    var text=false
    digeryapilacaklar.map(diger=>{
    
    if(diger.text===input){
      alert("böyle bir kayıt zaten var ")
      text=true
    }
    
    })
    
    if(text===true){
    
      return
    }


      var gecici=[]
       for(let i=0;i<yapilacaklar.length;i++){
       if(yapilacaklar[i].id===item.id){
          var  güncellenmisTodo={
          ...item,
          text:input,
          date:new Date()
         }
          gecici.push(güncellenmisTodo)
        }else{
         gecici.push(yapilacaklar[i])
        }
       
       }
       setYapilacaklar(gecici)
      setgüncellemebutonu(false)

   }


  return (
    <div className="container">


      

<div className="d-flex justify-content-between align-items-center alert alert-secondary">
    
{
  
  güncellemebutonu===true?( <div class="input-group mb-3">
    <div>
  <input type="text" className="form-control " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"  value={input} onChange={(e)=>setinput(e.target.value)} />
  <button onClick={todogüncelle} className="btn btn-primary" type="submit" id="button-addon2">kaydet</button>
  <button onClick={()=>setgüncellemebutonu(false)} className="btn btn-danger" type="submit" id="button-addon2">vazgeç</button>
  </div>
  
</div>):( 
           <div className=" " role="alert">
        
            <h1>{item.text} </h1>

            <p >{new Date(item.date).toLocaleString().replaceAll(".","/")}</p>
            
          
          
            </div>  
       
     )

   
     
}

<div className="btn-group" role="group" aria-label="Basic example">
     <button onClick={()=>sethas(true)} type="button" class="btn btn-danger">delete</button>
     <button onClick={yapidimiDegistir} type="button" class="btn btn-secondary">{item.yapildimi===true?"yapılmadı":"yapıldı"} </button>
     <button onClick={()=>setgüncellemebutonu(true)} type="button" class="btn btn-primary">güncelle</button>
     </div>

     </div>
     
     <Modal  item={item} has={has} sethas={sethas} yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} />
</div>
    


  )



}


 


 
 




export default Todo