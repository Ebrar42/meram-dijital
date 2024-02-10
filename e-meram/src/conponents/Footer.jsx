import React from 'react'

function Footer() {
  return (
    <footer className='site-footer' 
    style={{
        background:"linear-gradient(to right, #61ed74, #068565)"
    }}>
        <div className='row'>
            <div className='col-md-4'>
                <br />
                <h3>GEZİLECEK YERLER</h3>
                <ul>
                    <li>
                    <a href="kapu-camii">KAPU CAMİ</a>
                    </li>
                    <li>
                <a href="/sahip-ata-muzesi">SAHİP ATA MÜZESİ</a>
              </li>
              <li>
                <a href="80-binde-devr-i-alem-parki">80 BİNDE DEVR-İ ALEM PARKI</a>
              </li>
                </ul>
            </div>
            <div className="col-md-4">
            <br />
            <h3>RESTORANLAR</h3>
            <ul className="footer-links">
              <li>
                <a href="/aydin">AYDIN ÇAVUŞ RESTORANI</a>
              </li>
              <li>
                <a href="/kirkikindi">KIRKİKİNDİ RESTORAN MİLLET BAHÇESİ</a>
              </li>
              <li>
                <a href="camlibel">ÇAMLIBEL KONYA MUTFAĞI</a>
              </li>
            </ul>
          </div>
          <div className='col-md-4'>
            <br />
            <h3>İLETİŞİM</h3>
            <p>
                MERAM/KONYA
                <br />
                TÜRKİYE
            </p>
            <p>
            TELEFON: 123-456-7890
              <br />
              EMAİL: info@konyameram.com
            </p>
          </div>
        </div>
        <hr />
       
    </footer>
  )
}

export default Footer