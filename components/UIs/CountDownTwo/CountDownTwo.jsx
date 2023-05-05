import { useTimer } from "react-timer-hook";

import { useTranslation } from "next-i18next";

import cls from "./countDownTwo.module.scss";

const CountDownTwo = ({ daysCount, color, background, tiny, textColor }) => {
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
    <div className={`${cls.countDown} ${tiny ? cls.tiny : ''}`}>

      <div className={cls.countDown__parts}>
        {days >= 1 && (
          <>
            <div className={cls.part} style={{ backgroundColor: background, color: color }}>
              <div className={cls.number}>{days}</div>

              <h5 style={{ color: textColor }}>Days</h5>
            </div>
          </>
        )}

        <div className={cls.part} style={{ backgroundColor: background, color: color }}>
          <div className={cls.number}>{hours}</div>

          <h5 style={{ color: textColor }}>Hours</h5>
        </div>

        <div className={cls.part} style={{ backgroundColor: background, color: color }}>
          <div className={cls.number}>{minutes}</div>

          <h5 style={{ color: textColor }}>Mins</h5>
        </div>

        <div className={cls.part} style={{ backgroundColor: background, color: color }}>
          <div className={cls.number}>{seconds}</div>

          <h5 style={{ color: textColor }}>Sec</h5>
        </div>

      </div>
    </div>
  );
};

export default CountDownTwo;
