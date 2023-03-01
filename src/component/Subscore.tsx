import { DataT } from "../App";

type SubscoreProps = {
  data: DataT;
};

export default function Subscore({ data }: SubscoreProps) {
  return (
    <div className={`subscore ${data.category.toLowerCase()}`}>
      <div>
        <img src={data.icon}></img>
        <span className="subscore__label">{data.category}</span>
      </div>
      <div>
        <span className="subscore__score">{data.score}</span>
        <span className="subscore__total">{" / 100"}</span>
      </div>
    </div>
  );
}
