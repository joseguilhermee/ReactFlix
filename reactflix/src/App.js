
import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './requestFilm';
import MovieRow from './components/movieRow'
import FeaturedMovie from './components/FeaturedMovie';
 
export default () => {
/*padrão comum para salvar o state*/
  const [movieList, setMovieList] = useState([])
  const [featuredData, setfeaturedData] = useState(null)
  useEffect(()=>{

    
    
    const loadAll = async () =>{
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      
      //pegando o Filme em Destaque
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length -1));
      let chosen = originals[0].itens.results[randomChosen]
      console.log(chosen)
    }

    loadAll();
  }, []);




  return (
    <div className="page">

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        
        {movieList.map((iten, key)=>(
        /*O map serve para ajudar a setar as caracteristicas, e é importante sempre ter a "key = {key}*/
          <MovieRow key={key} title={iten.title} itens={iten.itens} />

        ))}
      </section>
    </div>
  )
}
