import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import testimonial from "../../assets/testimonial-1.png";


const gridstyle = {
    backgroundColor: 'primary.dark',
    padding: 10,
};
const NewTestimonial = () => {

    return (
        <>
            <Grid sx={gridstyle} py={10} container>
                <Grid sm={6} px={5}>
                    <Typography color={'secondary.main'} variant='h5' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolorem non. Ipsam atque vel, sunt voluptates doloremque quidem repellendus! Magnam debitis illo facere? Nemo cum delectus ducimus dolorem dicta, similique architecto voluptates dolorum. Quasi optio quis, eum dolorem esse praesentium accusantium tempora fugit doloremque! Numquam qui praesentium molestiae quibusdam quasi.
                    </Typography>
                </Grid>
                <Grid sm={6}>
                    <img src={testimonial} alt="testimonial" />
                </Grid>

            </Grid>
        </>
    );
};

export default NewTestimonial;