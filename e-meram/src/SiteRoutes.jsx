import React from 'react'
import Home from './page/Home';
import {Route,Routes} from 'react-router-dom'
import Sahip from './places/Cultures/Sahip'
import Ates from './places/Cultures/Ates'
import Kapu from './places/Cultures/Kapu'
import Culture from './places/Culture'
import Restaurant from './page/Restaurant'
import Contact from '../page/Contact'
import About from '../page/About'
import Seksen_Bin from '../places/Cultures/Seksen_Bin'
import Akyokus from '../places/Cultures/Akyokus'
import Tavus from '../places/Cultures/Tavus'
import Amber from '../places/Cultures/Amber'
import Etnografia from '../places/Cultures/Etnografia'
import Camlibel from '../places/Restaurants/Camlibel'
import KırkIkindi from '../places/Restaurants/KırkIkindi'
import Huzur from '../places/Restaurants/Huzur '
import TavusKafem from '../places/Restaurants/TavusKafem'
import Yıldız_Osmanlı from '../places/Restaurants/Yıldız_Osmanlı'
import Evliya from '../places/Restaurants/Evliya'
import Aydın from '../places/Restaurants/Aydın'
import Akyokus_kafe from '../places/Restaurants/Akyokus_kafe'

function SiteRoutes() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/culture' element={<Culture/>}/>
        <Route path='/rest' element={<Restaurant/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/sahip" element={<Sahip/>}/>
        <Route path="/ates-bazi-veli-turbesi" element={<Ates/>}/>
        <Route path="/kapu-camii" element={<Kapu/>}/>
        <Route path="/80-binde-devr-i-alem-parki" element={<Seksen_Bin/>}/>
        <Route path="/akyokus" element={<Akyokus/>}/>
        <Route path="/tavus" element={<Tavus/>}/>
        <Route path="/amber-reis-camii" element={<Amber/>}/>
        <Route path="/etnografia-müzesi" element={<Etnografia/>}/>
        <Route path="/camlibel" element={<Camlibel/>}/>
        <Route path="/kırk-ikindi" element={<KırkIkindi/>}/>
        <Route path="/huzur-kafe" element={<Huzur/>}/>
        <Route path="/tavus-kafem" element={<TavusKafem/>}/>
        <Route path="/yıldız-osmanlı" element={<Yıldız_Osmanlı/>}/>
        <Route path="/evliya" element={<Evliya/>}/>
        <Route path="/aydin" element={<Aydın/>}/>
        <Route path="/akyokus-kafe" element={<Akyokus_kafe/>}/>
       
    </Routes>
    </>
  )
}

export default SiteRoutes