import { Skillsets } from "../obj.ts";

const Exp = (props) => {
    return(
        <div className="flex-col h-4/5 w-full md:w-2/3">
            <div className="flex justify-between">
                <h2 className="text-lg font-bold">{props.title}</h2>
                <p>{props.percent}</p>
            </div>
            <div className="w-full h-5 rounded-lg bg-glassy-25 backdrop-blur-sm">
                <div className="h-full rounded-lg backdrop-blur-md" style={
                {
                    width: props.percent,
                    backgroundImage: " linear-gradient(142.84deg, rgba(92, 180, 217, 0.749) 20.3%, rgba(212, 93, 232, 0.53) 85.27%, rgba(212, 93, 232, 0.53) 85.27%)"
                }}></div>
            </div>
        </div>
    );
};

const Exps = () => {
    return(
        <div className='flex flex-col h-full lg:h-1/2 justify-evenly items-center'>
            <Exp title={Skillsets.s1.title} percent={Skillsets.s1.percent}/>
            <Exp title={Skillsets.s2.title} percent={Skillsets.s2.percent}/>
            <Exp title={Skillsets.s3.title} percent={Skillsets.s3.percent}/>
            <Exp title={Skillsets.s4.title} percent={Skillsets.s4.percent}/>   
            <Exp title={Skillsets.s5.title} percent={Skillsets.s5.percent}/>                         
        </div>
    );
};

export default Exps;


