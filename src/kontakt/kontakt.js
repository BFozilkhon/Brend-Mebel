import React, { Component } from 'react'
import Footer from '../footer/footer'
import kontaktImg from '../img/kontakt.jpg'
import './kontakt.css'
import './kontaktResponsive.css'

export default class Kontakt extends Component {
    render() {
        return (

            <div className='kontakt'>
               <div className='kontakt-box'>
                <h1 className='kont-header'><i>"Brend Mebel bu sening tanloving"</i></h1>
                <img src={kontaktImg} className='kont-img' alt='imgs'/>
                    <h1 className='kont-wrapp'>Murojat uchun:</h1>
               </div>

               

                <div className='kont-container'>

                <div className='kont1'>
                <div className='icon-user'>
                        <i className='fa fa-user'/>
                        <h3 className='kont1-item'>Asxanov Bahodir Ahrorovich</h3>
                    </div>
                    <div className='icon-phone'>
                        <i className='fa fa-phone'/>
                    <a href='tel:+998909540486'>
                        <p className='kont1-num'>+998 (90) 954-04-86</p>
                    </a>
                    </div>

                    <div className='icon-user'>
                        <i className='fa fa-user'/>
                        <h3 className='kont1-item'>Nig`matov Nuriddin Odilovich</h3>
                    </div>
                    <div className='icon-phone'>
                        <i className='fa fa-phone'/>
                        <a href='tel:+998974007407'>
                        <p className='kont1-num'>+998 (97) 400-74-07</p>
                        </a>
                    </div>

                    <div className='icon-user'>
                        <i className='fa fa-user'/>
                        <h3 className='kont1-item'>Nig`matov Jamoliddin Odilovich</h3>
                    </div>
                    <div className='icon-phone'>
                        <i className='fa fa-phone phone'/>
                        <a href='tel:+998998683747'>
                        <p className='kont1-num'>+998 (99) 868-37-47</p>
                        </a>
                    </div>
                    </div>

                <div className='kont2'>

                           
                        <a target='blank' href='https://t.me/brendmebel_uz'>
                    <div className='kont2-nik'>
                        <i className='fa fa-telegram kont2-icons-tel'/>
                        <h2 className='kont2-item'>@BrendMebelUz</h2>
                    </div>
                        </a>

                         <a href='https://www.instagram.com/brendmebel.uz/?hl=ru' target='blank'>
                    <div className='kont2-nik'>
                        <i className='fa fa-instagram kont2-icons-ins'/>
                        <h2 className='kont2-item'>@BrendMebel.uz</h2>
                    </div>
                         </a>

                          <a href='https://twitter.com/login?lang=ru' target='blank'>
                    <div className='kont2-nik'>
                        <i className='fa fa-twitter kont2-icons-twi'/>
                        <h2 className='kont2-item'>@BrendMebel.uz</h2>
                    </div>
                         </a> 

                         <a href='https://www.facebook.com/brendmebel.uzb' target="blank">
                    <div className='kont2-nik'>
                        <i className='fa fa-facebook kont2-icons-face'/>
                        <h2 className='kont2-item'>@BrendMebel.uz</h2>
                    </div>
                         </a> 

                </div>
            

                </div>

                
                <div className='kont5-footer'>

                <Footer />
                </div>
            </div>
        )
    }
}
