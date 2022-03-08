import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Admin.css';
import { Link } from 'react-router-dom';


function Admin(props) {
    return (
        <div className='admin'>
            <h1>Welcome Admin</h1>
            <Stack spacing={2} direction="row">
            <div className='buttons'>
            <Link to="/pending" className='link'>
            <Button variant="contained">Pending for approval</Button>
            </Link>
            <br></br><br></br><br></br>
            <Link to="/search" className='link'>
            <Button  variant="contained">Search Trainer and Allocate</Button>
            </Link>
            <br></br><br></br><br></br>
            <Link to="/allocate" className='link'>
            <Button  variant="contained">Allocate</Button>
            </Link>
            <br></br><br></br><br></br>
            <Link to="/calendar" className='link'>
            <Button  variant="contained">Schedule</Button>
            </Link>
            
            <br></br><br></br><br></br>
            <Link to="/course_batch" className='link'>
            <Button  variant="contained">List of Courses and Batches</Button>
            </Link>
            
            </div>
    </Stack>
        </div>
    );
}

export default Admin;