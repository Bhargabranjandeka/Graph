import { createContext, useContext, useEffect, useState } from "react";

const PopulationContext = createContext()

function PopulationProvider({ children }) {

  const [population, setpopulation] = useState([]);

  useEffect(function () {
    fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
      .then((res) => res.json())
      .then((data) => setpopulation(data)).catch((err) => console.log(err))
  }, [])

  return <PopulationContext.Provider value={{ population }}>
    {children}
  </PopulationContext.Provider>
}

function usePopulation() {
  const context = useContext(PopulationContext)
  if (context === undefined) throw new Error('context is declared out of scope')
  return context
}

export { usePopulation, PopulationProvider }