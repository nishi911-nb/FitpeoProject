import { Box, Text } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const data = {
    datasets: [
      {
        data: [8, 17, 13],
        backgroundColor: [
          'rgb(231, 77, 175)',
          'rgb(191, 129, 250)',
          'rgb(237, 234, 249)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 0,
      },
    ],
  };

  export const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (height / 250).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         var text = "65% New Customers",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }];
  export const option = {
    cutout: 65
  }

const NewCustomers = () => {
    return ( 
        <>
        <Box>
            <Text fontSize='lg' fontWeight='bold'>Customers</Text>
            <Text color='gray.600' fontSize='xs'>Customers that buy products</Text>
        </Box>
        <Box w={200} h={200} m='6'>
        <Doughnut data={data} options={option} plugins={plugins}/>
        </Box>
        </>
    );
}
 
export default NewCustomers;