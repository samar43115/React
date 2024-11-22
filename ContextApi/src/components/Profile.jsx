import  { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
  if(!user) return <div>Please login again! no user data found</div>
  
  return <div> Welcome {user.username}!</div>

}

export default Profile