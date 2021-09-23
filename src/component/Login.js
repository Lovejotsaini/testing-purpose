import React, { useState } from 'react'
import axios from 'axios'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: email,
            password: password
        }
        axios.post("http://dct-user-auth.herokuapp.com/users/login", formData)
            .then((response) => {
                const result = response.data
                console.log(response.data)
                if (result.hasOwnProperty('errors')) {
                    alert(result.errors)
                } else {
                    alert('successfully logged in')
                    localStorage.setItem('token',result.token)
                    props.history.push("/")
                    props.handleAuth()
                }
            }).catch((err) => {
                alert(err)
            })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <h1>Register with us</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="enter email"
                    value={email}
                    onChange={handleEmailChange}
                    name="email"
                /><br />

                <input
                    type="password"
                    placeholder="enter password"
                    value={password}
                    onChange={handlePassChange}
                    name="password"
                /><br />

                <input type="submit" />
            </form>
        </div>
    )
}

export default Register