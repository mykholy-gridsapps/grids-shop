import { useRef } from 'react';

import cls from './zoomImage.module.scss';

const Zoom = ({ image }) => {
  const imageRef = useRef();

  const handleMouseMove = (e) => {
    var element = e.currentTarget.getBoundingClientRect(); // very important
    const x = e.clientX - element.left;
    const y = e.clientY - element.top;
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
    <div className={cls.container}>
      <div className={cls.wrapper} onMouseMove={(e) => handleMouseMove(e)} onMouseLeave={(e) => handleMouseLeave(e)}>
        <img src={image} alt="product image" ref={imageRef} loading="lazy" />
      </div>
    </div>
  )
}

export default Zoom;
