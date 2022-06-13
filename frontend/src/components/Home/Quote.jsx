import React from "react";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { Box, Typography } from "@mui/material";


const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.h6,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),

    },
    padding: theme.spacing(5)
}));

const Quote = () => {

    const content = (
        <Typography variant="h6" component="h6">
            {` "The spectacular location of this hotel, with its amazing views of Patagonia peaks,
             makes it special. A more perfect site would be difficult to find." `}
        </Typography>)
    const contenttwo = (
        <Typography variant="h6" component="h6">
            {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
           Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
           Sed malesuada lobortis pretium."`}
        </Typography>)
    return (
        <Grid m="auto" container>
            <Grid item xs>
                {content}
            </Grid>
            <Box m='auto'>
                <Divider orientation="vertical"
                    flexItem>
                    James A.Foveros
                </Divider>
            </Box>
            <Grid item xs>
                {contenttwo}
            </Grid>
        </Grid>
    );
}

export default Quote;