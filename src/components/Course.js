import GlassCard from "./GlassCard";

const Course = (props) => {
    return (
        <GlassCard color={props.color}>
            <h2>{props.title}</h2>
            <p>{props.code}</p>
            <br/>
            <p>{props.description}</p>
        </GlassCard>
    );
};

export default Course;