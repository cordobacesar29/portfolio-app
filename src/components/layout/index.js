import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Header } from '../header';
import { Footer } from '../footer';
export const Layout = ({children}) => {
  return(
    <Flex direction='column'>
      <Header />
      <Flex 
        justify='center' 
        align='center' 
        direction='column' 
        w='full' 
        minH='80vh' 
        bgColor='black' 
        color='white'
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}