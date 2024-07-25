import PropTypes from 'prop-types';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];

/**
 * An table component used to log items consumed 
 */
export default function EntryTable({tableName, data=[]}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 380 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>{tableName}</TableCell>
            <TableCell align="right">Calories ({data.reduce((accumulator, item) => accumulator + item.calories, 0)})</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow hover key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
          <TableRow hover>
            <TableCell colSpan={2} align="center">
              <AddIcon/>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

EntryTable.propTypes = {
  tableName: PropTypes.string.isRequired, // name of the current table
  data: PropTypes.array
};