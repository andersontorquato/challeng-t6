import React, { useEffect, useState } from "react";
import "./App.css";
import tmdb from "./componentes/tmdb";
import MovieRow from "./componentes/MovieRow";
import FeaturedMovie from "./componentes/FeaturedMovie";
import Header from "./componentes/Header";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originais");
      if (originals.length > 0) {
        let randomChosen = Math.floor(
          Math.random() * (originals[0].items.results.length - 1)
        );
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await tmdb.getMovieInfo(chosen.id, "tv");
        setFeaturedData(chosenInfo);
      }
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featureData && <FeaturedMovie item={featureData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>

      <footer>
        <p> Feito por Anderson </p>
      </footer>
    </div>
  );
};

export default App;
