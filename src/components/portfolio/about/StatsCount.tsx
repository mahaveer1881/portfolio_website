import { useEffect, useState } from "react";
import gsap from "gsap";

function StatsCount() {
  const startDate = new Date("2023-09-04T00:00:00");

  const [duration, setDuration] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateDuration = () => {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return { years, months, days, hours, minutes, seconds };
  };

  // Flip animation
  const flipAnimation = (id: string, newVal: number) => {
    const el = document.getElementById(id);
    if (!el) return;

    const oldVal = parseInt(el.textContent || "0", 10);
    if (oldVal === newVal) return;

    gsap.to(el, {
      rotationX: -90,
      duration: 0.3,
      ease: "power1.in",
      transformOrigin: "center top",
      onComplete: () => {
        el.textContent = newVal.toString();
        gsap.fromTo(
          el,
          { rotationX: 90 },
          {
            rotationX: 0,
            duration: 0.3,
            ease: "power1.out",
            transformOrigin: "center bottom",
          }
        );
      },
    });
  };

  useEffect(() => {
    const update = () => {
      const realDuration = calculateDuration();
      Object.entries(realDuration).forEach(([key, value]) => {
        flipAnimation(key, value as number);
      });
      setDuration(realDuration);
    };

    // Initial stagger animation with 3D effect
    setTimeout(() => {
      const realDuration = calculateDuration();
      setDuration(realDuration);

      gsap.fromTo(
        ".time-box",
        { rotationX: 90, opacity: 0, transformOrigin: "center bottom" },
        {
          rotationX: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.2,
        }
      );
    }, 300);

    // Live update every second
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const TimeBox = ({
    id,
    value,
    label,
  }: {
    id: string;
    value: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center mx-2">
      <div
        id={id}
        className="time-box w-12 h-16 md:w-16 md:h-20 bg-gradient-to-b from-gray-700 to-gray-700 
                   text-white text-2xl md:text-3xl font-bold flex items-center justify-center 
                   rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.6)] border border-gray-700
                   transform-gpu [perspective:1000px]"
      >
        {value}
      </div>
      <p className="text-gray-600 text-sm mt-2">{label}</p>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex">
        <TimeBox id="years" value={duration.years} label="Years" />
        <TimeBox id="months" value={duration.months} label="Months" />
        <TimeBox id="days" value={duration.days} label="Days" />
        <TimeBox id="hours" value={duration.hours} label="Hours" />
        <TimeBox id="minutes" value={duration.minutes} label="Minutes" />
        <TimeBox id="seconds" value={duration.seconds} label="Seconds" />
      </div>
      <p className="text-gray-700 text-2xl mt-6 font-medium tracking-wide">
        Total Experience (Live)
      </p>
    </div>
  );
}

export default StatsCount;
