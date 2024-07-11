import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#white',
    backgroundColor: '#a28354',
    
    '&:hover': {
      backgroundColor: '#cab28d',
    },
    width: '250px',
    height: '50px',
    fontSize: '20px'
  }));

export default function ExerciseItem({text}) {
    return (<ColorButton variant="contained" color="inherit">{text}</ColorButton>)
}