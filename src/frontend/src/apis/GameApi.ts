import { getBackendUrl } from "./BaseUrl"

export const GameStartApi = (
    session_id: String
) => async function gameStart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/game-start`, {
        headers: { "content-type": "application/json" }, body: JSON.stringify({
            kind: "game-start",
            session_id: session_id
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    })
}

export const GameApi = (
    session_id: String,
    guess: number,
) => async function gameStart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/game-guess`, {
        headers: { "content-type": "application/json" }, body: JSON.stringify({
            kind: "game-guess",
            session_id: session_id,
            guess: guess
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
    })
}
