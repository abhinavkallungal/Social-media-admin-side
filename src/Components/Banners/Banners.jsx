import { Button, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBanners ,deleteBanner } from '../../axios';


function Banners() {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        getAllBanners().then((data) => {
            console.log(data);
            setBanners(data.data.Banner)
        }).catch((error) => {

        })
    }, [])

    const handleDelete=(id)=>{
        deleteBanner(id).then((data)=>{
            setBanners(data.data.Banner)
        })

    }
    return <div className='Banners'>
        <div className='d-flex justify-content-between p-3'>

        <Typography  variant='h4'>Banner Management</Typography>

        <Link  style={{textDecoration:"none"}} to='/addBanner'>
        <Button variant='contained' style={{color:"#000",backgroundColor:"#0FFF5070"}} >Add Banner</Button>
        </Link>

        </div>
        <div className="card  p-2"  >
            {
                banners ? banners.map((banner, index) => {
                    return (
            

                            <div className=' col-lg-4 SidebarBanner' >
                                <div className="banner">
                                    <img src={banner.files[0]} alt="" />
                                    <span>{banner.description}</span>
                                </div>
                                <Button onClick={()=>handleDelete(banner._id)} style={{textDecoration:"none",color:"red"}} > Delete </Button>


                            </div>
                       

                    )
                }) : null

            }
        </div>

    </div>
}


export default Banners
