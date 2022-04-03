import * as React from "react"
import {
  ChakraProvider,
  Flex,
  theme,
  Input,
  Heading,
  useColorModeValue,
  useColorMode,
  Button,
} from "@chakra-ui/react"

export const App = () => {
const  { toggleColorMode } = useColorMode()
const formBackground = useColorModeValue("gray.200", "gray.700")
return (
  <ChakraProvider theme={theme}>

  <Flex height="100vh" alignItems="center" justifyContent="center">
   <Flex direction="column" background={formBackground} p={12} rounded={6}>
     <Heading mb={6}>log in</Heading>
     <Input placeholder="Enter your email address" variant="filled" mb={3} type="email" />
     <Input placeholder="Enter your password" variant="filled" mb={6} type="password" />
     <Button mb={6} colorScheme="teal">Log in</Button>
     <Button onClick={toggleColorMode}> Toggle Color Mode </Button>
   </Flex>
  </Flex>
  </ChakraProvider>
)
}
