import './App.css';
import LinkButtons from './components/LinkButtons';
import Navbar from './components/Navbar';
import GlassCard from './components/GlassCard';
import Courses from './components/Courses';
import Projects from './components/Projects';
import NTNU from './img/NTNU.png';
import Exps from './components/Exps';
import BusinessCard from './components/BuisnessCard';
import Circles from './components/Circles';
import IMG1 from './img/cv-transparent-cropped.png';
import IMG2 from './img/smil-transparent-cropped.png';
import React, { useRef } from "react";
import './components/css/textbox.css'
import {PageText} from './obj.ts';

const TextBox = (props) => {
  return (
    <div className="textbox leading-8 tracking-widest text-lg">
      <h2 className='text-3xl'>{props.title}</h2>
      {props.children}
    </div>
  );
}

function Page(props) {
  const pageRef = useRef(null);

  return (
    <div ref={pageRef} id={props.name} className="page">
        {props.children}
    </div>
  );
}

function App() {
  return (
    <div id="background" className="fullscreen">
      <Circles/>                                                
      <div id="back-glass" className="fullscreen  sticky-wrapper">
        <Navbar/>
        <div className='page-container snap-container'>
          <Page name="home" >
            <div className='spalte'>
              <TextBox>
                <h2 className='text-3xl'>{PageText.p1.header} <span className="highlight">{PageText.p1.name}</span></h2>
                <p>{PageText.p1.text1}</p>
                <p>{PageText.p1.text2}</p>
              </TextBox>
              <LinkButtons/>
            </div>
            <div className='spalte'></div>
          </Page>

          <Page name="about">
            <div className='spalte'>
              <TextBox title={PageText.p2.title}>
                <p>{PageText.p2.text1}</p>
                <p>{PageText.p2.text2}</p>
              </TextBox>
              <BusinessCard/> 
            </div>
            <div className='spalte'>
              <div id='meImgContainer' className='
                glasspane overflow-hidden
                flex items-center justify-center
                h-100 w-100 rounded-full
              '>
                <img id="img1" className='scale-125' src={IMG1} alt="me"/>
              </div>
            </div>
          </Page>

          <Page name="education">
            <div className='spalte'>
              <TextBox title={PageText.p3.title}>
                <p> {PageText.p3.text1} </p>
                <p> {PageText.p3.text2} </p>
              </TextBox>

              <GlassCard>
                <img src={NTNU} alt="NTNU Logo"/>
              </GlassCard>
            </div>
            <div className='spalte'>
                <Courses/>
            </div>
          </Page>

          <Page name="skillsets">
            <div className='spalte'>
              <TextBox title={PageText.p4.title}>
                <p>{PageText.p4.text1}</p>
                <p>{PageText.p4.text2}</p>
              </TextBox>
            </div>
            <div className='spalte'>
              <Exps/>
            </div>
          </Page>

          <Page name="experience">
            <div className='spalte'>  
              <TextBox title={PageText.p5.title}>
                <p>{PageText.p5.text1}</p>
                <p>{PageText.p5.text2}</p>
                <p>{PageText.p5.text3}</p>
              </TextBox>
            </div>
            <div className='spalte'>
                <Projects/> 
            </div>
          </Page>
        </div>
      </div>
    </div>

    
  );
}

export default App;
