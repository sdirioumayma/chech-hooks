import React from 'react';
import MovieCard from './MovieCard';
import { Button } from 'react-bootstrap';
import Filter from './Filter';

function MovieList() {
   
    const movies=[
        {
            title:"the mother",
             description:"A female assassin comes out of hiding to protect her daughter, whom she abandoned years ago.",
             posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVsh1XyDPHfIiXKfMlokec60pc1T0oFV1xmh-nlemuEneJjbPr_O01Ti3hw_TEZIjXEzg&usqp=CAU",
            rating: 4
        },
        {
            title:"the unforgivable",
             description:"Released from prison after serving a sentence for a violent crime, Ruth Slater (Bullock) re-enters a society that refuses to forgive her past.",
             posterURL:"https://m.media-amazon.com/images/M/MV5BM2M5MTJmOTEtNWU1Yy00NDNmLWI3MjMtNzFkN2FiZjE5Njg3XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
            rating: 4
        },
        {
            title:"the Joker", 
            description:"Set in 1981, it follows Arthur Fleck, a failed clown and aspiring stand-up comic whose descent into mental illness and nihilism inspires a violent countercultural revolution against the prosperous in a decaying Gotham City.",
            posterURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubPOv_woyAtDEdzV6chuvKzYVYPAsTpB1Tx2LJiUPfLozf_0vsVbWkcBZUkESdiU1sdw&usqp=CAU",
            rating:5
        },
        {
            title:"the girl in the basement",
             description:"Girl in the Basement tells the horrifying true story of a young girl named Sara who gets imprisoned by her father, Don, in their family basement.",
             posterURL:"https://m.media-amazon.com/images/M/MV5BMTdkYWE4ZGQtOGZkMy00ZTg1LWE5ODEtZWRlMjQ3NWQ2N2I2XkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_.jpg",
            rating:4
        },
    ]
    
    
    
  return (
    <div className="cards">
    
     {movies.map((movie,i)=>(
      <MovieCard movie={movie} />

        ))}
    <Filter movie={movies} />
    <Button variant ='primary' > add  new movies</Button>

     </div>
  )
}

export default MovieList