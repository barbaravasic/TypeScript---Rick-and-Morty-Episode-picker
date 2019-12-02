import { URL } from "../shared/constants"
import { api } from "../shared/api"
import Episode from "../models/Episode"

interface IEpisode{
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
}

class EpisodeService {

    async fetchAllEpisodes() {
        
        const response = await api.fetch(URL)

        const episodes = response._embedded.episodes.map((episode: IEpisode) => new Episode(episode))

        return  episodes
    }
}

export const episodeService = new EpisodeService()