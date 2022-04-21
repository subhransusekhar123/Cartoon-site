import React from 'react'
import {Button, Stack,ButtonGroup,ToggleButton,ToggleButtonGroup, Container, Typography,Box} from '@mui/material'
import { Send,FormatBold,FormatItalic,FormatUnderlined } from '@mui/icons-material'



function MuiButtons() {
  return (

    <Stack spacing={4}>

        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>ClickHere</Button>
            <Button variant='contained'>ClickHere</Button>
            <Button variant='outlined'>ClickHere</Button>
        </Stack >

        <Stack direction='row' spacing={2}>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>warning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>

        </Stack>

        <Stack display='block' spacing={2} direction="row">
            <Button variant='contained' size='small' startIcon={<Send color='error'/>}>small</Button>
            <Button variant='contained' size='medium' endIcon={<Send/>}>medium</Button>
            <Button variant='contained' size='large'><Send/></Button>
        </Stack>

        <Stack direction='row' >
            <ButtonGroup variant='text' orientation='vertical' size='small' color='secondary'>
                <Button onClick={()=>alert('hii beuty')}>Left</Button>
                <Button onClick={()=>alert('hii beuty')}>center</Button>
                <Button onClick={()=>alert('hii beuty')}>Right</Button>

            </ButtonGroup>
        </Stack>

        <Stack direction='row'>     
        <ToggleButtonGroup aria-level='text formatting'>
            <ToggleButton value='bold' aria-label='bold'><FormatBold/></ToggleButton>
            <ToggleButton><FormatItalic/></ToggleButton>
            <ToggleButton><FormatUnderlined/></ToggleButton>


        </ToggleButtonGroup>

        </Stack>

        <Container  >
            <Box textAlign='center' pt={5} >
            <Typography varient='h2'>Why choose us?</Typography>
            <Typography varient='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, harum! Quod corrupti quaerat culpa quibusdam rem veniam cupiditate harum id.</Typography>

            </Box>

        </Container>
    </Stack>



  )
}

export default MuiButtons