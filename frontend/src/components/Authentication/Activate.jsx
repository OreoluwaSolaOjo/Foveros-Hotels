import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { connect } from 'react-redux';
import { verify } from '../../redux/actions';
// import { useForm } from "react-hook-form";


const Activate = ({ verify }) => {

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
    const [verified, setVerified] = React.useState(false)
    const navigate = useNavigate()
    const { uid, token } = useParams();
    const verify_account = e => {
        e.preventDefault();
        verify(uid, token)
        setVerified(true)

    };
    if (verified) {
        navigate('/')
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
                        Verify Account
                    </Typography>


                    <Button
                        onClick={verify_account}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Verify
                    </Button>

                </Box>
            </Container>
        </Grid>

    );
}

export default connect(null, { verify })(Activate);