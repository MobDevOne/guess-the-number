import { getBackendUrl } from "./BaseUrl"

export const LogoutApi = (
    session_id: String
) => async function gameStart(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/logout`, {
        headers: { "content-type": "application/json" }, body: JSON.stringify({
            kind: "logout",
            session_id: session_id
        }),
        method: "POST"
    })
}