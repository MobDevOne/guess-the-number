import { getBackendUrl } from "./BaseUrl"

export const useLoginApi = (
    username: String,
    hashedPassword: String,
) => async function login(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/login`, {
        headers: { "content-type": "application/jason" }, body: JSON.stringify({
            kind: "user-login",
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
