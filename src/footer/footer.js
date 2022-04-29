import React from 'react'
import logo from '../img/logo.png'
import './footer.css'
import './footerResponsive.css'

class Footer extends React.Component{
    render(){
        return(
            <div className='footer-container'>
            <div className='footer-box'>
                <div className='footer1'>
                    <div className='footer-logo-title'>
                       <img className='footer-logo' src={logo} alt='imgs'/>
                       <p className='footer-title'>Brend Mebel</p>
                    </div>
                    <p className='footer-matn'>Brend Mebel.uz - onlayn mebel do'koni. Biz qulay narxlarda sifatli mebellarni kafolat bilan taklif qilamiz. Mebel tanlashda sizga yordam berishdan mamnun bo'lamiz!</p>
                    <div className='footer-icons'>
                        <a href='https://t.me/brendmebel_uz' target="blank">
                        <i className='fa fa-telegram icon'/>
                        </a>
                        <a href='https://www.facebook.com/brendmebel.uzb' target='blank'>
                        <i className='fa fa-facebook icon'/>
                        </a>
                        <a href='https://www.instagram.com/brendmebel.uz/?hl=ru' target="blank">
                        <i className='fa fa-instagram icon'/>
                        </a>
                    </div>
                </div>
                <div className='footer2'>
                    <h1 className='footer-addres'>Addres:</h1>
                    <p className='footer-text'>Toshkent shahri</p>
                    <p className='footer-text'>Olmazor tumani</p>
                    <p className='footer-text'>Yangi Toshmi TXAY yoli</p>
                    <p className='footer-text'>Yengi Toshmi gilamsaroy betonka yolida </p>
                    <p className='footer-text'>choyxoni yonida.</p>
                </div>
                <div className='footer3'>
                    <h1 className='footer-kontact'>Kontaktlar:</h1>
                    <p className='footer-text'>Asxanov Bahodir:</p>
                    <p className='footer-num'>+998 (90) 787-87-67</p>
                    <p className='footer-text'>Nig`matov Nuriddin:</p>
                    <p className='footer-num'>+998 (94) 567-84-34</p>
                    <p className='footer-text'>Nig`matov Jamoliddin:</p>
                    <p className='footer-num'>+998 (94) 567-84-34</p>

                </div>
                <div className='footer4'>
                    <h1 className='footer-mahsulot'>Mahsulotlar:</h1>
                    <p className='footer-text'>Shkaf</p>
                    <p className='footer-text'>Stol</p>
                    <p className='footer-text'>Stul</p>
                    <p className='footer-text'>Divan</p>
                    <p className='footer-text'>Yumshoq mebel</p>
                    <p className='footer-text'>Oshxona mebel</p>
                    <p className='footer-text'>Spalniy</p>
                    {/* <p className='footer-text'></p> */}

                </div>
            </div>
            </div>
        )
    }
}

export default Footer;