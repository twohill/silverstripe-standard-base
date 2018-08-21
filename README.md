# silverstripe-standard-base

This is the standard base module used by Twohill & Co to get up and running in SilverStripe 4 quickly.

## Prerequisites

* Composer
* NPM
* Docker

## Getting Started

1) Set up a new project and require this recipe. Note we create a public folder to force SilverStripe to use the new public webroot

    ```sh
    mkdir my-project
    cd my-project
    mkdir public
    composer init
    composer require twohill/silverstripe-standard-base
    ```

1) Copy/rename `example.env` to `.env` and update the details as required.

    ```sh
    copy example.env .env
    ```

    ***Please change the SQL root password in this file!***

1) Start up the docker container and webpack

    ```sh
    docker-compose up

    yarn
    yarn watch
    ```


## Building for production

```sh
yarn build
```

This process will build and minify your scss, bundle your js, and copy in any image files you have in `app/client/src/` and deploy it to `app/client/dist/`. Your templates should use the `dist` directory when published.