import { Box, Button, Grid, Select, Typography } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { DatePickerComponent, DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { styled } from '@mui/styles';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';

import classes from './Bookinginfo.module.css'


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

const locations = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];

const BookingInfo = () => {
    // const [startDate, setStartDate] = useState(new Date())
    // const navigate = useNavigate()
    // // const handleClick = () => {
    // //     navigate('/bookingdecisionpage')
    // // }
    return (<>
        <Grid container>

            <Grid item xs={2}></Grid>
            <Grid item xs={8} mt={10} mb={10}>

                <Typography textAlign='center' variant='h5'>Book Room </Typography>

                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                        backgroundColor: 'rgba(0,127,255, 0.05)',
                        paddingTop: '5%',
                        paddingBottom: '5%',
                        borderRadius: '25px',

                    }}
                    noValidate
                    autoComplete="off"

                >
                    <Box display='flex' flexDirection='column' alignItems='center'>

                        <Box display='flex' justifyContent='space-between' width='100%'>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="First Name"
                                label="First Name"
                                name="firstName"
                                size="small"
                                sx={{ backgroundColor: 'white' }}
                                autoComplete="firstName"
                                // value={email}
                                // onChange={e => onChange(e)}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Last Name"
                                label="Last Name"
                                name="lastName"
                                size="small"
                                autoComplete="lastName"
                                sx={{ backgroundColor: 'white' }}
                                // value={email}
                                // onChange={e => onChange(e)}
                                autoFocus
                            />
                        </Box>
                        <Box display='flex' justifyContent='space-between' width='100%'>

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                size="small"
                                id="Phone Number"
                                label="Phone Number"
                                name="phoneNumber"
                                autoComplete="phoneNumber"
                                sx={{ backgroundColor: 'white' }}
                                // value={email}
                                // onChange={e => onChange(e)}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                size="small"
                                name="email"
                                autoComplete="email"
                                sx={{ backgroundColor: 'white' }}
                                // value={email}
                                // onChange={e => onChange(e)}
                                autoFocus
                            />
                        </Box>

                        <Box px='2%' display='flex' justifyContent='space-between' width='100%'>
                            <Box width='40%' marginTop='1%' marginBottom='2%'>
                                <Form.Select className={classes.formselect} size="lg">
                                    <option>Choose Package</option>
                                    <option value="gold">Gold Package</option>
                                    <option value="silver">Silver Package</option>
                                    <option value="bronze">Bronze Package</option>
                                </Form.Select>
                                {/* <Select
                                    id="booking-location-select"

                                    labelId="location-label"
                                    name="location"
                                    required

                                    sx={{
                                        width: '100%',
                                        maxWidth: '300px',
                                        background: 'white',
                                    }}
                                >
                                    {locations.map((location) => {
                                        return <MenuItem key={location.value} value={location.value}>{location.label}</MenuItem>
                                    })}
                                </Select> */}

                            </Box>
                            <Box width='40%' marginTop='1%' marginBottom='2%'>
                                <DateRangePickerComponent placeholder='Enter Date' id="daterangepicker" />
                            </Box>
                        </Box>
                        <Box margin='auto'>
                            <Link to='/bookingpage/bookinginfo/bookingdecisionpage'>
                                <TheButton >
                                    Book Now
                                </TheButton>
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={2}></Grid>

        </Grid>

    </>);
}

export default BookingInfo;