
import axios from 'axios'
import React,{useEffect,useState} from 'react'
import CardKeeper from './Assignment/CardKeeper'
import Navbar from './Assignment/Navbar'

function App() {
  const [imgdata,setImgData] = useState([])
  const [dataofl,setDataofl] = useState([])
  

  const lStorage = (something) => {
    localStorage.setItem('subhransu',JSON.stringify(something))
  }
  
 

  useEffect(() => {
    let url = 'https://rickandmortyapi.com/api/character'
   axios.get(url).then((res)=>
    setImgData(res.data.results))
    .catch((err)=> console.log(err))
  }, [])

  console.log(imgdata)

  return (
    <div>
      <Navbar/>
      <CardKeeper imgdata={imgdata} dataofl={dataofl} setDataofl={setDataofl} lStorage={lStorage}/>

    </div>
  )
}

export default App