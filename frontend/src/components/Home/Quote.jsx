import React from "react";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

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
        <div>
            {` "The spectacular location of this hotel, with its amazing views of Patagonia peaks,
             makes it special. A more perfect site would be difficult to find." `}
        </div>)
    const contenttwo = (
        <div>
            {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
           Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
           Sed malesuada lobortis pretium."`}
        </div>)
    return (
        <Grid container>
            <Grid item xs>
                {content}
            </Grid>
            <Divider orientation="vertical" flexItem>
                James A.Foveros
            </Divider>
            <Grid item xs>
                {contenttwo}
            </Grid>
        </Grid>
    );
}

export default Quote;