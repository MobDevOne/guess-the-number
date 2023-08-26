import { getBackendUrl } from "./BaseUrl"

export const useHighScoresApi = (
) => async function highScores(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/register`, {
        headers: { "content-type": "application/jason" }, body: JSON.stringify({
            kind: "high-scores",
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        return JSON.parse(await response.text())
    })
}
