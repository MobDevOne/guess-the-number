import { getBackendUrl } from "./BaseUrl"

export const HighScoreApi = (
) => async function highScores(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/highscores`, {
        headers: { "content-type": "application/json" }, body: JSON.stringify({
            kind: "highscores",
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        return JSON.parse(await response.text())
    })
}
