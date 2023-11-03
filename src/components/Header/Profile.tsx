import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Campagnin</Text>
          <Text color="gray.300" fontSize="small">
            gcampagnin@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gustavo Campagnin"
        src="https://github.com/gcampagnin.png"
      />
    </Flex>
  )
}
