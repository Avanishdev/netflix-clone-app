import React from 'react';
import './App.css'
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

const App = () => {
  return (
    <div className='app'>
      <Banner/>
      <Row 
      title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Now" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Now" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App