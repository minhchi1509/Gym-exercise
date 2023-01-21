import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
    <Link
        className='w-[400px] max-[400px]:w-[280px] max-[1200px]:w-[320px] h-[445px] bg-white border-t-4 border-t-[#FF2625] rounded-bl-[20px] no-underline flex justify-between flex-col pb-[10px] scale-100 transition-all duration-300 hover:scale-110'
        to={`/exercise/${exercise.id}`}
    >
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' className='h-[326px]' />
        <Stack direction='row'>
            <Button className='ml-[21px] text-white bg-[#FFA9A9] text-[14px] rounded-[20px] capitalize'>
                {exercise.bodyPart}
            </Button>
            <Button className='ml-[21px] text-white bg-[#fcc757] text-[14px] rounded-[20px] capitalize'>
                {exercise.target}
            </Button>
        </Stack>
        <Typography
            ml='21px'
            color='#000'
            fontWeight='bold'
            sx={{ fontSize: { lg: '24px', xs: '20px' } }}
            mt='11px'
            pb='10px'
            textTransform='capitalize'
        >
            {exercise.name}
        </Typography>
    </Link>
);

export default ExerciseCard;