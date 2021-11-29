import React from 'react'
import './LoginPage.css'
import { TextField, Typography, FormControl, Button } from '@mui/material'

function LoginPage() {
    return (
        <div className="loginpage">

            <div className="row">
                <div className="col-lg-4">
                    <div className="card shadow p-5">
                        <Typography variant="h4" className="text-center" style={{fontWeight:"bold"}}> ADMIN LOGIN </Typography>
                        <FormControl className="mt-4">

                            <TextField id="outlined-basic" label="Email" variant="outlined" />

                        </FormControl>
                        <FormControl className="mt-4">

                            <TextField id="outlined-basic" label="Password" variant="outlined" />

                        </FormControl>
                        <Button variant="contained" className="mt-4">LOGIN</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
