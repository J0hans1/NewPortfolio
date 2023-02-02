import GlassCard from "./GlassCard";
import UIImage from "./UIImage";
import "./css/project.css";

const Project = (props) => {
    return (
        <GlassCard color={props.color} width='70%'>
            <div className="project-content">
                <h2>{props.title}</h2>
                <div className="project-split">
                    <p>
                        {props.desc}
                    </p>
                    <UIImage img={`${props.project}.png`} href={props.href}/>
                </div>  
                <div className="tech-icons">
                    {props.children}   
                </div>     
            </div>
      </GlassCard>
    );
};

export default Project;