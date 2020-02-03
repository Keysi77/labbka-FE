import React from 'react'
import dog from '../../assets/images/dog.jpg'
import './landing-page.styles.sass'

export default function LandingPage() {
    return (
        <div className="landing-page-wrapper">
            LANGIND PAGE
            <img src={dog} alt=""/>
        </div>
    )
}
