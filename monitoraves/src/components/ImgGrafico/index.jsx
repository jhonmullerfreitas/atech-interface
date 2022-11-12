import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ImgGrafico = ({tipo, infoX, infoY}) =>{

    return(
        <Line datasetIdKey='id' data={
            {   
                labels: infoY,
                datasets: [
                    {
                        id: 1,
                        label: tipo,
                        data: infoX,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(107, 5, 27, 0.5)',
                    },
                ],
            }
        }
        />
    )
}

export default ImgGrafico;