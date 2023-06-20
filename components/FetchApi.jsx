import React from 'react';

const FetchApi = () => {
    const API_URL ="https://api.themoviedb.org/3/movie/now_playing"

    const fetchNowPlaying = () => {
        fetch(API_URL)
        .then(resRaw => resRaw.json())
        .then(json => {
            console.log(json)
        })
        .catch(error = console.error(error))
    }

    useEffect(() => {
      fetchNowPlaying();
    }, [third])
    
    return (
        <div>
         FetchApi   
        </div>
    );
};

export default FetchApi;