import React from 'react';
import NavMenu from '../molecules/navMenu';

const Navbar = () => {
  return (
    <nav className='flex justify-center gap-2 items-center p-2 shadow bg-gray-50 mb-1'>
      <NavMenu />
    </nav>
  );
};

export default Navbar;