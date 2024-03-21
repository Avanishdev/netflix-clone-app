const API_KEY="473b0bc992e74a0933d506d489904804";

const requests={
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&width_networks=213`,
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&width_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&width_genres=10745`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&width_genres=99`,
}

export default requests;