import React from 'react';

const Card = ({children}:{children: string}) => {
  return (
    <div className='flex items-center justify-center p-1 h-52  w-52 shadow text-center'>{children}</div>
  );
};

export default Card;