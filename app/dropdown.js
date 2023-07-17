'use client'

import React, { useState, useRef } from 'react';
import axios from 'axios';

const Dropdown = ({setCategory, value}) => {
  const option = useRef()


  const handleSelect = async () => {
    setCategory(option.current.value)
  };

  return (
    <select value={value} onChange={handleSelect} className='rounded-md bg-gray-200 text-gray-700 p-3' ref={option}>
      <option value="All">All Products</option>
      <option value="Bracelets">Bracelets</option>
      <option value="Necklaces">Necklaces</option>
      <option value="Watches">Wrist Watches</option>
      <option value="Rings">Rings</option>
      <option value="Chains">Chains</option>
    </select>
  );
};

export default Dropdown;
