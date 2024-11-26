"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
    // const data = {
    //     datasets: [
    //         {
    //             label: "Banks",
    //             datat: [1250, 2500, 3100],
    //             backgroundColour: ['#0747b6','#2265d8','#2f91fa'] 
    //         }
    //     ],
    //     labels: ['Bank 1','Bank 2','Bank 3']
    // }

    const data = {
        labels: [
          'Bank 1',
          'Bank 2',
          'Bank 3'
        ],
        datasets: [{
          label: 'Bank',
          data: [8300, 7500, 5100],
          backgroundColor: [
            '#0747b6',
            '#2265d8',
            '#2f91fa'
          ],
          hoverOffset: 4
        }]
    };

    return <Doughnut 
        data={data} 
        options={{
            cutout:'60%', 
            plugins:{
                    legend : { 
                        display : false
                    }
                }
            }}/>
}

export default DoughnutChart