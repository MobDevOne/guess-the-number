# LoginApi Function Documentation

The `LoginApi` function is responsible for making an API request to the server's login endpoint to authenticate a user.

## Function Signature

```javascript
LoginApi(username: string, hashedPassword: string) => async function login(event: React.MouseEvent<HTMLButtonElement>)
```

- `username` (string): The username provided by the user.
- `hashedPassword` (string): The hashed password provided by the user.
- `event` (React.MouseEvent<HTMLButtonElement>): The click event that triggers the login.

## Function Logic

1. Prevent the default behavior of the click event to avoid form submission.

2. Create a POST request to the server's login endpoint using the `fetch` function.

3. Set the request headers to specify that the request body is in JSON format.

4. Create a request body JSON object with the following properties:
   - `kind`: Specifies the type of request as "user-login."
   - `username`: The username provided by the user.
   - `password`: The hashed password provided by the user.

5. Send the POST request to the server using the URL retrieved from the `getBackendUrl()` function.

6. Handle the server's response:
   - If the response status code is greater than or equal to 400, throw an error with the response status code as a string.
   - Otherwise, parse the response data as JSON and return it.

## Component Export

The `LoginApi` function is exported for use in other parts of the application, allowing developers to initiate user login requests by providing the necessary input parameters.

## Component Usage

To use the `LoginApi` function, you can import it into your application and call it when handling user login interactions, typically triggered by clicking a login button.

```javascript
import { LoginApi } from './LoginApi';

// Example usage in a React component:
const handleLoginClick = (event) => {
    LoginApi(username, hashedPassword)(event)
        .then((responseData) => {
            // Handle the response data, e.g., store user session information.
        })
        .catch((statusCode) => {
            // Handle login error, e.g., display an error message.
        });
};
```