import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions';
import { connect } from 'react-redux';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const BooKButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    lineHeight: 1.5,
    backgroundColor: '#2196F3',
    color: '#fff',
    '&:hover': {
        color: '#001933 !important',
        backgroundColor: '#fff',
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



const useStyles = makeStyles((theme) => ({
    // breakpoints for differentscreens and what you want to show , check documentation
    // use justifyContent flex if items are to be aligned horizontally and use alignitems flex for vertical
    boxbuttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            display: (props) => (props.menuClicked ? "flex" : "none"),
            flexDirection: 'column',
            alignContent: 'center',
            marginBottom: 15,
            // color: "primary.dark",
        },
    },
    boxtypoicon: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down("md")]: {
            display: 'flex',
            alignItems: 'center'
        },
    },
    menuicon: {
        display: "none !important",
        [theme.breakpoints.down("md")]: {
            // display: (props) => (props.open ? "flex" : "none"),
            display: "flex !important",
            color: "#949997",


        },
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        opacity: 1,
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
            flexDirection: 'column',

        },
    },
    link: {
        margin: '0 auto',
        '&:hover': {
            color: "#007FFF",
        },
    },
    linkbook: {
        margin: '0 auto',
        '&:hover': {
            color: "#FFF !important",
        },
    },
    appbar: {
        opacity: 1,

    },

    button: {
        display: "flex",
        '&:hover': {
            color: "#007FFF",
        },
        [theme.breakpoints.down("md")]: {
            display: (props) => (props.menuClicked ? "flex" : "none !important"),
            // color: "primary.dark",
            '&:hover': {
                color: "#007FFF",
            },
        },
    },
    buttonBook: {
        display: "flex",
        borderRadius: '15px',
        '&:hover': {
            backgroundcolor: '#FFF !important',
            color: '#FFF !important'
        },
        [theme.breakpoints.down("md")]: {
            display: (props) => (props.menuClicked ? "flex" : "none !important"),
            // color: "primary.dark",
            '&:hover': {
                color: "#007FFF",
            },
        },
    },
}));

const toolbarfix = {
    backgroundColor: 'primary.dark'
}


const Navbar = ({ logout, isAuthenticated }) => {

    const [menuClicked, setMenuClicked] = React.useState(false)
    const classes = useStyles({ menuClicked });
    const toggleMenuClicked = () => {
        setMenuClicked(!menuClicked)
        console.log(menuClicked)
    }
    const guestLinks = () => (
        <>
            <Link className={classes.link} to='login'><Button color="secondary" className={classes.button}>Login</Button></Link>
            <Link className={classes.link} to='register'><Button color="secondary" className={classes.button}>Signup</Button></Link>
        </>
    )
    const authLinks = () => (
        <a href="#!" onClick={logout}><Button color="secondary" className={classes.button}>Logout</Button></a>
    );

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.appbar}>
                <Toolbar sx={toolbarfix} className={classes.toolbar}>
                    <Box className={classes.boxtypoicon}>
                        <Typography variant="h5" textAlign='center' component="h5" sx={{ flexGrow: 1 }}>
                            Foveros Hotels
                        </Typography>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="menu"
                            sx={{ mr: 1 }}
                            onClick={toggleMenuClicked}
                        >
                            {menuClicked ? <HighlightOffIcon sx={{
                                height: 35,
                                width: 35
                            }} className={classes.menuicon} /> : <MenuIcon sx={{
                                height: 35,
                                width: 35
                            }} className={classes.menuicon} />}
                        </IconButton>
                    </Box>
                    <Box className={classes.boxbuttons}>
                        <Link className={classes.link} to='/'><Button color="secondary" className={classes.button}>Home</Button></Link>
                        <Link className={classes.link} to='/contact'><Button color="secondary" className={classes.button}>Contact Us</Button></Link>
                        {isAuthenticated ? authLinks() : guestLinks()}
                        <Link className={classes.linkbook} to='/bookingpage'>
                            <BooKButton className={classes.buttonBook}>Book Now</BooKButton></Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.reducers.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);