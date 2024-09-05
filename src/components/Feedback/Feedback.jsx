export default function Feedback({
  objFeedback,
  totalFeedback,
  positiveFeedback,
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
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}</p>
      </div>
    </div>
  );
}
