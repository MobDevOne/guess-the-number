# getBackendUrl Function Documentation

The `getBackendUrl` function is responsible for determining and providing the backend URL based on the current environment (development or production).

## Function Signature

```javascript
export function getBackendUrl(): string
```

## Function Logic

The `getBackendUrl` function follows these logic steps to determine the backend URL:

1. Check the value of the `process.env.NODE_ENV` environment variable to determine if the application is running in a development or production environment.

2. If `process.env.NODE_ENV` is equal to `'development'`, return the development backend URL, which is `"http://localhost:5000"`.

3. Otherwise, if `process.env.NODE_ENV` is not equal to `'development'`, return the production backend URL, which is `"https://guess-api.jptz.de"`.

## Function Output

The function returns a string representing the backend URL based on the current environment.

## Component Export

The `getBackendUrl` function is exported for use in other parts of the application, allowing developers to easily access the backend URL based on the environment.

## Component Usage

Developers can use the `getBackendUrl` function to retrieve the backend URL when making API requests or configuring application settings based on the environment.