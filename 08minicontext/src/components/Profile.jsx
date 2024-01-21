import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
const {user} = useContext(UserContext)
    let styles={
        color:'Red',
        fontWeight:'bold',
        textTransform:'uppercase',
    }
    if(!user) return <div style={styles}>! please login !</div>
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile