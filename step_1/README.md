# Step 1: JavaScript Libraries

By the end of this step, you should understand how to:
- use CDN libraries to add JavaScript libraries to vanilla HTML/CSS/JavaScript Projects
- create a new NPM project
- search for JavaScript libraries to use in that project
- install and use those JavaScript libraries

## Part I: CDN
Up until now, you've been including a single JavaScript file in your
projects by using a `<script>` tag. If you want to use JavaScript
libraries, you can add more `<script>` tags to include them as global
variables. 

Say you want to create a simple page that displays a random name every 
time you reload the page. One library that will help you do that is 
[Faker](https://fakerjs.dev/).

The method `faker.name.firstName()` will generate a random name each time it's run. 

In order to add `Faker` to your page, you'll need to include it via [CDN](https://developer.mozilla.org/en-US/docs/Glossary/CDN). The simple explanation is that a CDN a way to make content available to webpages in a convenient way. Imagine you want to add some feature to your web page, but don't want to spend hours writing the functionality yourself. Using a script tag pointing to a CDN will allow you to use pre-existing code to implement that feature. 

Once you decide to use a CDN, the next problem becomes finding a library that meets your needs. One easy way to find libraries exposed using a CDN is to search for them on [cdnjs](https://cdnjs.com/libraries).

For example, if you want to generate random names, you might do something like the following:
```javascript
const names = ["John", "Jill", "Bob", "Sarah", "LaTisha", "Marcus", "Damian"];
const randomName = names[Math.floor(Math.random() * names.length)]
```

The problem is that the more random you want your names to be, the more names
you have to come up with. Fortunately, there's a library called Faker.js that allows you to, once installed, write the following instead:

```
const randomName = faker.name.firstName();
```

In task 1 below, you'll learn how to install and use Faker.

### Task 1
1. Go to [cdnjs](https://cdnjs.com/libraries) and search for "Faker".
2. Click on the "Copy Script Tag" (</>) icon. 
3. Paste the copied code into the appropriate place in ./task_1/index.html
4. Preview the page and refresh. Notice how the name keeps changing! 

### Solution
You can find the solution on branch [task_1_solution](https://github.com/edwin-fsa/npm-getting-started/tree/task_1_solution)

## Part II: NPM Projects
In modern projects, instead of using CDNs, we'll use NPM to create projects. Thus, before we can recreate the above
(albeit simple) app using NPM packages, we need to take a detour to talk briefly about NPM itself.

To create a NPM project, you need to call `npm init`. Passing the `-y` flag will choose some sane defaults for you.

### Task 2
Create a new project named `random-names` using the following commands:
```
mkdir -p task_2/random-names
cd task_2/random-names
npm init -y
```
If done successfully, you should see that a new file named [./task_2/random-names/package.json](./task_2/random-names/package.json)
```json
{
  "name": "random-names",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

This JSON file describes our package. For now, the most important parts are the `name` and the `scripts` sections, which tell us the name
of the project as well as scripts that can be run respectively. 

You can run scripts by using the command `npm run <script name>`, replacing `<script name>` with the keys of the `scripts` object. So for example,
you can run `npm run test` from inside of the [./task_2/random-names](./task_2/random-names) directory to see the Error message "Error: no test specified" printed to your console.

### Solution
You can find the solution on branch [task_2_solution](https://github.com/edwin-fsa/npm-getting-started/tree/task_2_solution)


## Part III: NPM Libraries
While we can get very far with CDNs, they eventually become rather unwieldy. If you take time to explore using different libraries by including them via CDN, you'll notice a few patterns start to emerge:

- More and more global variables are declared, meaning that no longer are they no 
  longer available for you to use in your own variables, but you have to be aware 
  of all of them
- The list of `<script>` tags in your html continues to grow, potentially   
  becoming unwieldy
- Your webpage loads slower as you add more libraries. If you include one library 
  via CDN and only use one function from it, your user still needs to install 
  the entire library, which may or may not be rather large
- The order of your script tags start to matter. Some libraries depend on others,
  which means that you have to make sure to include some libraries before others 
  when using a CDN

NPM aims to solve all of the above problems, and more. 

We still need to learn quite a few concepts before we can make a web app that mirrors the functionality of the app we made in part 1. For now,
let's create a similar app that works in our terminal. That is, running `npm run` will print a new random name the terminal.


You'll notice a few changes:
- We added `"type": "module"` to the `package.json` file. This is needed in order to use modern import syntax (which we haven't talked about yet)
- We've also added a `"start": "node ./src/index.js"` key/value pair to our `scripts` section. This is how we'll run our app.
- There is now a file, [./task_2/random-names/src/index.js](./task_2/random-names/src/index.js). This is doing the same job as our `script` tags in our HTML; more on these later

### Task 3
Before this app will work, we'll need to install faker using npm.

1. Go to [npmjs.com](https://www.npmjs.com/) and search for "faker"
2. Choose the second option named "@faker-js/faker"
3. On the right side of the page, you'll see a section called "install". Copy that command and run it in a terminal in your [./task_2/random-names](./task_2/random-names) directory.
4. Run your app a few times by running `npm run start`. Notice again, you see random names showing up!

### Solution
You can find the solution on branch [task_3_solution](https://github.com/edwin-fsa/npm-getting-started/tree/task_3_solution)
