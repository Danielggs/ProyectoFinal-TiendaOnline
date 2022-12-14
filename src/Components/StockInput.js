import React from 'react'
import './FormProduct.css'
import { BiX } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";

const StockInput = ({ expreReg,estado,cambiarEstado ,titulo ,tipo, Error}) => {

    const onChange= (e) =>{
        let size=  e.target.placeholder
        cambiarEstado(  {...estado.campo,XL: e.target.value})

        console.log(estado.campo.XL)
        console.log(size)
        console.log(e.target.value)
       
     
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
    console.log('el Objeto de los tamano ',estado.campo)

    let valores = Object.keys(estado.campo)
    console.log(valores)

  return (
    <div className='CategoriContainer'>
      <label className= {estado.valido === 'false' ? "labelTiError" : 'labelTi'}>{titulo}  </label>
            { valores && valores.map((el)=>{
            return   <div>
            <input className={estado.valido === 'false' ? "inputError" : "input"}
             type={tipo} placeholder={el}  value={estado.campo.el} onChange={onChange}/>
             
            </div> })
                        }



      {/* <label className= {estado.valido === 'false' ? "labelTiError" : 'labelTi'}>{titulo}  </label>
        <div>
        <input className={estado.valido === 'false' ? "inputError" : "input"}
         type={tipo} value={estado.campo} onChange={onChange} onKeyUp={validacion} onBlur={validacion}/>
           { estado.valido === 'false' ?  <BiX className="error-icon"/> :   <BiCheck className="check-icon"/>}
        </div>
        { estado.valido === 'false' ? <p  className="error">{Error}</p> : null} */}
       </div>
  )
}

export default StockInput