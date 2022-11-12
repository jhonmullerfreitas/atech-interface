import { useSelector } from 'react-redux';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MorteMediaGrafico = () =>{

    const morteMediaSexoInfo = useSelector((store)=> store.morteMediaSexo)
    
    return(
        <>
            <Bar datasetIdKey='id' data={
                {   
                    labels: ["Sexo"],
                    datasets: [
                        {
                            id: 1,
                            label: "Masculino",
                            data: [morteMediaSexoInfo[0].morteMedia],
                            borderColor: 'rgb(99, 135, 255)',
                            backgroundColor: 'rgba(15, 5, 107, 0.5)',
                        },
                        {
                            id: 1,
                            label: "Feminino",
                            data: [morteMediaSexoInfo[1].morteMedia],
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(107, 5, 27, 0.5)',
                        },
                    ],
                }
            }
            />
        </>
    )
}

export default MorteMediaGrafico;