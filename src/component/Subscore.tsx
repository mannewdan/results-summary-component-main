import { DataT } from "../App";

type SubscoreProps = {
  data: DataT;
};

export default function Subscore({ data }: SubscoreProps) {
  const imgUrl = new URL("./img.png", import.meta.url).href;

  return (
    <div className={`subscore ${data.category}`}>
      <div>
        <img src={"." + data.icon}></img>
        <span>{data.category}</span>
      </div>
      <div>
        <span>{data.score}</span>
        <span>{" / 100"}</span>
      </div>
    </div>
  );
}
