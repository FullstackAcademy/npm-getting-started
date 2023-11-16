import { useState } from 'react';

export const FlavorForm = () => {
  const [flavor, setFlavor] = useState("Vanilla");

  return (
    <div>
      <form onSubmit={evt => {
          evt.preventDefault();
          const flavorInput = evt.target.flavor;
          setFlavor(flavorInput.value);
          flavorInput.value = "";
      }}>
        <label htmlFor="flavor">Flavor</label>
        <input id="flavor" type="text" />  
        <button type="submit">Show Flavor</button>
      </form>
      <ul>
        <li>{flavor}</li>
      </ul>
    </div>
  );
};