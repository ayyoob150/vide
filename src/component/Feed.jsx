import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import SideBar from './SideBar'

const Feed = () => {
  return (
    <Stack sx={{flexDirection:{xs:'column', md:'row'}}}>
      <Box sx={{height:{xs:'auto', md:'92vh'},
      borderRight:'1px solid grey',px:{xs:0, md:2}}}>
        <SideBar/>
        <Typography className='copyRight'
        variant='body2' sx={{mt:1.5}}>
          Copyright 2023 Vide Media
        </Typography>
      </Box>
    </Stack>
    )
}

export default Feed