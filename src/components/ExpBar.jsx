import './css/exp.css';

const Exp = (props) => {
    return(
        <div className="exp">
            <div className="exp-text-splitter">
                <h2>{props.title}</h2>
                <p>{props.percent}</p>
            </div>
            <div className="expbar">
                <div className="expbar-fill" style={{width: props.percent}}></div>
            </div>
        </div>
    );
};

export default Exp; 