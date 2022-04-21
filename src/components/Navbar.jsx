import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/four-leaf.png';
import IconSignOut from '../assets/icons/exit.svg';

import { useAuth } from '../context/AuthContext';
// import Roket from '../assets/icons/rocketWhite.svg';

export const Navbar = () => {
  const { state } = useAuth();
  const user = state?.user;

    return (
      <div className="flex items-center justify-between px-5 lg:px-40 2xl:px-[30%] h-16 p-3 gap-9 fixed w-full bg-white backdrop-filter backdrop-blur-md bg-opacity-70 border-b border-black">
        <Link
          to="/"
          className="flex items-center font-gtultra font-bold text-xl md:text-xl"
        >
          <img src={Logo} width="50" alt="No te quedes pelado" />
          Natilleando
        </Link>
        <div className="items-center">
          {user ? (
            <Link
              to="/login"
              className="flex items-center justify-between gap-2 text-black bg-white transition py-2 px-5 w-full"
            >
              <img src={IconSignOut} width="30" alt="Salir" />
              Salir
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-black text-white transition py-2 px-5 w-full hover:opacity-60"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    );
    }
    