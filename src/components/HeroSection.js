import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './fonts.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
     
      <h1 className="sadgan">پوشا</h1>
      <p className="iranSans">در لحظه خرید کن</p>
      <div className='hero-btns'>
        <Button
          className="btns iranSans"
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          مشاهده کالاهای برتر
        </Button>
        <Button
          className='btns iranSans'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          سبد خرید من 
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
