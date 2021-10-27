import React from 'react';
import { Flex, Image, Button, Collapse, Heading, Text } from '@chakra-ui/react';

import img from '../../assets/qrcode_www.cordobacesar.com.png'

export const Home = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex 
      direction='row' 
      w='60%'
      h='100%'
    >
      <Flex  
        direction='column' 
        w='50%' 
        m='1rem'
        p='1rem'
        justify='initial'
        align='center'
        bgColor='#101010'
        color='#319795'
        borderRadius='8px'
        border='#319795 1px solid'
        shadow='0px 0px 5px 5px #13221A'
      >
        <Heading m='1rem' color='whiteAlpha.800'>¡Hola!</Heading>
        <Collapse startingHeight={20} in={show}>
          <Text>
            Soy César, fullstack dev de Argentina y este es mi espacio donde comparto lo aprendido y mis proyectos
          realizados.
          </Text>
          <Text>
            Me siento cómodo trabajando en el desarrollo backend, aunque
            me defiendo en tecnologías frontend web y mobile.
          </Text>
          <Text>
            Mi stack favorito es MongoDB | Express.js | React.js | Node.js
          </Text>
        </Collapse>
        <Flex>
          <Button size="sm" onClick={handleToggle} m="2rem" colorScheme="teal" variant="outline">
            Show {show ? "Less" : "More"}
          </Button>
        </Flex>
      </Flex>
      <Flex  
        w='50%' 
        p='1rem'
        justify='center' 
        align='center'
        borderRadius='8px'
        
      >
        <Image 
          boxSize="250px" 
          src={img} 
          alt="César Córdoba" 
          borderRadius='8px'
          border='#319795 1px solid'
        />
      </Flex>
    </Flex>
  )
};