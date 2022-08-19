import Link from 'next/link';
import React from 'react';
import Icon from '../atoms/icon';

const NavMenu = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <Icon id='logo' height={20} width={50}/>
        </a>
      </Link>
    </div>
  );
};

export default NavMenu;