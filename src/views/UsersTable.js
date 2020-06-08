import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Table, TableHead, TableRow, TableCell, TableBody, Checkbox } from '@material-ui/core';

const useStyles = makeStyles({
  cell: {
    padding: 0,
  },
});

export const UsersTable = ({ rows, onSelectUser }) =>{
  const classes = useStyles();
  return(
    <div>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Отметить</TableCell>
            <TableCell align="center">Имя</TableCell>
            <TableCell align="center">Фамилия</TableCell>
            <TableCell align="center">Возраст</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left" className={classes.cell}>
                <Checkbox
                  checked={row.isSelected}
                   onChange={() => onSelectUser(row.id)}
                />
              </TableCell>
              <TableCell align="center" className={classes.cell}>{row.name}</TableCell>
              <TableCell align="center" className={classes.cell}>{row.lastName}</TableCell>
              <TableCell align="center" className={classes.cell}>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>);
}
