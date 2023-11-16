# Step 3: React
In step 3, we finally got back to building web apps. In this step, we're going to introduce you to just enough [React](https://react.dev/) to be dangerous. By the end of this step, you should understand how to:
- create a new React project from scratch using Parcel
- define and use static components
- make components interactive using `useState`

## Part I: Initial Set Up
Before jumping into React, we need to create a new NPM project that has the minimum requirements. To that end,
we're going to create a project named "froyo-orders-react" that combines everything we've learned up until this point.

## Task 10
Create a new NPM project named "froyo-orders-react":

```shell
mkdir froyo-orders-react
cd froyo-orders-react
npm init -y
```

Add Parcel to your dependencies:
```shell
npm install --save-dev parcel
```

Don't forget to update your `package.json` file so that it includes a `"source"` property and a new `"start"` script:

```diff
{
  "name": "froyo-orders-react",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
+  "source": "src/index.html",
  "scripts": {
+    "start": "parcel",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.10.3"
  }
}
```

Create a `src` directory:
```shell
mkdir src
```

Then add the file `src/index.html` with the following in it:
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Froyo Orders</title>
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

Add the file `src/index.js` with the following contents:
```javascript
document.body.innerHTML = "<h1>Hello, World!</h1>";
```

If everything is set up correctly, you should be able to run `npm run start` as before and visit the displayed URL (usually http://localhost:1234) in a browser and see "Hello, World!"

## Part II: Hello, React!
Up until now,  you've learned two ways to add content to a web page:
1. Writing HTML directly
2. Using `document.createElement` and friends to dynamically create that content

React gives us a way to combine the approaches. That is, we're still writing JavaScript to dynamically create content, but can use a syntax called [JSX](https://react.dev/learn/writing-markup-with-jsx) to ease the pain of writing markup (HTML tags). Let's compare a simple example of creating an unordered list using all 3 approaches.

HTML:
```html
<ul class="my-list">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
```

JavaScript:
```javascript
// Variables starting with "$" are DOM elements 
const $ul = document.createElement("ul");
$ul.classList.add("my-list")

["First", "Second", "Third"].forEach(content => {
    const $li = document.createElement("li");
    $li.textContent = content;
    $ul.appendChild($li)
});

document.body.replaceChildren($ul);
```

JavaScript (alternative):
```javascript

// Variables starting with "$" are DOM elements 
const $ul = document.createElement("ul");
$ul.classList.add("my-list")

$ul.innerHTML = `
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
`;

document.body.replaceChildren($ul);
```

JSX:
```jsx
<ul className="my-list">
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ul>
```

Note that the JSX version allows us to write something almost identical to the vanilla HTML version. The only difference is that `class` changed to `className`, and that's because at the end of the day, JSX is still JavaScript, and class is a reserved word, much like `while`, `for`, and `if`.

The JSX example isn't entirely equivalent to the vanilla JavaScript example, as JSX alone doesn't provide us an equivalent to `$document.body.replaceChildren($ul)`; For that, we need to create a React component, then render it.

In React, you typically create so-called components by defining a function that returns JSX. For example, we can turn the above JSX into a component with the following code:

```javascript
export const MyList = () => {
    return (
        <ul className="my-list">
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ul>
    )
}
```

Let's add the above component to our `froyo-orders-react` project and get it to render.

## Task 11

First, install the dependencies we need to write React:
```shell
npm install react react-dom
```

Next, copy the above `MyList` component into a new file located at `src/MyList.jsx`. 

Note that the `.jsx` extension is what tells us that the file includes some JSX code in it. Naming the file with a normal `.js` extension also works, but using `.jsx` makes it easier to distinguish between regular JavaScript modules.

Next, replace the contents of `src/index.js` with the following code:
```javascript
import { createRoot } from "react-dom/client";
import { MyList } from "./MyList";

const root = createRoot(document.querySelector("#app"));
root.render(<MyList />);
```

Finally, run your app and make sure you can see the unordered list:
```shell
npm run start
```

Pro-Tip: Before continuing, be sure to commit your work!