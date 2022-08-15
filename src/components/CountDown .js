import { useEffect, useRef } from "react";
import { IoMdSkipForward } from "react-icons/io";

const CountDown = ({
  Short,
  Long,
  Pomodoro,
  smallBackgrounColor,
  timer,
  setTimer,
  start,
  setStart,
  pomoButtonColor,
  longButtonColor,
  shortButtonColor,
}) => {
  const firstStart = useRef(true);
  const tick = useRef();

  useEffect(() => {
    if (firstStart.current) {
      // console.log("first render, don't run useEffect for timer");
      firstStart.current = !firstStart.current;
      return;
    }

    //console.log("subsequent renders");
    //console.log(start);
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      //console.log("clear interval");
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {
    setStart(!start);
  };

  const dispSecondsAsMins = (seconds) => {
    // 25:00
    //console.log("seconds " + seconds);
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    return (
      mins.toString() + ":" + (seconds_ === 0 ? "00" : seconds_.toString())
    );
  };

  return (
    <div
      className={`${smallBackgrounColor} flex justify-center flex-col space-y-4 rounded-md pt-4 pb-4 mt-10 mx-96 `}
    >
      <div className="flex justify-center">
        <button
          onClick={Pomodoro}
          className={`${pomoButtonColor} flex mr-2  text-white p-2 rounded-md`}
        >
          Pomodoro
        </button>
        <button
          onClick={Short}
          className={`${shortButtonColor} flex mr-2  text-white p-2 rounded-md`}
        >
          Short Break
        </button>
        <button
          onClick={Long}
          className={`${longButtonColor} flex mr-2  text-white p-2 rounded-md`}
        >
          Long Break
        </button>
      </div>
      <h1 className="flex justify-center text-white  text-9xl font-bold 	">
        {dispSecondsAsMins(timer)}
      </h1>
      <div className="startDiv flex justify-center">
        {/* event handler onClick is function not function call */}
        <button
          className= "startBut text-center text-red-500 font-bold rounded py-2 w-2/12 focus:outline-none bg-white border-2"
          onClick={toggleStart} 
        >
          {!start ? "START" : "STOP"}
        </button>
        {/* {start && <AiFillFastForward className="ff" onClick="" />} */}
        <div className="flex">
          <IoMdSkipForward className="mt-1 text-[20px] lg:[13px] text-white cursor-pointer " />
        </div>
      </div>
    </div>
  );
};
export default CountDown;
