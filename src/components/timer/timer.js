import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

  const Ref = useRef(null);

  const [timer, setTimer] = useState('15');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    return {
      total, seconds
    };
  }
  const startTimer = (e) => {
    let { total, seconds }
      = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (seconds > 9 ? seconds : '0' + seconds)
      )
    }
  }
  const clearTimer = (e) => {
    setTimer('15');
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000)
    Ref.current = id;
  }
  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 15);
    return deadline;
  }
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const onReset = () => {
    clearTimer(getDeadTime());
  }
  const stop = () => {
    clearTimer()
  }


  return { timer, onReset, stop};
}

export default Timer;
