import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import HeroBannerImage from 'assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box
            sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
            position='relative'
            p='20px'
        >
            <Typography color='#FF2625' fontWeight='600' fontSize='26px' >Fitness Club</Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb='23px' mt='30px'>
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px'>
                Check out the most effective exercises personalized to you
            </Typography>
            <Stack>
                <a
                    href="#exercises"
                    className='mt-11 no-underline w-[200px] text-center bg-[#FF2625] p-[14px] text-[22px] normal-case text-white rounded'
                >
                    Explore Exercises
                </a>
            </Stack>
            <Typography
                fontWeight={600}
                color="#FF2625"
                sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="hero-banner" className="absolute right-10 top-0 w-[700px] h-[900px] mt-[-330px] max-[1200px]:hidden" />
        </Box>
    )
}

export default HeroBanner