import React from 'react'
import { Flex, Text, Image, Link } from '@chakra-ui/react'
import { horarios } from '../horarios'
import exprebusIco from '../images/exprebus-ico.png'
import tesaIco from '../images/tesa-ico.jpg'
import Window from '../Window'

export default function Home() {
  /* const [viewAds, setViewAds] = useState(false)
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
    setViewAds(true)
  }, []); */

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

      {/* {
        viewAds &&
        <Flex w='100%' height='90' bg='#FFF'>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1502332198019994"
            data-ad-slot="6371272895"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </Flex>
      } */}

      <Flex w={'100vw'} h={'100vh'} bg={'gray.50'} align={'center'} justify={'center'} position={'relative'} overflow={'hidden'}>
        <Window options={horarios.exprebus} title={'exprebus'} bg={'orange'} />
      </Flex>
    </Flex>
  )
}
