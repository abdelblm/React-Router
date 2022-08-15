import React, { useEffect, useContext } from "react";

export default function Counter() {
  const [
    color,
    setColor,
    mins,
    setMins,
    secs,
    setSecs,
    vall,
    setVall,
    stateModel,
    setStateModel,
    green,
    blue,
    red,
    setThings,
  ] = useContext();
  //setColor

  //setTimer
  let timer;
  useEffect(() => {
    if (secs > 0 && vall) {
      timer = setTimeout(() => setSecs(secs - 1), 1000);
    } else if (mins > 0 && secs == 0) {
      setMins(mins - 1);
      setSecs("59");
    } else if (secs == 0 && mins == 0) {
      setStateModel(true);
    }
    return () => clearTimeout(timer);
  }, [secs, vall]);

  return (
    <>
      <div className=" md:flex justify-center   flex-col space-y-4 ... bg-[#DD6662] pt-4 pb-4 m-80    mt-10 rounded-md ">
        <div className="md:flex justify-center">
          <div className="md:flex mr-2 border text-white p-2 rounded-md border-[#FFFFFF33] bg-[#BC5753] font-bold">
            <button onClick={red} className="hidden ml-1 lg:inline 	">
              Pomodoro
            </button>
          </div>
          <div className="md:flex mr-2 border text-white p-2 rounded-md border-[#DD6662] bg-[#DD6662] font-bold">
            <button onClick={blue} className="hidden ml-1 lg:inline 	">
              Short Break
            </button>
          </div>
          <div className="md:flex mr-2 border text-white p-2 rounded-md border-[#DD6662] bg-[#DD6662] font-bold">
            <button onClick={green} className="hidden ml-1 lg:inline		">
              Long Break
            </button>
          </div>
        </div>
        <div className="md:flex justify-center">
          <div className="text-white  text-9xl font-bold	">
            <h1 id="timeBox">25:00</h1>
          </div>
        </div>
        <div className="md:flex justify-center">
          <div>
            <button
              onClick={setThings}
              className="bg-white text-[#D95550] rounded-md shadow-md font-bold"
            >
              Start
            </button>
          </div>
          <div>
            <button className="bg-white  text-[#D95550] rounded-md font-bold ">
              Stop
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
