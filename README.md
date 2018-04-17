# learnerbot.github.io

## Overview

The **learnerbot.github.io** project is a *Single Page Application* hosted on GitHub which holds a reference to some of my pet projects. It is based on *AngularJS* and some other JavaScript libraries.

## Dependencies

### Runtime dependencies

The following libraries are used in the application.

*[AngularJS](https://angularjs.org/)*: *AngularJS* is an open-source web application framework to address many of the challenges encountered in developing *Single Page Applications*.

*[jQuery](https://jquery.com/)*: *jQuery* is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.

*[marked](https://github.com/chjj/marked)*: A full-featured markdown parser and compiler, written in JavaScript. Built for speed.

*[highlight.js](https://highlightjs.org/)*: Syntax highlighting for the Web.

*[RequireJS](http://requirejs.org/)*: *RequireJS* is a JavaScript file and module loader.

*[Bootstrap](http://getbootstrap.com/)*: HTML, CSS and JS framework for developing responsive, mobile first projects on the web.

### Dev dependencies

The following libraries are used for the development of this project.

*[npm](https://www.npmjs.com/)*: Package manager.

*[TestCafé](https://devexpress.github.io/testcafe/)*: A Node.js tool to automate end-to-end web testing.

## How to...

### Setup

`npm install`

### Start

You can start the web application with the following command.

`npm start`

### Test

Run end-2-end tests on the local working environment.

`npm test`

OR

`npm test -- --env=local`

Run end-2-end tests on the live environment.

`npm test -- --env=prod`

### Add a new project

Update the *src/script/config.js* file with the new project. Add it to the list of *projects* so that it will be available on **learnerbot.github.io**. 
