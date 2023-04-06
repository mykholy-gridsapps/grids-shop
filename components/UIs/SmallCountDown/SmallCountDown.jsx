import { useEffect, useState } from "react";

import { useTimer } from "react-timer-hook";

import { useTranslation } from "next-i18next";

import cls from "./smallCountDown.module.scss";

const SmallCountDown = ({ daysCount, headColor }) => {
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
              <h5>{days} Days,</h5>
            </div>
          </>
        )}

        <div className={cls.part}>
          <h5>{hours} :</h5>
        </div>

        <div className={cls.part}>
          <h5>{minutes} :</h5>
        </div>

        <div className={cls.part}>
          <h5>{seconds}</h5>
        </div>

      </div>
    </div>
  );
};

export default SmallCountDown;
