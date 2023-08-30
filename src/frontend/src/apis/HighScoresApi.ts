import { getBackendUrl } from "./BaseUrl"

export const HighScoreApi = (
) => async function highScores(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/high-scores`, {
        headers: { "content-type": "application/json" }, body: JSON.stringify({
            kind: "high-scores",
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        return JSON.parse(await response.text())
    })
}
