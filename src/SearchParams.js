import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropDown from './useDropdown';

const SearchParams = () => {
  // React Hook

  const [location, setLocation] = useState('Seattle, WA');

  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropDown('Animal', 'Dog', ANIMALS);
  const [breed, BreedDropdown] = useDropDown('Breed', '', breeds);

  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location:
          <input
            id="location"
            value={location}
            placeholder="Location"
            type="text"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />

        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
