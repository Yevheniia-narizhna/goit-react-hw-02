import { useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";

function App() {
  const rewiews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [values, setValues] = useState(0);
  // const savedValue = () => {
  //   window.localStorage.getItem("saved-values", values);
  //   if (savedValue == !"") {
  //     return JSON.parse(savedValue);
  //   }
  //   return rewiews;
  // };
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);
  return (
    <>
      <div>
        <Description />
        <Options />
        <Feedback />
      </div>
    </>
  );
}

export default App;
