import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React from 'react'

const SearchBar = () => {
  return (
    <Paper component='form' onSubmit={()=>{}}
    sx={{borderRadius:20,
        border:'1px solid #grey',
        pl:2,
        boxShadow:'none',
        mr: { sm: 5},
        background:'grey'
    }}
    >
    <input placeholder='Search'
    value=''
    onChange={()=>{}}/>
    <IconButton type='submit' sx={{}}>
    <Search/>
    </IconButton>
    </Paper>
    )
}

export default SearchBar