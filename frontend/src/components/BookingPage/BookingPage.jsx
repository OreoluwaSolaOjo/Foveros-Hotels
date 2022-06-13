import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { makeStyles, styled } from '@mui/styles';
import { Button, Grid } from '@mui/material';
import Rooms from './Rooms';


const useStyles = makeStyles((theme) => ({
    mainbox: {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '5%',
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '10%',
    },
    selectbox: {
        width: '20%',
    },

}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
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

const BookingPage = () => {
    const themes = useTheme();
    const classes = useStyles();

    return (
        <>
            <Box className={classes.mainbox}>

                <Box className={classes.selectbox}>
                    <label htmlFor="inputCategory">Category</label>
                    <select
                        id="inputCategory"
                        name="category_name"
                        className="form-control"
                    >

                    </select>
                </Box>
                <Box className={classes.selectbox}>
                    <label htmlFor="inputCapacity">Capacity</label>
                    <select
                        id="inputCapacity"
                        className="form-control"
                        name="capacity"
                    >

                    </select>
                </Box>
                <Box className={classes.selectbox}>
                    <label htmlFor="customRange3">
                        Room Cost Max
                    </label>
                    <input
                        name="price_per_night"

                        type="range"

                        min="100"
                        max="500"
                        step="1.0"
                        id="customRange3"

                    />
                </Box>



                <Box className={classes.selectbox}>
                    <input
                        name="reserved"

                        type="checkbox"
                        className="form-check-input"
                        id="reserved"

                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Available
                    </label>
                </Box>
            </Box>
            <Rooms />

        </>
    );
}

export default BookingPage;