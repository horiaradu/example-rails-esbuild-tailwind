import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Clock = (props) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <h1>Clock</h1>
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
  );
}

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);
