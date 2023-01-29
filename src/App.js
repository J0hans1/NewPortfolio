import './App.css';
import TextBox from './components/textbox';
import LinkButtons from './components/LinkButtons';
import Navbar from './components/Navbar';
import UIImage from './components/UIImage';
import GlassCard from './components/GlassCard';
import Courses from './components/Courses';
import Projects from './components/Projects';

function App() {
  return (
    <div id="background" className="fullscreen">
      <div id="back-glass" className="fullscreen glasspane">
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
             {/* <GlassCard split='true' color='blue'>
                <div className='half'>
                  <h2>Frisbee Golf Companion App</h2>
                  <p>
                    IT1901 - Informatics Project
                  </p>
                  <p>
                    App for Logging scorecards at
                    different frisbee golf courses
                    din Trondheim. 
                  </p>
                </div>

                <div className='half'>
                  <UIImage img="Discogolf.png" href="https://github.com/J0hans1/Portofolio"/>
                </div>
              </GlassCard> */}

              
  {/* 
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

              <GlassCard>
                <img src='./img/NTNU.png' alt="NTNU Logo"/>
              </GlassCard> */}

               <Courses/>
              {/* <Projects/> */}


            </div>
          </div>
{/* 
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
              <LinkButtons/>
            </div>
            <div className='spalte'></div>
          </div>

          <div className='page'>
            <div className='spalte'>

              <TextBox title="Education ">
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

              <LinkButtons/>

            </div>
            <div className='spalte'></div>
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

              <LinkButtons/>

            </div>
            <div className='spalte'></div>
          </div>

          <div className='page'>
            <div className='spalte'>  

              <TextBox title="Experience ">
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

              <LinkButtons/>

            </div>
            <div className='spalte'></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
