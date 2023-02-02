import Project from "./Project";
import "./css/projects.css";

const Projects = () => {
    return (
        <div id="projects">
            <Project 
                project="Discogolf" 
                title="DiscoGolf - Frisbee Golf App" 
                color="green" 
                href="https://github.com/J0hans1/Portofolio"
                desc="
                    App for Logging scorecards at
                    different frisbee golf courses
                    din Trondheim.
                "
                >
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/1200px-Apache_Maven_logo.svg.png" alt="Apache"/>
                    <img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring"/>
                    <img src="https://img.icons8.com/color/256/git.png" alt="Git"/>
                </Project>

                <Project 
                    project="ToolBox" 
                    title="ToolBox - A- pplication for renting tools" 
                    color="purple" 
                    href="https://github.com/J0hans1/Portofolio"
                    desc="
                        Application for creating
                        food-recipes and store
                        them in a digital format.
                    "
                >
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Native"/>
                    <img src="https://img.icons8.com/color/48/000000/redux.png" alt="Redux"/> 
                    <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="Material UI"/>
                    <img src="https://img.icons8.com/color/256/tailwindcss.png" alt="Tailwind"/>
                    <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="Firebase"/>

                </Project>

                <Project 
                    project="Portfolio1.0" 
                    title="Portfolio" 
                    color="blue" 
                    href="https://github.com/J0hans1/Portofolio"
                    desc="Personal Webpage deployed at Johansen.tech."
                >
                    <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Native"/>
                    <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="Javascript"/>
                    <img src="https://img.icons8.com/color/256/tailwindcss.png" alt="Tailwind"/>
                    <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" alt="Vercell"/>
                </Project>
            </div>
    );
};

export default Projects;