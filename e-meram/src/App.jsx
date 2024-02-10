import Navbar from'./conponents/Navbar'
import'./App.css'
import {Route,Router,Routes} from 'react-router-dom'
import SiteRoutes  from './SiteRoutes'
import Footer from './conponents/Footer'

import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='col-sm-12'>
          <SiteRoutes/>

        </div>
      </div>
      <Footer/>


    </>
  )
}

export default App
