import Project from "./Project";
import "./css/projects.css";

const Projects = () => {
    return (
        <div id="projects">
            <Project 
                project="Discogolf" 
                title="Frisbee Golf Companion App" 
                color="blue" 
                href="https://github.com/J0hans1/Portofolio"
                desc="
                    App for Logging scorecards at
                    different frisbee golf courses
                    din Trondheim.
                "
                />

                <Project 
                project="BookOfCook" 
                title="Digital Recipe Application" 
                color="purple" 
                href="https://github.com/J0hans1/Portofolio"
                desc="
                    Application for creating
                    food-recipes and store
                    them in a digital format.
                "
                />
                <Project 
                project="Portfolio1.0" 
                title="Portfolio" 
                color="green" 
                href="https://github.com/J0hans1/Portofolio"
                desc="Personal Webpage deployed at Johansen.tech."
                />
            </div>
    );
};

export default Projects;