import React from 'react';
import { useState, useEffect } from 'react'
import '../../../App.js';




function generateNumbers(amount) {
    let randomString = "";
    for (let i = 0; i<amount; i++) {
        let randomDigit = Math.floor(Math.random() * 10);
        randomString += randomDigit
    }
    return randomString
}

function GameScreen( { play, setPlay, amount, setAmount, time, setTime, input, setInput  } ) {
    const handleChangeToAmount = event => {
        if (event.target.value < 10000) {
            setAmount(event.target.value); 
        }
    }

    const handleChangeToTime = event => {
        if (event.target.value < 10000) {
            setTime(event.target.value); 
        }
    }

    const handleChangeToInput = event => {
        setInput(event.target.value); 
    }

    const handleChangeToPlay = () => {
        setPlay(true); 
    }

    if (play == "requestInput") {
        return (
        <>
        <label>
            Type what you recalled: <input name="input" type="number" onChange={handleChangeToInput} value={input}/>
        </label>
        </>
        )

    }

    if (play) {
        return (
            <p>{generateNumbers(amount)}</p>
        )
    }

    else {
        return (
        <div className='game'>

        <label>
        Amount of digits: <input name="amount" type="number" onChange={handleChangeToAmount} value={amount}/>
        </label>

        <label>
        Time (seconds): <input name="time" type="number" onChange={handleChangeToTime} value={time}/>
        </label>
        
        <button type="button" onClick={handleChangeToPlay}>Click to play</button>
        </div>
        )
    }
}


const Timer = ({ seconds }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])
}

function Train_Numbers() {
    const [amount, setAmount] = useState('50');
    const [time, setTime] = useState('60');
    const [play, setPlay] = useState(false);
    const [input, setInput] = useState(false);

    return (
        <>
        <h1 style={{fontSize:"3em"}}> Numbers game </h1>

        <div className='gameArea'>
            <GameScreen play={play} setPlay={setPlay} amount={amount} setAmount={setAmount} time={time} setTime={setTime} />
        </div>
            
        </>
    )


}

export default Train_Numbers;
