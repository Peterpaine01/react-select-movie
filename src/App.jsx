import { useState, useEffect } from "react";
import "./App.css";

// Import données
import data from "./assets/data.json";

// Import composants
import ButtonNav from "./components/ButtonNav";
import Section from "./components/Section";

const App = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [bg, setBg] = useState("");

  useEffect(() => {
    document.body.style.backgroundImage = `url('${bg}')`;
  }, [bg]);

  return (
    <>
      <header>
        <div className="container">
          <nav>
            {data.map((movie, index) => {
              return (
                <>
                  <ButtonNav
                    index={index}
                    name={movie.name}
                    background={movie.background}
                    setSearchMovie={setSearchMovie}
                    setBg={setBg}
                  />
                </>
              );
            })}
          </nav>
        </div>
      </header>
      <main>
        {searchMovie ? (
          data.map((movie, index) => {
            console.log(movie.name.includes(searchMovie));
            // console.log(searchMovie);
            if (movie.name.includes(searchMovie)) {
              return (
                <>
                  <Section
                    name={movie.name}
                    actors={movie.actors}
                    index={index}
                  />
                </>
              );
            } else {
              return null;
            }
          })
        ) : (
          <p>Select a movie !</p>
        )}
      </main>
    </>
  );
};

export default App;
