import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ImgTabela = ({datas, valores, filtro}) => {
    const columns = [
        { id: 'data', label: 'Data', minWidth: 500 },
        { id: filtro, label: filtro, minWidth: 50 },
    ];

    return(
        
            <Paper sx={{ width: '100%', overflow: 'hidden'}}>
                <TableContainer sx={{ maxHeight: 380 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                    
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                datas ? 
                                <>
                                    {datas.map((data, index) => 
                                        <TableRow sx={{'&:last-child td, &:last-child th': {border:0} }}>
                                            <TableCell component="th" scope="row">{data}</TableCell>
                                            <TableCell align="right">{valores[index]}</TableCell>
                                        </TableRow>
                                    )}
                                </>:
                                <p>Carregando...</p>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
    )
}

export default ImgTabela