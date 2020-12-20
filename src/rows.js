import React, { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import YouTube from 'react-youtube';


function Rows({title,height,borderClass}){

    const movieTrailer = require( 'movie-trailer' )

    const [tvArr,setTvArr] = useState([]);
    
    const [youTubeLink,setYouTubeLink]  = useState("")

    let rowBody;

    const opts={
        width: "80vw"
    }

    const API_KEY ="e831db350757a0a946ea1adea68593ee&language=en-US&page=1";

    const urls = [
        {title : "NETFLIX ORIGINALS",
        urlSrc : `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`},
        {title:"Trending",
        urlSrc:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`},
        {title:"Top Rated",
        urlSrc:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`},
        {title:"Action Movies",
        urlSrc:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`},
        {title:"Comedies",
        urlSrc:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35`},
        {title:"Horror Movies",
        urlSrc:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`},
        {title:"Romance Movies",
        urlSrc:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749`},
        {title:"Fantasy",
        urlSrc:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14`}
    
        ]

    useEffect(()=>{

        urls.forEach(url => {
            if(url.title == title){
                fetch(url.urlSrc)
                .then(response => response.json())
                .then(data => setTvArr(data.results))
            }
        })


    },[])

    function handleClick(e){
        movieTrailer(e.target.id)
        
        .then(response => {
            if(youTubeLink){
                setYouTubeLink("")
            }else{

            let index = response.indexOf("=")
            setYouTubeLink(response.slice(index+1))
            }
        })
       
        .catch(console.error)
    }   
   
    rowBody = tvArr.map( show => {
        return(<img onClick={handleClick} id={show.original_title} className={`thumbnail ${borderClass}`} src={`https://image.tmdb.org/t/p/w440_and_h660_face${show.poster_path}`} />)
    })

    return(
    <div className="rows">
        <div className="row-title">{title}</div>
        <div className="row-body" style={{height:height}}>
            {rowBody}
         </div>
         {console.log(youTubeLink)}

        {youTubeLink && <YouTube className="video" opts={opts} videoId={youTubeLink} />} 

    </div>)
}

export default Rows