import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SINGLE_ROOM_LOADED_FAIL, SINGLE_ROOM_LOADED_SUCCESS } from "../../redux/actionTypes";
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import axios from "axios";
import { Box } from "@mui/material";
import './BookingPageCardDetail.css';
import { styled } from '@mui/styles';
import { makeStyles } from "@mui/styles";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BedroomChildIcon from '@mui/icons-material/BedroomChild';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { useRef, useState } from 'react'
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '70vh',
        backgroundImage: (props) => `url(${process.env.REACT_APP_API_URL + props.currentRoom.cover_image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    },
    mainbox: {
        position: "absolute",
        top: "50%",
        left: "42%",
        height: "20%",
        width: "20%",
        backgroundColor: "#FFA500",
        borderRadius: "5px",
    },

    typo: {
        justifyContent: 'center !important',
        alignContent: 'center !important',
        textAlign: 'center !important ',
        color: '#000',
        marginTop: '10%',
        paddingTop: '10%',

    },
    typoNew: {
        color: '#001933',
        whiteSpace: "nowrap !important",

    },
    mbox: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
        alignItems: "center !important"
    },
    boxone: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: '10%',

    },
    boxtype: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center !important',
        height: '100%'
    },
    boxcontent: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: '10%',
        paddingLeft: '10%',
        height: "50px",

    },
    boxtwo: {
        display: 'flex',
        flexDirection: 'column',
        height: "200px",
        paddingTop: '3%',
        paddingBottom: '3%',
        backgroundColor: '#2196F3',
        borderRadius: '20px'
    },
    boxthree: {
        borderBottom: "0.2px solid #6A6C6D",
        height: "20px",
        marginTop: "5%"
    },
    boxfour: {
        padding: "2%"
    },
    formcontainer: {
        position: "sticky",
        top: 0
    },
    boxfive: {
        display: 'flex',
        justifyContent: 'space-between',
        height: "60px",
        flexDirection: "column"

    },
    boxfiveone: {
        width: "100px",
        backgroundColor: "#FFA500",
        padding: "2%",
        display: 'flex',
        justifyContent: 'center !important',
        alignContent: 'center !important',

    },
    boxfiveonecontainer: {
        display: "flex",
        justifyContent: "space-between"
    },


    calendarWrap: {
        display: "flex",
        flexDirection: "column"

    },
    calendarElement: {

        zIndex: "999"

    },
    inputBox: {
        fontSize: "16px",
        padding: "4px 8px 2px 8px",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        border: (props) => props.open ? "none !important" : "none",

        // backgroundColor: "grey",

    },


}));

const TheButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,

    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#2196F3 !important',
    color: '#fff !important',
    '&:hover': {
        color: '#fff !important',
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


const BookingPageCardDetail = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    // const room = useSelector(state => state.roomloadedreducer.room.find(
    //     room => String(room.id) === id
    // ));
    async function single_room_load() {
        try {
            const singleroom = await axios.get(`${process.env.REACT_APP_API_URL}/bookinglogic/get_room_list/?id=${id}`)
            dispatch({
                type: SINGLE_ROOM_LOADED_SUCCESS,
                payload: singleroom.data
            })
        }
        catch (err) {
            dispatch({
                type: SINGLE_ROOM_LOADED_FAIL,
            })
        }
    }
    useEffect(() => {
        single_room_load();
    })
    const currentRoom = useSelector(state => state.roomloadedreducer.room)


    // daterangecomp
    // date state
    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    // open close
    const [open, setOpen] = useState(false)

    // get the target element to toggle 
    const refOne = useRef(null)

    useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
    }, [])

    // hide dropdown on ESC press
    const hideOnEscape = (e) => {
        // console.log(e.key)
        if (e.key === "Escape") {
            setOpen(false)
        }
    }

    // Hide dropdown on outside click
    const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false)
        }
    }
    const classes = useStyles({ currentRoom, open });
    return (
        <>
            <div className={classes.root}>
                <Box className={classes.mainbox}>
                    <Typography className={classes.typo} component="h6" variant='h6'>
                        {currentRoom.title}
                    </Typography>

                </Box>
            </div>
            <Grid container pt={5} pb={5}>
                <Grid item xs={6}>
                    <Box className={classes.mbox} ml={5} mr={5} width="90%" height="25%">
                        <Box className={classes.boxone} width="100%" height="25%">

                            <Box className={classes.boxcontent} borderRight='0.2px solid #6A6C6D'>
                                <Box display="flex" justifyContent="center !important" color="#FFA500">


                                    <BedroomChildIcon height="100px" />
                                </Box>
                                <Box display="flex" justifyContent="center !important">
                                    <Typography className={classes.typoNew} component="body1" variant='h6'>
                                        No of bed(s): {currentRoom.capacity}
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className={classes.boxcontent} >
                                <Box display="flex" justifyContent="center !important" color="#FFA500">


                                    <FullscreenIcon />
                                </Box>
                                <Box display="flex" justifyContent="center !important">
                                    <Typography className={classes.typoNew} component="body1" variant='h6'>
                                        Size : {currentRoom.room_size}
                                    </Typography>
                                </Box>
                            </Box>


                        </Box>
                        <Box className={classes.boxtwo} width="100%" >
                            <Box display="flex" justifyContent="center !important" >
                                <MonetizationOnIcon />

                            </Box>
                            <Box display="flex" justifyContent="center !important">
                                <Typography className={classes.typoNew} component="h6" variant='h6'>
                                    ${currentRoom.price_per_night}/per night
                                </Typography>
                            </Box>


                        </Box>
                        <Box className={classes.boxthree} width="100%" >

                        </Box>
                        <Box className={classes.boxfour} width="100%" >
                            <Typography component="h6" variant="h6">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia praesentium dolorem soluta quae quis eligendi distinctio sequi dolores ex maxime nemo, explicabo et eos minus eaque tenetur sunt, ut delectus.
                            </Typography>
                        </Box>
                        <Box className={classes.boxfive} width="100%" >
                            <Box className={classes.boxfivetwo} mb={1}>
                                <Typography component="h6" variant="h6">
                                    IDEAL FOR:
                                </Typography>
                            </Box>
                            <Box className={classes.boxfiveonecontainer}>
                                <Box className={classes.boxfiveone}>
                                    <Typography component="body2" textAlign="center !important" variant="body3">
                                        Families
                                    </Typography>
                                </Box>
                                <Box className={classes.boxfiveone}>
                                    <Typography component="body2" textAlign="center !important" variant="body3">
                                        Honeymoon
                                    </Typography>
                                </Box>
                                <Box className={classes.boxfiveone}>
                                    <Typography component="body2" textAlign="center !important" variant="body3">
                                        Couples
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                </Grid>
                <Grid item xs={6} pr={4} pl={4} >


                    <Box
                        className={classes.formcontainer}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, pr: 3, pl: 3, width: '100%' },
                            backgroundColor: 'rgba(0,127,255, 0.05)',
                            paddingTop: '5%',
                            paddingBottom: '5%',
                            borderRadius: '25px',

                        }}
                        noValidate
                        autoComplete="off"

                    >
                        <Typography textAlign='center !important' variant='h5'>Book Room </Typography>
                        <Box display='flex' flexDirection='column' alignItems='center !important'>
                            <label htmlFor="">Phone Number</label>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                size="small"
                                variant="filled"
                                id="Phone Number"
                                name="phoneNumber"
                                autoComplete="phoneNumber"
                                sx={{ color: 'white', pr: 2, pl: 2, }}
                                // value={email}
                                // onChange={e => onChange(e)}
                                autoFocus
                            />
                            <label htmlFor="">Email</label>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                variant="filled"
                                size="small"
                                name="email"
                                autoComplete="email"
                                sx={{ color: 'white' }}
                                // value={email}
                                // onChange={e => onChange(e)}
                                autoFocus
                            />
                            <label htmlFor="">Room Package</label>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="room"
                                variant="filled"
                                size="small"
                                name="email"
                                autoComplete="room"
                                sx={{ color: 'white' }}
                                value={currentRoom.title}
                                // onChange={e => onChange(e)}
                                autoFocus
                            />
                            <label htmlFor="">Calendar</label>
                            <div className={classes.calendarWrap}>

                                <input
                                    value={`${format(range[0].startDate, "yyyy/MM/dd")} to ${format(range[0].endDate, "yyyy/MM/dd")}`}
                                    readOnly
                                    className={classes.inputBox}
                                    onClick={() => setOpen(open => !open)}
                                />

                                <div ref={refOne} >
                                    {open &&
                                        <DateRange
                                            onChange={item => setRange([item.selection])}
                                            editableDateInputs={true}
                                            moveRangeOnFirstSelection={false}
                                            ranges={range}
                                            months={1}
                                            direction="vertical"
                                            className="calendarElement"
                                        />
                                    }
                                </div>

                            </div>

                            <Box margin='auto' marginTop="5%">
                                <Link to='/bookingpage/bookinginfo/bookingdecisionpage'>
                                    <TheButton >
                                        Book Now
                                    </TheButton>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>



        </>
    );
}







export default BookingPageCardDetail;