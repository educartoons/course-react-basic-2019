import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  // React Hook
  const [location, setLocation] = useState('Seattle, WA');

  const [animal, setAnimal] = useState('dog');

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
        <label htmlFor="animal">
          Animal:
          <select
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
            name=""
            id="animal"
          >
            <option value="">All</option>
            {ANIMALS.map((animal, i) => (
              <option key={i} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
