import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ( { linkData } ) => {
 
const listsLinks = linkData.map( (link) => {
    return (
        <NavLink to={`list ${link.id}`}  >{link.title}</NavLink> 
        ) }
    )
    return (
        <nav className='app_navigation'>
            {listsLinks}
        </nav>
    )
}

export default Navigation;