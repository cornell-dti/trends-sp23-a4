import { Box, Divider, Text } from "@chakra-ui/react"
import React from "react"

const Footer = () => (
  <Box as="footer" px={4}>
    <Divider my={4} />
    <Text fontSize="sm" color="subtle">
      Created by [TODO My name (netid)]
    </Text>
  </Box>
)

export default Footer
