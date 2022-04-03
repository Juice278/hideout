import * as React from "react"
import {
  ChakraProvider,
  Flex,
  theme,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => {
return (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
  <Flex height="100vh" alignItems="center" justifyContent="center">
   <Flex direction="column" background={gray.200} p={12} rounded={6}>
     <Heading mb={6}>log in</Heading>
     <Input placeholder="Enter your email address" variant="filled" mb={3} type="email" />
     <Input placeholder="Enter your password" variant="filled" mb={6} type="password" />
     <Button mb={6} colorScheme="teal">Log in</Button>
   </Flex>
  </Flex>
  </ChakraProvider>
)
}
