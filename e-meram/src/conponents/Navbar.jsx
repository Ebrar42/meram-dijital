import React from 'react'
import { Link } from 'react-router-dom'
import "./slide.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expanded-lg bg-body-tertiary mine">
        <div className='container-fluid mine'>
            <a href="/">
                <img src="https://www.meram.bel.tr/assets/img/logo.svg" 
                alt="Meram Belediyesi"
                tyle={{
                    width: "90px",
                    height: "70px",
                    marginRight:"80px" 
                }}/>
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <span className="navbar-toggler-icon"></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'
            style={{
                fontSize: '20px',
                fontWeight: 'bold',
                gap: '30px',
            }}>
                <Link className='nav-link' to='/culture'>Meram'da Gezmek</Link>
                <Link className='nav-link' to='/rest'>Meram'da Yemek</Link>
                <Link className='nav-link' to='/about'>Hakkımızda</Link>
                <Link className='nav-link' to='/contact'>İletişim</Link>
            </div>
          </div>
        </div>
    </nav>
  
  )
}

export default Navbar