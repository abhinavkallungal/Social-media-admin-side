import React, { useState, useEffect } from 'react';
import { getUsers ,deleteUser,editUser} from '../../axios'
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Button,Switch } from '@mui/material';
import { DeleteRounded } from '@mui/icons-material'
import Swal from 'sweetalert2'



import './ViewUser.css'
import { useHistory } from 'react-router-dom';









function ViewUsers() {
    const history=useHistory()

    const columns = [

        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'First Name', width: 180 },
        { field: 'username', headerName: 'User Name', width: 180 },
        { field: 'isActive', headerName: 'Active Status', width: 180},
        {
            field: 'Block',
            headerName: 'Block / Unblock',
            sortable: false,
            width: 180,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    console.log(params);
    
    
                };

                const onChange=(e)=>{
                    editUser({userId:params.row.id,status:!params.row.isActive}).then((data)=>{
                        const rows = data.data.users.map((item) => {
                            return { ...item, id: item._id }
                        })
                        setUsers(rows)

                    }).catch((err)=>{
                        if (err.response.status == 403) {
                            localStorage.removeItem("token");
                            
                            history.push('/login')
                        }

                    })
                }

                
    
                return <Switch checked={!params.row.isActive}  onChange={onChange} name="loading" color="primary" />
            }
    
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); 
                    Swal.fire({
                        title: 'Are you sure?',
                        text: `You won't be able to revert this!`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
    
                            deleteUser(params.row._id).then((data)=>{
                                console.log(data);
                                const rows = data.data.users.map((item) => {
                                    return { ...item, id: item._id }
                                })
                                setUsers(rows)
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
    
                            }).catch((err)=>{
                                if (err.response.status == 403) {
                                    localStorage.removeItem("token");
                                    
                                    history.push('/login')
                                }
                            })
                         
                        }
                      })
    
                    console.log(params);
    
    
                };
    
                return <IconButton onClick={onClick} style={{ backgroundColor: "#1976d2" }}><DeleteRounded style={{ color: 'red' }} /></IconButton>;
            },
        },
       
        
        
    ];
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers().then((data) => {
            const rows = data.data.users.map((item) => {
                return { ...item, id: item._id }
            })
            console.log(rows);
            setUsers(rows)
        }).catch((err) => {
            if (err.response.status == 403) {
                localStorage.removeItem("token");
                
                history.push('/login')
            }

        })

    }, [])


    return (
        <div className="ViewUser card p-4">
            <div className="header">

                <h3>Users</h3>
                <Button variant="contained">Add User</Button>
            </div>


            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}

                    pagination
                    dense
                />
            </div>
        </div>
    )
}

export default ViewUsers
