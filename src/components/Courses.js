import Course from "./Course";

const Courses = () => {
    return (
        <div className='courses'>
            <Course
                title="Human-Machine interaction"
                code="TDT4180"
                description="UI/UX, Design, User testing, Figma"
                color="yellow"
            />

            <Course
                title="Software Security"
                code="TDT4237"
                description="Attacks, Countermeasures, Security analysis, Cryptography, Django, Python"
                color="green"
            />

            <Course
                title="Software Development"
                code="TDT4140"
                description="Scrum, Agile, Extreme developement, React, Express.js, Node.js, Mongo.db"
                color="blue"
            />

            <Course
                title="Object-Oriented programming"
                code="TDT4100"
                description="Java, Objects, Classes, Inheritance, Abstraction, Backend, Frontend"
                color="purple"
            />  
      </div>
    );
};

export default Courses;