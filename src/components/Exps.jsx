import Exp from "./ExpBar";

const Exps = () => {
    return(
        <div className='exps'>
            <Exp title="UI/UX" percent='80%'/>
            <Exp title="Backend" percent='70%'/>
            <Exp title="Frontend" percent='90%'/>
            <Exp title="Security" percent='40%'/>   
            <Exp title="Architecture" percent='50%'/>                         
        </div>
    );
};

export default Exps;