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
import { reset_password_confirm } from '../../redux/actions';
// import { useForm } from "react-hook-form";

// find out what match is used for
const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    // state used for redirecting once password is reset
    const [requestSent, setRequestSent] = React.useState(false)
    const [formData, setFormData] = React.useState({
        new_password: '',
        re_new_password: ''
    });
    const { new_password, re_new_password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const navigate = useNavigate()
    const { uid, token } = useParams();
    const onSubmit = e => {
        e.preventDefault();

        // const uid = match.params.uid;
        // const token = match.params.token

        reset_password_confirm(uid, token, new_password, re_new_password)
        setRequestSent(true)
        console.log({
            formData
        });

    };
    // once done it redirects to homepage
    if (requestSent) {
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
                        Request Password Reset:
                    </Typography>
                    <Box component="form" onSubmit={e => onSubmit(e)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="new_password"
                            label="New Password"
                            type="new_password"
                            id="password"
                            value={new_password}
                            onChange={e => onChange(e)}
                            autoComplete="current-password"
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="re_new_password"
                            label="Confirm New Password"
                            type="re_new_password"
                            id="password"
                            value={re_new_password}
                            onChange={e => onChange(e)}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Reset Password
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Grid >

    );
}

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);