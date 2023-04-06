import { useState, useRef, useEffect } from 'react';

import cls from './customSelect.module.scss';

const CustomSelect = ({ label }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const container = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (!container.current.contains(e.target)) {
        setOpenDropdown(false)
      }
    }
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, [])

  return (
    <div className={cls.customSelect} ref={container}>
      <button onClick={() => setOpenDropdown(!openDropdown)}>
        <span>{label}</span>
        <i className="fa-light fa-angle-down"></i>
      </button>
      <div className={[cls.dropdown, openDropdown ? cls.opened : ''].join(' ')}>
        <ul>
          <li><input type="checkbox" id="black" /> <label htmlFor="black">Black</label></li>
          <li><input type="checkbox" id="blue" />  <label htmlFor="blue">blue</label></li>
          <li><input type="checkbox" id="green" />  <label htmlFor="green">Green</label></li>
          <li><input type="checkbox" id="red" />  <label htmlFor="red">Red</label></li>
          <li><input type="checkbox" id="white" />  <label htmlFor="white">White</label></li>
          <li><input type="checkbox" id="yellow" />  <label htmlFor="yellow">Yellow</label></li>
        </ul>
      </div>
    </div>
  )
}

export default CustomSelect
