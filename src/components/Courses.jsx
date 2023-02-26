import GlassCard from "./GlassCard";
import { CourseData } from "../obj.ts";

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
        <div className='hidden lg:flex flex-col h-2/3 justify-between items-center'>
            <Course title={CourseData.c1.title} code={CourseData.c1.code} description={CourseData.c1.text}/>
            <Course title={CourseData.c2.title} code={CourseData.c2.code} description={CourseData.c2.text}/>
            <Course title={CourseData.c3.title} code={CourseData.c3.code} description={CourseData.c3.text}/>
            <Course title={CourseData.c4.title} code={CourseData.c4.code} description={CourseData.c4.text}/>  
      </div>
    );
};

export default Courses;