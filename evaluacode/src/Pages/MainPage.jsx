import React from "react";
import Button from '@mui/material/Button';
import {Grid, Paper, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import { styled } from '@mui/material/styles';
import mainImg from "../Assets/mainImg.jpeg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#224C8D"),
    backgroundColor: "#224C8D",
    '&:hover': {
        backgroundColor: "#224C00",
    },
    marginLeft: "auto",
    padding: 10, margin: 5, width: 150
}));

function MainPage(){
    return(
        <div className="mainPage">

            <Grid container spacing={2} p={3}>
                <Grid item xs={6}>
                    <Paper elevation={0} sx={{textAlign: 'center', paddingTop:2}}>
                    <img src={mainImg} alt="mainImg" style={{ width: "90%" }}/>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper elevation={0} sx={{textAlign: 'center', paddingTop:2 }}>
                        <Typography variant="h3" gutterBottom>
                            Autograde your coding classroom
                        </Typography>
                        <ColorButton  variant="contained" endIcon={<ArrowForwardIcon />}>
                            Demo
                        </ColorButton>

                        </Paper>
                </Grid>


            </Grid>

        </div>
    );
}
export default MainPage;