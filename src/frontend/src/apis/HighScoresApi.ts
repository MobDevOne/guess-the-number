import { getBackendUrl } from "./BaseUrl"

export const HighScoreApi = (
) => async function highScores(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/highscores`, {
        headers: { "content-type": "application/json" }, 
        method: "GET"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        const responseData = await response.json();
        console.log(responseData)
        return responseData;
    })
}
