import React ,{useState} from 'react'
import './FormProduct.css'
import Input from './formInput'
import StockInput from './StockInput'
import { crearProducto } from '../Redux/actions'
import { useSelector , useDispatch} from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import ImageInput from './ImageInput';


const FormProduct = () => {
  const dispatch = useDispatch()
  const {getAccessTokenSilently } = useAuth0();
  const[description, setDescription] = useState({campo:'',valido:null})
  const[titulo, setTitulo] = useState({campo:'',valido:null})
  const[category, setCategory] = useState({campo:'',valido:null})
  const[precio, setPrecio] = useState({campo:'',valido:null})
  const[key, setKey] = useState({campo:'',valido:null})
  const[value, setValue] = useState({campo:'',valido:null})
  const[stock,setStock]=useState({})

  const [image , setImage] =  useState([])
  const[validarForm, SetvalidarForm] = useState(null)
  const expreRP = /^[a-zA-ZÀ-ÿ\s]{1,40}$/
  const expreRN =/^\d{1,14}$/


  const onSubmit=async(e)=>{
    e.preventDefault();
    console.log(image.length)
    if(titulo.valido === 'true' && precio.valido === 'true' && image.length !==0 ){
      SetvalidarForm(true)
      
      const domain = "dev-tsvpp07v3bagspkr.us.auth0.com";
      const accessToken = await getAccessTokenSilently({
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
      });
  
      dispatch(crearProducto ({
          name:titulo.campo,
          description: description.campo,
          image:image[0].url,
          price:precio.campo,
          stock:stock,
          category:category.campo,
         },accessToken))
      setCategory({campo:'',valido:null})
      setTitulo({campo:'',valido:null})
      setCategory({campo:'',valido:null})
      setTitulo({campo:'',valido:null})
      setPrecio({campo:'',valido:null})
      setValue({campo:"",valido:null})
      setKey({campo:"",valido:null})
      setStock({})
      setImage([])

    }else{
      SetvalidarForm(false)
    }

  }
  return (
    <div className='container'>
    <form className='form' onSubmit={onSubmit}>
     
       <Input
       estado={titulo}
       cambiarEstado={setTitulo}
        titulo='Nombre del Producto'
        tipo= 'text'
        Error='caracter no valido'
        expreReg={expreRP}
       />

       <Input
       estado={precio}
       cambiarEstado={setPrecio}
        titulo='Precio'
        tipo= 'text'
        Error='Caracter no valido'
        expreReg={expreRN}
        
       />

<Input
       estado={category}
       cambiarEstado={setCategory}
        titulo='categoria'
        tipo= 'text'
        Error='Caracter no valido'
        expreReg={expreRP}
       />
       <Input
       estado={description}
       cambiarEstado={setDescription}
        titulo='descripcion'
        tipo= 'text'
        Error='Caracter no valido'
        expreReg={expreRP}
       />
   

  {   /* <Input
       estado={image}
       cambiarEstado={setImage}
        titulo='image'
        tipo= 'text'
        Error='ingrese una imagen'
        expreReg={expreIMG}
        
       /> */}
  

        <div className='stock-imputs'>
          <ImageInput 
           estado={image}
           cambiarEstado={setImage}
          />
        </div>
        

       <div className='stock-imputs'>
        
        <h1>Stock</h1>
        {stock&&Object.keys(stock).map((e)=>{
          console.log(e)
          return <p>{e+" : "+stock[e]}</p>
        })}
        <Input
          estado={key}
          cambiarEstado={setKey}
          titulo='key'
          tipo='text'
          Error='ingrese una key valida'
          expreReg={expreRP}
        />
        <Input
          estado={value}
          cambiarEstado={setValue}
          titulo='value'
          tipo='text'
          Error='ingrese un value valido'
          expreReg={expreRN}
          
        />
    
        <button type='button' onClick={()=>{
          setStock({...stock,[key.campo]:value.campo})
        }}>add</button>
        </div>




        <div className='errorContaimner'>
      {validarForm === false && 
        <p className="error">Rellene las casillas correctamente</p>
         }</div>

         
      <div className='buttonContainer'>
        <button  className='button'type='submit'> Enviar</button>
       {validarForm === true && <p className='exito'>El producto se cargo Corretamente</p>}
        </div>    

    </form>
    </div>
  )
}

export default FormProduct  