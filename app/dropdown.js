'use client'

import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleSelect}>
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
