import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CowntDown from "./components/CountDown ";





function App() {
  const [color, setColor] = useState("bg-[#D95550]");
  const [smallBackgrounColor, setSmallBackgoundColor] =
    useState("bg-[#DD6662]");
  const [pomoButtonColor, setPomoButtonColor] = useState("bg-[#BC5753]");
  const [shortButtonColor, setShortButtonColor] = useState("");
  const [longButtonColor, setLongButtonColor] = useState("");

  const [timer, setTimer] = useState(1500); // 25 minutes
  const [start, setStart] = useState(false);

  const Pomodoro = () => {
    setColor("bg-[#D95550]");
    setSmallBackgoundColor("bg-[#DD6662]");
    setTimer(1500);
    setPomoButtonColor("bg-[#BC5753]");
    setShortButtonColor(false);
    setLongButtonColor(false);
  };

  const Short = () => {
    setColor("bg-[#4C9195]");
    setSmallBackgoundColor("bg-[#5E9CA0]");
    setTimer(300);
    setShortButtonColor("bg-[#508588]");
    setPomoButtonColor(false);
    setLongButtonColor(false);
  };
  const Long = () => {
    setColor("bg-[#457CA3]");
    setSmallBackgoundColor("bg-[#5889AC]");
    setTimer(900);
    setLongButtonColor("bg-[#4B7592]");
    setPomoButtonColor(false);
    setShortButtonColor(false);
  };


  return (
    <div className={`${color} w-screen h-screen`}>
      <Navbar
        smallBackgrounColor={smallBackgrounColor}
        color={color}
        setColor={setColor}
      />
      <CowntDown
        start={start}
        setStart={setStart}
        timer={timer}
        setTimer={setTimer}
        Pomodoro={Pomodoro}
        Short={Short}
        Long={Long}
        smallBackgrounColor={smallBackgrounColor}
        color={color}
        setColor={setColor}
        setSmallBackgoundColor={setSmallBackgoundColor}
        pomoButtonColor={pomoButtonColor}
        setPomoButtonColor={setPomoButtonColor}
        longButtonColor={longButtonColor}
        shortButtonColor={shortButtonColor}
      />
    
    </div>
  );
}

export default App;

/*<Counter
        vall={{
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
          jump,
        }}
      />*/

/*export const Hamza = creatContext();

function App() {
  const [color, setColor] = useState("bg[#D95550]");
  const [mins, setMins] = useState("0");
  const [secs, setSecs] = useState("10");
  const [vall, setVall] = useState(false);
  const [stateModel, setStateModel] = useState(false);
  
  const green = () => {
    setColor("bg-[#4C9195");
    setVall(false);
    setMins("14");
    setSecs("59");
    setStateModel(false);
  };
  const blue = () => {
    setColor("bg-[#457CA3");
    setVall(false);
    setMins("04");
    setSecs("59");
    setStateModel(false);
  };
  const red = () => {
    setColor("bg-[#D95550");
    setVall(false);
    setMins("24");
    setSecs("59");
    setStateModel(false);
  };
  const setThings = () => {
    setVall(!vall);
  };
  const jump = () => {
    setStateModel(!stateModel);
  };

  return (
    <div className="App">
      <Navbar />
      
    </div>
  );
}

export default App;*/
