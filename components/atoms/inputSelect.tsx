import React from 'react';

const InputSelect = () => {
  return (
    <div className="px-1 m-1 border">
      <select  className="focus:outline-none opacity-70">
        <option value="all">All</option>
        <option value="action">Action</option>
        <option value="comedies">Comedy</option>
        <option value="anime">Anime</option>
        <option value="horror">Horror</option>
      </select>
    </div>
  );
};

export default InputSelect;