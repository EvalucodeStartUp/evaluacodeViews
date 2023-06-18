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
import {useNavigate} from "react-router-dom";


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
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `courses`;
        navigate(path);
    }
    let [showPassword, setShowPassword] = useState(false);
    let handleClickShowPassword = () => setShowPassword(!showPassword);
    let handleMouseDownPassword = () => setShowPassword(!showPassword);
    const primary = lightBlue[100]; // #f44336
    const secondary = lightBlue[50];

    return(

        <div className="home">
            <Box sx={{ display: 'flex', height: `calc(100vh - ${15}px)` }}>
                <Box sx={{ flex: 10, backgroundColor: 'white' }}>
                    <Grid
                        container
                        spacing={1}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '50vh' }}
                        xs = {12}
                        mt={10}
                    >
                        <Grid item xs={12} mb={3}>
                            <img src={logo} alt="Logo" height={'70px'} />
                        </Grid>
                        <Typography variant="h4" sx={{padding:3, marginBottom:3}}>Welcome Back!</Typography>

                        <Grid  xs={12} mb={3}>
                            <TextField id="filled-basic" label="Email" variant="filled" required
                                       fullWidth mb={10} sx={{ width: '120%' }}/>
                            <Grid mt={4}>
                                <TextField id="password" label="Password" variant="filled"  type={showPassword ? "text" : "password"}
                                           required
                                           fullWidth sx={{ width: '120%' }}
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
                        <Grid item >
                            <Button variant="contained" fullWidth type="submit" onClick={routeChange}> LOG IN </Button>
                        </Grid>


                    </Grid>

                </Box>

                <Box sx={{ flex: 10, backgroundColor: primary }}>
                    <Box sx={{  marginRight:0, marginTop:0, marginBottom:'100%'}} >
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"


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



                </Box>

            </Box>
        </div>
    );
}
export default LogIn;