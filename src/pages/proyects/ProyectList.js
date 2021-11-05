import React from "react";
import { Flex, Box, Image, Badge } from "@chakra-ui/react";

export const ProyectList = ({proyectArray, email}) => {
  return (
    <Flex
      justify='center'
      align='center'
      direction='column' 
      w='100%'
      margin='2rem'
      padding='2rem'
    >
      {proyectArray.map((proyectObject)=>{
        return (
          <Flex
            margin='2rem'
          >
            <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={proyectObject.image}/>

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {proyectObject.name}
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {proyectObject.description}
                </Box>

                <Box>
                  {proyectObject.repositore}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>
              </Box>
            </Box>
          </Flex>
        )
      })}
    </Flex>
  )
}