# universal-viewer

[![Build Status](https://travis-ci.org/colehansen/universal-viewer.svg)](https://travis-ci.org/colehansen/universal-viewer)

A Polymer custom element component to encapsulate a universal viewer instance.

## Installing

For the current version run:

    bower install --save universal-viewer

However, we recommend you fix your version to the minor version:

    bower install --save universal-viewer#^X.Y.Z

## Usage
	<html>
      <head>
      <script src="../bower_components/webcomponentsjs/webcomponents-lite.js"></script>
      <link rel="import" href="[realtive path]/bower_components/universal-viewer/build/es2015/universal-viewer.html">
      </head>
      <body>
      ...
      	<universal-viewer url="http://example.com/path/to/manifest.json" width="500px" height="600px"></universal-viewer>
      ...
      </body>
    </html>

## Contributing

Clone the repo into your file system.

    git clone https://github.com/colehansen/universal-viewer.git

Make sure that you have yarn installed and then run:

    yarn install

### How to build (for dev)

    yarn run build:dev

### How to run locally (for dev)

    yarn run run:dev

This will create a server listening on port 3000. View the demo by navigating to [localhost:3000/build/es2015/demo](http://localhost:3000/build/es2015/demo).

### How to test

You will need a SauceLab account, which is free for OpenSource projects. Once you have
a username and access key, run the following:

    export SAUCE_USERNAME=[Your username]
    export SAUCE_ACCESS_KEY=[Your access key]

You will need to build it for tests:

    yarn run build:test

Now you can run the actual test

    yarn run test

This will start up a SauceLab test suite and display the results to the command line.

### Submit a pull request

Once you have made your changes, submit a pull request!
