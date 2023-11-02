import { useEffect, useState } from "react";

function Time() {
    const[time, setTime] = useState(0);


    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(time+1);
        }, 1000)
        if (time == 10){
            clearInterval(interval);
        }
    })


  return (
    <p>{time}</p>
  )
}
   

export default Time