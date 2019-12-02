class Episode {
    airdate: string
    airstamp: string
    airtime: string
    id: number
    image: { medium: string, original: string }
    name: string
    number: number
    runtime: number
    season: number
    summary: string
    url: string

    constructor(episode: any) {
        this.airdate = episode.airdate
        this.airstamp = episode.airstamp
        this.airtime = episode.airtime
        this.id = episode.id
        this.image = episode.image
        this.name = episode.name
        this.number = episode.number
        this.runtime = episode.runtime
        this.season = episode.season
        this.summary = episode.summary
        this.url = episode.url
    }
}

export default Episode