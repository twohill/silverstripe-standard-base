# silverstripe-standard-base

This is the standard base recipe used by Twohill & Co to get up and running in SilverStripe 4 quickly.

## Prerequisites

* Composer
* Yarn
* Docker

## Getting Started

1) Create a project with the recipe and then install the front-end dependencies

    ```sh
    composer create-project twohill/silverstripe-standard-base my-project
    cd my-project
    yarn build
    ```

1) Copy/rename `example.env` to `.env` and update the details as required.

    ```sh
    copy example.env .env
    ```
    You will need to update the `WEBPACK_IP` and `WEBPACK_PORT` to suit your environment for the hot reload feature to work correctly.

    ***Please ensure you change the SQL root password in this file!***

1) Start up the docker container

    ```sh
    docker-compose up
    ```

1) Open a new terminal and start webpack
    ```sh
    yarn watch
    ```

## Building for production

```sh
yarn build
```

This process will build and minify your scss, bundle your js, and copy in any image files you have in `app/client/src/` and deploy it to `app/client/dist/`. Your templates should use the `dist` directory when published.

## Known issues

* You need to run `yarn build` whenever you add or change images as this is not picked up by the webpack hot reloader
* The build process generates .js files for the css bundles as well. You can just ignore these.
* There's effectively a doubleup of image files between src and dist. Ideas to improve on this are welcome

## How to use this recipe

### Javascript

`app/client/src/js/main.js` is the starting point of the javascript application. You can use ES6 and it will be transpiled by babel for you. jQuery is bundled in along with Bootstrap 4.

Add additional javascript frameworks with `yarn add --dev PACKAGE_NAME`.

If you are running webpack via `yarn watch` your page should automatically refresh as you make changes.

### Stylesheets

There are two stylesheet bundles created: `editor.scss` for the HTMLTextEditor, and `bundle.scss` for everything else. `bundle.scss` includes `editor.scss` so you do not need to repeat styles. You can split up your styles into multiple files to increase maintainablilty and webpack will minify them for you.

Layout and default styling is managed with Bootstrap 4.
