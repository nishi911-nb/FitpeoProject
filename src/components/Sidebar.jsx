import { Box, Heading, Icon, Flex, Avatar, Text, Spacer } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { RiSettingsLine } from 'react-icons/ri'
import { TbCircleKey } from 'react-icons/tb'
import { PiCube } from 'react-icons/pi'
import { RxAvatar } from 'react-icons/rx'
import { AiOutlineDollar } from 'react-icons/ai'
import { TbDiscount2 } from 'react-icons/tb'
import { FiHelpCircle } from 'react-icons/fi'

const SideBar = () => {
    const items = [
        {name: 'Product', icon: PiCube},
        {name: 'Customers', icon: RxAvatar},
        {name: 'Income', icon: AiOutlineDollar},
        {name: 'Promote', icon: TbDiscount2},
        {name: 'Help', icon: FiHelpCircle}
    ]
    return (  
        <Flex flexDirection='column' height='100%'>
            <Box color="white" p={6}>
                <Heading as='h4' size='md' display="flex" alignItems='center'>
                <Icon as={RiSettingsLine} boxSize={8} mr='1'/> Dashboard
                </Heading>

                <Box display="flex" alignItems='center' justifyContent='space-between' mt='10' p='2' bg='purple.400' borderRadius='5'>
                <Box><Icon as={TbCircleKey} mr='1'/> Dashboard</Box>
                </Box>

                {items.map(item => (
                    <Box key={item.name} display="flex" alignItems='center' justifyContent='space-between' mt='3' p='2' color='gray.400' 
                    _hover={{ p:'2', bg:'purple.400', borderRadius:'5', color: 'white'}}>
                    <Box><Icon as={item.icon} mr='1'/> {item.name}</Box>
                    <ChevronRightIcon />
                    </Box>
                ))}
            </Box>
            <Spacer />
            <Box display="flex" alignItems='center' justifyContent='space-between' color='gray.600' bg='purple.400' borderRadius='5' p='2' m='2' mb='8'>
                <Flex>
                    <Avatar size='md' src='https://bit.ly/sage-adebayo' />
                    <Box ml='2'>
                    <Text fontSize='sm' fontWeight='bold' color='white'>Evano</Text>
                    <Text fontSize='xs'>Project Manager</Text>
                    </Box>
                </Flex>
                <ChevronDownIcon />
            </Box>
        </Flex>
    );
}
 
export default SideBar;