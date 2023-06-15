import React, {useState} from "react";
import {Box, Grid, IconButton, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import logo from '../Assets/logo.PNG';
import personaFeliz from '../Assets/OIP.jpeg';
import Button from "@mui/material/Button";
import {Visibility, VisibilityOff} from "@mui/icons-material"; // Tell webpack this JS file uses this image
import { purple, lightBlue } from '@mui/material/colors';
import ButtonBase from '@mui/material/ButtonBase';

import Stack from '@mui/material/Stack';


const Img = styled('img')({
    margin: 20,
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: '40px',


});
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function LogIn(){
    let [showPassword, setShowPassword] = useState(false);
    let handleClickShowPassword = () => setShowPassword(!showPassword);
    let handleMouseDownPassword = () => setShowPassword(!showPassword);
    const primary = lightBlue[100]; // #f44336
    const secondary = lightBlue[50];

    return(

        <div className="home">
            <Box sx={{ flexGrow: 1 }} mt={2}>
                <Grid container spacing={2} >
                    <Grid item xs={6} mt={4}>
                        <Grid
                            container
                            spacing={2}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ minHeight: '50vh' }}
                        >
                            <Grid item xs={6} >
                            <img src={logo} alt="Logo" height={'70px'} />
                            </Grid>
                            <Typography variant="h4" sx={{padding:3}}>Welcome Back!</Typography>

                            <Grid  xs={6} mb={2}>
                            <TextField id="filled-basic" label="Email" variant="filled" required
                                       fullWidth mb={10}/>
                                <Grid mt={4}>
                            <TextField id="password" label="Password" variant="filled"  type={showPassword ? "text" : "password"}
                                       required
                                       fullWidth
                                       InputProps={{
                                           endAdornment: (
                                               <InputAdornment position="end">
                                                   <IconButton
                                                       aria-label="toggle password visibility"
                                                       onClick={handleClickShowPassword}
                                                       onMouseDown={handleMouseDownPassword}
                                                   >
                                                       {showPassword ? <Visibility /> : <VisibilityOff />}
                                                   </IconButton>
                                               </InputAdornment>
                                           )
                                       }}/>
                            </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth type="submit"> LOG IN </Button>
                            </Grid>


                            </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ bgcolor: primary, marginRight:3, marginTop:2, paddingBottom:10}}>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                                style={{ minHeight: '10vh' }}

                            >
                                <Img src={personaFeliz} alt="Imagen"  />
                            </Grid>

                            <Paper
                                sx={{
                                    margin: 'auto',
                                    maxWidth: 300,
                                    bgcolor: secondary,
                                }}
                            >

                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >

                                    <Grid container spacing={3}>
                                        <Grid item xs={2}>

                                            <div style={{ marginLeft: 10, marginTop:40, marginBottom:20, marginRight:0, borderLeft: '10px solid blue', height: '25%' }} />

                                        </Grid>
                                        <Grid item xs={8}>
                                            <Stack spacing={1} marginTop={1} marginBottom={1}>
                                                <Typography color="primary" align="left"> Ericka</Typography>
                                                <Typography>"El mejor nddjd ajdjdjakid d dkaikdidia"</Typography>

                                            </Stack>
                                        </Grid>
                                        <Grid item xs>

                                            <div style={{ borderRight: '20px solid blue', height: '100%' }} />

                                        </Grid>
                                    </Grid>
                                </Grid>








                            </Paper>



                        </Box>


                    </Grid>


                </Grid>
            </Box>
        </div>
    );
}
export default LogIn;