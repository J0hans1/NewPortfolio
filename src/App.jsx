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
import Circles from './components/Circles';
import ME from './img/Me3.png';

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
              <div id='meImgContainer' className='glasspane'>
                <img id="meImg" src={ME} alt="me"/>
              </div>
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
                  As a student of computer science, i have had the opportunity to work with
                  many different technologies and projects, both at school and in my spare time.
                  I have worked with both front-end and back-end development, 
                  and have had the opportunity to work on many different stacks
                </p>
                <p>
                  In the summer of 2023 i will be working as a developer junior consultant at, 
                  NAV IT (Norwegian Labour and Welfare Administration) in Oslo. There i worked in 
                  a team of 5 developers, and 2 consultants. 
                </p>
                <p>
                  I have also worked as a graphic designer and jorunalist for the student-organisation
                  for computer science students at NTNU, Linjeforeningen Online
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
