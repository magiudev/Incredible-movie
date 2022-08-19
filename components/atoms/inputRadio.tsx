import React from 'react';

type props = {
  id: string;
  value: string
  setChange: Function;
  checked: boolean
  name?: string;
}

const InputRadio = ({id, name, value, setChange, checked}: props) => {

  const  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setChange(e.target.value);

  return (
    <input 
      id={id} 
      type="radio"
      name={name} 
      value={value} 
      className="m-1" 
      checked={checked}
      onChange={handleChange} 
    />
  );
};

export default InputRadio;