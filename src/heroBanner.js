import React from "react"
import { useEffect, useState } from "react/cjs/react.development"

function HeroBanner(){

    const [heroBanner,setHeroBanner] = useState("")

    useEffect(()=>{
        

        const API_KEY ="e831db350757a0a946ea1adea68593ee&language=en-US&page=1";

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data =>  setHeroBanner(data.results[Math.floor(Math.random()*10)]))
console.log(heroBanner)
    },[])
   
    return(
    <div className="hero-container" style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${heroBanner.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }} >
        <div className="banner-details">
        <h1 className="banner-title">{heroBanner.name}</h1>
        <div><button>Play</button><button>My List</button></div>
        <h4 className="TV-details">{heroBanner.overview}</h4>
        </div>
    
     <div className="banner--fadeBottom" />  
    </div>)
}

export default HeroBanner