# UrlShortnerUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.
The purpose of this application is to shorten a given url. It shortens a uri's path, query string, hash etc., but leaving the host and port untouched.
This project blends with [uri-shortner-api](https://uri-shortner-api.herokuapp.com/api/v1/uri) to save shortened uris.

## Hosting

- This app is live and it is hosted in [Nelify](https://www.netlify.com/).
- Checkout the live site [here](https://uri-shortner.netlify.app/)

## Third Party Dependencies

- @angular/material
- Bootstrap

## Running in local

### Pre requisites

- Node JS(14+)
- VS Code or any editor

### Steps

- Clone this project from [Github](https://github.com/GiriPai/url-shortner-ui).
- Run `npm i` to install dependencies.
- If you wanted to run this project with your local node js server instance, make sure your node project is running in local and update **src/environments/environment.ts** file as below

```
export const environment = {
  production: false,
  api: "http://localhost:5000"
};
```

**_Alternatively_**, if you wish to use live api, you can change the api key or the same environment file as below.

```
api:"https://uri-shortner-api.herokuapp.com"
```

This calls the live api rather than your local api.

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
