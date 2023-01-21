import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import Logo from 'assets/images/Logo.png'

const Navbar = () => {
    return (
        <Stack
            direction='row'
            justifyContent="space-around"
            px='20px'
            sx={{
                gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' },
                justifyContent: 'none'
            }}
        >
            <Link to='/'>
                <img src={Logo} alt='logo' className='w-12 h-12 my-0 mx-5' />
            </Link>
            <Stack
                direction='row'
                gap={5}
                fontSize={24}
                alignItems='flex-end'
            >
                <Link to='/' className='no-underline text-[#3A1212] border-b-2 border-[#FF2625]'>
                    Home
                </Link>
                <a href="#exercises" className='no-underline text-[#3A1212]'>Exercises</a>
            </Stack>
        </Stack>
    )
}

export default Navbar