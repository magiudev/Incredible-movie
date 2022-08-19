import React from 'react';

type props = {
    placeHolder: string;
    min?: number;
    max?: number;
}

const InputNumber = ({placeHolder, min = 0, max = 10}: props) => {
  return (
    <input 
      placeholder={placeHolder} 
      className="px-1 m-1 focus:outline-none border min-w-[4rem] placeholder:italic" 
      type="number" 
      min={min} 
      max={max}
    />
  );
};

export default InputNumber;