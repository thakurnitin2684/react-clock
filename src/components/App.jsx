import React, { useState, useEffect } from "react";
import i1 from "../images/i1.jpeg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import Time from "./Time.js";

function App() {
  const images = [i1, i2, i3];

  const [url, setUrl] = useState(0);

  let style = {
    backgroundImage: `url(${images[url]})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
  };

  useEffect(() => {
    setInterval(() => {
      setUrl((p) => (p < 2 ? p + 1 : 0));
    }, 7000);
  }, []);

  return (
    <div style={style}>
      <div className="timeBox">
        <Time />
      </div>
    </div>
  );
}

export default App;
