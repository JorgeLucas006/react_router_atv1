import Navbar from '../navbar'

function Musica() {
  return (
    <div className="App">
      <Navbar/>
      <h1>
        Música favorita
      </h1>
      <div className="container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/v2AC41dglnM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default Musica;
