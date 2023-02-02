import React from "react";
import "./css/GlassCard.css";

const GlassCard = (props) => {
    let style = {
        width: props.width ? props.width : '80%',
        background: 'rgba(255, 255, 255, 0.058)',
        display: props.split === 'true' ? 'flex' : 'initial'
      };
      
    const gradient = {
        green: 'linear-gradient(142.84deg, rgba(78, 244, 255, 0.40) 14.91%, rgba(52, 255, 109, 0.40) 85.27%)',
        blue: 'linear-gradient(142.84deg, rgba(88, 148, 173, 0.40) 30.3%, rgba(212, 93, 232, 0.40) 85.27%, rgba(212, 93, 232, 0.60) 85.27%)',
        purple: 'linear-gradient(142.84deg, rgba(106, 86, 227, 0.40) 14.91%, rgba(56, 199, 113, 0.40) 85.27%)',
        yellow: 'linear-gradient(121.46deg, rgba(78, 244, 255, 0.42) 0%, rgba(174, 227, 86, 0.60) 0.01%, rgba(129, 216, 253, 0.40) 70.5%)'
    };


    style.backgroundImage = gradient[props.color];

  return (
    <div 
        className="glasspane card"
        style={style}    
    >
        {props.children}
    </div>
  );
};

export default GlassCard;