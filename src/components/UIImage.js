import React from 'react';
import './css/UIImage.css';

const UIImage = (props) => {

    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.href, "_blank");  
    }

  return (
    <div className="UIimage-container">
      <div
        className="UIimage"
        style={{
          backgroundImage: `url(${require(`../img/${props.img}`)})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      <div className="UIimage-overlay" onClick={handleClick}>
        <img 
            src={require(`../img/Github.png`)}
            alt={props.image}
        />
      </div>
    </div>
  );
};

export default UIImage;
