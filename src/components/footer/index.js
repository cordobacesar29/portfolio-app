import React from 'react';
import { Flex, Text, Heading, Image } from '@chakra-ui/react';

import imgEmail from '../../assets/email.png';
import imgCV from '../../assets/curriculum.png';
import imgGithub from '../../assets/signo-de-github.png';

export const Footer = () => {
  return(
    <Flex color='white' justify='space-evenly'  bgColor='black' direction='row'>
      <Flex  w='100%' direction='column' align='center' p='1rem' bg='#101010'>
        <Heading mb='2rem' color='whiteAlpha.700'>Contacto</Heading>
        <ul>
            <Flex p='0.5rem'>
              <Flex>
                <Image w='2rem' h='2rem' src={imgEmail}/>
              </Flex>
              <Text color='#319795' mx='1rem'>cordobacesar29 arroba gmail.com</Text>
            </Flex>          
            <a href='https://www.canva.com/design/DAEWl-L4LLE/j7Zyn0j4YmOr0SY-IFkHPg/view?utm_content=DAEWl-L4LLE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' target='_blank' rel="noreferrer">
              <Flex p='0.5rem'>
                <Flex>
                  <Image w='2rem' h='2rem' src={imgCV}/>
                </Flex>
                <Text color='#319795' mx='1rem'>Curriculum</Text>
              </Flex>          
            </a>
            <a href='https://github.com/cordobacesar29' target='_blank' rel="noreferrer">
              <Flex p='0.5rem'>
                <Flex>
                  <Image w='2rem' h='2rem' src={imgGithub}/>
                </Flex>
                <Text color='#319795' mx='1rem'>Github</Text>
              </Flex>          
            </a>
        </ul>
      </Flex>
    </Flex>
  )
};