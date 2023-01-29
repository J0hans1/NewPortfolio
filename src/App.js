import './App.css';
import TextBox from './components/textbox';
import LinkButtons from './components/LinkButtons';
import Navbar from './components/Navbar';

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
                  I made this portfolio to challenge myself in learning 
                  new technologies, and broaden my vision in the field 
                  of Front-End development, and UI-Design.
                </p>
              </TextBox>

              <LinkButtons/>

            </div>
            <div className='spalte'></div>
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
