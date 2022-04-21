import React,{useState} from 'react';
import { Button } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import axios from 'axios';
import './CardPic.css'


function CardPic({ele,dataofl, setDataofl,lStorage}) {

  const [flag,setFlag] = useState(false)


  //clickHanlder



  const clickHandler = (ele) => {
    
    if(flag){
      setFlag(false);
      dataofl.splice(dataofl.indexOf(ele),1);
      console.log(dataofl)
      setDataofl(dataofl)
      lStorage(dataofl)
    }else{
      setFlag(true);
      setDataofl([...dataofl,ele])
      lStorage(dataofl)
    }

  }
  
  return (
      
  <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        <img src={ele.image} alt="Avatar" style={{width:'300px',height:'300px'}}/>
        
      </div>
      <div className="flip-card-back">
        <h1>{ele.name}</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
        
      </div>
      
  
    </div>

    <div className="stable" style={{backgroundColor:'transparent'}}>
      <Button size="small" onClick={() => clickHandler(ele)}>{flag?<FavoriteIcon />:<FavoriteIcon color='warning' />}</Button>

      </div>
  </div>
  )
}

export default CardPic;