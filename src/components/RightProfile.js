import React from 'react';
import './css/dashboard.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const RightProfile = props => {

    function clickMe() {
        alert("clickMe() function is working");
    }

    return (
        <div>
            <div className="flexbox-item">
                <div>
                    <h5>Upcoming Reservation Details</h5>
                </div>

                <Stack spacing={2} direction="column">
                    <TextField id="standard-basic-1" label="City:" variant="standard" defaultValue="helsinki" />
                    <TextField id="standard-basic-2" label="Building:" variant="standard"  defaultValue="Main Building" />
                    <TextField id="standard-basic-3" label="Room" variant="standard"  defaultValue="Romeo" />
                    <TextField id="standard-basic-4" label="Spot:" variant="standard"  defaultValue="Whole Rome" />
                    <Stack spacing={2} direction="row">
                        <Button onClick={clickMe} variant="contained">Add new</Button>
                        <Button onClick={clickMe} variant="contained">Modify</Button>
                        <Button onClick={clickMe} variant="outlined">Delete</Button>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
};

export default RightProfile;