import React from 'react'
interface ButtonProps {
    text: string;
    icon: React.ReactNode;
    bgColor: string;
    textColor:string;
    onclick: () => void;
    onHover:string;
}
const Button: React.FC<ButtonProps> = ({ text, onclick, icon, bgColor,textColor,onHover }) => {
    return (
        <div onClick={onclick} className={`${bgColor } ${onHover} cursor-pointer rounded-3xl px-[4px] py-[4px] lg:px-4 lg:py-[8px] lg:w-[120px] w-[80px] flex justify-center items-center gap-1 text-white`}>
            <div className='flex items-center justify-center gap-1 font-extralight'>
                <p className={`${textColor}`}>{text}</p>
                {icon}
            </div>
        </div>
    )
}

export default Button
