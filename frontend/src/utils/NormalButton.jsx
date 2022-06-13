import { Button } from "@mui/material";
import React from 'react';
import { styled } from '@mui/material/styles';

const TheButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#2196F3',
    color: '#001933',
    '&:hover': {
        color: '#001933 !important',
        backgroundColor: '#fff',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


const NormalButton = () => {
    return (
        <>
            <TheButton />
        </>
    );
}

export default NormalButton;