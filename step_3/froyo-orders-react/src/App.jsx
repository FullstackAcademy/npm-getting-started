import { Flavor } from './Flavor';
import { Counter } from './Counter';
export const App = () => {
  return (
    <div>
      <Counter />
      <ul>
        <Flavor name="Vanilla" />
        <Flavor name="Chocolate" />
        <Flavor name="Strawberry" />
      </ul>
    </div>
  );
}