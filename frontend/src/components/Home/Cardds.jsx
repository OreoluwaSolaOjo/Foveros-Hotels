import * as React from 'react';

import { Box, Card, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({

}));

const itemData = [
    {
        img: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },]



export default function MediaControlCard() {
    const classes = useStyles()
    return (
        <Grid container direction='row'>
            {itemData.map((item) => {
                <Grid item xs={6}>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={item.image}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6'>
                                {item.title}
                            </Typography>
                        </Box>
                    </Card >
                </Grid>

            })}

        </Grid>


    );
}