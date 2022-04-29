import React from "react"
import './market.css'
import './marketResponsive.css'
import { Link } from "react-router-dom";


class Market extends React.Component{
    render(){
        return(
            <div data-aos={this.props.aos} data-aos-offset={this.props.aos_offset} className='card'>
                <img className='card-img' src={this.props.img} alt='imgs' />
                 <div className='name-turi'>
                 <p className='card-name'>{this.props.name}</p>
                 <p className='card-turi'>{this.props.turi}</p>
                 <div className='narx'>{this.props.narx}</div>
                 <Link to='/kontakt'>
                 <button className='card-btn'>Buy</button>
                 </Link>
                 </div>
            </div>
        )
    }
}

export default Market;