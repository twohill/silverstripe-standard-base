# silverstripe-standard-base

This is the standard base module used by Twohill & Co to get up and running in SilverStripe 4 quickly.

## Prerequisites

* Composer
* Yarn
* Docker

## Getting Started

1) Set up a new project and require this recipe. Note we create a public folder to force SilverStripe to use the new public webroot

    ```sh
    mkdir my-project
    cd my-project
    mkdir public
    composer init
    composer require twohill/silverstripe-standard-base
    yarn
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
* The build process generates .js files for the css bundles as well. You can just ignore these 
