import { faTimesRectangle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./CountDownTimer.module.scss";

const cx = classNames.bind(styles);

function CountDownTimer({ targetDate }) {
  //target này luôn ưu tiên kiểu ISO
  //validate đúng ngày > throw ra lỗi

  const timerID = useRef();
  const getTime = () => {
    //mỗi giây gọi 1 lần, currentDate luôn thay đổi
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // Trả về mặc định 0 nếu đã qua ngày để tránh Object trống gây lỗi map
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };
  //Khai báo ở đây không lỗi const của getTime()
  const [finalDate, setFinalDate] = useState(getTime());

  useEffect(() => {
    timerID.current = setInterval(() => {
      setFinalDate(getTime());
    }, 1000);

    return () => {
      clearInterval(timerID.current);
    };
  }, [targetDate]);

  const handleFormat = (aNumber) => {
    return String(aNumber).padStart(2, "0");
  };

  return (
    <div className={cx("timer-wrapper")}>
      {Object.keys(finalDate).map((key) => {
        return (
          <div key={key} className={cx("time-box")}>
            <p className={cx(key)}>
              {/* Sửa: Bọc trong ngoặc nhọn và thêm () cho toUpperCase */}
              {`${handleFormat(finalDate[key])}`}
              <span>{`${key} `}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CountDownTimer;
