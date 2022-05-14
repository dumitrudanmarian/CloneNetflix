import React from 'react';
import './App.css';
import Row from '../row/Row';
import requests from '../../api/requests';
import Banner from '../banner/Banner';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeImage={true} />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending} />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated} />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies} />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies} />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies} />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumantaries} />

      <Footer />
    </div>
  );
}

export default App;
