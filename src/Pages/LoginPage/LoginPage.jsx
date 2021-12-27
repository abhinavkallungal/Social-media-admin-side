import React, { useState } from 'react'
import './LoginPage.css'
import { TextField, Typography, FormControl, Button } from '@mui/material'
import {login} from '../../axios'
import { useHistory } from 'react-router'


function LoginPage() {

    const history =useHistory()
    const[admin,setAdmin]=useState({email:null,password:null})
    const[error,setError]=useState({error:false,message:null})

    const handleInput= (e)=>{
        setAdmin({ ...admin, [e.target.name]: e.target.value})
    }

    const handleSubmit= ()=>{
        console.log(admin);
        var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (admin.email === "") {

            setError({ error: true, message: "Email Is Requerd" })

        }
        else if (!regex.test(admin.email)) {

            setError({ error: true, message: "invalid Email format " })

        } else if (admin.password === "") {

            setError({ error: true, message: "Password Is Requerd" })

        }else{
            login(admin).then((data)=>{
                history.push('/')

            }).catch((error)=>{
                
                
                setError({ error: true, message: error.response.data.message })

            })

        }
    }

    return (
        <div className="loginpage">

            <div className="row">
                <div className="col-lg-4">
                    <div className="card shadow p-5">
                        <Typography variant="h4" className="text-center" style={{fontWeight:"bold"}}> ADMIN LOGIN </Typography>
                        <FormControl className="mt-4">

                            <TextField id="outlined-basic" onChange={handleInput} label="Email" name="email" type="email" required variant="outlined" />

                        </FormControl>
                        <FormControl className="mt-4">

                            <TextField id="outlined-basic"  onChange={handleInput} label="Password" name="password" type="password" required variant="outlined" />

                        </FormControl>
                        {
                            error.error && <span style={{color:"red"}}>{error.message}</span>

                        }
                        <Button variant="contained" className="mt-4" onClick={handleSubmit}>LOGIN</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
