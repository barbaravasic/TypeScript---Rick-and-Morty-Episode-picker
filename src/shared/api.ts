class Api {

    async fetch(url: string) {
        const data = await fetch(url)
        return await data.json()
    }
}

export const api = new Api