export default function Feedback({
  objFeedback,
  feedbackTotal,
  feedbackPositive,
}) {
  const { good, neutral, bad } = objFeedback;
  return (
    <div>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div>
        <p>Total: {feedbackTotal}</p>
        <p>Positive: {feedbackPositive}%</p>
      </div>
    </div>
  );
}
