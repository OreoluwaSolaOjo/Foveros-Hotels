import { Box, Button, Grid, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from 'react';

const TheButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#2196F3 !important',
    color: '#fff !important',
    '&:hover': {
        color: '#fff!important',
        backgroundColor: '#001933 !important',
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

const BookingDecisionPage = () => {
    return (
        <>
            <Grid container mt={20} mb={20}>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={8}>


                    <Typography variant='h6'>
                        Your room has been booked successfully.
                        Your booking number is 1111111, Please click button below to complete your
                        payment to confirm your booking!
                    </Typography>
                    <Box m='auto' textAlign='center'>
                        <TheButton>
                            Proceed to Payment
                        </TheButton>
                    </Box>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </>
    );
}

export default BookingDecisionPage;