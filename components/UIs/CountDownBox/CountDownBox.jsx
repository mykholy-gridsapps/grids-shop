import { useEffect, useState } from "react";

import { useTimer } from "react-timer-hook";

import { useTranslation } from "next-i18next";

import cls from "./countDownBox.module.scss";

const CountDownBox = ({ daysCount, headColor, hideLabel }) => {
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

      <div className={cls.countDown__parts}>
        {days >= 1 && (
          <>
            <div className={cls.part}>
              <div className={cls.number}>{days}</div>

              <h5>Day</h5>
            </div>

            <span>:</span>
          </>
        )}

        <div className={cls.part}>
          <div className={cls.number}>{hours}</div>

          <h5>Hour</h5>
        </div>

        <span>:</span>

        <div className={cls.part}>
          <div className={cls.number}>{minutes}</div>

          <h5>Min</h5>
        </div>

        <span>:</span>

        <div className={cls.part}>
          <div className={cls.number}>{seconds}</div>

          <h5>Sec</h5>
        </div>

      </div>
    </div>
  );
};

export default CountDownBox;
