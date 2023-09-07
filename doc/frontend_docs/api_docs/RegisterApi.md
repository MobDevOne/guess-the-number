# RegisterApi Function Documentation

The `RegisterApi` function is responsible for making an API request to the server's registration endpoint to create a new user account.

## Function Signature

```javascript
RegisterApi(username: string, hashedPassword: string) => async function register(event: React.MouseEvent<HTMLButtonElement>)
```

- `username` (string): The username provided for user registration.
- `hashedPassword` (string): The hashed password provided for user registration.
- `event` (React.MouseEvent<HTMLButtonElement>): The click event that triggers the registration.

## Function Logic

1. Prevent the default behavior of the click event to avoid form submission.

2. Create a POST request to the server's registration endpoint using the `fetch` function.

3. Set the request headers to specify that the request body is in JSON format.

4. Create a request body JSON object with the following properties:
   - `kind`: Specifies the type of request as "register."
   - `username`: The username provided for registration.
   - `password`: The hashed password provided for registration.

5. Send the POST request to the server using the URL retrieved from the `getBackendUrl()` function.

6. Handle the server's response:
   - If the response status code is greater than or equal to 400, throw an error with the response status code as a string.
   - Otherwise, parse the response data as JSON and return it.

## Component Export

The `RegisterApi` function is exported for use in other parts of the application, allowing developers to initiate user registration requests by providing the necessary input parameters.

## Component Usage

To use the `RegisterApi` function, you can import it into your application and call it when handling user registration interactions, typically triggered by clicking a registration button.

```javascript
import { RegisterApi } from './RegisterApi';

// Example usage in a React component:
const handleRegistrationClick = (event) => {
    RegisterApi(username, hashedPassword)(event)
        .then((responseData) => {
            // Handle the response data, e.g., display a success message or navigate to the login page.
        })
        .catch((statusCode) => {
            // Handle registration error, e.g., display an error message.
        });
};
```