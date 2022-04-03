import * as React from "react"
import {
  ChakraProvider,
  Heading,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Container,
  Box,
  Link,
  Button,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  chakra,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import logo from "./logo.svg"

export const App = () => (
  <ChakraProvider>

        <Box mb="200" bg={useColorModeValue('gray.700', 'gray.200')}
      color={useColorModeValue('gray.50', 'gray.900')}>

         <Stack direction={'row'} spacing={2}>
         <ColorModeSwitcher/>
          <Button as="a" href="/forum" colorScheme='twitter' variant='ghost'> Forum </Button>
          <Button as="a" href="/about" colorScheme='twitter' variant='ghost'> About </Button>
        </Stack>
        </Box>

        <Image width="300" height="300" src=""></Image>

     <Flex mb="50" alignItems="center" justify="center">
     <Heading>
       Welcome to Hideout.one
     </Heading>
     </Flex>
     
     <Flex mb="100" alignItems="center" justify="center">
       <Text>
         Come Join the best forum for any cheats you need
       </Text>

       <Text>
         Our best cheats are csgo and gta but we have more what are better we also have website templates and much more
       </Text>

     </Flex> 

     <Divider mb="485"  />
    

     <Box
      bg={useColorModeValue('gray.700', 'gray.200')}
      color={useColorModeValue('gray.50', 'gray.900')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
          <Text>Made With ❤ by Juice </Text>
        <Text>© 2022 Hideout.one. All rights reserved</Text>
      </Container>
    </Box>
  </ChakraProvider>
)
