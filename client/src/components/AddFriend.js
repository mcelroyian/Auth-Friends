import React, {useState} from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const init={
    name: '',
    age: 0,
    email: '',
}

const AddFriend = props => {

    const [newFriend, setNewFriend] = useState(init)

    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                props.setFriends(res.data)
                setNewFriend(init)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>Name:</label>
                <input 
                    type='text'
                    name='name'
                    id='name'
                    value={newFriend.name}
                    onChange={handleChanges}
                />
                <label htmlFor='age'>Age:</label>
                <input 
                    type='number'
                    name='age'
                    id='age'
                    value={newFriend.age}
                    onChange={handleChanges}
                />
                <label htmlFor='email'>Email:</label>
                <input 
                    type='text'
                    name='email'
                    id='email'
                    value={newFriend.email}
                    onChange={handleChanges}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend