import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';

export const Button = ( {value, dest, btnclass} ) => {

    const [name] = useState(value);

    return (
        <div>
            <Link to={ dest }>
                <button className={ btnclass }>
                    {name}
                </button>
            </Link>
        </div>
    )
}

export const Item = ( { secc, icons, sel } ) => {
    
    return (
        <li className={ sel }>
            <Link>
                <span className='NavIcon'>
                    <i className={ icons }></i>
                </span>
                <span className='Navtext'>{ secc }</span>
            </Link>
        </li>
    )
}


export const Entry = ( { Name, Type } ) => {

    return (
        <div className="login-container">
            <div className="login-group">
                <input className="login-input" type={Type}  placeholder=" " id={Name}/>
                <label className="login-label">{Name}</label>
                <span className="login-line"></span>
            </div>
        </div> 
    )
}


export const UserPf = () => {
    return (
        <div className='UserPf'>
            <div className="circle">
                <div className="circleImg">

                </div>
            </div>
        </div>
    )
}

