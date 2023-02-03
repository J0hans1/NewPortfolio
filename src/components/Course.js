import GlassCard from "./GlassCard";
import './css/course.css'

const Course = (props) => {
    return (
        <GlassCard color="blue">
            <div className="course-content">
                <h2>{props.title}</h2>
                <p>{props.code}</p>
                <br/>
                <p>{props.description}</p>
            </div>
        </GlassCard>
    );
};

export default Course;