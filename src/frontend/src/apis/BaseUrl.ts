export function getBackendUrl(): string {
    if (process.env.NODE_ENV === 'development')
        return "http://localhost:8080"
    else
        return "https://guess-api.jptz.de"
}