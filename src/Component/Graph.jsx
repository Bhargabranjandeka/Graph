import { usePopulation } from "../Context/Context"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import Loading from "./Loading"
import styled from "styled-components"

const Charts = styled.div`
 padding-top: 2rem;
 & .recharts-cartesian-grid-horizontal line,
 & .recharts-cartesian-grid-vertical line {
 stroke: var(#9ca3af);
}
`
const Heading = styled.h3`
  text-align: center;
`

function Graph() {
  const { population } = usePopulation()
  const { data } = population
  if (!data) return <Loading />
  return <Charts>
    <ResponsiveContainer height={300} width="100%">
      <Heading>{`Population Graph of United States from 2013-2020`}</Heading>
      <BarChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="Nation" />
        <YAxis />
        <Tooltip contentStyle={{ backgroundColor: "#fff" }} />
        <Legend />
        <Bar dataKey="Population" fill="#1d4ed8" />
        <Bar dataKey="Year" fill="#16a34a" />
      </BarChart>
    </ResponsiveContainer>
  </Charts>
}

export default Graph
