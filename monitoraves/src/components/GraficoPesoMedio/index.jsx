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

const PesoMedioGrafico = () =>{

    const pesoMedioSexoInfo = useSelector((store)=> store.pesoMedioSexo)
    
    return(
        <>
        <Bar datasetIdKey='id' data={
            {   
                labels: ["Sexo"],
                datasets: [
                    {
                        id: 1,
                        label: "Masculino",
                        data: [pesoMedioSexoInfo[0].pesoMedio],
                        borderColor: 'rgb(99, 135, 255)',
                        backgroundColor: 'rgba(15, 5, 107, 0.5)',
                    },
                    {
                        id: 1,
                        label: "Feminino",
                        data: [pesoMedioSexoInfo[1].pesoMedio],
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

export default PesoMedioGrafico;