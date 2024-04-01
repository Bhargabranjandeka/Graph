import Graph from './Component/Graph'
import { PopulationProvider } from './Context/Context';

function App() {

  return <PopulationProvider>
    <Graph />
  </PopulationProvider>
}

export default App
