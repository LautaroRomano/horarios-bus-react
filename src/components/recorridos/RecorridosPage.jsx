import { Flex, Text, Link, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import exprebusIco from '../images/exprebus-ico.png'
import tesaIco from '../images/tesa-ico.jpg'



function Map() {

    return (
        <Flex flexDir={'column'} w={'100vw'} h={'100vh'} bg={'gray.50'} align={'center'} justify={'center'} position={'relative'} overflow={'hidden'}>
            <Flex w={'100vw'} h={'auto'} justify={'center'} align={'center'} bg={'gray.200'} boxShadow={'base'}>
                <Link href='/'>
                    <Text fontWeight={'bold'} fontSize={['14px', '16px', 'xl']} color={'gray.600'}>Horarios</Text>
                </Link>
                <Link href='/exprebus'>
                    <Flex mx={['5px', '10px', '15px', '20px']} my={'10px'} bg={'#FFF'} w={'150px'} h={'50px'} borderRadius={'15px'} boxShadow={'base'} align={'center'} justifyContent={'space-between'}
                        _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
                    >
                        <Flex />
                        <Flex />
                        <Image src={exprebusIco} w={'30px'} h={'auto'}></Image>
                        <Flex />
                        <Text ms={'10px'} fontWeight={'bold'} fontSize={'xxl'} color={'gray.600'}>Exprebus</Text>
                        <Flex />
                        <Flex />
                    </Flex>
                </Link>
                <Link href='/tesa'>
                    <Flex mx={['5px', '10px', '15px', '20px']} my={'10px'} bg={'#FFF'} w={'150px'} h={'50px'} borderRadius={'15px'} boxShadow={'base'} align={'center'} justifyContent={'space-between'}
                        _hover={{ boxShadow: '2xl', cursor: 'pointer' }}
                    >
                        <Flex />
                        <Flex />
                        <Image src={tesaIco} w={'60px'} h={'auto'}></Image>
                        <Flex />
                        <Text ms={'10px'} fontWeight={'bold'} fontSize={'xxl'} color={'gray.600'}>Tesa</Text>
                        <Flex />
                        <Flex />
                    </Flex>
                </Link>
            </Flex>
            <Flex position={'relative'} h={'100%'} w={'100vw'} bg={'gray.100'}>
            </Flex>
        </Flex>
    );
}

export default Map
