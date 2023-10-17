import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Text, ButtonGroup, Button, Divider, Grid, GridItem, Flex, Box, Select, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import NewCustomers from './NewCustomers';


const Overview = () => {
    const data = [
        { name: 'Jan', Earning: 44000, fill: '#edeaf9' },
        { name: 'Feb', Earning: 31000, fill: '#edeaf9' },
        { name: 'Mar', Earning: 80000, fill: '#edeaf9' },
        { name: 'Apr', Earning: 63000, fill: '#edeaf9' },
        { name: 'May', Earning: 70000, fill: '#edeaf9' },
        { name: 'Jun', Earning: 20000, fill: '#edeaf9' },
        { name: 'Jul', Earning: 72000, fill: '#edeaf9' },
        { name: 'Aug', Earning: 90000, fill: '#6f41f9' },
        { name: 'Sep', Earning: 82000, fill: '#edeaf9' },
        { name: 'Oct', Earning: 66000, fill: '#edeaf9' },
        { name: 'Nov', Earning: 50000, fill: '#edeaf9' },
        { name: 'Dec', Earning: 58000, fill: '#edeaf9' }
      ];
    return ( 
        <>
        <Grid templateColumns='repeat(7, 1fr)' gap={8} m={{base: '4', md: '6', xl: '8'}}>
            <GridItem colSpan={{base: 7, md: 4, xl: 5}} bg='white' p='5' borderRadius='5'>
                    <Flex justifyContent='space-between'>
                        <Box>
                        <Text fontSize='lg' fontWeight='bold'>Overview</Text>
                        <Text color='gray.600' fontSize='xs'>Monthly Earning</Text>
                        </Box>
                        <Select placeholder='Quaterly' size='sm' bg='ghostwhite' border='none' width='auto' borderRadius='6'>
                            <option value='option1'>Monthly</option>
                            <option value='option2'>Yearly</option>
                        </Select>
                    </Flex>
                    <ResponsiveContainer width="100%" height="85%">
                        <BarChart
                        width={800}
                        height={240}
                        data={data}
                        margin={{
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Bar dataKey="Earning" fill="fill"  />
                        </BarChart>
                    </ResponsiveContainer>
                </GridItem>
            <GridItem colSpan={{base: 7, md: 3, xl: 2}} bg='white' p='5' borderRadius='5'>
                <NewCustomers />
            </GridItem>
        </Grid>
        </>
     );
}
 
export default Overview;