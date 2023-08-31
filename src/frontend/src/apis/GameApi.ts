import { getBackendUrl } from "./BaseUrl"

export const GameStartApi = (
    sessionId: String
) => async function gameStart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/game-start`, {
        headers: { "content-type": "application/json" }, body: JSON.stringify({
            kind: "game-start",
            sessionId: sessionId
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        return JSON.parse(await response.text())
    })
}
