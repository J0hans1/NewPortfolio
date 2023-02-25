

const Exp = (props) => {
    return(
        <div className="flex-col h-4/5">
            <div className="flex justify-between">
                <h2 className="text-lg font-bold">{props.title}</h2>
                <p>{props.percent}</p>
            </div>
            <div className="w-full h-5 rounded-lg bg-glassy-50">
                <div className="h-full rounded-lg" style={
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
        <div className='flex flex-col h-1/2 justify-evenly w-4/5'>
            <Exp title="UI/UX" percent='80%'/>
            <Exp title="Backend" percent='70%'/>
            <Exp title="Frontend" percent='90%'/>
            <Exp title="Security" percent='40%'/>   
            <Exp title="Architecture" percent='50%'/>                         
        </div>
    );
};

export default Exps;


