import axios from 'axios'


export const login =(formdata)=>{
    return new Promise(async(resolve,reject)=>{
        console.log(formdata);
        axios.post('http://localhost:4000/api/v1/admin/login',formdata).then((data)=>{

        localStorage.setItem("token", data.data.token)
        console.log(data.data);
        localStorage.setItem("admin",JSON.stringify( data.data.admin))

            resolve(data)

        }).catch((err)=>{
            console.log('err',err);
            reject(err)
        })
    })

}

export const getUsers =()=>{
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")


        axios.get('http://localhost:4000/api/v1/admin/getAllUsers',{ headers: { Authorization: token } }).then((data)=>{
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}

export const deleteUser =(userId)=>{
    
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")

        axios.patch('http://localhost:4000/api/v1/admin/deleteUser',{userId},{ headers: { Authorization: token } }).then((data)=>{
            console.log(data.data.users);
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}

export const editUser =(formdata)=>{
    
    return new Promise(async(resolve,reject)=>{
        const token = localStorage.getItem("token")

        axios.patch('http://localhost:4000/api/v1/admin/editUser',formdata,{ headers: { Authorization: token } }).then((data)=>{
            console.log(data.data.users);
            resolve(data)

        }).catch((err)=>{
            reject(err)

        })
    })

}