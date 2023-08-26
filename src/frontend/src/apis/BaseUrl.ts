export function getFrontendUrl(): string {
    if (process.env.NODE_ENV === 'development')
        return "http://localhost:3000"
    else
        return "https://guess.sldw.de"
}

export function getBackendUrl(): string {
    if (process.env.NODE_ENV === 'development')
        return "http://localhost:8080"
    else
        return "https://guess-api.sldw.de"
}