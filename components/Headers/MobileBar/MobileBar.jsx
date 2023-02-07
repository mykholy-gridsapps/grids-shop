import Link from 'next/link';
import { useRouter } from 'next/router';

import AnimatedIcons from './../../UIs/AnimatedIcons/AnimatedIcons';

import * as animationData from "../../../public/animated/addCart.json";

import cls from './mobileBar.module.scss';

const MobileBar = () => {
  const router = useRouter();

  return (
    <div className={cls.mobileBar}>
      <div className={cls.wrapper}>
        <Link
          href="/"
          className={[cls.icon, router.pathname === "/" ? cls.active : ""].join(
            " "
          )}
        >
          <i className="fa-regular fa-house-user"></i>
          <span>Home</span>
        </Link>
        <Link
          href="/categories"
          className={[
            cls.icon,
            router.pathname === "/categories" ? cls.active : "",
          ].join(" ")}
        >
          <i className="fa-regular fa-list"></i>
          <span>Categories</span>
        </Link>
        <Link
          href="/cart"
          className={[
            cls.icon,
            router.pathname === "/cart" ? cls.active : "",
          ].join(" ")}
        >
          <AnimatedIcons animationData={animationData} />
          <span>Cart</span>
        </Link>
        <Link
          href="/notifications"
          className={[
            cls.icon,
            router.pathname === "/notifications" ? cls.active : "",
          ].join(" ")}
        >
          <i className="fa-regular fa-bell"></i>
          <span>Notifications</span>
        </Link>
        <Link
          href="/account"
          className={[
            cls.icon,
            router.pathname === "/account" ? cls.active : "",
          ].join(" ")}
        >
          <i className="fa-regular fa-user"></i>
          <span>Account</span>
        </Link>
      </div>
    </div>
  );
}

export default MobileBar