import React from 'react'
import Culture_Cards from '../Culture_cards'

function Culture() {
  return (
    <>
    <div className='container d-flex justify-content-center align-items-center'
    style={{
        marginTop:'30px',
        marginBottom:'60px'
    }}>
        <a href="/">
            <img src="https://www.meram.bel.tr/assets/img/logo.svg" 
            alt="Meram Belediyesi"
            style={{
                width:'150px',
                height:'150px'
            }} />
        </a>
    </div>
    <div className='container' 
    style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'30px',
        fontSize:'40px'
    }}>
        <div className='container w-75'>
            <p style={{
                fontSize:'20px',
                textAlign:'center'
            }}>
                 <strong>Konya Meram bölgesi</strong>, zengin tarihî mirası ve kültürel değerleriyle dolu bir şehirdir. Bu benzersiz bölgede gezilecek pek çok önemli tarihi mekân bulunmaktadır. <strong>Konya'nın </strong> tarihî dokusunu hissetmek ve bu büyüleyici şehrin derinliklerine inmek için sizi sitemizi ziyaret etmeye davet ediyoruz.
            </p>
        </div>
    </div>
    <br />
    <div className="container cont">
        <h2>Tarihi Yerler</h2>
      </div>
      <br />
      <Culture_Cards/>
    </>
  )
}

export default Culture