import { Flavor } from './Flavor';

export const FlavorList = (props) => {
  return (
    <ul>
      {props.flavors.map(flavor => (
        <Flavor key={flavor} name={flavor} />
      ))}
    </ul>
  );
}