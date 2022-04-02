
import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './requestFilm';
import MovieRow from './components/movieRow'
 
export default () => {
/*padrão comum para salvar o state*/
  const [movieList, setMovieList] = useState([])
  useEffect(()=>{


    const loadAll = async () =>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);


    }

    loadAll();
  }, []);




  return (
    <div className="page">
      <section className="lists">
        
        {movieList.map((iten, key)=>(
        /*O map serve para ajudar a setar as caracteristicas, e é importante sempre ter a "key = {key}*/
          <MovieRow key={key} title={iten.title} itens={iten.itens} />

        ))}
      </section>
    </div>
  )
}
