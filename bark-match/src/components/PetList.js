// PetList.js
import React from 'react';

const PetList = ({ pets }) => {
  return (
    <div>
      <h2>Available Pets</h2>
      <ul>
        {pets.map(pet => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
