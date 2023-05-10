import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
const Ads = () => {
    return (
        <Flex my={'25px'} w={'100%'} minH={'280px'} h={'300px'} position={'relative'}>
            <Flex flexDir={'column'} w={'100%'}>
                <Flex w={'99%'} minH={'250px'} bg={'#fff5'} borderRadius={'10px'} overflowY={'scroll'} css={scrollStyle} flexDir={'column'} px={'10px'} py={'35px'} justify={'space-between'} align={'center'}>
                    <Text fontSize={'18px'} fontWeight={600} color={'#262626'} my={'4px'} textAlign={'center'}>Quieres alquilar este espacio publicitario?</Text>
                    <Text fontSize={'16px'} fontWeight={550} my={'2px'} color={'#eee'} >Contactame</Text>
                    <Flex w={'100%'} px={'5px'} flexDir={'column'}>
                        <Flex my={'2px'}>
                            <Text color={'#eee'}><EmailIcon /></Text>
                            <Text color={'#eee'} ms={'10px'}>lautarooyt837@gmail.com</Text>
                        </Flex>
                        <Flex my={'2px'}>
                            <Text color={'#eee'}><WhatsAppIcon /></Text>
                            <Text color={'#eee'} ms={'10px'}>3865-513846</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex align={'center'}>
                    <Flex h={'15px'} w={'15px'} bg={'#00CF0D'} borderRadius={'15%'}></Flex>
                    <Text ms={'10px'} color={'#FFF'}>Espacio publicitario</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Ads