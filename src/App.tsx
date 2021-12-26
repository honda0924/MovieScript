import { useState } from 'react'
import './App.css'
import { Row } from './Row'
import { Banner } from './Banner'
import { requests } from './request'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Banner />
      <Row
        title='NETFLIX ORIGINALS' 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.fetchDocumentMovies} />
    </div>
  )
}

export default App
