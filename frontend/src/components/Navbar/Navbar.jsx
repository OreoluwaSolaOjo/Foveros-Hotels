import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    // breakpoints for differentscreens and what you want to show , check documentation
    // use justifyContent flex if items are to be aligned horizontally and use alignitems flex for vertical
    toolbar: {
        display: "flex",
        justifyContent: "space-between",

        opacity: 1,
    },
    appbar: {
        opacity: 0.7,

    },
    button: {
        display: "flex",
        '&:hover': {
            color: "#007FFF",
        },
        [theme.breakpoints.down("sm")]: {
            // display: (props) => (props.open ? "flex" : "none"),
            display: "none !important",
            color: "primary.dark",
        },
    },
    menuicon: {
        display: "none",
        [theme.breakpoints.down("sm")]: {
            // display: (props) => (props.open ? "flex" : "none"),
            display: "flex",
            color: "#949997",
            height: '50px',
            width: '50px',
        },
    }
}));

const toolbarfix = {
    backgroundColor: 'primary.dark'
}


const Navbar = ({ logout, isAuthenticated }) => {
    const classes = useStyles();
    const guestLinks = () => (
        <>
            <Link to='login'><Button color="secondary" className={classes.button}>Login</Button></Link>
            <Link to='register'><Button color="secondary" className={classes.button}>Signup</Button></Link>
        </>
    )
    const authLinks = () => (
        <a href="#!" onClick={logout}><Button color="secondary" className={classes.button}>Logout</Button></a>
    );

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar sx={toolbarfix} className={classes.toolbar}>

                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Foveros Hotels
                    </Typography>
                    <Button color="secondary" className={classes.button}>Home</Button>
                    <Button color="secondary" className={classes.button}>Contact Us</Button>
                    <Button color="secondary" className={classes.button}>About Us</Button>
                    {isAuthenticated ? authLinks() : guestLinks()}
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="menu"
                        sx={{ mr: 1 }}

                    >
                        <MenuIcon sx={{ height: 35, width: 35, }} className={classes.menuicon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.reducers.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);