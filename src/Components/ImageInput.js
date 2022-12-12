import React, { useState } from 'react'
import './ImageInput.css'

const ImageInput = ({estado, cambiarEstado}) => {


  const [imageDelete , setImageDelete] =  useState(null)


  function handleWidgetUpload(){

    var myWidget = window.cloudinary.createUploadWidget({
      cloudName: 'dsriuiz8z', 
      uploadPreset: 'kwefhvkj'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          cambiarEstado((prev) => [ ...prev ,{url:result.info.url, public_id: result.info.public_id}])
          console.log(result.info.url)
    
        }
      }
    )
    myWidget.open()
  }
 

  return (
    <div className='imageWidgetContainer'>
          
        <button id='uploadWidget' className='cloudinary-button' onClick={()=>handleWidgetUpload()}> <p> Agrega las imagenes</p></button>
        <div className='imageContainer'> 
        {estado.map((image)=>(
          <div className='ImagePreview'> 
            <img src={image.url}/>
            
          </div>
        ))}</div>
    </div>
  )
}

export default ImageInput