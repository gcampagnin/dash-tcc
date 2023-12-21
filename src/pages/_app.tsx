import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { ReactQueryDevtools } from "react-query/devtools"
import { theme } from "@/styles/theme"

import { QueryClientProvider } from "react-query"
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext"
import { queryClient } from "@/services/queryClient"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
