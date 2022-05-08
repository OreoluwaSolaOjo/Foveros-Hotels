import { Box, Button, CardMedia, Container, Grid, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { Divider, Typography } from "@mui/material";
import React from "react";
import CarouselPlay from "./CarouselPlay";
import { useState } from 'react';
import Quote from "./Quote";
import MediaControlCard from "./Cardds.jsx";
import SimpleSlider from "./Reviews";
import RatingsSlider from "./Reviews";
import NewTestimonial from "./NewTestimonial";



const useStyles = makeStyles((theme) => ({
    typography: {
        paddingTop: theme.spacing(6),
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
    }
}));




const Homepage = () => {
    const [openSilver, setOpenSilver] = useState(false);
    const [openBronze, setOpenBronze] = useState(false);
    const classes = useStyles({ openSilver, openBronze });
    return (<div>
        <Grid container>
            {/* use box component from material ui to center the text */}
            <Box m="auto">
                <Typography className={classes.typography} style={{ fontWeight: 600 }} variant="h3" component="h2">
                    Why Foveros Hotels?
                </Typography>
            </Box>
            <Box m="auto" pt={2} pl={12} pr={12}>
                <Typography variant="h6" component="h5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati facilis accusantium sequi totam, qui molestiae eligendi atque dolor labore voluptatibus nam voluptatem nobis delectus voluptas ullam nisi iure aliquam, libero provident animi. Ea rem soluta expedita aut a magni voluptatibus dolore. Est a, sed explicabo nisi voluptatum blanditiis enim ut doloremque? Reprehenderit odit ea harum eveniet tempora at debitis, optio blanditiis commodi nostrum omnis eaque, expedita nobis facilis, temporibus explicabo. Eveniet quidem quae autem. Officia sed obcaecati optio iste labore?
                </Typography>
            </Box>
            <Box sx={{ mx: "auto", marginTop: 50, marginBottom: 50, width: 600 }}>
                <CarouselPlay />
            </Box>

            <Grid container className={classes.offerContent} >
                <Grid item sm={4}>
                    <Box className={classes.boxoffers} onClick={() => {
                        setOpenSilver(false)
                        setOpenBronze(false)
                    }}>
                        <Typography variant="h5" className={classes.typographyoffers}>
                            Gold
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box className={classes.boxoffers} onClick={() => {
                        setOpenSilver(true)
                        setOpenBronze(false)
                    }}>
                        <Typography variant="h5" className={classes.typographyoffers}>
                            Silver
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={4}>
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
                <Grid item sm={6}>
                    <Box className={classes.boxofferscontent} pl={4} pr={4} pt={5}>
                        <Typography variant="body" component="h3">
                            Gold Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil minus exercitationem doloremque, nostrum architecto id dignissimos amet aspernatur, reprehenderit aut officiis tempore, laboriosam vitae? Placeat, harum ex nihil asperiores molestiae nam, et laboriosam error sed optio, cupiditate fugit odio.
                        </Typography>
                        <Button className={classes.button}>Gold Offers</Button>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Box pl={2} pt={5} height={450} width={300}>
                        <CardMedia
                            component="img"
                            height="294"
                            image="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Paella dish"
                        />
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Box pr={2} pt={5} height={450} width={300}>
                        <CardMedia
                            component="img"
                            height="294"
                            image="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Paella dish"
                        />
                    </Box>
                </Grid>
            </Grid>
            {/* SILVER */}
            <div >
                <Grid container className={classes.offerContentSilver}>
                    <Grid item sm={6}>
                        <Box className={classes.boxofferscontent} pl={4} pr={4} pt={5}>
                            <Typography variant="body" component="h3">
                                Silver Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil minus exercitationem doloremque, nostrum architecto id dignissimos amet aspernatur, reprehenderit aut officiis tempore, laboriosam vitae? Placeat, harum ex nihil asperiores molestiae nam, et laboriosam error sed optio, cupiditate fugit odio.
                            </Typography>
                            <Button className={classes.button}>Silver Offers</Button>
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box pl={2} pt={5} height={450} width={300}>
                            <CardMedia
                                component="img"
                                height="294"
                                image="https://images.pexels.com/photos/3144580/pexels-photo-3144580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Paella dish"
                            />
                        </Box>
                    </Grid>
                    <Grid item sm={3}>
                        <Box pr={2} pt={5} height={450} width={300}>
                            <CardMedia
                                component="img"
                                height="294"
                                image="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="Paella dish"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </div>
            {/* BRONZE */}
            <Grid container className={classes.offerContentBronze}>
                <Grid item sm={6}>
                    <Box className={classes.boxofferscontent} pl={4} pr={4} pt={5}>
                        <Typography variant="body" component="h3">
                            Bronze Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nihil minus exercitationem doloremque, nostrum architecto id dignissimos amet aspernatur, reprehenderit aut officiis tempore, laboriosam vitae? Placeat, harum ex nihil asperiores molestiae nam, et laboriosam error sed optio, cupiditate fugit odio.
                        </Typography>
                        <Button className={classes.button}>Bronze Offers</Button>
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Box pl={2} pt={5} height={450} width={300}>
                        <CardMedia
                            component="img"
                            height="294"
                            image="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Paella dish"
                        />
                    </Box>
                </Grid>
                <Grid item sm={3}>
                    <Box pr={2} pt={5} height={450} width={300}>
                        <CardMedia
                            component="img"
                            height="294"
                            image="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="Paella dish"
                        />
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
        <RatingsSlider />
    </div >
    );
}

export default Homepage;