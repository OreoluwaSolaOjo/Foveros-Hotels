import { Box, Button, CardMedia, Container, Grid, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Divider, Modal, Typography } from "@mui/material";
import React from "react";
import CarouselPlay from "./CarouselPlay";
import { useState } from 'react';
import Quote from "./Quote";
import MediaControlCard from "./Cardds.jsx";
import SimpleSlider from "./Reviews";
import RatingsSlider from "./Reviews";
import NewTestimonial from "./NewTestimonial";
import Book from "../Book/Book";
import { styled } from "@mui/styles";
import CustomImageList from "../BookingPage/RoomPackages/QuiltedImage";
import { Link } from "react-router-dom";


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

const useStyles = makeStyles((theme) => ({
    mainbox: {
        display: 'flex',
        marginTop: '10%',
        marginBottom: '10%',
        width: '100%',
        padding: '10%',
        flexDirection: 'column'


    },
    categorybox: {
        margin: 'auto',
        width: 400,
        paddingTop: 20,
        paddingBottom: 20

    },
    discountbox: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    linebox: {
        borderBottom: '1px solid black',
        width: '60%',
        height: 12,

    },
    filledbox: {
        backgroundColor: '#FFA500',
        height: 25,
        width: '30%',
        borderRadius: '20px',
        textAlign: 'center'


    },


    typography: {
        paddingTop: theme.spacing(6),
        whiteSpace: "no-wrap"
    },
    boxoffers: {
        justifyContent: "center",
        display: "flex",
        border: "1px solid #ece7e7",
        '&:hover': {
            backgroundColor: "#007FFF",
            color: "#FFFFFF",
        },
        pointer: "cursor",
    },
    // handle the toggle content of gold silver and bronze, showing their unique content and images
    offerContentGold: {
        display: (props) => (props.openSilver || props.openBronze ? "none" : "flex"),
    },
    offerContentSilver: {
        display: (props) => (props.openSilver ? "flex" : "none"),
    },
    offerContentBronze: {
        display: (props) => (props.openBronze ? "flex" : "none"),
    },
    button: {
        backgroundColor: "#007FFF",
        color: "#FFFFFF",
        marginTop: theme.spacing(2),
        padding: theme.spacing(1, 3)
    },
    textbox: {
        backgroundColor: "#F5F5F5",
        padding: "100px 60px",
    },
    boxcardmedia: {
        height: '450',
        width: '300',
        padding: '20px',

    }
}));
const TheButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    width: '100px',
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

const Homepage = () => {
    const [openSilver, setOpenSilver] = useState(false);
    const [openBronze, setOpenBronze] = useState(false);
    const [goldopen, setGoldOpen] = React.useState(false);
    const handleGoldOpen = () => setGoldOpen(true);
    const handleGoldClose = () => setGoldOpen(false);
    const [silveropen, setSilverOpen] = React.useState(false);
    const handleSilverOpen = () => setSilverOpen(true);
    const handleSilverClose = () => setSilverOpen(false);
    const [bronzeopen, setBronzeOpen] = React.useState(false);
    const handleBronzeOpen = () => setBronzeOpen(true);
    const handleBronzeClose = () => setBronzeOpen(false);
    const classes = useStyles({ openSilver, openBronze });
    return (<div>
        <Grid container>
            {/* use box component from material ui to center the text */}
            <Box m="auto">
                <Typography className={classes.typography} style={{ fontWeight: 600 }} variant="h5" component="h5">
                    Why Foveros Hotels?
                </Typography>
            </Box>
            <Box m="auto" pt={2} pl={10} pr={10}>
                <Typography variant="h6" component="h5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis accusantium sequi totam, qui molestiae eligendi atque dolor labore voluptatibus nam voluptatem nobis delectus voluptas ullam nisi iure aliquam, libero provident animi. Ea rem soluta expedita aut a magni voluptatibus dolore. Est a, sed explicabo nisi voluptatum blanditiis enim ut doloremque? Reprehenderit odit ea harum eveniet tempora at debitis, optio blanditiis commodi nostrum omnis eaque, expedita nobis facilis, temporibus explicabo. Eveniet quidem quae autem. Officia sed obcaecati optio iste labore?
                </Typography>
            </Box>
            <Box sx={{ mx: "auto", marginTop: 50, marginBottom: 50, width: 600 }}>
                <CarouselPlay />
            </Box>

            <Grid container className={classes.offerContent} >
                <Grid item xs={4}>
                    <Box className={classes.boxoffers} onClick={() => {
                        setOpenSilver(false)
                        setOpenBronze(false)
                    }}>
                        <Typography variant="h5" className={classes.typographyoffers}>
                            Gold
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.boxoffers} onClick={() => {
                        setOpenSilver(true)
                        setOpenBronze(false)
                    }}>
                        <Typography variant="h5" className={classes.typographyoffers}>
                            Silver
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className={classes.boxoffers} onClick={() => {
                        setOpenSilver(false)
                        setOpenBronze(true)
                    }}>
                        <Typography variant="h5" className={classes.typographyoffers}>
                            Bronze
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* GOLD */}
            <Grid container className={classes.offerContentGold}>

                <Grid item xs={12} sm={6} >
                    <Box className={classes.boxcardmedia}  >
                        <CardMedia
                            component="img"
                            height="294"
                            image="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Paella dish"
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <Box className={classes.boxofferscontent} pl={4} pr={4} pt={5}>
                        <Typography variant="body" component="h3">
                            Gold Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil minus exercitationem doloremque, nostrum architecto id dignissimos amet aspernatur, reprehenderit aut officiis tempore, laboriosam vitae? Placeat, harum ex nihil asperiores molestiae nam, et laboriosam error sed optio, cupiditate fugit odio.
                        </Typography>
                        <Box className={classes.discountbox}>
                            <Box className={classes.linebox}>

                            </Box>
                            <Box className={classes.filledbox}>
                                <Typography variant='body3'>25% off</Typography>
                            </Box>
                        </Box>

                        <TheButton onClick={handleGoldOpen}>
                            Gold Rated
                        </TheButton>
                        <Modal
                            open={goldopen}
                            onClose={handleGoldClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography textAlign='center' variant='h6'>
                                    Gold Room Gallery
                                </Typography>
                                <Box display='flex' justifyContent='center'>
                                    <CustomImageList />
                                </Box>

                                <Typography textAlign='center' variant='h6'>
                                    Benefits of Gold Rooms
                                </Typography>

                                <Typography textAlign='center' variant='body2' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam autem nostrum earum quos dolorem vel, modi molestias eveniet sit possimus voluptas aspernatur aliquam adipisci, enim explicabo veniam ex placeat.
                                </Typography>
                                <Box display='flex' mt='10px' justifyContent='center'>
                                    <Link to='bookinginfo'>
                                        <TheButton>
                                            Book Gold Now
                                        </TheButton>
                                    </Link>
                                </Box>
                            </Box>
                        </Modal>

                    </Box>
                </Grid>

            </Grid>
            {/* SILVER */}
            <div >
                <Grid container className={classes.offerContentSilver}>
                    <Grid item sm={6}>
                        <Box className={classes.boxcardmedia}>
                            <CardMedia
                                component="img"
                                height="294"
                                image="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Paella dish"
                            />
                        </Box>
                    </Grid>

                    <Grid item sm={6}>
                        <Box className={classes.boxofferscontent} pl={4} pr={4} pt={5}>
                            <Typography variant="body" component="h3">
                                Silver Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil minus exercitationem doloremque, nostrum architecto id dignissimos amet aspernatur, reprehenderit aut officiis tempore, laboriosam vitae? Placeat, harum ex nihil asperiores molestiae nam, et laboriosam error sed optio, cupiditate fugit odio.
                            </Typography>
                            <Box className={classes.discountbox}>
                                <Box className={classes.linebox}>

                                </Box>
                                <Box className={classes.filledbox}>
                                    <Typography variant='body3'>15% off</Typography>
                                </Box>
                            </Box>

                            <TheButton onClick={handleSilverOpen}>
                                Silver Rated
                            </TheButton>
                            <Modal
                                open={silveropen}
                                onClose={handleSilverClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography textAlign='center' variant='h6'>
                                        Silver Room Gallery
                                    </Typography>
                                    <Box display='flex' justifyContent='center'>
                                        <CustomImageList />
                                    </Box>

                                    <Typography textAlign='center' variant='h6'>
                                        Benefits of Silver Rooms
                                    </Typography>

                                    <Typography textAlign='center' variant='body2' >
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam autem nostrum earum quos dolorem vel, modi molestias eveniet sit possimus voluptas aspernatur aliquam adipisci, enim explicabo veniam ex placeat.
                                    </Typography>
                                    <Box display='flex' mt='10px' justifyContent='center'>
                                        <Link to='bookinginfo'>
                                            <TheButton>
                                                Book Silver Now
                                            </TheButton>
                                        </Link>
                                    </Box>
                                </Box>
                            </Modal>

                        </Box>
                    </Grid>

                </Grid>
            </div>
            {/* BRONZE */}
            <Grid container className={classes.offerContentBronze}>

                <Grid item sm={6}>
                    <Box className={classes.boxcardmedia}>
                        <CardMedia
                            component="img"
                            height="294"
                            image="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Paella dish"
                        />
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box className={classes.boxofferscontent} pl={4} pr={4} pt={5}>
                        <Typography variant="body" component="h3">
                            Bronze Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil minus exercitationem doloremque, nostrum architecto id dignissimos amet aspernatur, reprehenderit aut officiis tempore, laboriosam vitae? Placeat, harum ex nihil asperiores molestiae nam, et laboriosam error sed optio, cupiditate fugit odio.
                        </Typography>
                        <Box className={classes.discountbox}>
                            <Box className={classes.linebox}>

                            </Box>
                            <Box className={classes.filledbox}>
                                <Typography variant='body3'>10% off</Typography>
                            </Box>
                        </Box>

                        <TheButton onClick={handleBronzeOpen}>
                            Bronze Rated
                        </TheButton>
                        <Modal
                            open={bronzeopen}
                            onClose={handleBronzeClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography textAlign='center' variant='h6'>
                                    Bronze Room Gallery
                                </Typography>
                                <Box display='flex' justifyContent='center'>
                                    <CustomImageList />
                                </Box>

                                <Typography textAlign='center' variant='h6'>
                                    Benefits of Bronze Rooms
                                </Typography>

                                <Typography textAlign='center' variant='body2' >
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam autem nostrum earum quos dolorem vel, modi molestias eveniet sit possimus voluptas aspernatur aliquam adipisci, enim explicabo veniam ex placeat.
                                </Typography>
                                <Box display='flex' mt='10px' justifyContent='center'>
                                    <Link to='bookinginfo'>
                                        <TheButton>
                                            Book Bronze Now
                                        </TheButton>
                                    </Link>
                                </Box>
                            </Box>
                        </Modal>
                    </Box>
                </Grid>

            </Grid>
            {/* <Box className={classes.textbox}>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, omnis aut a quisquam natus soluta distinctio beatae esse veritatis, labore consequatur error blanditiis, exercitationem aliquam possimus voluptate praesentium harum architecto? Provident exercitationem a voluptatibus quos voluptate, nihil, odit cumque inventore velit repellendus cum distinctio perferendis nisi amet vero ullam quas!
                </Typography>
            </Box> */}
            <Quote />

            <MediaControlCard />



        </Grid>
        <NewTestimonial />
        <Book />
        <RatingsSlider />
    </div >
    );
}

export default Homepage;