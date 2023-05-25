

import MiddleHeader from './MiddleHeader';

import TopHeader from "./TopHeader"

import cls from './headerTwentyThree.module.scss';


const HeaderTwentyThree = () => {
  
  return (
    <div className={cls.navbar}>
      <TopHeader />
      <MiddleHeader />

    </div>
  );
}

export default HeaderTwentyThree