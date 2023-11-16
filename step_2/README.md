# Step 2: Intro to React
In [Step 1](../step_1/README.md), we discussed how JavaScript libraries can help us by giving us access
to code others have written in our own projects. We also converted a simple random name generator webpage into one that works in a terminal.

In this step, we aim to eventually turn that back into a proper web app!

By the end of this step, you should understand how to:
- organize your own code into separate ES6 modules
- use [parcel](https://parceljs.org/) to bundle NPM projects into a web application
- use [React](https://react.dev/) to make simple web applications

## Part I: Named Imports and Exports
We last left off by asking you to add the following line to the top of your `index.js` file:

```javascript
import { faker } from "@faker-js/faker";
```

This syntax is using what is called [named imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#named_import), so called because you are naming the specific things you want imported. 

That is, the `@faker-js/faker` module has exported an object named `faker`. You can create your own modules and create named exports by using the `export` keyword.


If you navigate to the `part_1` directory and run `npm run start` from a terminal, you should see the following output:
```
> part_1@1.0.0 start
> node src/index.js

Evens: [ 2, 4, 6, 8, 10 ]
Sum: 55
```

If you then take a look at the top of `./task_6/src/index.js`, you should see the following import line:
```javascript

import { evens, sum } from './numbers.js';
```

If you then look at `./task_6/src/numbers.js`, you should see a series of function definitions that look identical to functions we've written in the past, with 1 exception: the `export` keyword.

If you've been doing the [exercism](https://exercism.org/tracks/javascript) exercises, this might look familiar.

This keyword takes the definition that follows it and makes it a named export. 

Note that the `isEven` function is *not* preceded by an `export` keyword. That means that other modules *cannot* import this function.

The reason for doing such a thing is that in this case, having such a helper function made writing `evens` and `odds` easy without having to duplicate much code. However, we want (for our own selfish reasons, not any practical one) to only make available those functions that operate on arrays of numbers, so we choose not to export it.

### Task 6
1. Edit `index.js` and update the program to print out the product of the `numbers` variable, as well as which numbers are odd. Use similar formatting to what was used when printing out the sum of all numbers and which numbers were even.
2. Add `isEven` to your imports, uncomment the last line in `index.js` and try running the code. What happens?
3. Update `numbers.js` so that `isEven` is exported
4. Try running the code again, and it should work now

## Part 2: Default Imports and Exports
Another way to import code is with a default import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#default_import). The syntax is similar to named imports, except that it's restricted to importing a single item, and doesn't include curly braces. If you take a look at [./task_2/src/index.js](https://github.com/FullstackAcademy/npm-getting-started/blob/main/step_2/task_2/src/index.js) you'll see an example:

```
import Numbers from './numbers.js';
```

You'll also notice that rather than calling functions, we instantiate the class `Numbers` and call methods on it instead of calling functions. 

If you then take a look at `./task_7/src/index.js`, you'll see that we defined the `Numbers` class and converted all the functions into methods instead. The other thing to notice is that instead of `export class` as you might expect, we have `export default class`. This is what makes it a default export.

### Task 7
1. Remove the keyword `default` from the export in `./task_7/src/numbers.js`. 
2. Try to run the code again. What happens?
3. Update the import statement in `./task_7/src/index.js` so that it uses named imports for the `Numbers` class
4. Try running the code again
