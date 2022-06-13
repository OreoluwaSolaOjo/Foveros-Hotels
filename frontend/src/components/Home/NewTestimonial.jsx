import { Grid, Typography } from '@mui/material';
import React from 'react';
import testimonial from "../../assets/testimonial-1.png";


const gridstyle = {
    backgroundColor: 'primary.dark',

};
const styles = (theme) => ({
    root: {
        backgroundColor: 'blue',
        // Match [md, ∞)
        //       [900px, ∞)
        [theme.breakpoints.up('md')]: {
            backgroundColor: 'red',
        },
    },
});
const NewTestimonial = () => {

    return (
        <>
            <Grid sx={gridstyle} py={10} container>

                <Grid item xs={12} sm={6} px={5} order={{ xs: 2, sm: 1 }}>
                    <Typography color={'secondary.main'} variant='h6' component='h6' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolorem non. Ipsam atque vel, sunt voluptates doloremque quidem repellendus! Magnam debitis illo facere? Nemo cum delectus ducimus dolorem dicta, similique architecto voluptates dolorum. Quasi optio quis, eum dolorem esse praesentium accusantium tempora fugit doloremque! Numquam qui praesentium molestiae quibusdam quasi.
                    </Typography>
                </Grid>
                {/* Center an item in a material ui grid */}
                <Grid container
                    spacing={0}
                    pb={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                    <img height={340} width={340} src={testimonial} alt="testimonial" />
                </Grid>

            </Grid>
        </>
    );
};

export default NewTestimonial;