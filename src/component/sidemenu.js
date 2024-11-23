import React from 'react';
import './sidemenu.css';
export default function sidemenu() {
  return (
    <div className="sidemenu-sidecomponents">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-md-m">
        <a className="navbar-brand-name" href="./">Menu</a> 
        </div>
        </nav>
        <div className='menutab'>
                            
        <div>
                <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/"><img className="img-menubar" src="/mayor.png" alt="Politician" width="30" height="30" />Politcs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/international.png" alt="Worldaffair" width="30" height="30" />World Affairs</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/police-handcuffs.png" alt="Crime" width="30" height="30" />Crime</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/business.png" alt="Business" width="30" height="30" />Business</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/life.png" alt="life-style" width="30" height="30" />Life Style</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/sports.png" alt="all-sports" width="30" height="30" />Sport</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/technology.png" alt="lapto-setting" width="30" height="30" />Technology</a>
             </li>
             <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/cinema.png" alt="cinema-movie" width="30" height="30" />Entertainment</a>
             </li>
             <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/india-gate.png" alt="india-gate" width="30" height="30" />India</a>
             </li>
             <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/statue-of-liberty.png" alt="statue-of-libarty" width="30" height="30" />USA</a>
             </li>
             <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/colosseum.png" alt="rome-europe" width="30" height="30" />Europe</a>
             </li>
             <li className="nav-item">
                    <a className="nav-link" href="/"><img className="img-menubar" src="/great-buddha-of-thailand.png" alt="buddha-asia" width="30" height="30" />Asia</a>
             </li>
             
             <li className="nav-item dropdown">
               <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img className="img-menubar" src="/smart-city.png" alt="City" width="30" height="30" />
              City
            </a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="/"><img className="img-menubar" src="/red-fort.png" alt="Delhi-icon" width="30" height="30" />Delhi</a></li>
              <li><a className="nav-link" href="/"><img className="img-menubar" src="/gate-of-india.png" alt="Mumbai-icon" width="30" height="30" />Mumbai</a></li>
              <li><a className="nav-link" href="/"><img className="img-menubar" src="/empire-state-building.png" alt="New-york-icon" width="30" height="30" />New York</a></li>
              <li><a className="nav-link" href="/"><img className="img-menubar" src="/big-ben.png" alt="London-icon" width="30" height="30" />London</a></li>
              <li><a className="nav-link" href="/"><img className="img-menubar" src="/eiffel-tower.png" alt="paris-icon" width="30" height="30" />Paris</a></li>
              <li><a className="nav-link" href="/"><img className="img-menubar" src="/shanghai-world-financial-center.png" alt="shanghai-icon" width="30" height="30" />Shanghai</a></li>
            
              </ul>
             </li>

                </ul>
               
            </div>
        </div>
        </div>

        </div>
  )
}
