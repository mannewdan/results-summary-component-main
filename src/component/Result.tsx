export default function Result() {
  return (
    <div className="result">
      <h3 className="result__heading">Your Result</h3>
      <div className="result__score">
        <span className="result__score--number">76</span>
        <span className="result__score--total">of 100</span>
      </div>
      <span className="result__grade">Great</span>
      <p className="result__description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
