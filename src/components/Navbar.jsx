import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/four-leaf.png';
import Roket from '../assets/icons/rocketWhite.svg';


export const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-5 md:px-64 h-16 p-3 lg:px-96 2xl:px-[30%] gap-9 fixed w-full bg-white backdrop-filter backdrop-blur-md bg-opacity-70 border-b border-black'>
            <a href="" className='flex items-center font-gtultra font-bold text-xl md:text-xl'>
                <img src={Logo} width="50" alt="No te quedes pelado" />
                Natilleando
            </a>
            <div className='items-center hidden md:flex md:gap-4'>
                <Link to="">Iniciar sesion</Link>
                <Link to="" className='flex items-center bg-black hover:opacity-70 transition text-white px-3 py-2 rounded-md'>
                    <img src={Roket} width="30" alt="Ser socio" />
                    Ser socio</Link>
            </div>
        </div>
        )
    }
    