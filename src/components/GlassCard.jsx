import React from "react";

const GlassCard = (props) => {
    let style = {
        width: props.width ? props.width : '80%',
        background: 'rgba(255, 255, 255, 0.058)',
        display: props.split === 'true' ? 'flex' : 'initial'
      };
      
    const gradient = {
        blue: 'linear-gradient(142.84deg, rgba(88, 148, 173, 0.40) 30.3%, rgba(212, 93, 232, 0.40) 85.27%, rgba(212, 93, 232, 0.60) 85.27%)',
    };


    style.backgroundImage = gradient[props.color];

  return (  
    <div 
        className="glasspane rounded-4xl p-7 shadow-lg"
        style={style}    
    >
        {props.children}
    </div>
  );
};

export default GlassCard;