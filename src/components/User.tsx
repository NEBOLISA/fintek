import React from 'react'


interface UserProps{
    name:string,
    image:string
}

const User:React.FC<UserProps> = ({name,image}) => {
    return (
        <div className="flex  cursor-pointer border-y-[1px] shadow-sm px-3 p-1 bg-white gap-4 items-center">
            <img
                src={image}
                alt="Circular Image"
                className="w-8 h-8 border-[1px]  border-gray-300 rounded-full object-cover"
            />
            <h3 className='font-light text-[12px]'>{name}</h3>
        </div>
    )
}

export default User
