import React from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import data from '../../data/violations.json';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#1c9c9c",
      color: theme.palette.common.white,
      fontWeight: 'bold'
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Violations: React.FC = () => {
  const classes = useStyles();

  const handleDelete = (id: number) => {
    alert('Delete Successful!');
  };

  return (
    <Card>
      <CardHeader title="Violations" subheader="Measured in %"></CardHeader>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="Violations">
            <TableHead>
              <TableRow>
                <StyledTableCell>Direction</StyledTableCell>
                <StyledTableCell>Spatial</StyledTableCell>
                <StyledTableCell>Tempora</StyledTableCell>
                <StyledTableCell>Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">{row.direction}</StyledTableCell>
                  <StyledTableCell>{row.spatial}%</StyledTableCell>
                  <StyledTableCell>{row.tempora}%</StyledTableCell>
                  <StyledTableCell>{row.spatial + row.tempora}%</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </CardContent>
    </Card>
  );
};

export default Violations;
