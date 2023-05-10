import React from 'react'
import { Flex, Text, TableContainer, Table, Thead, Tr, Th, Td, Tbody, Select } from '@chakra-ui/react'
import { useState } from 'react'
import { horarios } from './horarios'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

const scrollStyle = {
    '&::-webkit-scrollbar': {
        width: '0',
        height: '0'
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
        borderRadius: '5px'
    },
    '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '5px'
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
}

const Window = ({ options, title, bg }) => {

    const tipoServicio = Object.keys(options)
    const [service, setService] = useState({})
    const [viewTable, setViewTable] = useState(false)

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
            css={scrollStyle}
        >
            <Text fontWeight={'bold'} fontSize={25} color={'#eee'} textAlign={'center'} textTransform={'uppercase'}>{title}</Text>
            <Select onChange={handleChange} name='servicio' placeholder='Selecciona un servicio' value={service.servicio} color={'#eee'} _focus={{ color: '#262626' }}>
                {tipoServicio.map(tipo => (
                    <option value={tipo} key={tipo}>{tipo.toUpperCase()}</option>
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
                                                {
                                                    direccion.map(dir => {
                                                        const cols = horarios[title][tipo][dia][dir].columns
                                                        const rows = horarios[title][tipo][dia][dir].fields
                                                        const viewAll = `${title}-${tipo}-${dia}-${dir}` === viewTable
                                                        if (viewAll) return (
                                                            <Flex position={'fixed'} top={0} left={0} w={'100vw'} h={'100vh'} justify={'center'} align={'center'} bg={'#0008'} zIndex={'1000000'}>
                                                                <Flex my={'25px'} w={['100%', '90%', '85%', '75%']} minH={'280px'} h={'80%'} position={'relative'} bg={bg + '.400'} p={['8px', '10px', '15px', '20px']}>
                                                                    <Flex flexDir={'column'} w={'100%'}>
                                                                        <Flex w={'100%'} justify={'end'} px={'15px'} >
                                                                            <Text
                                                                                p={'5px'}
                                                                                _hover={{ opacity: .8 }}
                                                                                bg={'#eeea'}
                                                                                color='#262626'
                                                                                borderRadius={'50%'}
                                                                                h={'30px'}
                                                                                w={'30px'}
                                                                                mb={'5px'}
                                                                                onClick={() => setViewTable(false)}
                                                                            >
                                                                                <FullscreenExitIcon fontSize='small' />
                                                                            </Text>
                                                                        </Flex>
                                                                        <TableContainer w={'99%'} minH={'250px'} bg={'#fff5'} borderRadius={'10px'} overflowY={'scroll'} css={scrollStyle}>
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
                                                                                        rows.map((row, i) => {
                                                                                            return (
                                                                                                <Tr>
                                                                                                    {
                                                                                                        row && row.map((field, j) => {
                                                                                                            const antes = rows[i - 1] ? rows[i - 1][j] : false
                                                                                                            const despues = rows[i] ? rows[i][j] : false
                                                                                                            return (
                                                                                                                <Td bg={field && isMenor(hora, despues) && isMayor(hora, antes) && '#00CF0D !important'}>{field ? field : '-'}</Td>
                                                                                                            )
                                                                                                        })
                                                                                                    }
                                                                                                </Tr>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </Tbody>
                                                                            </Table>
                                                                        </TableContainer>
                                                                        <Flex align={'center'}>
                                                                            <Flex h={'15px'} w={'15px'} bg={'#00CF0D'} borderRadius={'15%'}></Flex>
                                                                            <Text ms={'10px'} color={'#FFF'}>Siguiente</Text>
                                                                            <Text ms={'10px'} fontWeight={'bold'} fontSize={12} color={'#eee'} textAlign={'center'} textTransform={'uppercase'} w='100px'>{tipo}</Text>
                                                                            <Text fontWeight={'bold'} fontSize={12} color={'#eee'} textAlign={'center'} textTransform={'uppercase'} w='100px'>{dia}</Text>
                                                                            <Text fontWeight={'bold'} fontSize={13} color={'#eee'} textAlign={'center'} textTransform={'uppercase'} w='55px'>{dir}</Text>
                                                                        </Flex>
                                                                    </Flex>
                                                                </Flex>
                                                            </Flex>
                                                        )

                                                        return (
                                                            <Flex my={'25px'} w={'100%'} minH={'280px'} h={'300px'} position={'relative'}>
                                                                <Flex flexDir={'column'} w={'100%'}>
                                                                    <Flex w={'100%'} justify={'space-between'} align={'end'} px={'10px'} >
                                                                        <Text ms={'10px'} fontWeight={'bold'} fontSize={12} color={'#eee'} textAlign={'center'} textTransform={'uppercase'} w='100px'>{tipo}</Text>
                                                                        <Text fontWeight={'bold'} fontSize={12} color={'#eee'} textAlign={'center'} textTransform={'uppercase'} w='135px'>{dia}</Text>
                                                                        <Text
                                                                            p={'5px'}
                                                                            _hover={{ opacity: .8 }}
                                                                            bg={'#eeea'}
                                                                            color='#262626'
                                                                            borderRadius={'50px 50px 0 0'}
                                                                            h={'30px'}
                                                                            w={'30px'}
                                                                            onClick={() => setViewTable(`${title}-${tipo}-${dia}-${dir}`)}
                                                                        >
                                                                            <FullscreenIcon fontSize='small' />
                                                                        </Text>
                                                                    </Flex>
                                                                    <TableContainer w={'99%'} minH={'250px'} bg={'#fff5'} borderRadius={'10px'} overflowY={'scroll'} css={scrollStyle}>
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
                                                                                    rows.map((row, i) => {
                                                                                        return (
                                                                                            <Tr>
                                                                                                {
                                                                                                    row && row.map((field, j) => {
                                                                                                        const antes = rows[i - 1] ? rows[i - 1][j] : false
                                                                                                        const despues = rows[i] ? rows[i][j] : false
                                                                                                        return (
                                                                                                            <Td bg={field && isMenor(hora, despues) && isMayor(hora, antes) && '#00CF0D !important'}>{field ? field : '-'}</Td>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </Tr>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </Tbody>
                                                                        </Table>
                                                                    </TableContainer>
                                                                    <Flex align={'center'}>
                                                                        <Flex h={'15px'} w={'15px'} bg={'#00CF0D'} borderRadius={'15%'}></Flex>
                                                                        <Text ms={'10px'} color={'#FFF'}>Siguiente</Text>
                                                                        <Text ms={'10px'} fontWeight={'bold'} fontSize={14} color={'#eee'} textAlign={'center'} textTransform={'uppercase'} w='120px'>{'hacia el ' + dir}</Text>
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
export default Window

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