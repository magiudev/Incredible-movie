import React from 'react';

type props = {
    placeHolder: string
}

const InputText = ({placeHolder}: props) => {
  return (
    <input 
      type="text"
      placeholder={placeHolder} 
      className="placeholder:italic focus:outline-none min-w-0 px-1 m-1 border" 
    />
  );
};

export default InputText;