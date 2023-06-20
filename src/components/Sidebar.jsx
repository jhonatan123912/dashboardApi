import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const menuItem = [
        {
            path:'/top_rated',
            name:'TopRated'
        },
        {
            path:'/popular',
            name:'Popular'
        },
        {
            path:'/np',
            name:'NP'
        },
        {
            path:'/upcoming',
            name:'Upcoming'
        }   
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                <h1 className="header">Dashboard</h1>      
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="NavLink" activeClassName="active">
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
              <main>{children}</main>  
        </div>
    );
};

export default Sidebar;