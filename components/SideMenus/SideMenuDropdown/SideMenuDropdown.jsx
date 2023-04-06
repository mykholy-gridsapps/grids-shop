import cls from './sideMenuDropdown.module.scss';

const SideMenuDropdown = () => {
  return (
    <div className={cls.sideMenuDropdown}>
      <div className={cls.wrapper}>
        <div>
          <h6>Women's clothes</h6>
          <ul>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
          </ul>
        </div>
        <div>
          <h6>Women's clothes</h6>
          <ul>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
            <li>Dresses</li>
          </ul>
        </div>
        <div>
          <img src="/imgs/drop.jpg" alt="sale image" />
        </div>
      </div>
    </div>
  )
}

export default SideMenuDropdown
