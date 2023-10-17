import { SimpleGrid, Card, CardBody,Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Circle, Icon, Flex} from '@chakra-ui/react'
import { PiClipboardText } from 'react-icons/pi'
import { GiTwoCoins } from 'react-icons/gi'
import { AiOutlineDollarCircle,AiOutlineShopping } from 'react-icons/ai'

const Details = () => {
  const items = [
    {name: 'Earning', money: '$198k', type: 'increase', quantity: '37.8%', bgColor: 'green.100', color: 'green', icon: AiOutlineDollarCircle, time: 'this month'},
    {name: 'Orders', money: '$2.4k', type: 'decrease', quantity: '2%', bgColor: 'purple.100', color: 'purple', icon: PiClipboardText, time: 'this month'},
    {name: 'Balance', money: '$2.4k', type: 'decrease', quantity: '2%', bgColor: 'blue.100', color: 'blue', icon: GiTwoCoins, time: 'this month'},
    {name: 'Total Sales', money: '$89k', type: 'increase', quantity: '11%', bgColor: 'pink.200', color: 'pink.500', icon: AiOutlineShopping, time: 'this week'}
  ]
    return (  
      
      <SimpleGrid columns={{sm: 1, md: 2, xl: 4}} spacing='30px' mx={{base: '4', md: '6', xl: '8'}} my='4'>
        {items.map(item => (
          <Card key={item.name} direction='row' variant='outline' alignItems='center' size='sm'>
           <Circle size='90px' bg={item.bgColor} ml='3' my='6'>
           <Icon as={item.icon} boxSize={10} color={item.color}/>
           </Circle>
           <CardBody>
             <Stat>
               <StatLabel>{item.name}</StatLabel>
               <StatNumber>{item.money}</StatNumber>
               <Flex>
                 <StatHelpText color={item.type == 'increase' ? 'green' : 'red'}>
                   <StatArrow type={item.type}/>
                   {item.quantity}
                 </StatHelpText>
                 <StatHelpText ml='1'>{item.time}</StatHelpText>
               </Flex>
             </Stat>
           </CardBody>
         </Card>
        ))}
      </SimpleGrid>
    );
}
 
export default Details;