import { getBackendUrl } from "./BaseUrl"

export const useRegisterApi = (
    username: String,
    hashedPassword: String,
) => async function register(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/register`, {
        headers: { "content-type": "application/jason" }, body: JSON.stringify({
            kind: "register",
            username: username,
            password: hashedPassword,
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        return JSON.parse(await response.text())
    })
} 
