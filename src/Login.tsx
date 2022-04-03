import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, } from "@chakra-ui/react"

const LoginPage = () =>  {
  const  { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.200", "gray.700")
  return (
  <Flex height="100vh" alignItems="center" justifyContent="center">
   <Flex direction="column" background={formBackground} p={12} rounded={6}>
     <Heading mb={6}>log in</Heading>
     <Input placeholder="Enter your email address" variant="filled" mb={3} type="email" />
     <Input placeholder="Enter your password" variant="filled" mb={6} type="password" />
     <Button mb={6} colorScheme="teal">Log in</Button>
     <button onClick={toggleColorMode}> Toggle Color Mode </button>
   </Flex>
  </Flex>

)
}

export default LoginPage
