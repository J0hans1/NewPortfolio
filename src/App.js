import './App.css';
import TextBox from './components/textbox';
import LinkButtons from './components/LinkButtons';
import Navbar from './components/Navbar';
import GlassCard from './components/GlassCard';
import Courses from './components/Courses';
import Projects from './components/Projects';
import NTNU from './img/NTNU.png';
import Page from './components/page';
import Exps from './components/Exps';
import BusinessCard from './components/BuisnessCard';
import Circle from './components/Circle';

function App() {
  return (
    <div id="background" className="fullscreen">
      <Circle
        size="180px"
        color="linear-gradient(25.74deg, #38C771 8.85%, #6A56E3 85.16%)"
        left="1513px"
        top="131px"
      />

      <Circle
        size="200px"
        color="linear-gradient(197.74deg, #38C7BE 14.67%, #E3BC56 87.87%)"
        left="1321px"
        top="650px"
      />

      <Circle
        size="120px"
        color="linear-gradient(313.5deg, #3893C7 20.36%, #6A56E3 90.81%)"
        left="1021px"
        top="467px"
      />

      <Circle
        size="280px"
        color="linear-gradient(197.74deg, #81D8FD 14.67%, #AEE356 87.87%)"
        top="-78px"
        left="-24px"
      />

      <Circle
        size="260px"
        color="linear-gradient(122.92deg, #81D8FD 14.51%, #D45DE8 90.11%)"
        left="170px"
        top="690px"
      />

      <div id="back-glass" className="fullscreen glasspane sticky-wrapper">
        <Navbar/>
        <div className='page-container'>

          <Page name="home">
            <div className='spalte'>
              <TextBox>
                <h2>Hello, I am <span className="highlight">Markus Johansen</span></h2>
                <p>
                  I am a computer science student at the
                  Norwegian University of  Science and Technology (NTNU),
                  Based In Trondheim, Norway.
                </p>
                <p>
                  I made this portfolio to challengemyself in learning 
                  new technologies, and broaden my vision in the field 
                  of Front-End development, and UI-Design.
                </p>
              </TextBox>
              <LinkButtons/>
            </div>
            <div className='spalte'></div>
          </Page>

          <Page name="about">
            <div className='spalte'>
              <TextBox title="About ">
                <p>
                  I am a computer science student at the
                  Norwegian University of  Science and Technology (NTNU),
                  Based In Trondheim, Norway.
                </p>
                <p>
                  I made this portfolio to challenge myself in learning 
                  new technologies, and broaden my vision in the field 
                  of Front-End development, and UI-Design.
                </p>
              </TextBox>
              <BusinessCard/> 
            </div>
            <div className='spalte'>
              {/*IMAGE OF ME */}
            </div>
          </Page>

          <Page name="education">
            <div className='spalte'>

              <TextBox title="Education ">
                <p>
                  Write something here about NTNU and my time here.
                  Then write something about the “student-organisation
                  for computer science students” Linjeforeningen Online.
                </p>
                <p>   
                  Through my education i have great experience using GiT,
                  and working in SCRUM teams. I have also aquired some skills in UI/UX,
                  Algorithm design, Network and Fullstack devlopement
                </p>
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
              <TextBox title="Skillset and technologies ">
                <p>
                  I am a computer science student at the
                  Norwegian University of  Science and Technology (NTNU),
                  Based In Trondheim, Norway.
                </p>
                <p>
                  I made this portfolio to challenge myself in learning 
                  new technologies, and broaden my vision in the field 
                  of Front-End development, and UI-Design.
                </p>
              </TextBox>
              {/*Skillset component bar*/}
            </div>
            <div className='spalte'>
              <Exps/>
            </div>
          </Page>

          <Page name="experience">
            <div className='spalte'>  

              <TextBox title="Experience ">
                <p>
                  Write something here about different projects

                  Write something here about NAV internship

                  write something about ProKom

                  Write something about Customer service in store
                </p>
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
