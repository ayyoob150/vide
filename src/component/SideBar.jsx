import { Stack } from '@mui/material'
import React from 'react'
import {categories} from '../utils/constant'

const SideBar = () => {
  return (
    <Stack direction='row'
    sx={{overflowY:'auto',
    height:{xs:'auto' ,md :'95%'},
    flexDirection:{md:'column'}}}>
        {categories.map((el)=>(
            <button className='categoryBtn'>
                <span>{el.icon}</span>
                <span>{el.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar