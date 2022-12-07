import React from 'react'
import './FormProduct.css'
import { BiX } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";

const formInput = ({ expreReg,estado,cambiarEstado ,titulo ,tipo, Error}) => {

    const onChange= (e) =>{
        cambiarEstado(  {...estado,campo: e.target.value})
    }

    const validacion =  ()=> {
        if(expreReg){
            if(expreReg.test(estado.campo)){
                console.log('correcto')
                cambiarEstado(  {...estado,valido:'true'})
            }else{
                console.log('incorrecto')
                cambiarEstado(  {...estado,valido:'false'})
            }
        }
    }
  return (
    <div>
      <label className= {estado.valido === 'false' ? "labelTiError" : 'labelTi'}>{titulo}  </label>
        <div>
        <input className={estado.valido === 'false' ? "inputError" : "input"}
         type={tipo} value={estado.campo} onChange={onChange} onKeyUp={validacion} onBlur={validacion}/>
           { estado.valido === 'false' ?  <BiX className="error-icon"/> :   <BiCheck className="check-icon"/>}
        </div>
        { estado.valido === 'false' ? <p  className="error">{Error}</p> : null}
       </div>
  )
}

export default formInput