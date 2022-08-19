import React from 'react';

type props = {
    children: string
}

const Text = ({children}: props) => {
  return (
    <p className='inline-block'>{children}</p>
  );
};

export default Text;