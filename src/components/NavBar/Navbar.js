import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Navlogo1 from '../../img/header-logo white 1.png';
import Navlogo2 from '../../img/Cisco logo.png'
import {
    NavbarContainer,
    MobileIcon, NavMenu, NavItem,
} from './NavbarElements'
import { IconContext } from 'react-icons/lib'
import './Header.css'


export default function Header(props) {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [navbar, setNavbar] = useState(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
           
        }
        else {
            setButton(true)
        }
    }
    useEffect(() => {
        showButton()
    }, [button])
    window.addEventListener('resize', showButton)
    const handleClick = () => setClick(!click)
 
   const changeBackground = () => {
       
       if(window.scrollY >= 80) {
           setNavbar(true)
       } else {
           setNavbar(false)
       }
   }

   window.addEventListener('scroll', changeBackground)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav expand='lg' className={navbar ? 'navbar active' : 'navbar'}>
                    <NavbarContainer>
                        <a href='/' className="navlogos">
                            <img src={Navlogo1} alt="logo1" className="navlogo"/>
                            <img src={Navlogo2} alt="logo2" className="navlogo"/>
                        </a>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <a href='/' className="navlink">
                                    Cisco Smart Net
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href='#serviceContact' className="navlink">
                                   Замена оборудования 
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href='#livecycleAdvantage' className="navlink" >
                                   Livecycle Advantage
                                </a>
                            </NavItem>
                            <NavItem>
                                <a href='/' className="navlink" >
                                    Презентации
                                </a>
                            </NavItem>
                            <NavItem>
                                <a  href='#contactSection' className="navlink" >
                                    Контакты
                                </a>
                            </NavItem>
                            
                        </NavMenu>
                    </NavbarContainer>
                </nav>
            </IconContext.Provider>
        </>
    )
}

