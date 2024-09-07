import s from "./Feedback.module.css";
export default function Feedback({
  objFeedback,
  feedbackTotal,
  feedbackPositive,
}) {
  const { good, neutral, bad } = objFeedback;
  return (
    <div className={s.feedback}>
      <div>
        <p className={s.text}> 😍 Good: {good}</p>
        <p className={s.text}> 😐 Neutral: {neutral}</p>
        <p className={s.text}> 👎 Bad: {bad}</p>
      </div>
      <div>
        <p className={s.text}>Total: {feedbackTotal}</p>
        <p className={s.text}>Positive: {feedbackPositive}%</p>
      </div>
    </div>
  );
}
