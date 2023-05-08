import { Flex, Text, TableContainer, Image, Table, Thead, Tr, Th, Td, Tbody, Select, Link } from '@chakra-ui/react'
import { useState} from 'react'
import React from 'react'
import { horarios } from '../horarios'
import exprebusIco from '../images/exprebus-ico.png'
import tesaIco from '../images/tesa-ico.jpg'

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

const Window = ({ options, title, bg }) => {

  const tipoServicio = Object.keys(options)

  const [service, setService] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target
    setService(s => ({ ...s, [name]: value }))
  }

  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const hora = `${hour}:${minute}`;

  return (
    <Flex
      w={['100%', '90%', '80%', '70%']}
      h={'100%'}
      bg={bg + '.400'}
      align={'center'}
      shadow={'lg'}
      transition={'all .5s ease'}
      overflowX={'hidden'}
      p={'10px'}
      flexDir={'column'}
      _hover={{
        bg: bg + '.500',
      }}
      _active={{
        bg: bg + '.500',
      }}
      overflowY={'scroll'}
    >
      <Text fontWeight={'bold'} fontSize={25} color={'#fff'} textAlign={'center'} textTransform={'uppercase'}>{title}</Text>
      <Select onChange={handleChange} name='servicio' placeholder='Selecciona un servicio' value={service.servicio} >
        {tipoServicio.map(tipo => (
          <option value={tipo} key={tipo}>{tipo}</option>
        ))}
      </Select>
      {
        tipoServicio && tipoServicio.map(tipo => {
          const dias = Object.keys(horarios[title][tipo])

          if (!service.servicio || tipo === service.servicio)
            return (
              <>
                {
                  dias.map(dia => {
                    const direccion = Object.keys(horarios[title][tipo][dia])
                    return (
                      <>
                        <Flex fontWeight={'bold'} fontSize={20} color={'#fff'} textAlign={'center'} textTransform={'uppercase'}>
                          <Text display={'inline-block'} mx={'3px'}>{tipo}</Text>
                          <Text display={'inline-block'} mx={'3px'}>{dia}</Text>
                        </Flex>
                        {
                          direccion.map(dir => {
                            const cols = horarios[title][tipo][dia][dir].columns
                            const rows = horarios[title][tipo][dia][dir].fields
                            if(rows){
                              const now = Date.now();
                              const currentTime = new Date(now).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                              const closestTimes = [];
                              for (let i = 0; i < rows[0].length; i++) {
                                  let closestTime = null;
                                  let smallestDiff = Number.MAX_VALUE;
                                  for (let j = 0; j < rows.length; j++) {
                                      const time = rows[j][i];
                                      if (time !== null) {
                                          const diff = Math.abs((new Date(`2000-01-01T${time}:00Z`)).getTime() - now);
                                          if (diff < smallestDiff) {
                                              smallestDiff = diff;
                                              closestTime = time;
                                          }
                                      }
                                  }
                                  closestTimes.push(closestTime);
                              }

                              console.log(closestTimes); // Muestra los horarios más cercanos en cada columna
                            }
                            return (
                              <Flex my={'25px'} w={'100%'} minH={'280px'} h={'300px'} position={'relative'}>
                                <Text bottom={'100px'} right={'-22px'} position={'absolute'} fontWeight={'bold'} fontSize={16} color={'#fff'} textAlign={'center'} textTransform={'uppercase'} transform={'rotate(-90deg)'} w='55px'>{dir}</Text>
                                <Flex flexDir={'column'} w={'95%'}>
                                <TableContainer me={'25px'} w={'99%'} minH={'250px'} bg={'#fff5'} borderRadius={'10px'} overflowY={'scroll'}>
                                  <Table variant='striped' colorScheme='whiteAlpha' size={'sm'}>
                                    <Thead position={'sticky'} top={0} bg={'#fff8'}>
                                      <Tr>
                                        {
                                          cols.map(col => (
                                            <Th>{col}</Th>
                                          ))
                                        }
                                      </Tr>
                                    </Thead>
                                    <Tbody>
                                      {
                                        rows.map((row,i) => {
                                          
                                          return (
                                            <Tr>
                                              {
                                                row && row.map((field, j) => {
                                                  const antes = rows[i - 1] ? rows[i - 1][j] : false
                                                  const despues = rows[i] ? rows[i][j] : false
                                                  return (
                                                  <Td bg={field && isMenor(hora,despues) && isMayor(hora,antes) && '#00CF0D !important'}>{field ? field : '-'}</Td>
                                                )})
                                              }
                                            </Tr>
                                          )
                                        })
                                      }
                                    </Tbody>
                                  </Table>
                                </TableContainer>
                                <Flex  align={'center'}>
                                  <Flex h={'15px'} w={'15px'} bg={'#00CF0D'} borderRadius={'15%'}></Flex>
                                  <Text ms={'10px'} color={'#FFF'}>Siguiente</Text>
                                </Flex>
                                </Flex>
                              </Flex>
                            )
                          })
                        }
                      </>
                    )
                  })
                }
              </>
            )
            return null
        })
      }
    </Flex>
  )
}

const isMenor = (hora1, hora2) => {
  const date1 = new Date(`2000-01-01T${hora1}:00.000Z`);
  const date2 = new Date(`2000-01-01T${hora2}:00.000Z`);

  if (date1.getTime() < date2.getTime()) {
    return true
  }
  return false
}
const isMayor = (hora1, hora2) => {
  const date1 = new Date(`2000-01-01T${hora1}:00.000Z`);
  const date2 = new Date(`2000-01-01T${hora2}:00.000Z`);

  if (date1.getTime() >= date2.getTime()) {
    return true
  }
  return false
}