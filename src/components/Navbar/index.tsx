import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import {Styles} from './styles';
import {SideBarData} from './SidebarData';

import {IconContext} from 'react-icons';

import { useAuth } from '../../hooks/auth';

const Navbar = () => {

    const{signOut} = useAuth();

    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);
    return (
        <Styles>
            <IconContext.Provider value={{color: '#fff'}}>

                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSideBar}/>
                    </Link>
                    <div className="logo">
                        <h2>    
                            <Link to="/home">
                                IDENTOOLFIER - LDTI
                            </Link>
                        </h2>
                    </div>

                </div>
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSideBar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars2'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {
                            SideBarData.map((item, index) => (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.icon} {item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                                 <li key={'portal'} className={'nav-text'}  >
                                    <a href={'https://portalldti.netlify.app/'}>
                                        <span><FaIcons.FaEnvelope/> Sobre Nós</span>
                                    </a>
                                </li>
                                <li key={'sair'} className={'nav-text'} onClick={signOut} >
                                    <Link to={''}>
                                        <span><AiIcons.AiOutlineExport/> Sair</span>
                                    </Link>
                                </li>
                    </ul>
                </nav>
            </IconContext.Provider>
            
        </Styles>
    )
}

export default Navbar;
