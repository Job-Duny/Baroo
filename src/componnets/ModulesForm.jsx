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


export const UserPf = ( { User }) => {
    return (
        <div className='UserPf'>
            <div className="circle">
                <div className="circleImg">
                </div>
            </div>
            <div className="NamePf">
                <h3>Bienvenido</h3>
                <h2>{ User }</h2>
            </div>
        </div>
    )
}

export const Reciente = ( {gasto, value, date, icons} ) => {
    

    return (
        <div className='GasUnit'>
                <li>
                    <div className="GasDat">
                        <span className='GasIcon'>
                            <i className={ icons }></i>
                        </span>
                        <span className='GasName'>{ gasto }</span> 
                    </div>
                    <span className="GasDate">{ date }</span>
                    <span className="GasCos"> ${ value }</span>
                </li>



            

        </div>
    )
}


//Botones de Registro de perfiles
export const Perfil = ({icon,perfil,descripcion,des}) =>{

    return(

        <Link to={des}>

            <button className="Bt-perfiles" type='submit'>

                
                <i className={icon} ></i>
                <br></br>
                

                <div className="text">
                    <h4>{perfil}</h4>
                    <br></br>

                    <p>{descripcion}</p>
                </div>
           </button>
        </Link>

    )

}


