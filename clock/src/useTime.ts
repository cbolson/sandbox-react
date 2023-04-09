import { useEffect, useState } from "react";

export default function useTime() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const MINUTE_HAND_ANGLE_PER_MINUTE = 6; // 360/60
  const HOUR_HAND_ANGLE_PER_HOUR = 30; // 360/12
  const HOUR_HAND_ANGLE_PER_MINUTE = 0.5; // 30/60

  // set method just once
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();

      // calculate hour and minute hands between previous and next
      const calculatedMinuteHandAngle = m * MINUTE_HAND_ANGLE_PER_MINUTE;
      const calculateHourHandAngle =
        h * HOUR_HAND_ANGLE_PER_HOUR + m * HOUR_HAND_ANGLE_PER_MINUTE;

      setHours(Math.floor(calculateHourHandAngle));
      setMinutes(Math.floor(calculatedMinuteHandAngle));
      setSeconds(Math.floor((s / 60) * 360));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { hours, minutes, seconds };
}
