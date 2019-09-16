import React, { useState } from 'react';

const SearchParams = () => {
  // React Hook
  const [location, setLocation] = useState('Seattle, WA');

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
        <button>submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
