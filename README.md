# A Starter Kit for Front-End Dev using HTML / SCSS with Webpack

## Install
### Dependencies
Install [yarn](https://yarnpkg.com/lang/fr/docs/install)

### To do
```sh
yarn
```
**Well done !**

Open `src/index.html` and everything is ready to code ;)

## Where do I code ?
`assets` folder contains every files for assets like :
- fonts
- images
	- icons
- javascripts
- stylesheets

`src` folder contains every assets files that will be compiled by webpack except HTML files. You can create every HTML files you want in this folder.

## How can I compile files ?
To build all assets files for development mode
```sh
yarn build
```

To watch stylesheet files with fonts & images for development mode
```sh
yarn watch-css
```

To watch javascript files for development mode (you can open an other tab in you terminal to watch css and js)
```sh
yarn watch-js
```

To build all files for production mode
```sh
yarn prod
```

## Development mode
### CSS
Add SCSS files name in `webpack.css.config.js` like `home.scss` line 11. Just duplicate it, rename it without forget to add a comma at the end of the line.

- Compile SCSS file into CSS file
- Use Sass lint
- Use PostCss to compile for old browsers
- Transform icon of image lower than 8KB into Base 64
- Rename image & icon files with hash5
- Optimize img higher than 8KB

### JS
Just like SCSS files, you can add a line in `webpack.js.config.js` to compile another js file.

- Compile ES6 with Babel

## Production mode
The production folder is `public` which is created after the first prod compilation.
### CSS
- Minify CSS
- Copy img & fonts into `public`

### JS
- Minify JS with Uglify

### HTML
- Just a copy because files will be using for the Back-end dev.

## Others
[Knacss](https://www.knacss.com/) is automatically installed. If you want to use it, you can import it from `node_modules` in your scss files like `assets/other.scss`.
