import './App.css';
import TextBox from './components/textbox';
import IconButton from './components/IconButton';

function App() {
  return (
    <div id="background" className="fullscreen">
      <div className="fullscreen glasspane">

        <div id="navigation" className="glasspane">
          <nav>
            <div className="navlink-container">
              <p>Home</p>
              <div></div>
            </div>

            <div className="navlink-container">
              <p>About Me</p>
              <div></div>
            </div>

            <div className="navlink-container">
              <p>Education</p>
              <div></div>
            </div>

            <div className="navlink-container">
              <p>Skillsets</p>
              <div></div>
            </div>

            <div className="navlink-container">
              <p>Experience</p>
              <div></div>
            </div>
          </nav>
        </div>

        <main>
          <TextBox>
            <h1>Hello, I am <span className="highlight">Markus Johansen</span></h1>
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
          <div id="linkbuttons">
            <IconButton href="https://github.com/J0hans1/"/>
            <IconButton href="https://www.linkedin.com/in/markus-johansen-64625b208/"/>
            {/* <IconButton mailto="mailto: abc@example.com"/> */}
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
