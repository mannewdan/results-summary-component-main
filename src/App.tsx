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
    <div className="app-container">
      <div className="layout">
        <Result />
        <Summary data={data} />
      </div>
    </div>
  );
}

export default App;
