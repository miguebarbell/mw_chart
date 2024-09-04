import { useState } from "react";
import MWChart from "./components/Chart";
import SearchBar from "./components/SearchBar";

function App() {
  const [chartData, setChartData] = useState([]);
  return (
    <div>
      <SearchBar setChartData={setChartData} />
      <MWChart chartData={chartData} />
    </div>
  );
}

export default App;
