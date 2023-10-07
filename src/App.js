import { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="App">
      <h1>Hello! Your time is {time}</h1>
    </div>
  );
}
