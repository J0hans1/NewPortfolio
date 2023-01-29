import GlassCard from "./GlassCard";
import UIImage from "./UIImage";
import "./css/project.css";

const Project = (props) => {
    return (
        <GlassCard color={props.color} width='fit-content'>
          <h2>{props.title}</h2>
          <br/>

          <div className="project-split">
            <div className="description-container">
                <p>
                    {props.desc}
                </p>
            </div>
            <div>
                <UIImage img={`${props.project}.png`} href={props.href}/>
            </div>            
          </div>

      </GlassCard>
    );
};

export default Project;