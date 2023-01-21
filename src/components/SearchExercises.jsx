import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { fetchData, exerciseOptions } from 'utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '30px' }
                }}
                mb='49px'
                textAlign='center'
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    type='text'
                    placeholder='Search Exercises'
                    value={search}
                    onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
                    sx={{
                        input: {
                            fontWeight: '700',
                        },
                        width: { lg: '800px', xs: '350px' },
                        bgcolor: '#fff',
                    }}
                />
                <Button
                    sx={{
                        width: { lg: '173px', xs: '80px' },
                        height: '56px',
                        bgcolor: '#FF2625',
                        color: '#fff',
                        position: 'absolute',
                        right: '0px',
                        textTransform: 'none',
                        fontSize: { lg: '20px', xs: '14px' },
                        '&:hover': {
                            bgcolor: '#f44336',
                        }
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <HorizontalScrollbar
                data={bodyParts}
                bodyParts
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
            />
        </Stack>
    )
}

export default SearchExercises