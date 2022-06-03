import React from 'react'
import { Link } from 'react-router-dom'

interface CustomLinkProps {
    path: string, 
    children: React.ReactNode,
    index?: number
};

const CustomLink = ({children, path, index} : CustomLinkProps) => {
    return (
        <Link className="cursor-pointer " key={index} to={path} >
            {children}
        </Link>
    )
}

export default CustomLink