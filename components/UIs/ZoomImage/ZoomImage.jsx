import { useState, useRef } from 'react';

import cls from './zoomImage.module.scss';

const Zoom = ({ image }) => {
  const imageRef = useRef();

  const handleMouseMove = (e) => {
    const x = e.clientX - e.target.offsetLeft - 300;
    const y = e.clientY - e.target.offsetTop - 100;
    // STYLING IMAGE ON MOUSE MOVE
    imageRef.current.style.transformOrigin = `${x}px ${y}px`;
    imageRef.current.style.transform = 'scale(2)';
  }
  const handleMouseLeave = (e) => {
    // STYLING IMAGE ON MOUSE MOVE
    imageRef.current.style.transformOrigin = `center`;
    imageRef.current.style.transform = 'scale(1)';
  }

  return (
    <div onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)} className={cls.container}>
      <img src={image} alt="product image" ref={imageRef} />
    </div>
  )
}

export default Zoom;
