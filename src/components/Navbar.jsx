import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from "../context/AuthContext";
import { useAuthentication } from '../hooks/useAuthentication';

import Logo from '../assets/images/four-leaf.png';
import IconSignOut from '../assets/icons/exit.svg';

export const Navbar = () => {
  const { state } = useAuth();
  const { onLogOut } = useAuthentication();
  const { user } = state;

  return (
    <div className="flex items-center justify-between px-5 lg:px-40 2xl:px-[30%] h-16 p-3 gap-9 fixed w-full z-50 bg-white backdrop-filter backdrop-blur-md bg-opacity-70 border-b border-black">
      <Link
        to="/"
        className="flex items-center font-gtultra font-bold text-lg"
      >
        <img src={Logo} width="45" alt="No te quedes pelado" />
        Natilleando
      </Link>
      <div className="items-center">
        {user ? (
          <button
            onClick={onLogOut}
            className="flex items-center justify-between gap-2 text-black transition py-2 px-5 w-full"
          >
            <img src={IconSignOut} width="30" alt="Salir" />
            Salir
          </button>
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
    