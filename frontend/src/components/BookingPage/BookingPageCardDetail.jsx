import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SINGLE_ROOM_LOADED_FAIL, SINGLE_ROOM_LOADED_SUCCESS } from "../../redux/actionTypes";
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from "axios";
import { Box } from "@mui/material";
import './BookingPageCardDetail.css';


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
    return (
        <>

            <Box marginTop="100px">
                {process.env.REACT_APP_API_URL + currentRoom.cover_image}
                <Card sx={{ width: 200, marginTop: 5 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="100"
                            image={process.env.REACT_APP_API_URL + currentRoom.cover_image}
                            alt="malidate van"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {currentRoom.title},
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {currentRoom.capacity}, {currentRoom.category_name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                </Card>
                {/* {process.env.REACT_APP_API_URL + currentRoom.cover_image}
                <CardMedia
                    component="img"
                    height="100"
                    width="100"
                    image={process.env.REACT_APP_API_URL + currentRoom.cover_image}
                    alt="malidate van"
                /> */}
            </Box>


        </>
    );
}



export default BookingPageCardDetail;