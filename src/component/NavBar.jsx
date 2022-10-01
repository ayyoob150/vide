import { Box, Stack } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../utils/logo.png';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <Stack 
    direction='row' 
    alignItems='center' 
    p={2} 
    sx={{position:'sticky',background:'#000',top:0, justifyContent:'space-between'}}>
      <NavLink to='/' sx={{display:'flex',alignItems:'center'}}>
        <Box sx={{background:'transparent', borderRadius:4, border:'2px solid #DB0000'}}><img src={logo} alt='logo' height={45} /></Box>
      </NavLink>
      <SearchBar/>
    </Stack>
  )
}

export default NavBar