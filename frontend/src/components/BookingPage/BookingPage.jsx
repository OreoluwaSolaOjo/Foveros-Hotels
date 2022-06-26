import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { makeStyles, styled } from '@mui/styles';
import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Rooms from './Rooms';
import { connect } from 'react-redux';
import { room_load } from '../../redux/actions';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    mainbox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'center',
        marginTop: '5%',
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '10%',
    },
    selectbox: {
        width: '20%',
        flexDirection: 'row'
    },
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

const BookingPage = ({ room_load, roomsData, showAvailable }) => {

    React.useEffect(() => {
        room_load();

    }, [])

    const classes = useStyles();
    //    new
    const [roomList, setRoomList] = React.useState([]);
    const [selectedCapacity, setSelectedCapacity] = React.useState();
    const [selectedCategory, setSelectedCategory] = React.useState();
    const [selectedCheckBox, setSelectedCheckbox] = React.useState(false);
    React.useEffect(() => {
        setRoomList(roomsData);

    })


    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value)
        // event.target.type === "checkbox"
        //     ? setSelectedCategory(event.target.checked)
        //     : setSelectedCategory(event.target.value)

    }
    function handleCapacityChange(event) {
        setSelectedCapacity(event.target.value)
        console.log('sssssssssssssssssssssssssssssssssssssssss', event.target.value)
        // event.target.type === "checkbox"
        //     ? setSelectedCategory(event.target.checked)
        //     : setSelectedCategory(event.target.value)

    }
    function handleCheckChange() {
        setSelectedCheckbox(!selectedCheckBox)

    }


    function getFilteredList() {
        const {
            category_name,
            capacity,
            is_booked
        } = roomList

        if (!selectedCategory && !selectedCheckBox && !selectedCapacity) {
            return roomList;
        } else {
            // if (selectedCapacity || selectedCategory || selectedCheckBox) {
            //     return roomList.filter(
            //         room => room.capacity === parseInt(selectedCapacity)
            //             || room.category_name.toLowerCase().includes(selectedCategory.toLowerCase())
            //             || room.is_booked === false
            //     )
            // }
            if (selectedCheckBox) {
                return roomList.filter((roomsss) => roomsss.is_booked === false);
            }
            if (selectedCapacity) {
                if (capacity !== "") {
                    return roomList.filter(
                        (room) => room.capacity === parseInt(selectedCapacity))
                }
            }
            if (selectedCategory) {
                if (category_name !== "") {
                    return roomList.filter(
                        (room) => room.category_name.toLowerCase().includes(selectedCategory.toLowerCase()));
                }

            }

            // else if (capacity !== "") {
            //     return roomList.filter(
            //         (room) => room.capacity === parseInt(selectedCategory)
            //     );
            // }
            // else if (category_name !== "") {
            //     return roomList.filter(
            //         (newroom) => newroom.category_name !== selectedCategory
            //     );
            // }
        }
        // if (!selectedCategory && !selectedCheckBox) {
        //     return roomList;
        // }
        // else if (selectedCheckBox) {
        //     return roomList.filter((roomsss) => roomsss.is_booked === false);
        // }
        // else if (capacity !== "") {
        //     return roomList.filter(
        //         (room) => room.capacity === parseInt(selectedCategory)
        //     );
        // }
        // else if (category_name !== "") {
        //     return roomList.filter(
        //         (room) => room.category_name === selectedCategory
        //     );
        // }







        // return roomList.filter((item) => item.category_name === selectedCategory);

    }
    //   Using the function call directly will result in multiple repetitive
    //  function calls, hence useMemo ensures that the filteredList
    //  variable is recalculated only when either value of selectedCategory, selectedCapacity or roomList changes.

    let filteredList = React.useMemo(getFilteredList, [selectedCategory, selectedCheckBox, selectedCapacity, roomList]);
    // const selectTypes = roomsData.map((roomie) => (
    //     <option value={roomie.category_name} key={roomie.id}>
    //         {roomie.category_name}
    //     </option>
    // ));
    // const selectCapacity = roomsData.map((roomie) => (
    //     <option value={roomie.capacity}>
    //         {roomie.capacity}
    //     </option>
    // ));



    // Roomsdisplay

    console.log("roomsData:", roomsData)
    const users = filteredList.slice(0, 50)
    console.log("SelectedCheckbox:", selectedCheckBox)
    const [pageNumber, setPageNumber] = React.useState(0)
    console.log("roomsData:", roomsData)
    const usersPerPage = 5
    const pagesVisited = pageNumber * usersPerPage
    // logic behind displaying 10 per page
    const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((roomie) => {
        return (
            <Card key={roomie.id} sx={{ width: 200, marginTop: 5 }}>
                <Link>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="100"
                            image="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="malidate van"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {roomie.title},
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {roomie.capacity}, {roomie.category_name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
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

            <Box className={classes.mainbox}>
                <Box className={classes.selectbox}>
                    <label htmlFor="inputCategory">Category</label>

                    <select
                        id="inputCategory"
                        name="category_name"
                        className="form-control"
                        onChange={handleCategoryChange}
                    >
                        <option value="">
                            All
                        </option>
                        <option value="Gold" >
                            Gold
                        </option>
                        <option value="Silver" >
                            Silver
                        </option>
                        <option value="Bronze">
                            Bronze
                        </option>
                    </select>

                </Box>
                <Box className={classes.selectbox}>
                    <label htmlFor="inputCapacity">Capacity</label>
                    <select
                        id="inputCapacity"
                        className="form-control"
                        name="capacity"
                        onChange={handleCapacityChange}
                    >
                        <option value="" >
                            All
                        </option>
                        <option value="1" >
                            1
                        </option>
                        <option value="2" >
                            2
                        </option>
                        <option value="3" >
                            3
                        </option>
                        <option value="4" >
                            4
                        </option>
                        <option value="5" >
                            5
                        </option>

                    </select>
                </Box>




                <Box className={classes.selectbox}>
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Available
                    </label>
                    <input
                        name="is_booked"
                        type="checkbox"
                        className="form-check-input"
                        id="is_booked"
                        onChange={handleCheckChange}
                        checked={selectedCheckBox}
                    />

                </Box>
            </Box>
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
        roomsData: state.roomloadedreducer.rooms,
    }
}
export default connect(mapStateToProps, { room_load })(BookingPage);
