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
import React, { useRef } from "react";
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
    <div ref={pageRef} id={props.name} className="flex flex-col xl:flex-row h-screen w-full snap-center p-20 justify-between xl:gap-40">
        {props.children}
    </div>
  );
}

function Spalte(props) {
  return (
    <div className="flex flex-col justify-center h-full w-full xl:w-1/2">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <div className="w-full relative bg-background">

      <Circles/>        

      <div className="w-full h-full flex top-0 left-0" style={{
        background: 'rgba(255, 255, 255, 0.079)'
       }}>

        <Navbar/>

        <div className='w-11/12 snap-container relative top-0'>
          <Page name="home" >
            <Spalte>
              <TextBox>
                <h2 className='text-3xl'>{PageText.p1.header} <span className="highlight bg-PBG-lite bg-clip-text">{PageText.p1.name}</span></h2>
                <p>{PageText.p1.text1}</p>
                <p>{PageText.p1.text2}</p>
              </TextBox>  
              <LinkButtons/>            
            </Spalte>

            <Spalte></Spalte>
          </Page>

          <Page name="about">
            <Spalte>
                <TextBox title={PageText.p2.title}>
                  <p>{PageText.p2.text1}</p>
                  <p>{PageText.p2.text2}</p>
                </TextBox>
                <div className='flex-row xl:hidden'>
                  <div className='
                  bg-PBG backdrop-blur-sm overflow-hidden
                  flex items-center justify-center
                  h-64 w-64 xl:h-100 xl:w-100 rounded-full
                '>
                  <img id="img1" className='scale-125' src={IMG1} alt="me"/>
                </div>
                  <BusinessCard/> 

                </div>
                <div className='hidden xl:flex'>
                  <BusinessCard/> 
                </div>
            </Spalte>

            <Spalte>
                <div className='
                  bg-PBG glasspane overflow-hidden backdrop-blur-sm
                  items-center justify-center
                  h-64 w-64 xl:h-100 xl:w-100 rounded-full hidden xl:flex
                '>
                  <img id="img1" className='scale-125' src={IMG1} alt="me"/>
              </div>
            </Spalte>
          </Page>

          <Page name="education">

            <Spalte>
              <TextBox title={PageText.p3.title}>
                <p> {PageText.p3.text1} </p>
                <p> {PageText.p3.text2} </p>
              </TextBox>

              <GlassCard>
                <img src={NTNU} alt="NTNU Logo" />
              </GlassCard>              
            </Spalte>

            <Spalte>
                <Courses/>
            </Spalte>
          </Page>

          <Page name="skillsets">
            <Spalte>
                <TextBox title={PageText.p4.title}>
                  <p>{PageText.p4.text1}</p>
                  <p>{PageText.p4.text2}</p>
                </TextBox>
            </Spalte>
            <Spalte>
                <Exps/>
            </Spalte>
          </Page>

          <Page name="experience">
            <Spalte>
              <TextBox title={PageText.p5.title}>
                <p>{PageText.p5.text1}</p>
                <p>{PageText.p5.text2}</p>
                <p>{PageText.p5.text3}</p>
              </TextBox>
            </Spalte>
            <Spalte>
                <Projects/> 
            </Spalte>
          </Page>
        </div>
      </div>
    </div>

    
  );
}

export default App;
