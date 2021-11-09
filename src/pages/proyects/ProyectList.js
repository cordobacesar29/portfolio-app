import React from "react";
import { Flex, Box, Image, Badge, Button } from "@chakra-ui/react";

import firebaseApp from "../../firebase";
import {getFirestore, updateDoc, doc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);

export const ProyectList = ({proyectArray, email, setProyectArray}) => {

  const deleteProyect = async (idProyectToDelete) => {
    //crear array de proyectos
    const newArrayProyect = proyectArray.filter((proyectObject)=>proyectObject.id !== idProyectToDelete)
    // actualizar datos
    const refDocument = doc(db, `usuarios/${email}`);
    updateDoc(refDocument, { proyects: [...newArrayProyect] });
    //actualizamos el state
    setProyectArray(newArrayProyect);
  }
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
                </Box>
                <Flex justify='start'>
                  <Button 
                    colorScheme="teal" 
                    variant="solid"
                    mt='2rem' 
                    onClick={()=>deleteProyect(proyectObject.id)}
                  >
                    Delete
                  </Button>
                </Flex>
              </Box>
            </Box>
          </Flex>
        )
      })}
    </Flex>
  )
}