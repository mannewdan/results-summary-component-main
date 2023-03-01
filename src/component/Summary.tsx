import Subscore from "./Subscore";
import { DataT } from "../App";

type SummaryProps = {
  data: Array<DataT>;
};

export default function Summary({ data }: SummaryProps) {
  const subscoreEls = data.map((item) => {
    return <Subscore key={item.category} data={item} />;
  });

  return (
    <div className="summary">
      <p className="summary__heading">Summary</p>

      <div className="summary__score-container">{subscoreEls}</div>

      <button className="summary__continue-button">Continue</button>
    </div>
  );
}
