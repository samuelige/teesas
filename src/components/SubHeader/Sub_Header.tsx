import React from 'react'
import { NavLink } from 'react-router-dom'
import { SubHeaderContainer } from './SubHeaderStyle';


type Props = {
    data: Record<string, any>[];
}



const SubHeader = ({data} : Props ) => {
    console.log(data)

    return (
        <SubHeaderContainer>
                {
                    data?.map(({path, label, Icon, alt}, index) => (
                        <NavLink key={index}
                            to={path}
                            style={({ isActive }) => (
                                { color: isActive ? 'black' : 'white',
                                    background: isActive ? 'linear-gradient(to bottom, #edffdf 0%, #d4ffcf 100%)' : 'transparent',}
                               
                                )}
                            className='nav_link  text-customBlack-100 text-xs sm+:text-sm  md:text-lg py-6'
                        >
                            <div>
                                <Icon/>
                                <h5>{label}</h5>
                            </div>
                            
                        </NavLink>
                    ))
                }
            </SubHeaderContainer>
    )
}

export default SubHeader
