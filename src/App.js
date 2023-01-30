import './App.css';
import TextBox from './components/textbox';
import LinkButtons from './components/LinkButtons';
import Navbar from './components/Navbar';
import GlassCard from './components/GlassCard';
import Courses from './components/Courses';
import Projects from './components/Projects';
import NTNU from './img/NTNU.png';

function App() {
  return (
    <div id="background" className="fullscreen">
      <div id="back-glass" className="fullscreen glasspane sticky-wrapper">
        <Navbar/>
        <div className='page-container'>

          <div className='page'>
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
            <div className='spalte'>

            </div>
          </div>

          <div className='page'>
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
              <GlassCard split='true'>
                <div>
                  <h3>Name</h3>
                  <h3>Phone</h3>
                  <h3>Email</h3>
                  <h3>Adress</h3>
                </div>
                <div>
                  <p>Markus A. R. Johansen</p>
                  <p>+47 934 00 000</p>
                  <p>markusarj@gmail.com</p>
                  <p>Clara Holsts Veg 23, Trondheim 7046, Norway</p>
                </div>
              </GlassCard>
            </div>
            <div className='spalte'>
              {/*IMAGE OF ME */}
            </div>
          </div>

          <div className='page'>
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
          </div>

          <div className='page'>
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
              {/*Technologies component*/}
            </div>
          </div>

          <div className='page'>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
