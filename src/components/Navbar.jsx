import { useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { Outlet } from 'react-router-dom';
import Footer from './footer';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className='flex justify-between items-center w-full p-4 h-[10vh] bg-[#ac2454] xl:justify-center relative'>
        <div className='text-center xl:w-1/6 z-20'>
          {' '}
          {/* Añadido z-index */}
          <h1 className='text-3xl font-bold p-1 text-white'>Los Cerezos</h1>
        </div>
        <nav
          className={`fixed bg-cerezo w-[80%] h-full font-bold ${
            showMenu ? 'left-0 bg-[#ac2454]' : '-left-full'
          } top-0 flex-1 flex flex-col items-center justify-center z-10 gap-10 transition-all duration-500 ease-in-out text-white
            xl:static xl:flex-row xl:w-full`}
        >
          <a href='/'>Inicio</a>
          <a href='/sobre-nosotros'>Sobre Nosotros</a>
          <a href='/servicios'>Servicios</a>
          <a href='/terapias'>Terapias</a>
          <a href='/galeria'>Galeria</a>
          <a href='/salidas'>Salidas</a>
          <a href='/contactos'>Contactos</a>
        </nav>
        <button
          className='text-2xl xl:hidden'
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoIosClose className='text-white' />
          ) : (
            <IoIosMenu className='text-white' />
          )}
        </button>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};
