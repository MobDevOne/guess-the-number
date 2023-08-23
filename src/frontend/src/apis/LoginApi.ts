import { getBaseUrl } from "./BaseUrl"

export const LoginApi = (
    username: String,
    hashedPassword: String,
) => async function name(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBaseUrl()}/login`, {
        headers: { "content-type": "application/jason" }, body: JSON.stringify({
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
