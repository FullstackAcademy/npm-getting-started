# Step 1: Creating an NPM project

By the end of this step, you should understand how to:
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

In order to add `Faker` to your page, you'll need to include it via [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/). The simple explanation is that a CDN a way to make content available to webpages in a convenient way. One easy way to find libraries exposed using a CDN is to search for them on [cdnjs](https://cdnjs.com/libraries).

### Task 1
1. Go to [cdnjs](https://cdnjs.com/libraries) and search for "Faker".
2. Click on the "Copy Script Tag" (</>) icon. 
3. Paste the copied code into the appropriate place in `./part_1/index.html`
4. Preview the page and refresh. Notice how the name keeps changing. 