import { Flavor } from './Flavor';
import { HelloButton } from './HelloButton';
export const App = () => {
  return (
    <div>
      <HelloButton />
      <ul>
        <Flavor name="Vanilla" />
        <Flavor name="Chocolate" />
        <Flavor name="Strawberry" />
      </ul>
    </div>
  );
}