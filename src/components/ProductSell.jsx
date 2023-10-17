import { Box } from "@chakra-ui/react";
import { Flex, Text, InputGroup, InputLeftElement, Input, Select, Image, Stack } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'

const ProductSell = () => {
    const productData = [
        {
          name: "Abstract 3D",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZy_F-rWwc4ZzSFR6oxzSB1vfF0DBkoxTfVUSPo4XnAcGC38-WRAHwp9VayLIQRXUFlI&usqp=CAU',
          stock: 32,
          price: 45.99,
          totalSales: 20,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        {
            name: "Sarphens Illustration",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3xibeoa7vPtGBJxUHmB40clxHfszE79HXQ&usqp=CAU',
            stock: 32,
            price: 45.99,
            totalSales: 20,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
    ];
    return ( 
        <>
        <Box bg='white' borderRadius='5' m={{base: '4', md: '6', xl: '8'}}>
            <Flex justifyContent='space-between' p='6'>
                <Text fontSize='lg' fontWeight='bold'>Product Sell</Text>
                <Stack direction={['column', 'row']}>
                    <InputGroup width='auto' size='sm' >
                        <InputLeftElement pointerEvents='none'>
                        <SearchIcon />
                        </InputLeftElement>
                        <Input type='text' placeholder='Search' bg='ghostwhite' borderRadius='5'/>
                    </InputGroup>
                    <Select placeholder='Last 30 days' size='sm' bg='ghostwhite' border='none' width='auto' ml='5' borderRadius='6'>
                        <option value='option1'>Last 6 months</option>
                    </Select>
                </Stack>
            </Flex>
            <TableContainer mt='4'>
            <Table>
                <Thead>
                    <Tr>
                    <Th color="gray.400">Product Name</Th>
                    <Th color="gray.400">Stock</Th>
                    <Th color="gray.400">Price</Th>
                    <Th color="gray.400">Total Sales</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {productData.map(product => (
                        <Tr key={product.name}>
                        <Td>
                            <Flex>
                            <Image boxSize='100px' h='60px' src={product.image} alt={product.name} borderRadius='7'/>
                                <Box ml='4'>
                                <Text fontSize='md' fontWeight='bold'>{product.name}</Text>
                                <Text fontSize='sm' color='gray.500' pr='8'>{product.description}</Text>
                                </Box>
                            </Flex>
                        </Td>
                        <Td>{product.stock} in stock</Td>
                        <Td fontWeight='bold'>$ {product.price}</Td>
                        <Td>{product.totalSales}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        </Box>
        </>
    );
}
 
export default ProductSell;