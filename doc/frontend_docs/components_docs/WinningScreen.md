# `WinningScreen` Component Documentation

The `WinningScreen` component represents a screen that is displayed when a user successfully guesses the correct number in the "Guess the Number" game. It provides information about the successful guess, such as the hidden number, the number of attempts, and options to play again or view highscores.

## Component Structure

The `WinningScreen` component is composed of the following elements:

1. **Paper**: A Material-UI `Paper` component that serves as a card-like container for the content.

2. **Typography**: Material-UI `Typography` components to display text content, including congratulations messages, game statistics, and instructions.

3. **Buttons**: Material-UI `Button` components for actions like playing again and viewing highscores.

## Component Props

The `WinningScreen` component accepts the following props:

- `guess`: A string representing the hidden number that the user successfully guessed.

- `attempts`: An integer representing the number of attempts it took the user to guess the correct number.

## Component Logic

The `WinningScreen` component includes the following key logic:

- It uses the `useNavigate` hook from `react-router-dom` to enable navigation within the application.

- When the "Highscores" button is clicked, the component invokes the `handleHighscores` function, which makes an API request to retrieve highscore data and navigates to the highscores page.

- When the "Play Again" button is clicked, the component invokes the `handleGameStart` function, which makes an API request to start a new game session and refreshes the page.

- The component uses emoji icons (🎉) to provide a visual representation of congratulations.

## Component Export

The `WinningScreen` component is exported and can be included in the application's game screen when a user successfully guesses the correct number.

## Component Usage

To use the `WinningScreen` component, developers can include it in the game screen component and pass the `guess` and `attempts` props to display the relevant information when a user wins the game.

```javascript
import { WinningScreen } from './WinningScreen';

// Example usage within the game screen component:
const GameScreen = () => {
    // ...
    // Game logic to determine if the user has won
    const hasWon = true; // Replace with actual game logic

    return (
        <div>
            {hasWon ? (
                <WinningScreen guess="42" attempts={5} />
            ) : (
                // Render the game interface
                // ...
            )}
        </div>
    );
};
```