import React from 'react';
import { Store } from '../Store';
import { episodeService } from '../services/episodeService';

interface IEpisode {
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

const EpisodesPage = (): JSX.Element => {

  const { state, dispatch } = React.useContext(Store)

  const fetchDataAction = async () => {

    try {
      const episodes = await episodeService.fetchAllEpisodes()

      return dispatch({
        type: 'FETCH_DATA',
        payload: episodes
      })
    } catch (e) {
      console.error(e)
    }
  }

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction()
  })

  return (
    <div>
      <h1 className="center-align indigo-text text-darken-4">Rick and Morty</h1>
      <p className="center-align flow-text">Pick your favorite episode</p>
      <section className="row">
        {state.episodes.length > 0 && state.episodes.map((episode: IEpisode) => (
          <div className="col s12 m6 l4" key={episode.id}>
            <div className="card" >
              <div className="card-image">
                <img src={episode.image && episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">favorite</i></a>
              </div>
              <div className="card-title center-align amber-text text-darken-4">{episode.name}</div>
              <div className="card-content">
                <div> Season: {episode.season} </div>
                <div> Episode: {episode.number} </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div >
  );
};

export default EpisodesPage;