import React, { Component } from 'react'
import { Link } from "react-router-dom";
//img
import addresImg from '../img/adres-logo.png'
import dostavka from '../img/dostavka2.png'
import chegirma from '../img/chegirma.png'
import plus from '../img/puls.png'
import Footer from '../footer/footer'
//css
import './addres.css'
import './addresResponsive.css'

export default class Addres extends Component {
    render() {
        return (
            <div className='addres-container'>
                   <div className='addres-box'>
                       <div className='addres-card'>
                           <h1 className='addres-header'>Brend Mebel Addres:</h1>
                           <p className='addres-item'>Toshkent shahri Olmazor tumani Yangi Toshmi TXAY yoli, gilamsaroy , betonka yolida choyxoni yonida. </p>
                           <p className='addres-item'>Город Ташкент, Алмазарский район, дорога Янги Ташми TXAY, gilamsaraya, дорога бетонная, рядом чайхана.</p>
                           <p className='addres-item'>Biz saytimiz addresini google Kartadan ko`rmoqchi bo`lsangiz pastdagi Tugmani bosing.</p>
                           <a target='blank' href='https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BB%D0%B8%D0%BA%D0%B0+%D0%91%D0%BE%D0%BD%D1%83/@41.3483462,69.1728602,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8e946b73658b:0x12d6d8af3152166a!8m2!3d41.3483462!4d69.1728602'>
                           <button className='addres-btn'>Google Karta</button>
                           </a>
                       </div>
                       <img className='addres-img'  alt='imgs' src={addresImg} />
                   </div>

                  <div className='addres-yangiilklar'>
                      <h1 className='foiz-header'>Ajoyib Yangilik</h1>
                   <p className='foiz-item'>Assalomu alyakum hurmatli saytimiz kuzatuvchilari.Biz sizga hayratlanarli darajadagi yangilikni elon qilamiz.Endi siz bizning rasmiy do`konimizga kelib mebel harid qilsangiz.Sizga Mebelingizni tekinga yetkazib berish xizmati va eng hayratlanarlisi har bir mebelga <mark>5%</mark>  gacha chegirmalar elon qilamiz.Shoshiling hayotda shuncha yaxshi imkoniyatlarni qoldan boy bergansiz.Lekin bunisini qo`ldan chiqarmang.Biz bilan bog`laning!!!</p>
                   <div className='foiz-va-chegirma'>
                         <img className='foiz-chegirma' alt='imgs' src={chegirma} />
                         <img className='foiz-puls' alt='imgs' src={plus} />
                         <img className='foiz-dostavka' alt='imgs' src={dostavka} />
                   </div>

                   <div className='add-dis'>

                   <div className='foiz-icon-circle'>
                    <i className='fa fa-phone foiz-icon'/>
                   </div>
                   <Link to='/kontakt'>
                    <button className='foiz-boglanish'>Bog`lanish</button>
                   </Link>
                    </div>
                  
                   </div>
                <Footer />
                
            </div>
        )
    }
}
