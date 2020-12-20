
import { useEffect,useRef } from 'react';
import './App.css';
import Navbar from "./navbar";
import HeroBanner from "./heroBanner";
import Rows from "./rows"
import { useState } from 'react/cjs/react.development';

function App() {

  const [navbarBG,setNavbarBG] =useState("")

  function handleScroll(e){
    if (e.currentTarget.scrollTop > 25){
        setNavbarBG("#0D0D0D")
    } 
    if(e.currentTarget.scrollTop < 25){
      setNavbarBG("transparent")
    }
  }
  
  

  return (
    <div onScroll={handleScroll}  className="app-container">
       <Navbar background={navbarBG} />
      <HeroBanner />
      <Rows title="NETFLIX ORIGINALS" height="40vh" borderClass="noRadius" />
      <Rows title="Trending" height="20vh" />
      <Rows title="Action Movies" height="20vh" />
      <Rows title="Top Rated" height="40vh"  borderClass="noRadius"/>
      <Rows title="Comedies" height="20vh" />
      <Rows title="Horror Movies" height="20vh" />
      <Rows title="Romance Movies" height="20vh" />
      <Rows title="Fantasy" height="20vh" />

    </div>
  );
}

export default App;
