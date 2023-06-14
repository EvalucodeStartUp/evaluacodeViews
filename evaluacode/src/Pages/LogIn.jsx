import React, {useState} from "react";
import {Box, Grid, IconButton, InputAdornment, Paper, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import logo from '../Assets/logo.PNG';
import Button from "@mui/material/Button";
import {Visibility, VisibilityOff} from "@mui/icons-material"; // Tell webpack this JS file uses this image



function LogIn(){
    let [showPassword, setShowPassword] = useState(false);
    let handleClickShowPassword = () => setShowPassword(!showPassword);
    let handleMouseDownPassword = () => setShowPassword(!showPassword);
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
                            <Typography variant="h4" sx={{padding:3}}>Welcome Back! </Typography>

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
                      azul
                    </Grid>


                </Grid>
            </Box>
        </div>
    );
}
export default LogIn;