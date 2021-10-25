import React from 'react';
import { Flex, Text } from '@chakra-ui/layout';

export const Footer = () => {
  return(
    <Flex p='3rem' justify='space-around' align='center' bgColor='#f2f2f2' direction='row'>
      <Flex direction='row' p='1rem'>
        <Text> Footer</Text>
      </Flex>
      <Flex direction='row' p='1rem'>
      <Text>otro texto</Text>
      </Flex>
    </Flex>
  )
};