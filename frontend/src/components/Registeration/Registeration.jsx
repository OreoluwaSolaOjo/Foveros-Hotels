import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions';
// import { useForm } from "react-hook-form";


const SignUp = ({ signup, isAuthenticated }) => {

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     login({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     })
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        re_password: ''
    });
    const [accountCreated, setAccountCreated] = React.useState(false)
    const { firstName, lastName, email, password, re_password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const navigate = useNavigate()
    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            // sign up function from actions in redux takes in firstname, lastName, email and password
            signup(firstName, lastName, email, password, re_password)
            setAccountCreated(true)
        }

        console.log({
            formData
        });

    };
    if (isAuthenticated) {
        navigate('/')
    }
    // navigate to login if account created is true which implies sign up is successful
    if (accountCreated) {
        navigate('/login')
    }
    return (
        <Grid pt={10} pb={20}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'primary.main', color: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="firstName"
                            label="Enter Your First Name"
                            name="firstName"
                            autoComplete="firstName"
                            value={firstName}
                            onChange={e => onChange(e)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="lastName"
                            label="Enter Your Last Name"
                            name="lastName"
                            autoComplete="lastName"
                            value={lastName}
                            onChange={e => onChange(e)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={e => onChange(e)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => onChange(e)}
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="re_password"
                            label="Confirm Password"
                            type="password"
                            id="re_password"
                            value={re_password}
                            onChange={e => onChange(e)}
                            autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            {/* <Grid item xs>
                                <Link to="/reset_password" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid> */}
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Grid>

    );
}
const mapStateToProps = state => ({
    isAuthenticated: state.reducers.isAuthenticated,
})
// connect to state
export default connect(mapStateToProps, { signup })(SignUp);