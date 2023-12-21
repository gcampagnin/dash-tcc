import { Box, Flex, SimpleGrid, Spinner, Text, theme } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { useMeasurements } from "@/services/hooks/useMeasuraments"

export default function Dashboard() {
  let series: any
  let categories: any

  const { data, isLoading, isFetching, error } = useMeasurements()

  const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  })

  if (isLoading && isFetching) {
    return (
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Spinner size="xl" color="gray.500" />
      </Flex>
    )
  } else if (error) {
    return (
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Text>Falha ao carregar dados do Dashboard</Text>
      </Flex>
    )
  } else {
    series = data.map((x) => x.measure)
    categories = data.map((x) => x.created_at)
  }

  const OptionsChartLine = {
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    chart: {
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: categories,
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  }

  const SeriesChartLine = [
    {
      name: "consumo",
      data: series,
    },
  ]

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Consumo
            </Text>
            <Chart
              options={OptionsChartLine}
              series={SeriesChartLine}
              type="area"
              height={300}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
