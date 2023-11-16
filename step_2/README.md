# Step 2: Intro to React
In [Step 1](../step_1/README.md), we discussed how JavaScript libraries can help us by giving us access
to code others have written in our own projects. We also converted a simple random name generator webpage into one that works in a terminal.

In this step, we aim to eventually turn that back into a proper web app!

By the end of this step, you should understand how to:
- organize your own code into separate ES6 modules
- use [parcel](https://parceljs.org/) to bundle NPM projects into a web application
- use [React](https://react.dev/) to make simple web applications

## Part I: Named Imports 
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

If you then take a look at the top of [./part_1/src/index.js](https://github.com/FullstackAcademy/npm-getting-started/blob/main/step_2/task_1/src/index.js), you should see the following import line:
```javascript

import { evens, sum } from './numbers.js';
```

If you then look at [./part_1/src/numbers.js](https://github.com/FullstackAcademy/npm-getting-started/blob/main/step_2/task_1/src/numbers.js), you should see a series of function definitions that look identical to functions we've written in the past, with 1 exception: the `export` keyword.

If you've been doing the [exercism](https://exercism.org/tracks/javascript) exercises, this might look familiar.

This keyword takes the definition that follows it and makes it a named export. 

Note that the `isEven` function is *not* preceded by an `export` keyword. That means that other modules *cannot* import this function.

The reason for doing such a thing is that in this case, having such a helper function made writing `evens` and `odds` easy without having to duplicate much code. However, we want (for our own selfish reasons, not any practical one) to only make available those functions that operate on arrays of numbers, so we choose not to export it.

### Task 1
1. Edit `index.js` and update the program to print out the product of the `numbers` variable, as well as which numbers are odd. Use similar formatting to what was used when printing out the sum of all numbers and which numbers were even.
2. Uncomment the last line and try running the code. What happens?
3. Update `numbers.js` so that `isEven` is exported, and add it to your import statement in `index.js`. 
4. Try running the code again, and it should work now
