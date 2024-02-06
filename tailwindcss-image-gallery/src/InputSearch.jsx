import React, { useState } from 'react';

export const InputSearch = ({ handleFilterChange}) => {
    const [text,setText] = useState("");
    const handleSubmit = (event) =>  {
        event.preventDefault();
        handleFilterChange(text)
    }
  return (
    <div className='flex  justify-center'>
      <form className='w-full max-w-sm ' onSubmit={handleSubmit}>
        <div className='flex items-center border-b border-b-2 '>
          <input placeholder="search..." className='mx-2  border-teal-500 appearence-none bg-gray text-white text-black p-2 border border-white rounded-l w-full' value={text} onChange={(event)=>setText(event.target.value)}/>
          <button type='submit' className='bg-blue-500 text-white p-2 rounded-r'>Search</button>
        </div>
      </form>
    </div>
  );
};
