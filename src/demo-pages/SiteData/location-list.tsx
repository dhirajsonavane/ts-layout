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
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';

import data from '../../data/locations.json';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: "#004a67",
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

const LocationList: React.FC = () => {
  const classes = useStyles();

  const handleDelete = (id: number) => {
    alert('Delete Successful!');
  };

  return (
    <Card>
      <CardHeader title="Locations"></CardHeader>
      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="Locations">
            <TableHead>
              <TableRow>
                <StyledTableCell>Direction</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>Direction</StyledTableCell>
                <StyledTableCell>
                  <IconButton
                    aria-label="action"
                    color="inherit"
                  >
                    <MoreVertRoundedIcon />
                  </IconButton>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">{row.direction}</StyledTableCell>
                  <StyledTableCell>{row.location}</StyledTableCell>
                  <StyledTableCell>{row.type}</StyledTableCell>
                  <StyledTableCell>{row.description}</StyledTableCell>
                  <StyledTableCell align="right">
                    <IconButton
                      aria-label="Edit"
                      onClick={() => { handleDelete(row.id) }}
                    >
                      <EditIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </CardContent>
    </Card>
  );
};

export default LocationList;
