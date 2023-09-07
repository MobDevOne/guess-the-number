# GamePage Component Documentation

The `GamePage` component is a React component responsible for rendering the game page of the "Guess The Number" web application. This page allows users to guess a number and provides feedback on their attempts.

## Import Statements

```javascript
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import ProfOak from "../pictures/Prof. Oak.png";
import { GameApi } from "../apis/GameApi";
import { useEffect, useState } from "react";
import { WinningScreen } from "../components/WinningScreen";
```

- The `import` statements include various modules and components required for building the game page. This includes Material-UI components, icons, React hooks, and custom components.

## Functional Component Definition

```javascript
const GamePage = () => {
    // Component Logic
}
```

- `GamePage` is a functional component that defines the entire game page.

## State Variables

```javascript
const [guess, setGuess] = useState<string>("");
const [attempts, setAttempts] = useState<number>();
const [guessStatus, setGuessStatus] = useState<number>();
const [message, setMessage] = useState("What number am I thinking of?");
```

- The component uses React `useState` hooks to manage various state variables:
  - `guess`: Stores the user's entered guess.
  - `attempts`: Stores the number of attempts made.
  - `guessStatus`: Stores the guess status, which can be -1 (too low), 0 (correct), or 1 (too high).
  - `message`: Stores the feedback message for the user.

## Helper Functions

```javascript
const sendGuess = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Function Logic
};

const guessStatusMessage = () => {
    // Function Logic
};

const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Function Logic
};
```

- These functions are used to handle user interactions and perform various tasks:
  - `sendGuess`: Sends the user's guess to the `GameApi`, updates the `attempts` and `guessStatus`, and sets the feedback message.
  - `guessStatusMessage`: Generates the feedback message based on the `guessStatus` and `attempts`.
  - `handleKeyPress`: Listens for the Enter key press and triggers the guess submission.

## Rendering

```javascript
return guessStatus !== 0 ? (
    <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" sx={{ width: 'fit-content', mt: '150px', mx: 'auto' }}>
        {/* ... */}
        {/* JSX for rendering the game page when the game is not won */}
        {/* ... */}
    </Box>
) : ( 
    <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" sx={{ width: 'fit-content', mt: '150px', mx: 'auto' }}>
        {/* ... */}
        {/* JSX for rendering the game page when the game is won */}
        {/* ... */}
    </Box>
)
```

- The `return` statement defines the JSX (user interface) for rendering the game page. It conditionally renders different content based on whether the game has been won (`guessStatus === 0`). It includes Material-UI components such as `Card`, `TextField`, and `Button`.

## Component Export

```javascript
export default GamePage;
```

- This statement exports the `GamePage` component so that it can be imported and used in other parts of the application.

## Component Usage

To use the `GamePage` component, you can import it into your application and include it in your routing configuration to display it when the user wants to play the game.

```javascript
import GamePage from './GamePage';

// Inside your routing configuration...
<Route path="/game" element={<GamePage />} />
```