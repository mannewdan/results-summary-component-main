import Subscore from "./Subscore";
import { DataT } from "../App";

type SummaryProps = {
  data: Array<DataT>;
};

export default function Summary({ data }: SummaryProps) {
  return (
    <div className="summary">
      <span className="summary__heading">Summary</span>

      <Subscore data={data[0]} />
      <Subscore data={data[1]} />
      <Subscore data={data[2]} />
      <Subscore data={data[3]} />

      <button>Continue</button>
    </div>
  );
}
