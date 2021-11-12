import React from "react";
import { Flex, Image, Button, Text} from "@chakra-ui/react";

import firebaseApp from "../../firebase";
import {getFirestore, updateDoc, doc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);

export const ProyectList = ({proyectArray, email, setProyectArray}) => {

  const deleteProyect = async (idProyectToDelete) => {
    //crear array de proyectos
    const newArrayProyect = proyectArray.filter((proyectObject)=>proyectObject.id !== idProyectToDelete)
    // actualizar datos
    const refDocument = doc(db, `usuarios/${email}`);
    await updateDoc(refDocument, { proyects: [...newArrayProyect] });
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
          key={proyectObject.id}
            margin='2rem' w="18rem" h="27rem" borderWidth="1px" borderRadius="lg"  
            border='1px solid #319795' shadow='0px 0px 5px 5px #13221A' direction="column"
          >
            <Flex w="100%" h="40%" justify="center" p="0.5rem">
              <Image src={proyectObject.image} />
            </Flex>
            <Flex w="100%" h="60%" justify="space-around"  direction="column">
              <Flex direction="column" align="center">
                <Text fontSize="lg" fontWeight="bold" as="h4" p="0.5">{proyectObject.name}</Text>
                <a href={proyectObject.link} target="_blank" rel="noreferrer" >
                  <Text fontSize="md" fontWeight="medium" as="h4" p="0.5">{proyectObject.link}</Text>
                </a>
                <a href={proyectObject.repositore} target="_blank" rel="noreferrer" >
                  <Text fontSize="md" fontWeight="semibold" as="h4" p="0.5">{proyectObject.repositore}</Text>
                </a>
                <Text fontSize="sm" fontWeight="light" as="h4" p="0.5">{proyectObject.description}</Text>
              </Flex>
              <Flex justify="space-around">
                <Button 
                  size="sm" 
                  onClick={ ()=> deleteProyect(proyectObject.id)} 
                  m="1rem" 
                  p='1rem'
                  colorScheme="teal" 
                  variant="outline"
                  _hover={{ border:'1px solid red', color: "red" }}
                >
                  Delete
                </Button>
                <a href={proyectObject.image} target="_blank" rel="noreferrer">
                  <Button 
                    size="sm" 
                    m="1rem" 
                    p='1rem'
                    colorScheme="teal" 
                    variant="outline"
                    _hover={{ border:'1px solid blue', color:"blue" }}
                  >
                    Show it
                  </Button>
                </a>
                
              </Flex>
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}