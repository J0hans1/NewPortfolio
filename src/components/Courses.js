import Course from "./Course";

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