import { useEffect, useState } from "react";
import "./App.css";
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const savedValue = () => {
    JSON.parse(window.localStorage.getItem("values", values));
    if (savedValue == !null) {
      return savedValue;
    }
    return 0;
  };

  useEffect(() => {
    window.localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);
  return (
    <>
      <div>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          resetFeedback={resetFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            objFeedback={values}
            feedbackTotal={totalFeedback}
            feedbackPositive={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    </>
  );
}

export default App;
