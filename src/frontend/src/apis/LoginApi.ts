import { getBackendUrl } from "./BaseUrl"

export const LoginApi = (
    username: string,
    hashedPassword: string,
) => async function login(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    return fetch(`${getBackendUrl()}/login`, {
        headers: { "content-type": "application/json" }, body: JSON.stringify({
            kind: "user-login",
            username: username,
            password: hashedPassword,
        }),
        method: "POST"
    }).then(async (response) => {
        if (response.status >= 400)
            throw response.status.toString()
        const responseData = await response.json();
        console.log(responseData)
        return responseData;
    })
} 
