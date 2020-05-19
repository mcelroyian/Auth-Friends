import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router'
import axios from 'axios'

const initialCreds = {
    username: '',
    password: '',
}

const Login = props => {
    const history = useHistory()
    const [credentials, setCredentials] = useState(initialCreds)

    const handleChanges = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        })
    }
    const submitLogin = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('api/login', credentials)
            .then(res => {
                //res.data.payload
                localStorage.setItem('token', res.data.payload)
                history.push('/friends')
            })
            .catch(err => console.log(err))
    }
    const pass = 'i<3Lambd4'
    return (
        <div className='form-container'>
        <div><p>Lambda School  {pass}</p> </div>
            <form onSubmit={submitLogin}>
                <h2>Login</h2>
                <label htmlFor='username'>Username</label>
                <input  id='username' 
                        name='username' 
                        type='text' 
                        value={credentials.username}
                        onChange={handleChanges}
                />
                <label htmlFor='password'>Password</label>
                <input  id='password' 
                        name='password' 
                        type='password' 
                        value={credentials.password}
                        onChange={handleChanges}
                />
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login