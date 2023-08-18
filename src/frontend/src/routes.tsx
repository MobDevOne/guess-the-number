import { Navigate, createBrowserRouter } from "react-router-dom";
import { Login } from "./layout/Login";
import { GamePage } from "./layout/GamePage";
import { HighScorePage } from "./layout/HighScorePage";
import { Register } from "./layout/Register";

const routes = createBrowserRouter([
    {
        path: "*",
        element: <Navigate to="/login" />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/:username",
        element: <GamePage />,
        children: [
            {
                path: "game",
                element: <GamePage />
            },
            {
                path: "high-scores",
                element: <HighScorePage />
            }
        ]
    }
]);

export default routes;