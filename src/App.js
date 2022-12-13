import "./styles.css";
import { useState, useEffect } from "react";
import Movies from "./movies";

export default function App() {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);
  const [query, setQuery] = useState("merlin");

  /*Api_key */
  let API_KEY = "77d6e83a";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.Search);
        console.log(data.Search);
      });
  }, [query]);

  /* input function */
  function handleChange(event) {
    setSearch(event.target.value);
  }
  /*Search Button function */
  function handleClick() {
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <div className="container">
        <img
          className="image"
          src="https://ak3.picdn.net/shutterstock/videos/15745063/thumb/8.jpg?ip=x480"
          alt=""
        />
        <div className="top-left">MyTestApp</div>
        <div className="center">Watch something incredible</div>
      </div>

      <input
        onChange={handleChange}
        className="typing"
        type="text"
        placeholder="Search Movie"
        value={search}
      />
      <button onClick={handleClick} className="btns">
        Search
      </button>
      <section className="article">
        {info.map((movie, index) => {
          return <Movies key={index} title={movie.Title} img={movie.Poster} />;
        })}
      </section>
    </div>
  );
}
