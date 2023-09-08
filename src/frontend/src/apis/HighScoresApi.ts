import { getBackendUrl } from "./BaseUrl"

export async function highScoreApi() {
    return fetch(`${getBackendUrl()}/highscores`, {
        headers: { "content-type": "application/json" }, 
        method: "GET"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        const responseData = await response.json();
        return responseData;
    })
}
