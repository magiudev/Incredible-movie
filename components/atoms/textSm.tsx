import React from 'react';

type props = {
    children: string
}

const TextSm = ({children}: props) => {
  return (
    <p className='text-xs inline-block'>{children}</p>
  );
};

export default TextSm;