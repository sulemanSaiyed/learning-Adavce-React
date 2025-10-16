import React,{useState,useEffect,useRef} from "react";

function Stopwatch(){


  const [isRunning, setIsRunning]=useState(false);
  const[elapseTime, setElaspseTime]=useState(0);
  const intervalIdRef=useRef(null);
  const startTimeRef=useRef(0);

  useEffect(()=>{
if(isRunning){
  intervalIdRef.current=setInterval(()=>{
    setElaspseTime(Date.now()-startTimeRef.current)
  },10)
}

return()=>{
  clearInterval(intervalIdRef.current)
}


  },[isRunning])

  function start(){
    setIsRunning(true);
startTimeRef.current=Date.now()-elapseTime
  }
  function stop(){
    setIsRunning(false);
  }
  function reset(){
    setElaspseTime(0);
    setIsRunning(false);
  }
  function formatTime(){
let hours=Math.floor(elapseTime/(1000*60*60));
let minutes=Math.floor(elapseTime/(1000*60)%60);
let sec=Math.floor(elapseTime/(1000)%60);
let mlSec=Math.floor((elapseTime%1000)/60);

hours=String(hours).padStart(2,"0");

minutes=String(minutes).padStart(2,"0");

sec=String(sec).padStart(2,"0");

mlSec=String(mlSec).padStart(2,"0");


    return `${hours}:${minutes}:${sec}:${mlSec}`
  }
return(
  <div className="stopWatch">
<div className=" display">{formatTime()}</div>
<div className="controlls">
  <button onClick={start} className="strart-button">Start</button>
  <button onClick={stop} className="stop-button">Stop</button>
  <button onClick={reset} className="reset-button">reset</button>
</div>
  </div>
)
}

export default Stopwatch;