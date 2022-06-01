import React, { Fragment } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { site_logo } from '../../constants/image';
import ButtonIcon from '../Button/ButtonIcon';
import { ButtonWrapper, CentainerItem, Container, NavbarLinks, NavbarLinksMobile, NavbarLinksMobileContainer, NavbarLogo } from './ClientNavbarStyle';
import { data } from './data';
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi"
import useToggle from '../customHooks/useToggle';



const ClientNavbar = () => {
    const [value, toggleValue] = useToggle(false);
    let navigate = useNavigate();
    
    const handleRoute = (route: string) : any => {
        navigate(route);
    }
  return (
    <Container>
        <NavbarLogo>
            <img src={site_logo} alt="app_logo"/>
        </NavbarLogo>
        <NavbarLinks>
            {
                data && data.map(({id, name, path}) => (
                    <Fragment>
                        <li key={id}>
                            <Fragment>
                                
                                {
                                    name !== 'Login' && name !== 'Register' ? (
                                        <li>
                                            <Link to={path}>{name}</Link>
                                        </li>
                                    ): (
                                        <li>
                                            <ButtonWrapper>
                                                <ButtonIcon handleClckEvent={() => handleRoute(path)}>
                                                    <CentainerItem>
                                                        {
                                                            name === 'Register' ? (
                                                                <FaSignOutAlt/>
                                                            ):(
                                                                <FaSignInAlt/>
                                                            )
                                                        }
                                                        
                                                        <p>{name}</p>
                                                    </CentainerItem>
                                                </ButtonIcon>
                                            </ButtonWrapper>
                                        </li>
                                    )
                                }
                                
                            </Fragment>
     
                        </li>
            
                    </Fragment>
                    

                    
                    
                ))
            }

 
        </NavbarLinks>

        <NavbarLinksMobile>
            {
                !value ? <HiMenu size={27} onClick={() => toggleValue(true)}/> 
                : <HiX size={27} onClick={() => toggleValue(false)}/>
            }

            {
                value && (
                    <NavbarLinksMobileContainer>
                        {
                            data && data.map(({id, name, path}) => (
                                <Fragment>
                                    <li key={id}>
                                        <Fragment>
                                            {
                                                name !== 'Login' && name !== 'Register' ? (
                                                    <li>
                                                        <Link to={path}>{name}</Link>
                                                    </li>
                                                ): (
                                                    <li>
                                                        <ButtonWrapper>
                                                            <ButtonIcon handleClckEvent={() => handleRoute(path)}>
                                                                <CentainerItem>
                                                                    {
                                                                        name === 'Register' ? (
                                                                            <FaSignOutAlt/>
                                                                        ):(
                                                                            <FaSignInAlt/>
                                                                        )
                                                                    }
                                                                    
                                                                    <p>{name}</p>
                                                                </CentainerItem>
                                                            </ButtonIcon>
                                                        </ButtonWrapper>
                                                    </li>
                                                )
                                            }
                                            
                                        </Fragment>
                
                                    </li>
                        
                                </Fragment>
                            ))
                        }
                    </NavbarLinksMobileContainer>
                    
                    
                )
            }
            

      </NavbarLinksMobile>
    </Container>
  )
}

export default ClientNavbar