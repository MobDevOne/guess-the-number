import { getBackendUrl } from "./BaseUrl"

export const useGameStartApi = (
    sessionToken: String
) => async function gameStart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/game-start`, {
        headers: { "content-type": "application/jason" }, body: JSON.stringify({
            kind: "game-start",
            sessionToken: sessionToken
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        return JSON.parse(await response.text())
    })
}
