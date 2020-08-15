# Rest API - Node.JS Typescript - Boilerplate
API Rest template using Typescript with Node based best practices from web references.

## Instrucions

Fork this project with initial source code for Typescript API Rest to develop your WEB projects.

## Setup

Include environment variable:
```TOKEN = 12345```

Development with bulding continuously: 
``` $ npm run dev ```

Build for production operation: 
```$ npm run build```

## Examples 

GET request example:

```
curl --location --request GET 'http://localhost:8000/routeA/sum?auth=12345&valueX=2&valueY=3'
```
POST request example:
```
curl --location --request POST 'http://localhost:8000/routeA/multiply' \
--header 'Authorization: 12345' \
--header 'Content-Type: application/json' \
--data-raw '{
    "valueX":3,
    "valueY":2
}'
```
# Changelog

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [x.x.x] - Roadmap
- include typeORM for database sync

## [1.0.0] - Released - 2020-08-15

### Added

- routes, controllers and services schema
- GET and POST example services
- logger and config functions
- eslint configuration

## References

[Desenvolvimento otimizado em NodeJS com Typescript, Docker e ESLint](https://marquesfernandes.com/desenvolvimento-otimizado-em-nodejs-com-typescript-docker-e-eslint/)

[Typescript com NodeJS do jeito certo!](https://youtu.be/aTf8QTjw4RE)