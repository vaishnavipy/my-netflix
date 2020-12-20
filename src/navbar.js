import React from "react";


function Navbar({background}){
    return(
    <div style={{backgroundColor:background}} className="navbar-container">
        <div className="navbar">
        <div className="left-navbar-grid">
           <div className="img-div"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="netflix-logo" className="logo" /></div>
           <div className="navbar-links active">Home</div>
           <div className="navbar-links">TVShows</div>
           <div className="navbar-links">Movies</div>
           <div className="navbar-links">News & Popular</div>
           <div className="navbar-links">My List</div>
        </div>
        <div className="right-navbar-grid">
            <div className="profile-icon-div"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"  alt="profile-icon" className="profile-icon" /></div>
        </div>
        </div>
    </div>)
}

export default Navbar;