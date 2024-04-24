import React from 'react';
import ReactDOM from 'react-dom/client';
import {Outlet} from 'react-router';
import {NavLink} from 'react-router-dom';

export default function Header()
//function - name (with big letter)
{
    // in retiurn - ONLY one div
    return(
         
        <div className="container"> 
            <div className='header'>
                <div className="text">
                    <h1>API</h1>
                </div>
                <div className="links">
                    
                    <NavLink to='/'> Continents </NavLink>
                </div>
                
            </div>

            <div className="content">
                <Outlet/>

            </div>

            <div className="footer">
                <h1>API_COUNTRIES</h1>
                <p>Copyright © 2024. All rights reserved.</p>
            </div>
        </div>
    )
}


