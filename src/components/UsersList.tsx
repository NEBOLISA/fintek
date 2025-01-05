import React from 'react'
import User from './User'
import avater from '../assets/human1.jpeg'
interface UserData {
  id: number;
  name: string;
  avatar: string;
}

interface UsersListProps {
  data: UserData[];
}

const UsersList: React.FC<UsersListProps> = ({data}) => {
  return (
    <div className='bg-white my-4 rounded-lg h-[85vh]'>
      <h2 className='px-6 py-4'>Users</h2>
      <div className='overflow-y-auto h-full pb-8'>

      {data && data.map((user)=>(
        <User key={user.id} name={user.name} image={avater}/>
      ))}
      
      </div>
    </div>
  )
}

export default UsersList
