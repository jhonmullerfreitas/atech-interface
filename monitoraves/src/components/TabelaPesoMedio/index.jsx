import { useSelector } from 'react-redux';
import "./styles.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TabelaPesoMedio = () => {

    const pesoMedioSexoInfo = useSelector((store)=> store.pesoMedioSexo)

    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                    <TableHead  >
                        <TableRow>
                            <TableCell sx={{fontWeight:'bold'}}>Sexo</TableCell>
                            <TableCell align="right" sx={{fontWeight:'bold'}}>Peso Médio</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow sx={{'&:last-child td, &:last-child th':{border: 0}}}
                        >
                            <TableCell component="th" scope="row">{pesoMedioSexoInfo[0].sexo}</TableCell>
                            <TableCell align="right">{pesoMedioSexoInfo[0].pesoMedio}</TableCell>
                        </TableRow>
                        <TableRow sx={{'&:last-child td, &:last-child th':{border: 0}}}
                        >
                            <TableCell component="th" scope="row">{pesoMedioSexoInfo[1].sexo}</TableCell>
                            <TableCell align="right">{pesoMedioSexoInfo[1].pesoMedio}</TableCell>
                        </TableRow>
                   
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TabelaPesoMedio