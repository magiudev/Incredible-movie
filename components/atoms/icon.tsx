import Image from 'next/image';
import React from 'react';

import logo from '../../public/logo.png';

export type IconIdType = 'logo'; // | "search" | ...

type props = {
  id?: IconIdType,
  height?: number,
  width?: number
}

const Icon = ({id = 'logo', height = 30, width = 30}: props) => {
  switch (id) {
  
  default:
  // case 'logo':
    return(
      <div className='flex items-center'>
        <Image
          src={logo}
          alt="Logo"
          layout='fixed'
          height={height}
          width={width}
        />
      </div>
    );
  }
};

export default Icon;