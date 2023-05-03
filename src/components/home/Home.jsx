import { Flex, Text, Link, Image } from '@chakra-ui/react'
import React from 'react'
import exprebusIco from '../images/exprebus-ico.png'
import tesaIco from '../images/tesa-ico.jpg'

export default function Home() {

  return (
    <Flex w={'100vw'} h={'100vh'} justify={'center'} align={'center'} flexDir={'column'} bg={'gray.100'}>
      <Link href='/'>
        <Text fontWeight={'bold'} fontSize={'2xl'} color={'gray.600'}>Ver horarios</Text>
      </Link>
      <Link href='/exprebus'>
        <Flex my='20px' bg={'#FFF'} w={'300px'} h={'100px'} borderRadius={'15px'} boxShadow={'base'} align={'center'} justifyContent={'space-between'}
          _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
        >
          <Flex />
          <Flex />
          <Image src={exprebusIco} w={'50px'} h={'auto'}></Image>
          <Flex />
          <Text ms={'10px'} fontWeight={'bold'} fontSize={'xxl'} color={'gray.600'}>Exprebus</Text>
          <Flex />
          <Flex />
        </Flex>
      </Link>
      <Link href='/tesa'>

        <Flex my='20px' bg={'#FFF'} w={'300px'} h={'100px'} borderRadius={'15px'} boxShadow={'base'} align={'center'} justifyContent={'space-between'}
          _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
        >
          <Flex />
          <Flex />
          <Image src={tesaIco} w={'70px'} h={'auto'}></Image>
          <Flex />
          <Text ms={'10px'} fontWeight={'bold'} fontSize={'xxl'} color={'gray.600'}>Tesa</Text>
          <Flex />
          <Flex />
        </Flex>
      </Link>

    </Flex>
  )

}
