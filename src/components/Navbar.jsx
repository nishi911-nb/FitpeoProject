import { Flex, Icon, Text, InputGroup, InputLeftElement, Input, Show, IconButton, useDisclosure, Menu, MenuButton } from "@chakra-ui/react";
import { PiHandWavingFill } from 'react-icons/pi'
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import {
     } from '@chakra-ui/react'
import SideBar from "./Sidebar";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return ( 
        <Flex m={{base: '4', md: '6', xl: '8'}} justifyContent='space-between'>
            <Show below="lg">
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    onClick={onOpen}
                />
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                       <DrawerCloseButton />
                       <SideBar />
                    </DrawerContent>
                </Drawer>           
            </Menu>
            </Show>
        <Text fontSize='lg' fontWeight='medium' mx='3'>Hello Shahrukh <Icon as={PiHandWavingFill} boxSize={5} color='orange.300'/>,</Text>
        <InputGroup width='auto' size='sm'>
            <InputLeftElement pointerEvents='none'>
            <SearchIcon />
            </InputLeftElement>
            <Input type='text' placeholder='Search' bg='white'/>
        </InputGroup>
        </Flex>
    );
}
 
export default Navbar;