import { useEffect, useState } from "react";

import { useTimer } from "react-timer-hook";

import { useTranslation } from "next-i18next";

import cls from "./countDown.module.scss";

const CountDown = ({ daysCount }) => {
  const { t, i18n } = useTranslation('common');

  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(
    expiryTimestamp.getSeconds() + daysCount * 24 * 3600
  ); // 10 minutes timer
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className={cls.countDown}>

      <h6>Hurry Up!</h6>

      <div className={cls.countDown__parts}>
        {days >= 1 && (
          <>
            <div className={cls.part}>
              <div className={cls.number}>{days}</div>

              <h5>Days</h5>
            </div>

            <span>:</span>
          </>
        )}

        <div className={cls.part}>
          <div className={cls.number}>{hours}</div>

          <h5>Hours</h5>
        </div>

        <span>:</span>

        <div className={cls.part}>
          <div className={cls.number}>{minutes}</div>

          <h5>Minutes</h5>
        </div>

        <span>:</span>

        <div className={cls.part}>
          <div className={cls.number}>{seconds}</div>

          <h5>Seconds</h5>
        </div>
        
      </div>
    </div>
  );
};

export default CountDown;
