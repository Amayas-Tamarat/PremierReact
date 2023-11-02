import { useEffect, useState } from "react";
import './App.css'
import dio from './zaWarudo.gif';

function Time() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        if (time === 3) {
            clearInterval(interval);
            document.body.classList.add('bg-color');
            document.querySelectorAll("p").forEach((e) => (e.style.color = 'white'));
            document.querySelector(".text-test").textContent += " LJQKSJQKDJ";
            document.querySelector(".text-test").classList.add('bg-text');
            console.log(dio)
        }

        return () => {
            clearInterval(interval);
        };
    }, [time]); 

    return (
        <div>
            <p>{time}</p>
            <h2 className="text-test"></h2>
            {time === 3 && <img src={dio} alt="zaWarudo" />}
        </div>
    );
}

export default Time;
