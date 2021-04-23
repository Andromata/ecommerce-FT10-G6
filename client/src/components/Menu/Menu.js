/*eslint-disable*/
import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { setMenu } from '../../redux/actions/request'
import { logout } from '../../redux/actions/auth';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import '../../scss/components/_menu.scss';

function Menu() {
    const [rol, setRol] = useState(102)
    const dispatch = useDispatch()
    const { menu } = useSelector((store) => store.reducerLoading)
    const { currentUser } = useSelector((store) => store.auth)
    
    useEffect(() => {
        if(currentUser?.roleId){
            setRol(currentUser.roleId)
        }
    }, [currentUser])

    useEffect(() => {
    }, [menu])
  
    const showSidebar = () => {
        dispatch(setMenu(!menu))
    }

    function handleLogOut() {
        dispatch(logout())
        location.assign("http://localhost:3000")
      }
      
    return (
        <>
            <IconContext.Provider value={{ color: ' #19f9a4 ' }}>
                <nav className={menu ? 'navmenu active' : 'navmenu'}>
                    <ul className='navmenu-items'>
                        <li className='navbarm-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            if(item.belong.includes(rol)){
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path} onClick={showSidebar}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                        {
          currentUser?.name ?
            <button type="button" className="signin--btn" onClick={handleLogOut}>Log Out</button>
            :
            <>
              <Link to="/signin">
                <button className="signin--btn btn-primary" type="button">Sign in</button>
              </Link>
              <Link to="/register">
                <button className="signin--btn btn-secondary" type="button">Sign up</button>
              </Link>
            </>
        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Menu