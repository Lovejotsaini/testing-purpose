import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Account=(props)=>{
    const [user,setUser]=useState({})

    useEffect(()=>{
        axios.get("http://dct-user-auth.herokuapp.com/users/account",{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        }).then((response)=>{
            const result=response.data
            setUser(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <h1>Account</h1>
            <p>email - {user.email}</p>
            <p>user - {user.username}</p>
        </div>
    )
}
export default Account