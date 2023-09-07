# HighScoreApi Function Documentation

The `HighScoreApi` function is responsible for making an API request to the server's high scores endpoint to retrieve high scores data.

## Function Signature

```javascript
HighScoreApi() => async function highScores(event: React.MouseEvent<HTMLButtonElement>)
```

- This function does not take any input parameters.
- `event` (React.MouseEvent<HTMLButtonElement>): The click event that triggers the high scores retrieval.

## Function Logic

1. Prevent the default behavior of the click event to avoid form submission.

2. Create a GET request to the server's high scores endpoint using the `fetch` function.

3. Set the request headers to specify that the response is expected in JSON format.

4. Send the GET request to the server using the URL retrieved from the `getBackendUrl()` function.

## Component Export

The `HighScoreApi` function is exported for use in other parts of the application, allowing developers to initiate high scores retrieval requests.

## Component Usage

To use the `HighScoreApi` function, you can import it into your application and call it when handling high scores retrieval interactions, typically triggered by clicking a button to view high scores.

```javascript
import { HighScoreApi } from './HighScoreApi';

// Example usage in a React component:
const handleHighScoresClick = (event) => {
    HighScoreApi()(event)
        .then((highscoreData) => {
            // Handle the retrieved high scores data, e.g., display it in a high scores table.
        })
        .catch((error) => {
            // Handle high scores retrieval error, e.g., display an error message.
        });
};
```