import React,{useEffect,useState} from 'react';
import CardPic from './CardPic';

function LikedPage() {
  const [getData,setGetData] = useState([])

  // fetching data from local storage
  useEffect(()=> {
    
    setGetData(JSON.parse(localStorage.getItem('subhransu')))
    console.log(getData)
  },[])

  
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
      {
                getData.map((ele)=> {
                    return (
                        <CardPic ele={ele} />
                    )
                })
            }
    </div>
  )
}

export default LikedPage;