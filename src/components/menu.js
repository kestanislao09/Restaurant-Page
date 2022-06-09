import { Box, VStack } from '@chakra-ui/react'

export default function Menu() {
  return <VStack
    ml='10'
    mr='10'
    spacing='3'>
    <VStack>
      <Box fontWeight='semibold'>The Classic</Box>
      <Box maxW='480px'>
        The banh xeo we know and love, just how granny used to make it! Filled with pork, shrimp, beansprouts, and sauteed mushrooms and onions; served with a side of granny's home-made Nuoc Mam sauce
      </Box>
    </VStack>
  </VStack>
}
