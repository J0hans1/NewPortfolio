import GlassCard from "./GlassCard";

const Course = (props) => {
    return (
        <GlassCard color="blue">
            <h2>{props.title}</h2>
            <p>{props.code}</p>
            <br/>
            <p>{props.description}</p>
        </GlassCard>
    );
};

export default Course;