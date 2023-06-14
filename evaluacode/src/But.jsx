import React from "react";
import Button from '@mui/material/Button';

export default function But(){
    return(
        <div>
            <h1>hey</h1>
            <Button variant="contained">Start</Button>
            <Button variant="contained" disabled>
                Start
            </Button>
            <h1>hello from but </h1>
        </div>
    )
}