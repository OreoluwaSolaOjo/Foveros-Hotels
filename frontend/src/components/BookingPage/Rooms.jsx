import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import JsonData from '../../MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
import { border, margin } from '@mui/system';
import { connect } from 'react-redux';
import { room_load } from '../../redux/actions';

const useStyles = makeStyles((theme) => ({
    cardbox: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingBottom: "10%"
    },
    paginationBttns: {
        width: '100%',
        height: '40px',
        marginTop: '5%',
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        "& a": {
            padding: '10px',
            margin: '8px',
            borderRadius: '5px',
            border: '1px solid #007FFF',
            color: '#007FFF',
            cursor: 'pointer',
            '&:hover': {
                color: 'white',
                backgroundColor: '#007FFF',
                color: 'white'
            }
        }

    },
    paginationActive: {
        "& a": {
            color: 'white',
            backgroundColor: '#007FFF'
        }
    }


}));
const Rooms = ({ room_load, roomsData }) => {
    // implementing pagination
    useEffect(() => {
        room_load();

    }, []);


    console.log("roomsData:", roomsData)
    const users = roomsData.slice(0, 50)
    const classes = useStyles();
    const [pageNumber, setPageNumber] = useState(0)
    console.log("roomsData:", roomsData)
    const usersPerPage = 5
    const pagesVisited = pageNumber * usersPerPage
    // logic behind displaying 10 per page
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((roomie) => {
        return (
            <Card sx={{ width: 200, marginTop: 5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100"
                        image="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="malidate van"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {roomie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {roomie.capacity}, {roomie.category_name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        );
    });
    console.log(users)
    // page count to determine no of paginated buttons 1-5 in this case
    const pageCount = Math.ceil(users.length / usersPerPage)
    // change page using selected from the library which is the next selected page
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <>
            <Box className={classes.cardbox}>
                {/* {users.map((user) => {
                    return (
                        )
                })} */}
                {displayUsers}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={classes.paginationBttns}
                    previousLinkClassName={classes.previousBttn}
                    nextLinkClassName={classes.nextBttn}
                    disabledClassName={classes.paginationDisabled}
                    activeClassName={classes.paginationActive}
                />
            </Box>
        </>
    );
}
const mapStateToProps = state => {
    return {
        roomsData: state.roomloadedreducer.rooms
    }
}
export default connect(mapStateToProps, { room_load })(Rooms);
