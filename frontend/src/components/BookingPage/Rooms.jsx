import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import JsonData from '../../MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
import { border, margin } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    mainbox: {
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
const Rooms = () => {
    // implementing pagination
    const [users, setUsers] = React.useState(JsonData.slice(0, 50))
    const classes = useStyles();
    const [pageNumber, setPageNumber] = React.useState(0)

    const usersPerPage = 10
    const pagesVisited = pageNumber * usersPerPage
    // logic behind displaying 10 per page
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => {
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
                            {user.firstname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.email}, {user.gender}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    });
    // page count to determine no of paginated buttons 1-5 in this case
    const pageCount = Math.ceil(users.length / usersPerPage)
    // change page using selected from the library which is the next selected page
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <>
            <Box className={classes.mainbox}>
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

export default Rooms;