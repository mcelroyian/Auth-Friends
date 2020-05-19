import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Friends = props => {

    const [friends, setFriends] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getFriends()
    }, [])

    const getFriends = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }
    if (isLoading) return <h2>Friends data is loading</h2>

    return (
        <div>
            Friends
            {friends.map(friend => {
                return (
                    <div className='friend' key={friend.id}>
                    <h2>{friend.name}</h2>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Friends