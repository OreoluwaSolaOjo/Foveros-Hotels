import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: "30px",
        [theme.breakpoints.down("sm")]: {


        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
}))


const Book = () => {
    const classes = useStyles()
    const handleClick = () => {
        document.body.scrollTop = 60;
        document.documentElement.scrollTop = 60;
    };
    return (


        <Grid className={classes.item}>
            <Box m='auto'>
                <Typography className={classes.typographyone} gutterBottom variant="h6">
                    Ready to book your Room? The best service you would have is just a few clicks away!
                </Typography >
                <Box textAlign='center' m='auto'>
                    <Button onClick={handleClick}
                        variant="contained" backgroundColor={"primary.dark"} style={{

                            padding: "10px 55px",
                            height: '40px',
                            width: '200px',
                            borderRadius: "30px",
                            color: "white",
                            fontSize: "15px"
                        }}>Let's Go</Button>
                </Box>

            </Box>


        </Grid >

    );
}

export default Book;