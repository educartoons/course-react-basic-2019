import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
  // React Hook

  const [location, setLocation] = useState('Seattle, WA');
  const [animal, setAnimal] = useState('dog');
  const [breed, setBreed] = useState('breed');
  const [breeds, setBreeds] = useState([]);

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
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
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
