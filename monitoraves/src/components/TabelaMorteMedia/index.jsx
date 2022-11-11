import { useSelector } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TabelaMorteMedia = () => {

    const morteMediaSexoInfo = useSelector((store)=> store.morteMediaSexo)

    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
                    <TableHead  >
                        <TableRow>
                            <TableCell sx={{fontWeight:'bold'}}>Sexo</TableCell>
                            <TableCell align="right" sx={{fontWeight:'bold'}}>Morte Média</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow sx={{'&:last-child td, &:last-child th':{border: 0}}}
                        >
                            <TableCell component="th" scope="row">{morteMediaSexoInfo[0].sexo}</TableCell>
                            <TableCell align="right">{morteMediaSexoInfo[0].morteMedia}</TableCell>
                        </TableRow>
                        <TableRow sx={{'&:last-child td, &:last-child th':{border: 0}}}
                        >
                            <TableCell component="th" scope="row">{morteMediaSexoInfo[1].sexo}</TableCell>
                            <TableCell align="right">{morteMediaSexoInfo[1].morteMedia}</TableCell>
                        </TableRow>
                   
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TabelaMorteMedia