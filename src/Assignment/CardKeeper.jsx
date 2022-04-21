import React from 'react';
import { Container, Grid } from '@mui/material';
import CardPic from './CardPic';

function CardKeeper({imgdata,dataofl,setDataofl,lStorage}) {

  return (
    <Container fixed>
        <Grid item xs={3}>

            <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>

            {
                imgdata.map((ele)=> {
                    return (
                        <CardPic ele={ele} dataofl={dataofl} setDataofl={setDataofl} lStorage={lStorage}/>
                    )
                })
            }
            </div>
           

        </Grid>


    </Container>
  )
}

export default CardKeeper