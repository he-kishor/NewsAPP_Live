import './navbar.css'
import React, {useState} from 'react';
export default function Navbar() {
    const timeshow=()=>{
        const now=new Date();
        // Get the components of the date and time
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = now.getFullYear();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timezoneOffset = now.getTimezoneOffset(); // in minutes
        const offsetHours = String(Math.floor(Math.abs(timezoneOffset) / 60)).padStart(2, '0');
        const offsetMinutes = String(Math.abs(timezoneOffset) % 60).padStart(2, '0');
        const offsetSign = timezoneOffset > 0 ? '-' : '+';
        const timezone = `GMT${offsetSign}${offsetHours}${offsetMinutes}`;
        return (`${day}/${month}/${year} ${hours}:${minutes}:${seconds} ${timezone}`);
    }
    const [timefun, settimefun]=useState(timeshow());
    setTimeout(() => {
        settimefun(timeshow())
    }, 1000);


    const handleButtonClick = () => {
        console.log("usernavigation");
    };
   
  return (
            <div >
            <nav className="navbar  fixed-top">
             <div className="container-fluid">
        
            <p className="timefun-text"><i className ="bi bi-geo-alt-fill"></i>{timefun}</p>
            <a className="navbar-brand" href="/"><img className="imgtitle" src="favicon-96x96.png" alt="Girl in a jacket" width="80" height="80"/>World Today</a>
            <div className="navbar-user-container">
               <p clasname="navigation-text-user">Sign In</p>
                <button className="navbar-User_sign" type="button"  onClick={handleButtonClick}>
                <i className="bi bi-person-circle"></i>
                </button>
            </div>
            <div className="navbar-toggler-container">
            <p className="Explorebutton">Explore</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                
            <span className="navbar-toggler-icon"></span> 
                </button>
            </div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img src="favicon-96x96.png" alt="Girl in a jacket" width="80" height="80"/></h5>
                <button type="button" className="navbar-toggler" data-bs-dismiss="offcanvas" aria-label="Close">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                </li>
                </ul>
              
            </div>
            </div>
            
        </div>
        </nav>
            </div>
  );
}
