import { useState } from 'react';
import { FlavorList } from './FlavorList';

export const FlavorForm = () => {
  const [flavors, setFlavors] = useState([]);

  return (
    <div>
      <form onSubmit={evt => {
          evt.preventDefault();
          const flavorInput = evt.target.flavor;
          setFlavors([
            ...flavors,
            flavorInput.value
          ]);
          flavorInput.value = "";
      }}>
        <label htmlFor="flavor">Flavor</label>
        <input id="flavor" type="text" />  
        <button type="submit">Show Flavor</button>
      </form>
      <FlavorList flavors={flavors} />
    </div>
  );
};