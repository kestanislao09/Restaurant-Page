import { Box, VStack } from '@chakra-ui/react'

export default function Home() {
  return <Box
    h='100%'
    ml={10}
    mr={10}
    align='center'>
    <VStack
      maxW='480px'
      textAlign='center'
      spacing='3'>
      <Box
        mt='4'
        fontSize='2xl'
        fontWeight='semibold'>
        Granny's Banh Xeo
      </Box>

      <Box>
        <Box
          fontSize='xl'
          fontWeight='semibold'
        >
          Our Goal
        </Box>

        <Box>We want to serve up crepes and smiles just as Granny intended!</Box>
      </Box>
      <Box>
        <Box
          fontSize='xl'
          fontWeight='semibold'
        >
          Plenty of options!
        </Box>

        <Box>Choose as many (or as few) toppings as you want!
          From beef to pork, from beansprouts to onions, we've got it all.</Box>
      </Box>

      <Box>
        <Box
          fontSize='xl'
          fontWeight='semibold'
        >
          Drinks to go around!
        </Box>

        <Box>We serve shakes, slush, and boba to quench your thirst!
          What are you waiting for? Come get a plate!</Box>
      </Box>


    </VStack>
  </Box >
}
