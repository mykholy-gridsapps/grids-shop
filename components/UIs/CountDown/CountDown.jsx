import { useTimer } from "react-timer-hook";

import { useTranslation } from "next-i18next";

import cls from "./countDown.module.scss";

const CountDown = ({ daysCount, headColor, hideLabel, tiny }) => {
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

      {!hideLabel &&
        <h6 style={{ color: headColor ? headColor : '' }}>Hurry Up!</h6>
      }

      <div className={cls.countDown__parts}>
        {days >= 1 && (
          <>
            <div className={cls.part}>
              <div className={cls.number}>{days}</div>

              {tiny ?
                <h5>Day</h5>
                :
                <h5>Days</h5>
              }
            </div>

            <span>:</span>
          </>
        )}

        <div className={cls.part}>
          <div className={cls.number}>{hours}</div>

          {tiny ?
            <h5>Hour</h5>
            :
            <h5>Hours</h5>
          }
        </div>

        <span>:</span>

        <div className={cls.part}>
          <div className={cls.number}>{minutes}</div>

          {tiny ?
            <h5>Min</h5>
            :
            <h5>Minutes</h5>
          }
        </div>

        <span>:</span>

        <div className={cls.part}>
          <div className={cls.number}>{seconds}</div>

          {tiny ?
            <h5>Sec</h5>
            :
            <h5>Seconds</h5>
          }
        </div>

      </div>
    </div>
  );
};

export default CountDown;
