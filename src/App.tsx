import Result from "./component/Result";
import Summary from "./component/Summary";
import data from "./data.json";

export type DataT = {
  category: string;
  score: number;
  icon: string;
};

function App() {
  return (
    <>
      <Result />
      <Summary data={data} />
    </>
  );
}

export default App;
