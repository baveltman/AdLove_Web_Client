# Project Readme

Setup:

```shell
npm install -g yo
npm install -g generator-react-server
npm install -g node-sass
npm install
```

To start in development mode:

```shell
npm start
```
Then go to [localhost:3000](http://localhost:3000/).

Hot loading for the js is enabled, but not for css yet. To rebuild css do:

```shell
./run-build.sh
```

#Notes:

1. Routes are defined in root/routes.js
2. All Pages go in root/pages
3. Pages are composed of components defined in root/components
4. Images are stored in root/Images in appropriate subdirectory
5. All css goes in root/styles as .scss files. These are compiled into css in the root/build directory as part of the build process
6. Every page should define its own css and every component should have a css defined in its own partial. Global css should be kept to a minimum
