import React, { ReactNode } from 'react';

type props = {
  children: ReactNode,
  id: string
}

const Label = ({id, children}: props) => {
  return (
    <label className="whitespace-nowrap" htmlFor={id}>{children}</label>
  );
};

export default Label;