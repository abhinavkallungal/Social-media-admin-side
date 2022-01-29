import { InputLabel, Typography } from '@material-ui/core';
import { Button, FilledInput, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBanner } from '../../axios';
import './AddBanner.css'




function AddBanner() {
    const history =useHistory()
    const [banner, setBanner] = useState({ days: 5 })
    const [files, setFiles] = useState([])
    const [blob, setBlob] = useState('')
    const [error, setError] = useState({})

    const handleChange = (e) => {

        setBanner(banner => ({ ...banner, [e.target.name]: e.target.value }))

    }

    const handelFile = (event) => {

        if (event.target.files.length !== 0) {

            setBlob(URL.createObjectURL(event.target.files[0]))
            setFiles(event.target.files)

            setBanner(banner => ({ ...banner, [event.target.name]: event.target.value }))

        } else {
            setBlob("")
            setFiles([])
        }
    }

    const submit = () => {
        const formData = new FormData
        let valid = true
        if (banner.days) {
            formData.append("days", banner.days)
        } else {
            valid = false
        }
        if (banner.description) {
            formData.append("description", banner.description)
        } else {
            valid = false
        }
        if (files.length > 0) {
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i])
            }
        } else {
            valid = false
        }

        if (valid) {
            createBanner(formData).then(() => {
                history.push('/banner')
                setBanner({ days: 5, description: "", })
                setBlob("")
                setFiles([])
            })

        } else {

        }


    }

    return <div>
        <div className="card p-4">

            <h4>  Banner Management </h4>


            <div className='row  align-items-center'>
                <div className="col-lg-6">

                    <TextField variant="outlined" label="description" inputProps={{ maxLength: 40 }} name='description' fullWidth value={banner.description} onChange={handleChange} className="mt-4"></TextField>
                    <FormControl variant='outlined' fullWidth style={{ border: "1px solid #c4c4c4", borderRadius: "3px", padding: "13px", marginTop: "30px" }}>
                        <input type="file" name="files" multiple={false} value={banner.files} id="" onChange={handelFile} accept='image/*' />
                    </FormControl>
                    <FormControl fullWidth className="mt-4">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Days"
                            name='days'
                            onChange={handleChange}

                        >
                            <MenuItem value={5}>5 Days</MenuItem>
                            <MenuItem value={10}>10 Days</MenuItem>
                            <MenuItem value={15}>15 Days</MenuItem>
                        </Select>
                    </FormControl>

                   
                    <Button className='mt-3' variant='outlined' onClick={submit}>Add Banner</Button>
                </div>

                <div className='col-lg-5'>
                    {
                        blob && <div className='SidebarBanner'>
                            <div className="banner">
                                <img src={blob} alt="" />
                                <span>{banner.description}</span>
                            </div>


                        </div>
                    }



                </div>
            </div>

        </div>
    </div>;
}

export default AddBanner;
