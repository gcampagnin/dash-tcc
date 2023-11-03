import { Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine } from "react-icons/ri"

import { NavSection } from "./NavSection"
import { NavLink } from "./NavLink"

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} href="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} href="/users">
          Usuários
        </NavLink>
      </NavSection>
    </Stack>
  )
}
