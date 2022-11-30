import React, { useState, useRef, useEffect } from "react";
import { Images } from "../Constant";
const ComingPage = () => {
  const [timerDate, setTimerDate] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("January 5, 2025 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setTimerDate(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="bg-white rounded-bl-[2.2rem] rounded-tr-[2.2rem] py-4 drop-shadow-lg w-[75%] md:w-[50%] m-auto">
      <div className="flex flex-col items-center justify-center">
      <img src={Images.Calender} alt="calend" className="w-[80px] lg:w-[90px]" />
      <h2 className="text-heroColor text-xl md:text-2xl lg:text-3xl text-center py-6 font-semibold">
        Coming Soon
      </h2>
      </div>
      <div className="">
        <div className="flex items-center justify-center gap-2 py-4">
          <section className="">
            <p className="text-heroColor text-xl md:text-2xl font-semibold ">
              {timerDate}
              <span className="text-heroColor text-2xl pl-2 ">:</span>
            </p>
            <p className="text-heroColor text-[14px] md:text-lg py-2 font-semibold ">Days</p>
          </section>
          <section className="">
            <p className="text-heroColor text-xl md:text-2xl font-semibold ">
              {timerHours} <span className="text-heroColor text-2xl pl-2 ">:</span>
            </p>
            <p className="text-heroColor text-[14px] md:text-lg py-2 font-semibold ">Hrs</p>
          </section>
          <section className="">
            <p className="text-heroColor text-xl md:text-2xl font-semibold ">
              {timerMinutes}{" "}
              <span className="text-heroColor text-2xl pl-2 ">:</span>
            </p>
            <p className="text-heroColor text-[14px] md:text-lg py-2 font-semibold ">Min</p>
          </section>
          <section className="-pl-[1rem]">
            <p className="text-heroColor text-xl md:text-2xl font-semibold ">{timerSeconds}</p>
            <p className="text-heroColor text-[14px] md:text-lg py-2 font-semibold ">Sec</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComingPage;
