import { useQuery } from "react-query"
import { api } from "../api"

type Measure = {
  id: string
  measure: number
  created_at: string
}

export async function getMeasurements(): Promise<Measure[]> {
  const { data } = await api.get("measurements")

  const measurements = data.measurements.map((measure) => {
    return {
      id: measure.id,
      measure: measure.measure,
      created_at: new Date(measure.created_at).toLocaleString("pt-br", {
        dateStyle: "short",
        timeStyle: "short",
      }),
    }
  })

  return measurements
}

export function useMeasurements() {
  return useQuery("measurements", getMeasurements)
}
