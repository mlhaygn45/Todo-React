import React, { useState } from "react";

const Modal=({buttontype="",buttonOnclick=()=>{}, has,sethas, item ,yapilacaklar,setYapilacaklar})=>{



if(has===false){
    return null
}


const deletetodo=(id)=>{
const sil=yapilacaklar.filter(x=>x.id!==item.id)
       setYapilacaklar(sil)

}





    return(

        
        <div style={{position:"fixed", top:0, left:0,  width:"100%",minHeight:"100vh",zIndex:10}} className="d-flex justify-content-center align-items-center my-3">
        
    
          
         

        
            <div style={{backgroundColor:"#fff",padding:"20px",width:"20%"}}>
        <h1 className="text-center">kitap silinsinmi</h1>
        <div className="d-flex gap-2 justify-content-center">
             
            
              <button onClick={deletetodo} className="btn  btn-primary">sil</button>
             <button onClick={()=>sethas(false)} className="btn  btn-warning">vazgeç</button>

        </div>
         
        </div>
        </div>
    )
}

export default Modal