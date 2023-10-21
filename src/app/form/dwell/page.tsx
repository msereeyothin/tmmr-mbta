"use client";
import '../form.css';
import {Slider } from "@mui/material";
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Link from "next/link";
import React, { useState } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';

const DwellSlider = styled(Slider)({
    color: '#F7941E',
    height: 8,

    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
      '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#F7941E',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
          transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
          transform: 'rotate(45deg)',
        },
      },
});

const Dwell = () => {
    const [value, setValue] = useState<number>(5);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
      };

    const marks = [
        {
          value: 0,
          label: 'Original',
        },
        {
          value: 5,
          label: 'Moderate Changes',
        },
        {
          value: 10,
          label: 'Maximum Optimization',
        },
      ];
      
    function valuetext(value: number) {
        return `label`;
    }

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({     
        fontSize: 24,
        fontWeight: 'Bold',
        padding: '1px 20px',
        color: '#F7941E',
        border: '1px solid',
        backgroundColor: '#F7941E',
        borderColor: '#F7941E',
        fontFamily: 'Helvetica',
        '&:hover': {
            backgroundColor: '#F7941E',   
            color: '#fff',
        },  
    }));
  
  return (
    <>  
      
      <h1 className="title">MODIFY THE DWELL TIME</h1>
      <div className="slider">
        <Box sx={{ width: 1000 }}>
        <DwellSlider
          defaultValue={5}
          valueLabelDisplay="auto"
          step={1}
          marks={marks}
          min={0}
          max={10}
          getAriaValueText={valuetext}
          value={value} 
          onChange={handleChange}
        />
        </Box>
      </div>
      <p className='chosen-value'>SELECTED VALUE: {value}</p> 
      <div className='next-button'>
        <ColorButton>
            <Link href="/">Next</Link>
        </ColorButton>
      </div>

      <div className='back-button'>
        <ColorButton>
            <Link href="/form">Back</Link>
        </ColorButton>
      </div>
      
    </>
    
    
  );

  
}

export default Dwell;     