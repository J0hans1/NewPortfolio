import GlassCard from "./GlassCard";

const Course = (props) => {
    return (
        <GlassCard color="blue">
            <div className="tracking-widest h-12 hover:h-32 overflow-hidden duration-200">
                <h2 className="text-lg font-bold">{props.title}</h2>
                <p>{props.code}</p>
                <br/>
                <p>{props.description}</p>
            </div>
        </GlassCard>
    );
};

const Courses = () => {
    return (
        <div className='courses'>
            <Course
                title="Human-Machine interaction"
                code="TDT4180"
                description="UI/UX, Design, User testing, Figma"
            />

            <Course
                title="Software Security"
                code="TDT4237"
                description="Attacks, Countermeasures, Security analysis, Cryptography, Django, Python"
            />

            <Course
                title="Software Development"
                code="TDT4140"
                description="Scrum, Agile, Extreme developement, React, Express.js, Node.js, Mongo.db"
            />

            <Course
                title="Object-Oriented programming"
                code="TDT4100"
                description="Java, Objects, Classes, Inheritance, Abstraction, Backend, Frontend"
            />  
      </div>
    );
};

export default Courses;